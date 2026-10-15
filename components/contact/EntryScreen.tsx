"use client";

import { motion } from "motion/react";
import { ArrowRight, Mouse } from "lucide-react";
import ContactHeader from "./ContactHeader";
import { EntryHeroGraphic } from "./graphics/StepGraphics";
import { BurstTicks } from "./graphics/ContactDoodles";

interface EntryScreenProps {
  onStart: () => void;
}

export default function EntryScreen({ onStart }: EntryScreenProps) {
  return (
    <div className="relative h-full flex flex-col justify-between overflow-hidden bg-[#F8F8F5]">

      {/* Main Content Area */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-2 sm:py-4 z-10">
        {/* Floating Background/Surrounding Graphics */}
        <div className="absolute inset-0 flex items-center justify-center">
          <EntryHeroGraphic />
        </div>

        {/* Central Hero Column */}
        <div className="relative z-20 max-w-2xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center rounded-full bg-black/[0.04] border border-black/[0.08] px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#111111]"
          >
            Let&apos;s talk
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-5 sm:mt-6"
          >
            {/* Top-right burst ticks with drawing animation */}
            <BurstTicks className="absolute -top-6 right-0 sm:right-6 w-8 h-8 text-[#111111]" color="#111111" delay={0.65} />

            <h1 className="text-4xl sm:text-6xl md:text-[68px] font-black tracking-[-0.04em] text-[#111111] leading-[1.04]">
              Good ideas
              <br />
              deserve a
              <br />
              <span className="relative inline-block">
                conversation
                <span className="text-orange-400">.</span>
                {/* Yellow hand-drawn brush underline stroke with authentic drawing animation */}
                <svg
                  viewBox="0 0 340 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-2 left-0 w-full h-4 sm:h-5 pointer-events-none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M 5 15 C 60 8, 160 5, 335 12"
                    stroke="#FFD65A"
                    strokeWidth="7"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.55, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-6 sm:mt-7 text-sm sm:text-base md:text-lg text-muted-foreground/90 max-w-md mx-auto leading-relaxed text-balance"
          >
            Tell us about your idea, and we&apos;ll help you figure out the best way forward.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className="mt-8 sm:mt-10 relative group"
          >
            {/* Ambient orange/pink glow behind button */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FFD66B]/40 via-[#FF8B68]/30 to-[#FF91D4]/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            
            <button
              type="button"
              onClick={onStart}
              className="relative inline-flex items-center justify-center gap-2.5 rounded-full bg-[#111111] px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-xl hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Let&apos;s get started</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
            </button>
          </motion.div>
        </div>
      </main>

      {/* Bottom Scroll/Progress Indicator */}
      <footer className="relative z-10 pb-8 flex flex-col items-center justify-center pointer-events-none select-none">
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-muted-foreground/70"
        >
          <Mouse className="w-4 h-4 stroke-[1.75]" />
          <div className="w-[1.5px] h-3 bg-muted-foreground/30" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em]">
            A few quick steps
          </span>
        </motion.div>
      </footer>
    </div>
  );
}
