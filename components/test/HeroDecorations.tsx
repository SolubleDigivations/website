"use client";

import { motion } from "motion/react";

export default function HeroDecorations() {
  return (
    <>
      {/* 1. Top-Left Yellow/Pink Spark & Cone Doodle near IDEA (Entrance: 0.35s) */}

      {/* 2. Top-Right Two-Tone Capsule (Behind/near DESIGN, Entrance: 0.35s + Subtle Idle Float) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 22 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 28,
          y: [0, -5, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.35 },
          scale: { duration: 0.6, delay: 0.35 },
          rotate: { duration: 0.6, delay: 0.35 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.0 },
        }}
        className="absolute -right-1 top-[10%] z-0 h-32 w-16 overflow-hidden rounded-full shadow-[0_12px_28px_rgba(108,140,255,0.16)]"
      >
        {/* Top half: translucent frosted glass */}
        <div className="h-1/2 w-full border-t border-l border-r border-white/70 bg-white/40 backdrop-blur-xs" />
        {/* Bottom half: Soluble Blue */}
        <div className="h-1/2 w-full bg-soluble-blue" />
      </motion.div>

      {/* 3. Middle-Right Coral Organic Droplet (Near DEVELOP/LAUNCH, Entrance: 0.35s + Subtle Idle Float) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 24,
          y: [0, 4, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.35 },
          scale: { duration: 0.6, delay: 0.35 },
          rotate: { duration: 0.6, delay: 0.35 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
        }}
        className="absolute right-[6%] top-[45%] z-0 h-26 w-16 rounded-[65%_35%_70%_30%/70%_30%_65%_35%] bg-[#ff7445] shadow-[0_10px_24px_rgba(255,116,69,0.2)]"
      />

      {/* 4. Left-Middle Soluble Purple Blob (Between IDEA and DEVELOP, Entrance: 0.35s) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 16 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="absolute left-[1%] top-[38%] z-0 h-16 w-24 rounded-[56%_44%_62%_38%] bg-soluble-purple shadow-[0_8px_22px_rgba(177,140,255,0.2)]"
      />

      {/* 5. Bottom-Right Soluble Mint Circle (Near the final stage, Entrance: 0.35s + Very Subtle Scale) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: [1, 1.025, 1],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.35 },
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.0,
          },
        }}
        className="absolute bottom-[6%] right-[10%] z-0 flex h-22 w-22 items-center justify-center rounded-full bg-soluble-mint shadow-[0_10px_24px_rgba(82,217,173,0.22)]"
      >
        <span className="h-3 w-3 rotate-45 rounded-xs bg-[#111111]" />
      </motion.div>

      {/* 6. Hand-drawn Radiating Sunburst / Spark Lines (Between IDEA, DEVELOP, and DESIGN, Entrance: 0.35s) */}
      <motion.svg
        viewBox="-329.12 -242.846 648.51 698.758"
        className=""
        fill="none"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <path d="M -67.427 35.02 L -101.11 32.877" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M -61.066 17.723 C -61.066 17.723 -91.311 1.619 -91.311 1.619" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M -48.449 -0.116 L -66.598 -24.196" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M -30.201 -10.044 L -34.618 -38.258" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" />
      </motion.svg>

      {/* 7. "FROM IDEAS TO IMPACT" Annotation (Positioned at conclusion near final mint circle, Entrance: 0.90s) */}
      <motion.div
        initial={{ opacity: 0, y: 8, rotate: -14 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute bottom-[25%] right-[-8%] z-20 w-24 text-center text-[#111111] font-caveat font-medium leading-0.5 tracking-wide"
      >
        <span className="text-lg lg:text-lg uppercase">
          From
          <br />
          Ideas to
          <br />
          Impact
        </span>
      </motion.div>
    </>
  );
}
