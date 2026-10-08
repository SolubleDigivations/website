"use client";
import { motion } from "motion/react";

interface CurvedArrowProps {
  size?: number;
  className?: string;
}

export default function CurvedArrow2({
  size = 180,
  className = "",
}: CurvedArrowProps) {
  const arrowTransition = {
    duration: 0.9,
    ease: "easeOut" as const,
  };

  return (
    <motion.svg
      width={size}
      height={(size * 100) / 180}
      viewBox="0 0 180 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, rotate: -3 }}
      whileInView={{
        opacity: 1,
        rotate: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {/* Main curved line */}
      <motion.path
        d="
          M29 61
          C52 70 82 70 107 55
          C128 43 141 28 151 12
        "
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={arrowTransition}
      />

      {/* Left arrowhead */}
      <motion.path
        d="
          M 29 61 C 36.769 55.769 44.752 54.118 48.666 54.713
        "
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          ...arrowTransition,
          delay: 0.05,
        }}
      />

      <motion.path
        d="
          M 29 60.634 C 32.867 68.592 39.762 74.95 45.805 77.195
        "
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          ...arrowTransition,
          delay: 0.05,
        }}
      />

      {/* Right arrowhead */}
      <motion.path
        d="
          M 151 12 C 145.444 13.678 132.123 18.918 128.897 22.761
        "
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          ...arrowTransition,
          delay: 0.75,
        }}
      />

      <motion.path
        d="
          M 151.404 12 C 152.682 19.29 153.952 26.027 149.592 35
        "
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          ...arrowTransition,
          delay: 0.75,
        }}
      />
    </motion.svg>
  );
}
