"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import WorkHeroGraphic from "./WorkHeroGraphic";
import { YellowImpactHighlight } from "./WorkHeroDoodles";
import MagneticButton from "../common/MagneticButton";

export default function WorkHero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="mx-auto max-w-[1360px] px-6 pb-14 pt-4 sm:px-8 md:px-10 md:pb-16 md:pt-6 lg:px-12 lg:pb-20 lg:pt-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          
          {/* ===================================================================
              LEFT COLUMN: Typography & Actions
              =================================================================== */}
          <div className="relative z-10 flex flex-col justify-center">
            
            {/* 1. Eyebrow Badge ("OUR WORK") */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E4DDF7] bg-[#ECE8FA] px-3.5 py-1.5 text-[11px] font-bold tracking-[0.08em] text-[#4A4269] sm:text-[11.5px]">
                {/* Pencil / Spark icon */}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                </svg>
                OUR WORK
              </span>
            </motion.div>

            {/* 2. Main Headline ("Real projects. Real people. Real impact.") */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 max-w-[580px] text-[clamp(3.1rem,5.1vw,5.3rem)] font-extrabold leading-[0.93] tracking-[-0.06em] text-[#111111]"
            >
              Real projects.
              <br />
              Real people.
              <br />
              Real{" "}
              <span className="relative inline-block">
                <YellowImpactHighlight />
                <span className="relative z-10">impact.</span>
              </span>
            </motion.h1>

            {/* 3. Subtext Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 max-w-[480px] text-[15px] leading-[1.55] text-[#5D5D58] sm:mb-9 sm:text-[16.5px]"
            >
              A showcase of the products, websites and applications we&apos;ve built
              for businesses, startups and independent founders.
            </motion.p>

            {/* 4. CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3.5"
            >
              {/* Primary CTA: Start a project */}
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#111111] px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 active:scale-95 sm:text-[14px]"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </MagneticButton>

              {/* Secondary CTA: Our services */}
              <MagneticButton>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-3 rounded-full border border-[#DCDCD5] bg-white px-5 py-3 text-[13.5px] font-semibold text-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 active:scale-95 sm:text-[14px]"
                >
                  Our services
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#333333] text-[10px] font-bold text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </MagneticButton>
            </motion.div>

          </div>

          {/* ===================================================================
              RIGHT COLUMN: Graphic Composition
              =================================================================== */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <WorkHeroGraphic />
          </div>

        </div>
      </div>
    </section>
  );
}
