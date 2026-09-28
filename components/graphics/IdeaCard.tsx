"use client";

import { motion } from "motion/react";

export default function IdeaCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        rotate: -4,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: -4,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute right-8 top-12"
    >
      <div className="rounded-[1.75rem] bg-soluble-blue px-8 py-6 shadow-sm">
        <span className="text-xl text-white font-bold tracking-[-0.04em]">
          IDEA
        </span>
      </div>
    </motion.div>
  );
}