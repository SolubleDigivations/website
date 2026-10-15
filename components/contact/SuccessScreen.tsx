"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Globe,
  IndianRupee,
  Calendar,
  Users,
  FileText,
  MessageSquare,
  Mail,
} from "lucide-react";
import ContactHeader from "./ContactHeader";
import { SuccessGraphic } from "./graphics/StepGraphics";
import { ContactFormData } from "./types";

interface SuccessScreenProps {
  formData: ContactFormData;
  onReset: () => void;
}

export default function SuccessScreen({
  formData,
  onReset,
}: SuccessScreenProps) {
  // Format summary details
  const servicesText =
    (formData.services || []).length > 0
      ? formData.services.join(", ")
      : formData.otherServices
      ? formData.otherServices
      : "General Digital Services";

  const budgetText = formData.budget || "₹50k – ₹1L";
  const timelineText = formData.timeline || "1 – 2 months";

  const audienceParts = [
    formData.primaryUsers,
    formData.industry,
  ].filter(Boolean);

  const audienceText =
    audienceParts.length > 0 ? audienceParts.join(", ") : "Digital Audience";

  const filesCount = (formData.files || []).length;
  const filesText =
    filesCount > 0
      ? `${filesCount} file${filesCount > 1 ? "s" : ""} attached`
      : "None attached";

  const detailsText = formData.additionalMessage
    ? "Shared in your message"
    : formData.specialRequirements
    ? "Special requirements provided"
    : "Standard onboarding";

  return (
    <div className="relative h-full flex flex-col justify-between overflow-hidden bg-[#F8F8F5]">
      {/* Header with Soluble logo and Close ✕ */}
      <ContactHeader />

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-1 sm:py-2 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
          {/* Left Column: Central Logo & Radiating Cards Illustration */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <SuccessGraphic />
          </div>

          {/* Right Column: Brief Received Details & Next Steps */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-2xl w-full mx-auto lg:mx-0 space-y-3 sm:space-y-3.5">
            {/* Eyebrow badge */}
            <div className="inline-flex w-fit items-center rounded-full bg-[#E0FAF0] px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#059669]">
              Brief received
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-[-0.04em] text-[#111111] leading-tight">
              Your idea is
              <br />
              with us<span className="text-[#FF8B68]">.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg">
              Thanks for sharing the details{formData.name ? `, ${formData.name.split(" ")[0]}` : ""}. We&apos;ve received your project brief and will get back to you soon.
            </p>

            {/* Submission Overview Card (2 Columns Grid) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl bg-white border border-[#E7E7E2] p-3.5 sm:p-4 shadow-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {/* 1. Services */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFE4F2] flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground font-medium">Services</p>
                    <p className="text-xs font-bold text-[#111111] line-clamp-2">
                      {servicesText}
                    </p>
                  </div>
                </div>

                {/* 2. Audience */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E0FAF0] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground font-medium">Audience</p>
                    <p className="text-xs font-bold text-[#111111] truncate">
                      {audienceText}
                    </p>
                  </div>
                </div>

                {/* 3. Budget */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0">
                    <IndianRupee className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground font-medium">Budget</p>
                    <p className="text-xs font-bold text-[#111111] truncate">
                      {budgetText}
                    </p>
                  </div>
                </div>

                {/* 4. Files */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E0ECFF] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground font-medium">Files</p>
                    <p className="text-xs font-bold text-[#111111] truncate">
                      {filesText}
                    </p>
                  </div>
                </div>

                {/* 5. Timeline */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#EBE4FF] flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground font-medium">Timeline</p>
                    <p className="text-xs font-bold text-[#111111] truncate">
                      {timelineText}
                    </p>
                  </div>
                </div>

                {/* 6. Additional details */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFE4F2] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground font-medium">Additional details</p>
                    <p className="text-xs font-bold text-[#111111] truncate">
                      {detailsText}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What's Next Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-3 p-3 rounded-2xl bg-black/[0.02] border border-[#E7E7E2]"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-[#E7E7E2] flex items-center justify-center shrink-0 shadow-2xs">
                <Mail className="w-4 h-4 text-[#111111]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111111]">
                  What&apos;s next?
                </h4>
                <p className="mt-0.5 text-[11px] text-muted-foreground leading-relaxed">
                  Our team will review your brief and get back to you, usually within a few business days.
                </p>
              </div>
            </motion.div>

            {/* Actions */}
            <div className="pt-1 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-black transition-colors"
              >
                <span>Back to homepage</span>
                <ArrowRight size={15} />
              </Link>

              <button
                type="button"
                onClick={onReset}
                className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-2 py-2 cursor-pointer"
              >
                Send another enquiry
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Subtle bottom padding */}
      <div className="h-6" />
    </div>
  );
}
