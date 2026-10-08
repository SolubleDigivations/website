"use client";

import { motion } from "motion/react";
import Reveal from "@/components/motion/Reveal";

export default function ProcessInfinitySection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-soluble">
        
        {/* Soft rounded container card */}
        <div className="relative overflow-hidden rounded-[32px] border border-[#E8E8E2] bg-[#F3F3ED]/70 px-8 py-12 md:px-14 md:py-16">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#B18CFF]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#52D9AD]/15 blur-3xl pointer-events-none" />

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
            
            {/* Left Column: Heading and description */}
            <div className="space-y-6">
              <Reveal>
                <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-5xl leading-[1.08]">
                  It doesn&apos;t <br />
                  end at launch<span className="text-[#B18CFF]">.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="max-w-md text-base leading-relaxed text-[#555555]">
                  A great product keeps evolving. We continuously learn from real users, refine the experience and help you scale.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Analytics", "User Feedback", "New Opportunities", "Long-Term Support"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-[#E0E0DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#444444] shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column: 3D Iridescent Infinity Ribbon Graphic */}
            <div className="relative flex items-center justify-center py-4">
              <InfinityRibbonGraphic />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function InfinityRibbonGraphic() {
  return (
    <div className="relative w-full max-w-[480px] aspect-[16/10] flex items-center justify-center select-none">
      
      {/* 4 Quadrant Handwritten Labels */}
      {/* Top Left: LEARN */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-2 left-16 sm:left-24 font-caveat text-lg sm:text-xl font-bold tracking-wider text-[#111111]"
      >
        LEARN
      </motion.div>

      {/* Top Right: IMPROVE */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-2 right-16 sm:right-24 font-caveat text-lg sm:text-xl font-bold tracking-wider text-[#111111]"
      >
        IMPROVE
      </motion.div>

      {/* Bottom Left: ITERATE */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-2 left-16 sm:left-24 font-caveat text-lg sm:text-xl font-bold tracking-wider text-[#111111]"
      >
        ITERATE
      </motion.div>

      {/* Bottom Right: GROW */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-2 right-16 sm:right-24 font-caveat text-lg sm:text-xl font-bold tracking-wider text-[#111111]"
      >
        GROW
      </motion.div>

      {/* Infinity Ribbon SVG with Gradient & Animated Flow */}
      <div className="relative w-[340px] sm:w-[400px] h-[160px] sm:h-[180px] flex items-center justify-center">
        <svg
          viewBox="0 0 400 200"
          className="w-full h-full overflow-visible filter drop-shadow-[0_12px_24px_rgba(108,140,255,0.18)]"
          fill="none"
        >
          <defs>
            {/* Left Loop Gradient */}
            <linearGradient id="infinityGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF91D4" />
              <stop offset="35%" stopColor="#FFD65A" />
              <stop offset="70%" stopColor="#6C8CFF" />
              <stop offset="100%" stopColor="#52D9AD" />
            </linearGradient>

            {/* Right Loop Gradient */}
            <linearGradient id="infinityGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#52D9AD" />
              <stop offset="35%" stopColor="#6C8CFF" />
              <stop offset="70%" stopColor="#52D9AD" />
              <stop offset="100%" stopColor="#B18CFF" />
            </linearGradient>

            {/* Continuous Infinity Gradient */}
            <linearGradient id="infinityFullGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FF88C2" />
              <stop offset="20%" stopColor="#FFD65A" />
              <stop offset="50%" stopColor="#52D9AD" />
              <stop offset="80%" stopColor="#6C8CFF" />
              <stop offset="100%" stopColor="#52D9AD" />
            </linearGradient>

            {/* Inner Glow filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Infinity Path Base (Thick Ribbon) */}
          <motion.path
            d="M 200 100 C 250 160, 340 160, 340 100 C 340 40, 250 40, 200 100 C 150 160, 60 160, 60 100 C 60 40, 150 40, 200 100 Z"
            stroke="url(#infinityFullGrad)"
            strokeWidth="38"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />

          {/* Inner Light Sheen Tube */}
          <path
            d="M 200 100 C 250 160, 340 160, 340 100 C 340 40, 250 40, 200 100 C 150 160, 60 160, 60 100 C 60 40, 150 40, 200 100 Z"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* Mobius Cross-over Illusion Overlap */}
          <path
            d="M 180 80 C 190 92, 210 108, 220 120"
            stroke="url(#infinityFullGrad)"
            strokeWidth="38"
            strokeLinecap="round"
          />
          <path
            d="M 180 80 C 190 92, 210 108, 220 120"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* Outer Thin Sketch Outline */}
          <path
            d="M 200 100 C 250 160, 340 160, 340 100 C 340 40, 250 40, 200 100 C 150 160, 60 160, 60 100 C 60 40, 150 40, 200 100 Z"
            stroke="#111111"
            strokeWidth="1.2"
            opacity="0.25"
          />
        </svg>
      </div>

    </div>
  );
}
