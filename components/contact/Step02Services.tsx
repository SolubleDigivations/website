"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Globe,
  Smartphone,
  Code2,
  PenTool,
  Layers,
  MoreHorizontal,
} from "lucide-react";
import { Step02Graphic } from "./graphics/StepGraphics";
import { ContactFormData, SERVICE_OPTIONS } from "./types";
import { Sunburst3 } from "../graphics/Sunburst3";

export function Step02Left({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex flex-col justify-center">
      {/* Eyebrow badge */}
      <div className="inline-flex w-fit items-center rounded-full bg-soluble-purple/40 px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-foreground/80">
        What are we building?
      </div>

      {/* Heading */}
      <h2 className="mt-2 lg:mt-4 text-4xl sm:text-4xl lg:text-6xl font-[1000] tracking-tighter text-[#111111] leading-8 lg:leading-14">
        What do
        <br />
        you need?<span className="text-soluble-orange font-outfit">.</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-4 lg:mt-8 text-sm lg:text-base font-medium text-muted-foreground/80 leading-relaxed max-w-72">
        Tell us what you&apos;re looking to build. You can choose more than one.
      </p>

      {/* Step Graphic */}
      {!isMobile && (
        <div className="mt-2 sm:mt-3">
          <Step02Graphic />
        </div>
      )}
    </div>
  );
}

interface Step02ServicesProps {
  isMobile: boolean;
  formData: ContactFormData;
  updateFormData: (data: Partial<ContactFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function Step02Services({
  isMobile,
  formData,
  updateFormData,
  onNext,
  onBack,
  onSkip,
}: Step02ServicesProps) {
  const [error, setError] = useState<string | null>(null);

  const toggleService = (label: string) => {
    const current = formData.services || [];
    const exists = current.includes(label);
    const updated = exists
      ? current.filter((s) => s !== label)
      : [...current, label];

    updateFormData({ services: updated });
    if (error && updated.length > 0) setError(null);
  };

  const handleContinue = () => {
    if (
      (formData.services || []).length === 0 &&
      !formData.otherServices.trim()
    ) {
      setError(
        "Please select at least one service, or click Skip to continue.",
      );
      return;
    }
    onNext();
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "globe":
        return <Globe className="w-6 h-6 text-[#111111]" />;
      case "phone":
        return <Smartphone className="w-6 h-6 text-[#111111]" />;
      case "code":
        return <Code2 className="w-6 h-6 text-[#111111]" />;
      case "pencil":
        return <PenTool className="w-6 h-6 text-[#111111]" />;
      case "layers":
        return <Layers className="w-6 h-6 text-[#111111]" />;
      case "dots":
      default:
        return <MoreHorizontal className="w-6 h-6 text-[#111111]" />;
    }
  };

  return (
    <div className="relative mt-5 lg:mt-18">
      <Sunburst3 className="absolute w-14 h-14 rotate-180 right-[-16%] -top-5" />
      <motion.div className="absolute top-0 right-[-38%] bg-linear-to-tr from-background to-40% to-soluble-pink w-35 h-40 rounded-lg rotate-38" />
      <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-2">
        Select Services <span className="text-[#FF8B68]">*</span>
      </label>

      {/* 6 Service Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {SERVICE_OPTIONS.map((service) => {
          const isSelected = (formData.services || []).includes(service.label);

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => toggleService(service.label)}
              className={`relative w-[96%] h-22 rounded-md border text-left transition-all duration-200 flex items-center gap-5 group cursor-pointer ${
                isSelected
                  ? "bg-[#F3F7FF] border-[#6C8CFF] shadow-xs ring-1 ring-[#6C8CFF]/30"
                  : "bg-white border-[#E7E7E2] hover:border-black/30 hover:bg-neutral-50/70"
              }`}
            >
              {/* Icon Badge */}
              <div
                className={`ml-5 p-3.5 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                  service.bgColor
                }`}
              >
                {renderIcon(service.icon)}
              </div>

              {/* Text Details */}
              <div className="w-44">
                <h4 className="text-sm lg:text-sm font-bold text-[#111111] leading-snug">
                  {service.label}
                </h4>
                <p className="mt-0.5 text-xs font-medium text-muted-foreground/80 leading-relaxed text-wrap">
                  {service.description}
                </p>
              </div>

              {/* Selected Checkmark Badge */}
              {isSelected && (
                <div className="absolute top-3 right-3 w-5 aspect-square rounded-full bg-[#111111] text-white flex items-center justify-center animate-in zoom-in-75 duration-150">
                  <Check size={12} strokeWidth={3} />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>
      )}

      {/* ANY OTHER SERVICES? (OPTIONAL) */}
      <div className="mt-3">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
          Any other services? (Optional)
        </label>
        <input
          type="text"
          value={formData.otherServices}
          onChange={(e) => updateFormData({ otherServices: e.target.value })}
          placeholder="e.g. API development, integrations, third-party tools..."
          className="w-full px-4 py-2.5 sm:py-4 rounded-md bg-white border border-[#E7E7E2] text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-xs"
        />
      </div>

      {/* Bottom Actions */}
      <div
        className="mt-8 flex
      flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-0"
      >
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleContinue}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-38 py-4 lg:px-17 lg:py-3.5 text-base lg:text-sm font-semibold text-white shadow-md hover:bg-black transition-colors cursor-pointer"
          >
            <span>Continue</span>
            <ArrowRight size={15} />
          </motion.button>

          <button
            type="button"
            onClick={onBack}
            className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer hidden md:inline"
          >
            Back
          </button>
        </div>

        <div className="w-full flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="text-baselg:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer md:hidden"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="text-baselg:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer"
          >
            Skip
          </button>
        </div>
      </div>
      {isMobile && <Step02Graphic />}
    </div>
  );
}
