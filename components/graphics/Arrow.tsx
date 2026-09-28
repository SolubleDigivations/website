"use client";

import { motion } from "motion/react";

interface ArrowProps {
  className?: string;
}

export default function Arrow({
  className = "",
}: ArrowProps) {
  return (
    <motion.svg
      viewBox="0 0 400 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M20 150 C100 20 250 20 360 110"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}