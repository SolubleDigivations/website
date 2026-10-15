import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let bodyData: Record<string, unknown> = {};
    const uploadedFileMeta: { name: string; size: number; type: string }[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const rawJson = formData.get("data");
      
      if (typeof rawJson === "string") {
        try {
          bodyData = JSON.parse(rawJson);
        } catch {
          bodyData = {};
        }
      }

      // Collect any attached files
      const files = formData.getAll("files");
      for (const item of files) {
        if (item instanceof File) {
          if (item.size > 10 * 1024 * 1024) {
            return NextResponse.json(
              { success: false, error: `File "${item.name}" exceeds the 10 MB limit.` },
              { status: 400 }
            );
          }
          uploadedFileMeta.push({
            name: item.name,
            size: item.size,
            type: item.type,
          });
        }
      }
    } else {
      bodyData = await request.json();
    }

    const { name, email } = bodyData as { name?: string; email?: string };

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const submissionId = `brief_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // Log the submission for local development inspection
    console.log("=== [Soluble Contact Brief Received] ===");
    console.log("ID:", submissionId);
    console.log("Contact:", { name, email, phone: bodyData.phone, company: bodyData.company });
    console.log("Services:", bodyData.services);
    console.log("Budget:", bodyData.budget, "Timeline:", bodyData.timeline);
    console.log("Primary Goal:", bodyData.primaryGoal);
    console.log("Industry:", bodyData.industry, "Audience:", bodyData.primaryUsers);
    console.log("Files:", uploadedFileMeta.length > 0 ? uploadedFileMeta : bodyData.files);
    console.log("=========================================");

    return NextResponse.json(
      {
        success: true,
        message: "Your project brief has been received by Soluble Digivations.",
        submissionId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your enquiry." },
      { status: 500 }
    );
  }
}
