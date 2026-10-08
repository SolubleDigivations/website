"use client";
import { motion } from "motion/react";

export default function PinkUnderline() {
  return (
    <svg
      className="pointer-events-none absolute -bottom-3 left-[28%]-rotate-2 md:-bottom-5.5 lg:-bottom-7 lg:-left-7 z-0 w-[115%]"
      viewBox="-180 -90 700 160"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M -169.1 7.121 C -150.42 70.988 190.014 53.086 199.145 52.762 C 249.233 51.228 397.314 34.341 436.812 20.125 C 586.513 -42.056 297.924 -66.032 179.152 -62.629 C 144.39 -61.633 -35.686 -55.658 -107.8 -32.618 C -154.94 -17.558 -175.34 1.763 -147.64 27.325 C -61.857 96.427 410.635 55.564 484.708 0.967"
        stroke="#f254b5"
        strokeWidth="8"
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
    </svg>
  );
}
