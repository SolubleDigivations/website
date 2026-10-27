import { NextResponse } from "next/server";
import { z } from "zod";

import { getSupabaseAdmin } from "@/lib/supabase-admin";

const subscriptionSchema = z.object({
  email: z.string().trim().min(1).max(254).email(),
});

const RATE_LIMIT_WINDOW_MINUTES = 10;
const RATE_LIMIT_COUNT = 3;

export async function POST(request: Request) {
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return NextResponse.json({ success: false, error: "A JSON request is required." }, { status: 415 });
  }

  try {
    const parsed = subscriptionSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const email = parsed.data.email.toLowerCase();
    const supabase = getSupabaseAdmin();
    const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();
    const { count, error: rateError } = await supabase
      .from("newsletter_subscribers")
      .select("id", { count: "exact", head: true })
      .eq("email", email)
      .gte("subscribed_at", since);

    if (rateError) {
      console.error("Newsletter rate-limit check failed.", rateError.message);
    } else if ((count ?? 0) >= RATE_LIMIT_COUNT) {
      return NextResponse.json({ success: false, error: "Please wait a few minutes before trying again." }, { status: 429 });
    }

    const { error } = await supabase.from("newsletter_subscribers").insert({
      email,
      source: "insights",
      status: "active",
    });

    if (error && error.code !== "23505") {
      console.error("Newsletter subscription persistence failed.", error.message);
      return NextResponse.json({ success: false, error: "We could not save your subscription. Please try again." }, { status: 503 });
    }

    return NextResponse.json({
      success: true,
      message: error?.code === "23505" ? "You are already subscribed. Thanks for being here." : "You are subscribed. Thanks for joining us.",
    });
  } catch (error) {
    console.error("Newsletter subscription request failed.", error);
    return NextResponse.json({ success: false, error: "We could not process your subscription. Please try again." }, { status: 500 });
  }
}
