import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  contactSubmissionSchema,
  type ContactSubmission,
  verifyUploadToken,
} from "@/lib/contact-validation";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 256 * 1024;
const RATE_LIMIT_WINDOW_MINUTES = 10;
const RATE_LIMIT_COUNT = 3;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character] ?? character);
}

function list(values: string[]): string {
  return values.length > 0 ? values.map(escapeHtml).join(", ") : "None provided";
}

function renderNotification(submission: ContactSubmission, id: string, createdAt: string): string {
  const row = (label: string, value: string) =>
    `<tr><th align="left" valign="top">${escapeHtml(label)}</th><td>${value || "—"}</td></tr>`;

  return `<!doctype html><html><body>
    <h2>New Soluble project brief</h2>
    <p><strong>Reference:</strong> ${escapeHtml(id)}<br><strong>Received:</strong> ${escapeHtml(createdAt)}</p>
    <table cellpadding="8" cellspacing="0" border="1">
      ${row("Name", escapeHtml(submission.name))}
      ${row("Email", escapeHtml(submission.email))}
      ${row("Phone", escapeHtml(`${submission.phoneCountryCode} ${submission.phone}`.trim()))}
      ${row("Company", escapeHtml(submission.company))}
      ${row("Services", list(submission.services))}
      ${row("Other services", escapeHtml(submission.otherServices))}
      ${row("Budget", escapeHtml(submission.budget))}
      ${row("Timeline", escapeHtml(submission.timeline))}
      ${row("Primary goal", escapeHtml(submission.primaryGoal))}
      ${row("Special requirements", escapeHtml(submission.specialRequirements).replace(/\n/g, "<br>"))}
      ${row("Industry", escapeHtml(submission.industry))}
      ${row("Primary users", escapeHtml(submission.primaryUsers))}
      ${row("Business description", escapeHtml(submission.businessDescription).replace(/\n/g, "<br>"))}
      ${row("Project objectives", list(submission.projectObjectives))}
      ${row("Reference links", escapeHtml(submission.referenceLinks).replace(/\n/g, "<br>"))}
      ${row("Additional message", escapeHtml(submission.additionalMessage).replace(/\n/g, "<br>"))}
      ${row("Attachments", list(submission.files.map((file) => `${file.name} (${file.size} bytes)`)))}
    </table>
  </body></html>`;
}

function parseReferenceLinks(value: string): string {
  const links = value
    .split(/[\s,]+/)
    .map((link) => link.trim())
    .filter(Boolean);
  if (links.length > 10 || links.some((link) => {
    try {
      const url = new URL(link);
      return !["http:", "https:"].includes(url.protocol);
    } catch {
      return true;
    }
  })) {
    throw new Error("References must contain valid http(s) URLs.");
  }
  return links.join("\n");
}

async function sendNotification(submission: ContactSubmission, id: string, createdAt: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_NOTIFICATION_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    throw new Error("Email notification configuration is missing.");
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from: sender,
    to: recipient,
    replyTo: submission.email,
    subject: `New project brief from ${submission.name}`,
    html: renderNotification(submission, id, createdAt),
  });
  if (result.error) {
    throw new Error(`Resend rejected notification: ${result.error.message}`);
  }
}

export async function POST(request: Request) {
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return NextResponse.json({ success: false, error: "A JSON request is required." }, { status: 415 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ success: false, error: "The submission is too large." }, { status: 413 });
  }

  try {
    const raw = await request.json();
    const parsed = contactSubmissionSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: "Please check the submitted form fields." }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ success: true, message: "Your project brief has been received." });
    }

    const submission = {
      ...parsed.data,
      referenceLinks: parseReferenceLinks(parsed.data.referenceLinks),
    };
    if (submission.files.some((file) => !verifyUploadToken(file.uploadToken, file))) {
      return NextResponse.json({ success: false, error: "One or more uploaded files are invalid or expired." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();
    const { count, error: rateError } = await supabase
      .from("contact_submissions")
      .select("id", { count: "exact", head: true })
      .eq("email", submission.email)
      .gte("created_at", since);
    if (rateError) {
      console.error("Contact rate-limit check failed.", rateError.message);
    } else if ((count ?? 0) >= RATE_LIMIT_COUNT) {
      return NextResponse.json({ success: false, error: "Please wait a few minutes before sending another brief." }, { status: 429 });
    }

    const files = submission.files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      path: file.path,
    }));
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert({
        name: submission.name,
        email: submission.email,
        phone_country_code: submission.phoneCountryCode,
        phone: submission.phone,
        company: submission.company,
        services: submission.services,
        other_services: submission.otherServices,
        budget: submission.budget,
        timeline: submission.timeline,
        primary_goal: submission.primaryGoal,
        special_requirements: submission.specialRequirements,
        primary_users: submission.primaryUsers,
        industry: submission.industry,
        business_description: submission.businessDescription,
        project_objectives: submission.projectObjectives,
        files,
        reference_links: submission.referenceLinks,
        additional_message: submission.additionalMessage,
        status: "new",
      })
      .select("id, created_at")
      .single();

    if (error || !data) {
      console.error("Contact submission persistence failed.", error?.message ?? "Missing inserted row.");
      return NextResponse.json({ success: false, error: "We could not save your brief. Please try again." }, { status: 503 });
    }

    try {
      await sendNotification(submission, data.id, data.created_at);
    } catch (error) {
      console.error("Contact notification delivery failed.", error instanceof Error ? error.message : "Unknown error.");
    }

    return NextResponse.json({
      success: true,
      message: "Your project brief has been received.",
      submissionId: data.id,
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ success: false, error: "The submitted JSON is malformed." }, { status: 400 });
    }
    if (error instanceof Error && error.message === "References must contain valid http(s) URLs.") {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    console.error("Contact submission processing failed.", error instanceof Error ? error.message : "Unknown error.");
    return NextResponse.json({ success: false, error: "We could not process your brief. Please try again." }, { status: 500 });
  }
}
