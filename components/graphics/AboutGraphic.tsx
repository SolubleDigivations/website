"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function AboutGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px]">
      {/* Blue organic shape */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-[13%] top-[12%] h-[48%] w-[43%] rounded-[48%_52%_40%_60%]"
        style={{
          backgroundColor: "#6C8CFF",
          rotate: "-8deg",
        }}
      />

      {/* Mint organic shape */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute right-[15%] top-[8%] h-[53%] w-[38%] rounded-[60%_40%_55%_45%]"
        style={{
          backgroundColor: "#52D9AD",
          rotate: "7deg",
        }}
      />

      {/* Founders */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-x-[8%] bottom-30 z-10"
      >
        <Image
          src="/assets/images/about/founders.png"
          alt="Soluble Digivations founders"
          width={800}
          height={800}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* Decorative strokes */}
      <motion.svg
        viewBox="0 0 500 500"
        className="absolute inset-0 z-20 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M365 95 l12 -22 M378 104 l23 -2 M368 110 l10 17"
          stroke="#111111"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.55,
          }}
          className=''
        />
      </motion.svg>
    </div>
  );
}