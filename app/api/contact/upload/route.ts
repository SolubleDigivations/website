import { NextResponse } from "next/server";
import {
  CONTACT_ATTACHMENTS_BUCKET,
  createUploadPath,
  createUploadToken,
  MAX_ATTACHMENT_SIZE,
  uploadRequestSchema,
  validateFileMetadata,
} from "@/lib/contact-validation";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return NextResponse.json({ success: false, error: "A JSON request is required." }, { status: 415 });
  }

  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > 16 * 1024) {
      return NextResponse.json({ success: false, error: "The upload request is too large." }, { status: 413 });
    }

    const parsed = uploadRequestSchema.safeParse(await request.json());
    if (!parsed.success || !validateFileMetadata(parsed.data.name, parsed.data.size, parsed.data.type)) {
      return NextResponse.json(
        { success: false, error: `Files must be allowed types and no larger than ${MAX_ATTACHMENT_SIZE / (1024 * 1024)} MB.` },
        { status: 400 },
      );
    }

    const path = createUploadPath(parsed.data.name);
    const token = createUploadToken({
      path,
      name: parsed.data.name,
      size: parsed.data.size,
      type: parsed.data.type,
    });
    const { data, error } = await getSupabaseAdmin()
      .storage
      .from(CONTACT_ATTACHMENTS_BUCKET)
      .createSignedUploadUrl(path);

    if (error || !data?.signedUrl) {
      console.error("Contact upload URL creation failed.", error?.message ?? "Missing signed URL.");
      return NextResponse.json({ success: false, error: "Unable to prepare the file upload." }, { status: 503 });
    }

    return NextResponse.json({
      success: true,
      upload: { path, token, signedUrl: data.signedUrl },
    });
  } catch (error) {
    console.error("Contact upload preparation failed.", error instanceof Error ? error.message : "Unknown error.");
    return NextResponse.json({ success: false, error: "Unable to prepare the file upload." }, { status: 500 });
  }
}
