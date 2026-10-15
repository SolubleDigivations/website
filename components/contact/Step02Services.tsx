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

export function Step02Left() {
  return (
    <div className="flex flex-col justify-center">
      {/* Eyebrow badge */}
      <div className="inline-flex w-fit items-center rounded-full bg-[#EBE4FF] px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#6D28D9]">
        What are we building?
      </div>

      {/* Heading */}
      <h2 className="mt-2 text-2xl sm:text-4xl lg:text-[42px] font-black tracking-[-0.04em] text-[#111111] leading-tight">
        What do
        <br />
        you need?<span className="text-[#FF8B68]">.</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">
        Tell us what you&apos;re looking to build. You can choose more than one.
      </p>

      {/* Step Graphic */}
      <div className="mt-2 sm:mt-3">
        <Step02Graphic />
      </div>
    </div>
  );
}

interface Step02ServicesProps {
  formData: ContactFormData;
  updateFormData: (data: Partial<ContactFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function Step02Services({
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
    if ((formData.services || []).length === 0 && !formData.otherServices.trim()) {
      setError("Please select at least one service, or click Skip to continue.");
      return;
    }
    onNext();
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "globe":
        return <Globe className="w-5 h-5 text-[#111111]" />;
      case "phone":
        return <Smartphone className="w-5 h-5 text-[#111111]" />;
      case "code":
        return <Code2 className="w-5 h-5 text-[#111111]" />;
      case "pencil":
        return <PenTool className="w-5 h-5 text-[#111111]" />;
      case "layers":
        return <Layers className="w-5 h-5 text-[#111111]" />;
      case "dots":
      default:
        return <MoreHorizontal className="w-5 h-5 text-[#111111]" />;
    }
  };

  return (
    <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-2">
              Select Services <span className="text-[#FF8B68]">*</span>
            </label>

            {/* 6 Service Selection Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICE_OPTIONS.map((service) => {
                const isSelected = (formData.services || []).includes(service.label);

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.label)}
                    className={`relative p-3 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3 group cursor-pointer ${
                      isSelected
                        ? "bg-[#F3F7FF] border-[#6C8CFF] shadow-xs ring-1 ring-[#6C8CFF]/30"
                        : "bg-white border-[#E7E7E2] hover:border-black/30 hover:bg-neutral-50/70"
                    }`}
                  >
                    {/* Icon Badge */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                        service.bgColor
                      }`}
                    >
                      {renderIcon(service.icon)}
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 pr-5">
                      <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-snug">
                        {service.label}
                      </h4>
                      <p className="mt-0.5 text-[11px] text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Selected Checkmark Badge */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#111111] text-white flex items-center justify-center animate-in zoom-in-75 duration-150">
                        <Check size={10} strokeWidth={3} />
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
                className="w-full px-4 py-2.5 sm:py-3 rounded-2xl bg-white border border-[#E7E7E2] text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-xs"
              />
            </div>

            {/* Bottom Actions */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleContinue}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-black transition-colors cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight size={15} />
                </motion.button>

                <button
                  type="button"
                  onClick={onBack}
                  className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer"
                >
                  Back
                </button>
              </div>

              <button
                type="button"
                onClick={onSkip}
                className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer"
              >
                Skip
              </button>
            </div>
    </div>
  );
}
