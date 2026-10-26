"use client";

import { motion } from "motion/react";

interface CurvedArrowProps {
  size?: number;
  className?: string;
}

export default function CurvedArrow({
  size = 180,
  className = "",
}: CurvedArrowProps) {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
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
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.6,
      }}
      variants={{
        hidden: {
          opacity: 0,
          rotate: -3,
        },
        visible: {
          opacity: 1,
          rotate: 0,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        },
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
        variants={pathVariants}
        transition={{
          duration: 0.65,
          ease: "easeOut",
        }}
      />

      {/* Left arrowhead */}
      <motion.path
        d="
          M29 61
          C36 55 42 51 49 48
        "
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        transition={{
          duration: 0.35,
          ease: "easeOut",
          delay: 0.1,
        }}
      />

      <motion.path
        d="
          M29 61
          C35 67 41 72 48 75
        "
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        transition={{
          duration: 0.35,
          ease: "easeOut",
          delay: 0.1,
        }}
      />

      {/* Right arrowhead */}
      <motion.path
        d="
          M151 12
          C143 15 136 20 130 26
        "
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        transition={{
          duration: 0.35,
          ease: "easeOut",
          delay: 0.7,
        }}
      />

      <motion.path
        d="
          M151 12
          C151 20 150 28 147 35
        "
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        transition={{
          duration: 0.35,
          ease: "easeOut",
          delay: 0.7,
        }}
      />
    </motion.svg>
  );
}
