"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function AboutGraphic() {
  return (
    <div className="relative mx-auto aspect-[3/2] lg:aspect-square w-full h-min max-w-[500px]">
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
        className="absolute left-[13%] top-[8%] lg:top-[12%] h-[72%] w-[40%] lg:h-[48%] lg:w-[43%] rounded-[48%_52%_40%_60%]"
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
        className="absolute right-[13%] lg:right-[15%] top-[8%] h-[70%] lg:h-[53%] w-[38%] rounded-[60%_40%_55%_45%]"
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
        className="absolute inset-x-[8%] bottom-0 lg:bottom-30 z-10"
      >
        <Image
          src="/assets/images/about/founders.png"
          alt="Soluble Digivations founders"
          width={800}
          height={600}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* Decorative strokes */}
      <motion.svg
        viewBox="-265 -90 800 400"
        className="absolute inset-0 z-20 h-auto -rotate-15 w-full lg:pt-12 lg:pr-2"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M365 95 l12 -22 M378 104 l23 -2 M368 110 l10 17"
          stroke="#111111"
          strokeWidth="5"
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