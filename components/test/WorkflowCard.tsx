"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

export interface WorkflowCardProps {
  className: string;
  color: string;
  rotate: string;
  hoverRotate?: string;
  delay: number;
  icon: ReactNode;
  title: string;
  subtitle: string;
  shadowColor?: string;
  widthClass?: string;
  heightClass?: string;
  extraElement?: ReactNode;
}

export default function WorkflowCard({
  className,
  color,
  rotate,
  hoverRotate = "0deg",
  delay,
  icon,
  title,
  subtitle,
  shadowColor,
  widthClass = "w-[155px] sm:w-[170px] lg:w-[182px]",
  heightClass = "h-[150px] sm:h-[165px] lg:h-[176px]",
  extraElement,
}: WorkflowCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.94,
        rotate: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        rotate: hoverRotate,
        scale: 1.025,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={`absolute z-20 cursor-pointer select-none ${className}`}
    >
      <div
        style={{
          backgroundColor: color,
          boxShadow:
            shadowColor || "0 20px 48px rgba(0, 0, 0, 0.08)",
        }}
        className={`relative flex ${widthClass} ${heightClass} flex-col items-center justify-center rounded-[26px] sm:rounded-[30px] p-4 text-center text-[#111111] transition-shadow duration-300`}
      >
        {/* Optional decorative bubble, puzzle tab, or badge */}
        {extraElement}

        {/* Card Icon */}
        <div className="mb-2.5 flex items-center justify-center text-[#111111]">
          {icon}
        </div>

        {/* Card Title */}
        <p className="text-[15px] font-black tracking-wide text-[#111111] sm:text-[16px] lg:text-[17px]">
          {title}
        </p>

        {/* Card Subtitle */}
        <p className="mt-0.5 text-[11.5px] font-semibold text-[#111111]/75 sm:text-[12px] lg:text-[13px]">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}
