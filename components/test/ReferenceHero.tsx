"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import HeroGraphic from "./HeroGraphic";

const technologies = [
  { name: "Next.js", icon: <NextJsIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "MongoDB", icon: <MongoDbIcon /> },
  { name: "Cloudinary", icon: <CloudinaryIcon /> },
  { name: "Razorpay", icon: <RazorpayIcon /> },
];

export default function ReferenceHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F5] text-[#111111]">
      <div className="mx-auto max-w-[1360px] px-6 pb-14 pt-4 sm:px-8 md:px-10 md:pb-16 md:pt-6 lg:px-12 lg:pb-20 lg:pt-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          
          {/* ===================================================================
              LEFT COLUMN: Typography & CTA (Tighter vertical rhythm)
              =================================================================== */}
          <div className="relative z-10 flex flex-col justify-center">
            
            {/* 1. Eyebrow Badge (0.00s entrance) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 sm:mb-7"
            >
              <span className="inline-flex rounded-full border border-[#E7E7E2] bg-white/80 px-3.5 py-1.5 text-[11.5px] font-medium tracking-tight text-[#6B6B6B] backdrop-blur-xs sm:text-[12.5px]">
                Digital Engineering for Modern Businesses
              </span>
            </motion.div>

            {/* 2. Main Headline (0.10s entrance) */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 max-w-[560px] text-[clamp(3.4rem,5.2vw,5.2rem)] font-extrabold leading-[0.92] tracking-[-0.065em] text-[#111111] sm:mb-7"
            >
              We build
              <br />
              digital products
              <br />
              that{" "}
              <span className="relative inline-block">
                move
                <YellowHighlight />
              </span>
              <br />
              businesses
              <br />
              forward.
            </motion.h1>

            {/* 3. Description (0.42s entrance) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7 max-w-[470px] text-[15px] leading-[1.5] text-[#6B6B6B] sm:mb-8 sm:text-[16.5px]"
            >
              Websites, web applications and digital experiences engineered for
              modern businesses.
            </motion.p>

            {/* 4. CTA Buttons (0.50s entrance) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 flex flex-wrap items-center gap-3.5 sm:mb-14"
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#111111] px-5 py-3 text-[13.5px] font-semibold text-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 active:scale-95 sm:text-[14px]"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/work"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#E7E7E2] bg-white px-5 py-3 text-[13.5px] font-semibold text-[#111111] shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 active:scale-95 sm:text-[14px]"
              >
                See our work
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F0EC] text-[12px] transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </Link>
            </motion.div>

            {/* 5. Technology Row (1.15s entrance) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.15 }}
            >
              <p className="mb-3.5 text-[11px] font-medium tracking-tight text-[#888882] sm:text-[11.5px]">
                Trusted by builders, startups and businesses
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[12.5px] font-semibold text-[#555550] sm:text-[13px]">
                {technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-1.5 transition-colors hover:text-[#111111]">
                    <span className="text-[#333333]">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: HeroGraphic Workflow Illustration
              =================================================================== */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <HeroGraphic />
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   YELLOW HAND-DRAWN HIGHLIGHT OVAL AROUND "move"
   ========================================================================= */
function YellowHighlight() {
  return (
    <svg
      viewBox="0 0 190 65"
      className="pointer-events-none absolute -inset-x-3.5 -top-2.5 z-0 h-[130%] w-[calc(100%+28px)] overflow-visible"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M 12 36 C 8 20, 42 7, 96 8 C 152 9, 184 21, 182 37 C 178 53, 136 62, 85 61 C 34 60, 6 49, 16 34"
        stroke="#FFD65A"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </svg>
  );
}

/* =========================================================================
   MONOCHROME/CLEAN TECH LOGOS
   ========================================================================= */

function NextJsIcon() {
  return (
    <svg viewBox="0 0 180 180" width="15" height="15" fill="none">
      <circle cx="90" cy="90" r="90" fill="#111111" />
      <path
        d="M 149.5 163.5 L 68.5 59 H 53 V 121 H 66 V 75.5 L 140 170 C 143.3 168 146.5 165.8 149.5 163.5 Z"
        fill="#FFFFFF"
      />
      <rect x="114" y="59" width="13" height="62" fill="#FFFFFF" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="16" height="15">
      <circle cx="0" cy="0" r="2.05" fill="#111111" />
      <g stroke="#111111" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function MongoDbIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="#111111">
      <path d="M 12 0.5 C 11.5 1.5, 6.5 7.8, 6.5 13.5 C 6.5 17.5, 9 21.2, 11.5 23.5 C 11.7 23.7, 11.9 23.5, 11.9 23.2 L 11.9 15.5 C 11.9 15.2, 12.1 15.2, 12.1 15.5 L 12.1 23.2 C 12.1 23.5, 12.3 23.7, 12.5 23.5 C 15 21.2, 17.5 17.5, 17.5 13.5 C 17.5 7.8, 12.5 1.5, 12 0.5 Z" />
    </svg>
  );
}

function CloudinaryIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#111111">
      <path d="M 19.35 10.04 C 18.67 6.59, 15.64 4, 12 4 C 9.11 4, 6.6 5.64, 5.35 8.04 C 2.34 8.36, 0 10.91, 0 14 C 0 17.31, 2.69 20, 6 20 H 19 C 21.76 20, 24 17.76, 24 15 C 24 12.36, 21.95 10.22, 19.35 10.04 Z" />
    </svg>
  );
}

function RazorpayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="#111111">
      <path d="M 22.4 0 L 8.4 13.6 L 4.8 10.1 L 0 24 L 14.8 9.6 L 18.5 13.2 Z" />
    </svg>
  );
}
