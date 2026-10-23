"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Loader2,
  Edit2,
  Globe,
  IndianRupee,
  Calendar,
  Users,
  FileText,
} from "lucide-react";
import { Step06Graphic } from "./graphics/StepGraphics";
import { ContactFormData } from "./types";

export function Step06Left({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex flex-col justify-center mt-14">
      {/* Eyebrow badge */}
      <div className="inline-flex w-fit items-center rounded-full bg-[#EBE4FF] px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/80">
        Almost there
      </div>

      {/* Heading */}
      <h2 className="mt-4 text-2xl sm:text-4xl lg:text-[52px] font-[1000] tracking-tighter text-[#111111] leading-13">
        Anything else
        <br />
        we should know?
        <span className="text-soluble-orange font-outfit">.</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-4 mb-4 text-xs sm:text-sm lg:text-base font-medium text-muted-foreground/80 leading-relaxed max-w-72">
        Share any additional details, questions or specific requirements.
        We&apos;re all ears.
      </p>

      {/* Step Graphic */}
      {!isMobile && (
        <div className="mt-2 sm:mt-3">
          <Step06Graphic />
        </div>
      )}
    </div>
  );
}

interface Step06FinalProps {
  formData: ContactFormData;
  updateFormData: (data: Partial<ContactFormData>) => void;
  isMobile: boolean;
  onSubmit: () => void;
  onBack: () => void;
  onSkip: () => void;
  onJumpToStep: (stepNumber: number) => void;
  isSubmitting: boolean;
  submitError?: string | null;
}

export default function Step06Final({
  isMobile,
  formData,
  updateFormData,
  onSubmit,
  onBack,
  onSkip,
  onJumpToStep,
  isSubmitting,
  submitError,
}: Step06FinalProps) {
  // Format summary details
  const servicesText =
    (formData.services || []).length > 0
      ? formData.services.join(", ")
      : formData.otherServices
        ? formData.otherServices
        : "None selected";

  const servicesCount = (formData.services || []).length;

  const budgetText = formData.budget || "Not specified";
  const timelineText = formData.timeline || "Not specified";

  const audienceParts = [
    formData.primaryUsers,
    formData.industry,
    (formData.projectObjectives || []).slice(0, 1)[0],
  ].filter(Boolean);

  const audienceText =
    audienceParts.length > 0 ? audienceParts.join(" • ") : "Not specified";

  const filesCount = (formData.files || []).length;
  const filesText =
    filesCount > 0
      ? `${filesCount} file${filesCount > 1 ? "s" : ""} attached`
      : "No files attached";

  return (
    <div className="space-y-3 sm:space-y-3.5 mt-10">
      {/* 1. YOUR MESSAGE (OPTIONAL) */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
          Your Message (Optional)
        </label>
        <textarea
          rows={2}
          value={formData.additionalMessage}
          onChange={(e) =>
            updateFormData({ additionalMessage: e.target.value })
          }
          placeholder="Tell us anything else — your ideas, questions, specific requirements, or what success looks like for you..."
          className="w-full px-4 py-2 pb-10 rounded-md bg-white border border-[#E7E7E2] text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-xs resize-none"
        />
      </div>

      {/* 2. QUICK SUMMARY */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80">
            Quick Summary
          </label>
          <button
            type="button"
            onClick={() => onJumpToStep(2)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <span>EDIT</span>
            <Edit2 size={12} />
          </button>
        </div>

        {/* Summary Card Container */}
        <div className="rounded-md bg-white border border-[#E7E7E2] divide-y divide-[#E7E7E2]/70 shadow-xs overflow-hidden">
          {/* Row 1: Services */}
          <div className="p-2 sm:p-2.5 lg:px-4 lg:py-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#FFE4F2] flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-[#111111]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">
                  Services
                </p>
                <p className="text-sm font-bold text-[#111111] truncate">
                  {servicesText}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              {servicesCount > 0 && (
                <span className="text-[11px] font-semibold text-muted-foreground bg-neutral-100 px-2 py-1 rounded-md">
                  {servicesCount} selected
                </span>
              )}
              <button
                type="button"
                onClick={() => onJumpToStep(2)}
                className="text-xs font-semibold text-muted-foreground hover:text-black transition-colors"
              >
                Edit
              </button>
            </div>
          </div>

          {/* Row 2: Budget */}
          <div className="p-2 sm:p-2.5 lg:px-4 lg:py-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0">
                <IndianRupee className="w-4 h-4 text-[#111111]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">
                  Budget
                </p>
                <p className="text-sm font-bold text-[#111111] truncate">
                  {budgetText}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onJumpToStep(3)}
              className="text-xs font-semibold text-muted-foreground hover:text-black transition-colors shrink-0"
            >
              Edit
            </button>
          </div>

          {/* Row 3: Timeline */}
          <div className="p-2 sm:p-2.5 lg:px-4 lg:py-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#EBE4FF] flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 text-[#111111]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">
                  Timeline
                </p>
                <p className="text-sm font-bold text-[#111111] truncate">
                  {timelineText}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onJumpToStep(3)}
              className="text-xs font-semibold text-muted-foreground hover:text-black transition-colors shrink-0"
            >
              Edit
            </button>
          </div>

          {/* Row 4: Audience */}
          <div className="p-2 sm:p-2.5 lg:px-4 lg:py-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#E0FAF0] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-[#111111]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">
                  Audience
                </p>
                <p className="text-sm font-bold text-[#111111] truncate">
                  {audienceText}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onJumpToStep(4)}
              className="text-xs font-semibold text-muted-foreground hover:text-black transition-colors shrink-0"
            >
              Edit
            </button>
          </div>

          {/* Row 5: Files */}
          <div className="p-2 sm:p-2.5 lg:px-4 lg:py-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-full bg-[#E0ECFF] flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-[#111111]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">
                  Files
                </p>
                <p className="text-sm font-bold text-[#111111] truncate">
                  {filesText}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onJumpToStep(5)}
              className="text-xs font-semibold text-muted-foreground hover:text-black transition-colors shrink-0"
            >
              {filesCount > 0 ? "View" : "Edit"}
            </button>
          </div>
        </div>
      </div>

      {submitError && (
        <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
          {submitError}
        </div>
      )}

      {/* Bottom Actions */}
      <div className="pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              type="button"
              onClick={onSubmit}
              disabled={isSubmitting}
              className="w-full lg:w-56 lg:py-3.5 lg:text-sm 
              inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] py-3 text-sm font-semibold text-white shadow-md hover:bg-black transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  <span>Sending your brief...</span>
                </>
              ) : (
                <>
                  <span>Send your brief</span>
                  <ArrowRight size={15} />
                </>
              )}
            </motion.button>

            <button
              type="button"
              onClick={onBack}
              disabled={isSubmitting}
              className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer disabled:opacity-40"
            >
              Back
            </button>
          </div>

          <button
            type="button"
            onClick={onSkip}
            disabled={isSubmitting}
            className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer disabled:opacity-40"
          >
            Skip
          </button>
        </div>

        <p className="mt-2 text-xs text-muted-foreground/75">
          We&apos;ll get back to you after reviewing your submission.
        </p>
      </div>
    </div>
  );
}
