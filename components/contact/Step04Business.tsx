"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  User,
  Building2,
  Users,
  ChevronDown,
  TrendingUp,
  ShoppingCart,
  Sparkles,
  Megaphone,
  Settings,
  MoreHorizontal,
} from "lucide-react";
import { Step04Graphic } from "./graphics/StepGraphics";

export function Step04Left() {
  return (
    <div className="flex flex-col justify-center mt-10">
      {/* Eyebrow badge */}
      <div className="inline-flex w-fit items-center rounded-full bg-[#EBE4FF] px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/60">
        Your business &amp; users
      </div>

      {/* Heading */}
      <h2 className="mt-4 text-2xl sm:text-4xl lg:text-6xl font-[1000] tracking-[-0.07em] text-[#111111] leading-13">
        Tell us about
        <br />
        your business
        <br />
        and users<span className="text-soluble-orange font-outfit">.</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-4 mb-4 text-xs sm:text-sm lg:text-base font-medium text-muted-foreground/80 leading-relaxed max-w-72">
        This helps us design the right solution for your audience, goals and industry.
      </p>

      {/* Step Graphic */}
      <div className="mt-2 sm:mt-3">
        <Step04Graphic />
      </div>
    </div>
  );
}
import {
  ContactFormData,
  PRIMARY_USER_OPTIONS,
  INDUSTRY_OPTIONS,
  PROJECT_ACHIEVEMENT_OPTIONS,
} from "./types";

interface Step04BusinessProps {
  formData: ContactFormData;
  updateFormData: (data: Partial<ContactFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function Step04Business({
  formData,
  updateFormData,
  onNext,
  onBack,
  onSkip,
}: Step04BusinessProps) {
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);

  const toggleObjective = (label: string) => {
    const current = formData.projectObjectives || [];
    const exists = current.includes(label);
    const updated = exists
      ? current.filter((o) => o !== label)
      : [...current, label];

    updateFormData({ projectObjectives: updated });
  };

  const renderAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case "trending-up":
        return <TrendingUp className="w-4 h-4 text-[#111111]" />;
      case "shopping-cart":
        return <ShoppingCart className="w-4 h-4 text-[#111111]" />;
      case "sparkles":
        return <Sparkles className="w-4 h-4 text-[#111111]" />;
      case "megaphone":
        return <Megaphone className="w-4 h-4 text-[#111111]" />;
      case "settings":
        return <Settings className="w-4 h-4 text-[#111111]" />;
      case "more-horizontal":
      default:
        return <MoreHorizontal className="w-4 h-4 text-[#111111]" />;
    }
  };

  return (
    <div className="space-y-3 sm:space-y-3.5 lg:space-y-4 mt-14">

          {/* 1. WHO ARE YOUR PRIMARY USERS? (OPTIONAL) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
              Who are your primary users? (Optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
              {PRIMARY_USER_OPTIONS.map((item) => {
                const isSelected = formData.primaryUsers === item.label;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      updateFormData({
                        primaryUsers: isSelected ? "" : item.label,
                      })
                    }
                    className={`lg:pl-4 relative p-2.5 rounded-md border-2 text-left transition-all duration-200 flex items-center gap-2.5 lg:gap-3.5 cursor-pointer ${
                      isSelected
                        ? "bg-[#FFF0F8] border-[#FF91D4] shadow-xs"
                        : "bg-white border-[#E7E7E2] hover:border-black/30 hover:bg-neutral-50/70"
                    }`}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      {item.icon === "user" ? (
                        <User className="w-5.5 h-5.5" />
                      ) : item.icon === "building" ? (
                        <Building2 className="w-5.5 h-5.5"/>
                      ) : (
                        <Users className="w-5.5 h-5.5"/>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold lg:text-sm text-[#111111] block leading-tight">
                        {item.label}
                      </span>
                      <span className="text-[11px] font-semibold text-muted-foreground/80 block">
                        {item.sublabel}
                      </span>
                    </div>
                    {isSelected && (
                      <div className="w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. WHAT INDUSTRY ARE YOU IN? (OPTIONAL) */}
          <div className="relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
              What industry are you in? (Optional)
            </label>
            <button
              type="button"
              onClick={() => setShowIndustryDropdown((prev) => !prev)}
              className="w-full px-4 py-2.5 sm:py-3 rounded-md bg-white border border-[#E7E7E2] text-sm text-foreground flex items-center justify-between hover:bg-neutral-50/70 transition-colors shadow-xs cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <span className={formData.industry ? "text-foreground font-medium text-xs sm:text-sm" : "text-muted-foreground/70 text-xs sm:text-sm"}>
                  {formData.industry || "Select an industry"}
                </span>
              </div>
              <ChevronDown
                size={14}
                className={`text-muted-foreground transition-transform duration-200 ${
                  showIndustryDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showIndustryDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E7E7E2] rounded-md shadow-xl z-30 py-1 max-h-48 overflow-y-auto">
                {INDUSTRY_OPTIONS.map((ind) => (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => {
                      updateFormData({ industry: ind });
                      setShowIndustryDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between ${
                      formData.industry === ind
                        ? "bg-[#F3F7FF] text-[#111111] font-bold"
                        : "text-foreground hover:bg-neutral-100 font-medium"
                    }`}
                  >
                    <span>{ind}</span>
                    {formData.industry === ind && <Check size={12} className="text-[#6C8CFF]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3. TELL US A BIT ABOUT YOUR BUSINESS. (OPTIONAL) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
              Tell us a bit about your business. (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.businessDescription}
              onChange={(e) => updateFormData({ businessDescription: e.target.value })}
              placeholder="e.g. what you do, your current stage, target market, etc."
              className="w-full px-4 py-2 rounded-md bg-white border border-[#E7E7E2] text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-xs resize-none"
            />
          </div>

          {/* 4. WHAT SHOULD THIS PROJECT ACHIEVE? (OPTIONAL) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
              What should this project achieve? (Optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {PROJECT_ACHIEVEMENT_OPTIONS.map((item) => {
                const isSelected = (formData.projectObjectives || []).includes(item.label);

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleObjective(item.label)}
                    className={`p-2.5 rounded-md border-2 text-left transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${
                      isSelected
                        ? "bg-[#FFF0F8] border-[#FF91D4] shadow-xs"
                        : "bg-white border-[#E7E7E2] hover:border-black/30 hover:bg-neutral-50/70"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full ${item.iconBgColor} flex items-center justify-center shrink-0`}>
                      {renderAchievementIcon(item.icon)}
                    </div>
                    <span className="flex-1 text-xs lg:text-[13px] font-semibold text-[#000000] p-1">
                      {item.label}
                    </span>
                   
                      <div className={`w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 ${isSelected?'':'invisible'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                  
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-1 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onNext}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3 lg:py-4 lg:px-18 text-sm font-semibold text-white shadow-md hover:bg-black transition-colors cursor-pointer"
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
