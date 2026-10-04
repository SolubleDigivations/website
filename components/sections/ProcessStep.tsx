"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  step: {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
  };
  index: number;
}

export default function ProcessStep({ step, index }: ProcessStepProps) {
  const Icon = step.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <div className={`border sm:border-border md:border-transparent sm:bg-white md:bg-transparent sm:max-w-max sm:p-4 md:p-0 rounded-xl ${index%2==0?'':'sm:ml-auto md:ml-0'}`}>
        {/* Number / icon */}
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          transition={{
            duration: 0.25,
          }}
          className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full ${step.color} ${index%2==0?'':'sm:ml-auto md:ml-0'}`}
        >
          <Icon size={21} strokeWidth={1.8} />
        </motion.div>

        {/* Step number */}
        <p className={`mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground ${index%2==0?'':'sm:text-right md:text-left'}`}>
          {step.number}
        </p>

        {/* Title */}
        <h3 className={`mt-2 text-xl font-bold tracking-[-0.04em] ${index%2==0?'':'sm:text-right md:text-left'}`}>
          {step.title}
        </h3>

        {/* Description */}
        <p className={`mt-2 max-w-[190px] text-sm leading-5 text-gray-700 ${index%2==0?'':'sm:text-right md:text-left'}`}>
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}
