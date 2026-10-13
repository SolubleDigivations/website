"use client";

import { motion } from "motion/react";

// Hand-drawn curved arrow used next to section headings
export function DoodleTitleArrow({
  className = "w-10 h-6 text-foreground inline-block",
}: {
  className?: string;
}) {
  return (
    <motion.svg
      viewBox="0 0 54 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.path
        d="M4 25C16 28 32 23 46 7"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.path
        d="M34 6C40 6 46 6.5 48 7C48 9.5 46.5 15 45.5 19"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

// Organic hand-drawn oval encircling "obsession."
export function DoodleObsessionLoop({
  className = "absolute -inset-x-3 -inset-y-2 pointer-events-none",
}: {
  className?: string;
}) {
  return (
    <motion.svg
      viewBox="90 0 20 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M -47.73 52.513 C -60.672 32.88 16.983 23.456 120.525 22.671 C 224.066 21.885 275.836 34.451 271.954 52.513 C 266.777 72.147 185.238 80 68.755 80 C -28.316 80 -73.615 65.864 -67.143 48.587 C -61.966 36.021 -12.784 28.168 62.284 26.597"
        stroke="#FFD65A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.svg>
  );
}

// Hand-drawn yellow underline stroke for CTA
export function DoodleUnderline({
  className = "w-full h-4",
}: {
  className?: string;
}) {
  return (
    <motion.svg
      viewBox="0 0 260 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M4 12C65 5 165 6 256 14"
        stroke="#FFD65A"
        strokeWidth="6.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

// Curved arrow pointing towards CTA button
export function DoodleCtaArrow({
  className = "w-16 h-10 text-foreground",
}: {
  className?: string;
}) {
  return (
    <motion.svg
      viewBox="0 0 70 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M6 32C24 37 46 30 58 10"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      />
      <motion.path
        d="M45 8C52 8 58 10 60 10C59 14 57 20 54 25"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
    </motion.svg>
  );
}

// Hand-drawn curly loop
export function DoodleCurlyLoop({
  className = "w-8 h-12 text-foreground",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 30 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 4C6 10 4 22 14 26C24 30 22 42 10 46"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Hand-drawn arrow for Venn Diagram
export function DoodleVennArrow({
  className = "w-12 h-10 text-foreground",
}: {
  className?: string;
}) {
  return (
    <motion.svg
      viewBox="0 0 60 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M6 8C20 4 42 8 48 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      <motion.path
        d="M38 27L48 30L51 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
      />
    </motion.svg>
  );
}

export function CursorDoodle({ className = "" }) {
  return (
    <motion.svg
      viewBox="-102.659 256.19 155.801 164.991"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M -45.191 291.598 C -69.72 341.256 -28.552 380.026 -11.134 378.159"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </motion.svg>
  );
}
