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
      {/* ===================================================================
          1. IDEA -> DESIGN (Curves gracefully above from IDEA to DESIGN)
          Timing: 0.45s
          =================================================================== */}
      <motion.path
        d="M 235 95 C 290 35, 385 30, 445 85"
        stroke="#111111"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.85,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      {/* Arrowhead pointing into DESIGN */}
      <motion.path
        d="M 428 76 L 445 85 L 434 98"
        stroke="#111111"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.95 }}
      />

      {/* ===================================================================
          2. DESIGN -> DEVELOP (Curves downward toward DEVELOP)
          Timing: 0.60s
          =================================================================== */}
      <motion.path
        d="M 500 225 C 490 280, 460 320, 425 330"
        stroke="#111111"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.85,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* ===================================================================
          3. DEVELOP -> LAUNCH (Sweeps in a wide loop around LAUNCH card)
          Timing: 0.75s
          =================================================================== */}
      <motion.path
        d="M 300 395 C 230 420, 100 440, 85 495 C 70 555, 140 595, 235 590 C 275 585, 310 570, 345 545"
        stroke="#111111"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 1.1,
          delay: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      {/* Arrowhead pointing up-right into LAUNCH */}
      <motion.path
        d="M 328 538 L 345 545 L 332 558"
        stroke="#111111"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 1.55 }}
      />

      {/* ===================================================================
          4. Small Hand-drawn Annotation Arrow towards the conclusion element
          Timing: 0.90s
          =================================================================== */}
      <motion.path
        d="M 560 490 C 565 520, 545 545, 520 550"
        stroke="#111111"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      />
      <motion.path
        d="M 532 542 L 520 550 L 530 558"
        stroke="#111111"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 1.35 }}
      />
    </svg>
  );
}
