"use client";

import { motion } from "motion/react";

/* =========================================================================
   1. HAND-DRAWN YELLOW OVAL HIGHLIGHT AROUND "impact."
   ========================================================================= */
export function YellowImpactHighlight() {
  return (
    <svg
      viewBox="0 0 240 85"
      className="pointer-events-none absolute -inset-x-5 -top-3 z-0 h-[140%] w-[calc(100%+40px)] overflow-visible"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M 18 45 C 10 24, 48 8, 120 9 C 195 10, 234 25, 232 46 C 228 66, 178 78, 108 77 C 42 76, 8 62, 18 43 C 24 30, 68 18, 132 17 C 190 16, 226 28, 224 44"
        stroke="#F6C83B"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 1.1,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </svg>
  );
}

/* =========================================================================
   2. TOP-LEFT ANGLED WORDS (IDEAS / DESIGN / DEVELOP / LAUNCH)
   ========================================================================= */
export function IdeasDesignDevelopLaunch() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -26 }}
      animate={{ opacity: 1, scale: 1, rotate: -24 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute -left-6 -top-6 z-20 select-none sm:-left-8 sm:-top-8 lg:-left-12 lg:top-10"
    >
      <div className="flex flex-col items-start font-black tracking-[0.14em] text-[#110000] font-caveat">
        <span className="text-[13px] leading-[1.3] sm:text-[15px] lg:text-[16.5px]">IDEAS</span>
        <span className="text-[13px] leading-[1.3] sm:text-[15px] lg:text-[16.5px]">DESIGN</span>
        <span className="text-[13px] leading-[1.3] sm:text-[15px] lg:text-[16.5px]">DEVELOP</span>
        <span className="text-[13px] leading-[1.3] sm:text-[15px] lg:text-[16.5px]">LAUNCH</span>
      </div>

      {/* Small curved arrow from LAUNCH pointing towards the laptop */}
      <svg
        width="100"
        height="100"
        viewBox="-70 -50 160 118"
        fill="none"
        className=" text-[#111111] rotate-20 mb-20"
      >
        <motion.path
          d="M -49.96 -26.682 C -44.917 -3.911 8.952 19.422 34.166 23.217"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.path
          d="M 25.758 7.443 C 21.875 7.252 37.159 21.229 34.627 23.087 C 31.673 29.852 10.37 27.786 12.422 30.806"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.8 }}
        />
      </svg>
    </motion.div>
  );
}

/* =========================================================================
   3. SUNBURST / RADIATING RAYS (TOP & BOTTOM)
   ========================================================================= */
export function SunburstTop() {
  return (
    <motion.svg
      width="120"
      height="60"
      viewBox="0 0 46 38"
      fill="none"
      initial={{ opacity: 0,y:30, x:-5 , scale: 0.6 }}
      animate={{ opacity: 1, y:0, x:0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.45 }}
      className="text-[#111111] animate-pulse"
    >
      <path d="M 11.69 33.939 L 0.209 18.159" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 22.344 29.811 L 18.842 8.189" stroke="currentColor" strokeWidth="2.9" strokeLinecap="round" />
      <path d="M 33.872 30 L 40.974 11.155" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M 42.845 35.691 L 57.171 21.223" stroke="currentColor" strokeWidth='2.9' strokeLinecap="round" />
    </motion.svg>
  );
}

export function SunburstBottom() {
  return (
    <motion.svg
      width="90"
      height="80"
      viewBox="-30 10 55 36"
      fill="none"
      initial={{ opacity: 0, y:-20, x:-10 }}
      animate={{ opacity: 1, y:0, x:0 }}
      transition={{ duration: 0.4, delay: 1.6, ease:[0.1,0.15,0.25,1] }}
      className="text-[#111111] animate-pulse"
    >
      <path d="M -17.957 43.851 L -24.267 26.669" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M -1.958 33.94 L -13.694 18.666" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M 10.686 17.984 L -5.15 10.296" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </motion.svg>
  );
}

/* =========================================================================
   4. SOLID BLACK CURSOR ARROWS
   ========================================================================= */
export function BlackCursorArrow({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className={className}
    >
      <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
        <path
          d="M 4.006 3.073 C 2.771 3.274 6.521 31.498 11 23 C 10.994 22.999 13.172 17.987 14.276 16.523 C 15.77 14.542 22.077 16.081 23.406 14.073 C 25.221 10.81 4.37 -0.327 4.006 3.073 Z"
          fill="#111111"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

/* =========================================================================
   5. HAND-DRAWN DOODLE ARROWS
   ========================================================================= */

// Left arrow pointing right/upwards towards laptop
export function LeftDoodleArrow() {
  return (
    <motion.svg
      width="48"
      height="32"
      viewBox="0 0 48 32"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-[#111111]"
    >
      <path
        d="M 44 14 C 32 18, 18 16, 6 18"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M 16 8 L 6 18 L 14 26"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

// Right top arrow curving inwards towards phone
export function RightTopDoodleArrow() {
  return (
    <motion.svg
      width="38"
      height="44"
      viewBox="0 0 38 44"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.55 }}
      className="text-[#111111]"
    >
      <path
        d="M 12 36 C 24 24, 30 14, 18 6"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M 16 16 L 18 6 L 28 8"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

// Right bottom arrow curving around phone
export function RightBottomDoodleArrow() {
  return (
    <motion.svg
      width="44"
      height="48"
      viewBox="0 0 44 48"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.65 }}
      className="text-[#111111]"
    >
      <path
        d="M 14 8 C 28 16, 36 32, 18 42"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M 28 40 L 18 42 L 20 32"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}


