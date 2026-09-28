"use client";

import { motion } from "motion/react";

export default function BuildCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        rotate: 3,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 3,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        delay: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute bottom-16 right-20"
    >
      <div className="rounded-[1.75rem] bg-soluble-mint px-8 py-6 shadow-sm">
        <span className="text-xl font-bold tracking-[-0.04em]">
          BUILD
        </span>
      </div>
    </motion.div>
  );
}