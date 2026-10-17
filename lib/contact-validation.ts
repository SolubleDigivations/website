import "server-only";

import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { z } from "zod";

export const CONTACT_ATTACHMENTS_BUCKET = "contact-attachments";
export const MAX_ATTACHMENT_COUNT = 6;
export const MAX_ATTACHMENT_SIZE = 10 * 1024 * 1024;
export const UPLOAD_TOKEN_TTL_SECONDS = 15 * 60;

const allowedTypes = new Map([
  ["png", "image/png"],
  ["jpg", "image/jpeg"],
  ["jpeg", "image/jpeg"],
  ["svg", "image/svg+xml"],
  ["pdf", "application/pdf"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["fig", "application/octet-stream"],
  ["zip", "application/zip"],
]);

const cleanString = (max: number) =>
  z.string().trim().max(max);

const stringArray = (maxItems: number) =>
  z.array(cleanString(100)).max(maxItems);

const formFileSchema = z.object({
  name: cleanString(180),
  size: z.number().int().positive().max(MAX_ATTACHMENT_SIZE),
  type: cleanString(120),
  path: cleanString(300),
  uploadToken: cleanString(700),
});

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().min(1).max(254).email(),
  phoneCountryCode: cleanString(8),
  phone: cleanString(40),
  company: cleanString(160),
  services: stringArray(10),
  otherServices: cleanString(500),
  budget: cleanString(100),
  timeline: cleanString(100),
  primaryGoal: cleanString(160),
  specialRequirements: cleanString(2000),
  primaryUsers: cleanString(100),
  industry: cleanString(120),
  businessDescription: cleanString(3000),
  projectObjectives: stringArray(10),
  files: z.array(formFileSchema).max(MAX_ATTACHMENT_COUNT),
  referenceLinks: cleanString(4000),
  additionalMessage: cleanString(4000),
  website: z.string().max(0).optional(),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
export type ContactFile = ContactSubmission["files"][number];

export const uploadRequestSchema = z.object({
  name: z.string().trim().min(1).max(180),
  size: z.number().int().positive().max(MAX_ATTACHMENT_SIZE),
  type: cleanString(120),
});

export function getExtension(name: string): string {
  return name.split(".").pop()?.toLowerCase() ?? "";
}

export function validateFileMetadata(name: string, size: number, type: string): boolean {
  const expectedType = allowedTypes.get(getExtension(name));
  return Boolean(expectedType && size > 0 && size <= MAX_ATTACHMENT_SIZE && type === expectedType);
}

function getUploadSecret(): string {
  const secret = process.env.SUPABASE_SECRET_KEY;
  if (!secret) {
    throw new Error("Upload token configuration is missing.");
  }
  return secret;
}

function encode(value: string): string {
  return Buffer.from(value).toString("base64url");
}

function decode(value: string): string {
  return Buffer.from(value, "base64url").toString("utf8");
}

export function createUploadToken(file: {
  path: string;
  name: string;
  size: number;
  type: string;
}): string {
  const payload = encode(
    JSON.stringify({
      exp: Math.floor(Date.now() / 1000) + UPLOAD_TOKEN_TTL_SECONDS,
      path: file.path,
      name: file.name,
      size: file.size,
      type: file.type,
    }),
  );
  const signature = createHmac("sha256", getUploadSecret()).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifyUploadToken(token: string, file: ContactFile): boolean {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) {
    return false;
  }

  const expectedSignature = createHmac("sha256", getUploadSecret()).update(payload).digest();
  const receivedSignature = Buffer.from(signature, "base64url");
  if (
    receivedSignature.length !== expectedSignature.length ||
    !timingSafeEqual(receivedSignature, expectedSignature)
  ) {
    return false;
  }

  try {
    const claims = JSON.parse(decode(payload)) as {
      exp?: number;
      path?: string;
      name?: string;
      size?: number;
      type?: string;
    };
    return Boolean(
      claims.exp &&
        claims.exp > Math.floor(Date.now() / 1000) &&
        claims.path === file.path &&
        claims.name === file.name &&
        claims.size === file.size &&
        claims.type === file.type &&
        file.path.startsWith("drafts/"),
    );
  } catch {
    return false;
  }
}

export function createUploadPath(name: string): string {
  return `drafts/${randomUUID()}/${randomUUID()}.${getExtension(name)}`;
}
