"use client";

import { motion } from "motion/react";

export default function WorkflowArrows() {
  return (
    <svg
      viewBox="0 0 660 640"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
      fill="none"
      aria-hidden="true"
    >
      {/* 1. IDEA -> DESIGN */}
      <motion.path
        d="M 218.18 9.744 C 292.953 -44.195 340.463 -32.168 349.444 -6.864"
        stroke="#111111"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="translate-x-1"
      />

      {/* 2. DESIGN -> DEVELOP */}
      <motion.path
        d="M 527.667 80.078 C 674.87 71.892 565.98 262.981 499.288 324.103"
        stroke="#111111"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.50,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <motion.path
        d="M 548.436 65.609 C 548.203 66.809 545.69 70.615 541.458 73.318 C 535.6 77.058 526.079 79.111 528.394 80.436 C 534.874 84.144 549.077 86.775 553.642 93.065"
        stroke="#111111"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.60,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* 3. DEVELOP -> LAUNCH */}
      <motion.path
        d="M 274.479 369.478 C -130.81 279.68 -14.421 497.699 42.168 519.107"
        stroke="#111111"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <motion.path
        d="M 12.282 525.098 C 14.158 524.009 13.66 522.421 25.167 521.252 C 32.438 520.513 40.736 521.65 42.101 519.91 C 45.534 515.533 30.085 502.091 35.607 491.938"
        stroke="#111111"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* 4. Small Annotation Arrow */}
      <motion.path
        d="M 560 490 C 565 520, 545 545, 520 550"
        stroke="#111111"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.35,
          delay: 0.80,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="translate-x-28"
      />
      <motion.path
        d="M 528.755 539.663 L 520 550 L 531.817 555.274"
        stroke="#111111"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="translate-x-28"
      />
    </svg>
  );
}
