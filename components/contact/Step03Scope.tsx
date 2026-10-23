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

export function Step03Left({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex flex-col justify-center lg:mt-11">
      {/* Eyebrow badge */}
      <div className="inline-flex w-fit items-center rounded-full bg-soluble-mint/30 px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-foreground/80">
        Budget &amp; Timeline
      </div>

      {/* Heading */}
      <h2 className="mt-2 lg:mt-4 text-4xl lg:text-6xl font-[1000] tracking-tighter text-[#111111] leading-8 lg:leading-13">
        Let us
        <br />
        understand
        <br />
        the scope<span className="text-soluble-orange font-outfit">.</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-4 lg:mt-8 mb-4 text-sm lg:text-base font-medium text-muted-foreground/80 leading-relaxed max-w-72">
        A few details about your budget, timeline and goals help us suggest the
        right approach.
      </p>

      {/* Step Graphic */}
      {!isMobile && (
        <div className="mt-2 sm:mt-3">
          <Step03Graphic />
        </div>
      )}
    </div>
  );
}

interface Step03ScopeProps {
  isMobile: boolean;
  formData: ContactFormData;
  updateFormData: (data: Partial<ContactFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function Step03Scope({
  isMobile,
  formData,
  updateFormData,
  onNext,
  onBack,
  onSkip,
}: Step03ScopeProps) {
  const renderGoalIcon = (iconName: string) => {
    switch (iconName) {
      case "trending-up":
        return (
          <TrendingUp className="aspect-square w-6 lg:w-4 text-foreground" />
        );
      case "shopping-cart":
        return (
          <ShoppingCart className="aspect-square w-5 lg:w-4 text-foreground" />
        );
      case "users":
        return <Users className="aspect-square w-5 lg:w-4 text-foreground" />;
      case "settings":
        return (
          <Settings className="aspect-square w-5 lg:w-4 text-foreground" />
        );
      case "lightbulb":
        return (
          <Lightbulb className="aspect-square w-5 lg:w-4 text-foreground" />
        );
      case "more-horizontal":
      default:
        return (
          <MoreHorizontal className="aspect-square w-5 lg:w-4 text-foreground" />
        );
    }
  };

  return (
    <div className="space-y-5 md:space-y-3.5 lg:-mt-6 lg:space-y-4 lg:pt-18 mt-5 relative">
      <div className="absolute top-20 right-[-20%] lg:top-16 lg:right-[-45%] rotate-35 aspect-square w-28 lg:w-50 rounded-3xl lg:rounded-4xl bg-linear-to-tr from-background to-soluble-mint to-50%"/>
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
                className={`relative flex items-center justify-center py-4 lg:py-3 px-1.5 lg:px-4 rounded-md border text-center transition-all duration-100 cursor-pointer ${
                  isSelected
                    ? "bg-[#F3F7FF] border-[#6C8CFF] text-[#111111] font-bold shadow-xs ring-1 ring-[#6C8CFF]/40"
                    : "bg-white border-[#E7E7E2] text-foreground font-medium hover:border-black/30 hover:bg-neutral-50/70"
                }`}
              >
                <span className="text-xs sm:text-sm block leading-tight">
                  {item.label}
                </span>
                {isSelected && (
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#111111] text-white flex items-center justify-center">
                    <Check size={10} strokeWidth={3} />
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
          {TIMELINE_OPTIONS.map((item, index) => {
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
                className={`${index == 4 && "col-span-2 lg:col-span-1"} relative py-3 px-1 lg:px-2 lg:py-4 rounded-md border text-center transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#F3F7FF] border-[#6C8CFF] text-[#111111] font-bold shadow-xs ring-1 ring-[#6C8CFF]/40"
                    : "bg-white border-[#E7E7E2] text-foreground/80 font-medium hover:border-black/30 hover:bg-neutral-50/70"
                }`}
              >
                <span className="text-xs font-semibold lg:font-medium lg:text-xs block leading-tight">
                  {item.label}
                </span>
                {isSelected && (
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#111111] text-white flex items-center justify-center">
                    <Check size={10} strokeWidth={3} />
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
                className={`py-3 px-4.5 lg:py-3 lg:px-4 rounded-md border text-left transition-all duration-200 flex items-center gap-4 lg:gap-2.5 cursor-pointer ${
                  isSelected
                    ? "bg-[#F3F7FF] border-[#6C8CFF] shadow-xs"
                    : "bg-white border-[#E7E7E2] hover:border-black/30 hover:bg-neutral-50/70"
                }`}
              >
                <div
                  className={`aspect-square w-11 lg:w-10 rounded-full ${goal.iconBgColor} flex items-center justify-center shrink-0`}
                >
                  {renderGoalIcon(goal.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-[#111111] truncate">
                    {goal.label}
                  </h4>
                  <p className="text-xs font-semibold text-muted-foreground truncate">
                    {goal.description}
                  </p>
                </div>
                {isSelected && (
                  <div className="w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
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
          onChange={(e) =>
            updateFormData({ specialRequirements: e.target.value })
          }
          placeholder="e.g. specific features, integrations, technical constraints..."
          className="w-full px-4 py-2 sm:py-2.5 rounded-md bg-white border border-[#E7E7E2] text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-xs"
        />
      </div>

      {/* Bottom Actions */}
      <div
        className="mt-8 flex
        flex-col-reverse lg:flex-row items-center justify-between gap-4"
      >
        <div className="w-full lg:w-auto flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onNext}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] w-full py-4 lg:w-56 lg:py-3.5 text-base lg:text-sm font-semibold text-white shadow-md hover:bg-black transition-colors cursor-pointer"
          >
            <span>Continue</span>
            <ArrowRight size={15} />
          </motion.button>
        </div>

        <div className="w-full flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer"
          >
            Skip
          </button>
        </div>
      </div>
      {isMobile && <Step03Graphic />}
    </div>
  );
}
