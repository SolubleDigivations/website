"use client";

import { motion } from "motion/react";

export default function HeroConnector() {
  return (
    <motion.svg
      viewBox="0 0 500 500"
      fill="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <motion.path
        d="
          M360 115
          C300 150 250 165 225 220
          C200 275 240 315 300 335
          C335 347 355 360 365 390
        "
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
          duration: 1.5,
          delay: 0.4,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
