"use client";

import { motion } from "motion/react";

interface ProgressBarProps {
  currentStep: number; // 1 to 6
  totalSteps?: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps = 6,
}: ProgressBarProps) {
  const formattedCurrent = currentStep.toString().padStart(2, "0");
  const formattedTotal = totalSteps.toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-4 sm:gap-6 w-full max-w-md">
      {/* Step counter */}
      <div className="text-xs sm:text-[13px] font-semibold tracking-wider text-foreground whitespace-nowrap">
        <motion.span
          key={currentStep}
          initial={{ opacity: 0.6, y: -2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          {formattedCurrent}
        </motion.span>
        <span className="mx-1 text-muted-foreground/60">/</span>
        <span className="text-muted-foreground">{formattedTotal}</span>
      </div>

      {/* Segmented bar */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-1">
        {Array.from({ length: totalSteps }).map((_, idx) => {
          const stepNumber = idx + 1;
          const isCompleted = stepNumber <= currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div
              key={idx}
              className="relative h-[3.5px] flex-1 rounded-full bg-[#E7E7E2] overflow-hidden"
            >
              {isCompleted && (
                <motion.div
                  layoutId={`progress-segment-${idx}`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`h-full w-full rounded-full ${
                    isCurrent
                      ? "bg-gradient-to-r from-[#FF7AB8] to-[#FF91D4]"
                      : "bg-[#FF7AB8]"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
