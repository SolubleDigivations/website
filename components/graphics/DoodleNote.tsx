"use client";

import { motion } from "motion/react";

export default function DoodleNote() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.4,
      }}
      className="absolute -right-2 -top-6 hidden w-32 rotate-[-7deg] lg:block"
    >
      <p className="text-[15px] font-bold uppercase leading-[1.2] tracking-[0.08em]">
        Building
        <br />
        Digital
        <br />
        Together
      </p>

      <svg
        viewBox="0 0 100 80"
        className="mt-1 h-14 w-20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M65 5 C45 15 48 35 35 52 C29 59 22 61 15 62"
          stroke="#111111"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M15 62 L24 55"
          stroke="#111111"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M15 62 L25 65"
          stroke="#111111"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}