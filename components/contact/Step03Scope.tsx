"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  TrendingUp,
  ShoppingCart,
  Users,
  Settings,
  Lightbulb,
  MoreHorizontal,
} from "lucide-react";
import { Step03Graphic } from "./graphics/StepGraphics";
import {
  ContactFormData,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  PRIMARY_GOAL_OPTIONS,
} from "./types";

export function Step03Left() {
  return (
    <div className="flex flex-col justify-center">
      {/* Eyebrow badge */}
      <div className="inline-flex w-fit items-center rounded-full bg-[#E0FAF0] px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#059669]">
        Budget &amp; Timeline
      </div>

      {/* Heading */}
      <h2 className="mt-2 text-2xl sm:text-4xl lg:text-[42px] font-black tracking-[-0.04em] text-[#111111] leading-tight">
        Help us
        <br />
        understand
        <br />
        the scope<span className="text-[#FF8B68]">.</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">
        A few details about your budget, timeline and goals help us suggest the right approach.
      </p>

      {/* Step Graphic */}
      <div className="mt-2 sm:mt-3">
        <Step03Graphic />
      </div>
    </div>
  );
}

interface Step03ScopeProps {
  formData: ContactFormData;
  updateFormData: (data: Partial<ContactFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function Step03Scope({
  formData,
  updateFormData,
  onNext,
  onBack,
  onSkip,
}: Step03ScopeProps) {
  const renderGoalIcon = (iconName: string) => {
    switch (iconName) {
      case "trending-up":
        return <TrendingUp className="w-4 h-4 text-[#FF8B68]" />;
      case "shopping-cart":
        return <ShoppingCart className="w-4 h-4 text-[#7C98FF]" />;
      case "users":
        return <Users className="w-4 h-4 text-[#059669]" />;
      case "settings":
        return <Settings className="w-4 h-4 text-[#D97706]" />;
      case "lightbulb":
        return <Lightbulb className="w-4 h-4 text-[#A98BFF]" />;
      case "more-horizontal":
      default:
        return <MoreHorizontal className="w-4 h-4 text-[#94A3B8]" />;
    }
  };

  return (
    <div className="space-y-3 sm:space-y-3.5">

          {/* 1. ESTIMATED BUDGET (OPTIONAL) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
              Estimated Budget (Optional)
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {BUDGET_OPTIONS.map((item) => {
                const isSelected = formData.budget === item.label;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      updateFormData({
                        budget: isSelected ? "" : item.label,
                      })
                    }
                    className={`relative py-2 px-1.5 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#F3F7FF] border-[#6C8CFF] text-[#111111] font-bold shadow-xs ring-1 ring-[#6C8CFF]/40"
                        : "bg-white border-[#E7E7E2] text-foreground/80 font-medium hover:border-black/30 hover:bg-neutral-50/70"
                    }`}
                  >
                    <span className="text-xs sm:text-[12px] block leading-tight">
                      {item.label}
                    </span>
                    {isSelected && (
                      <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#111111] text-white flex items-center justify-center">
                        <Check size={8} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. IDEAL TIMELINE (OPTIONAL) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
              Ideal Timeline (Optional)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {TIMELINE_OPTIONS.map((item) => {
                const isSelected = formData.timeline === item.label;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      updateFormData({
                        timeline: isSelected ? "" : item.label,
                      })
                    }
                    className={`relative py-2 px-1.5 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#F3F7FF] border-[#6C8CFF] text-[#111111] font-bold shadow-xs ring-1 ring-[#6C8CFF]/40"
                        : "bg-white border-[#E7E7E2] text-foreground/80 font-medium hover:border-black/30 hover:bg-neutral-50/70"
                    }`}
                  >
                    <span className="text-xs sm:text-[12px] block leading-tight">
                      {item.label}
                    </span>
                    {isSelected && (
                      <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#111111] text-white flex items-center justify-center">
                        <Check size={8} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. WHAT IS THE PRIMARY GOAL? (OPTIONAL) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
              What is the primary goal? (Optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRIMARY_GOAL_OPTIONS.map((goal) => {
                const isSelected = formData.primaryGoal === goal.label;

                return (
                  <button
                    key={goal.id}
                    type="button"
                    onClick={() =>
                      updateFormData({
                        primaryGoal: isSelected ? "" : goal.label,
                      })
                    }
                    className={`p-2.5 rounded-2xl border text-left transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${
                      isSelected
                        ? "bg-[#F3F7FF] border-[#6C8CFF] shadow-xs ring-1 ring-[#6C8CFF]/30"
                        : "bg-white border-[#E7E7E2] hover:border-black/30 hover:bg-neutral-50/70"
                    }`}
                  >
                    <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                      {renderGoalIcon(goal.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#111111] truncate">
                        {goal.label}
                      </h4>
                      <p className="text-[10px] text-muted-foreground truncate">
                        {goal.description}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="w-3.5 h-3.5 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
                        <Check size={8} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. ANY SPECIAL REQUIREMENTS? (OPTIONAL) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
              Any special requirements? (Optional)
            </label>
            <input
              type="text"
              value={formData.specialRequirements}
              onChange={(e) => updateFormData({ specialRequirements: e.target.value })}
              placeholder="e.g. specific features, integrations, technical constraints..."
              className="w-full px-4 py-2 sm:py-2.5 rounded-2xl bg-white border border-[#E7E7E2] text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-xs"
            />
          </div>

          {/* Bottom Actions */}
          <div className="pt-1 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onNext}
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
