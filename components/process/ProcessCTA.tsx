"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeftRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export default function ProcessCTA() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16">
      <div className="container-soluble">
        
        {/* Dark Rounded Container */}
        <div className="relative isolate overflow-hidden rounded-[32px] bg-[#111111] px-7 py-12 text-white shadow-2xl md:px-14 md:py-16">
          
          {/* Subtle Background Glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#6C8CFF]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-[#FF7A50]/15 blur-3xl pointer-events-none" />

          {/* Eyebrow */}
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#888888]">
                Have a project?
              </span>
              <div className="h-px w-16 bg-white/20" />
            </div>
          </Reveal>

          {/* Main Grid Content */}
          <div className="relative z-10 mt-6 grid items-center gap-10 lg:grid-cols-[1.3fr_0.4fr_1.3fr] lg:gap-6">
            
            {/* Left: Heading */}
            <div>
              <Reveal delay={0.06}>
                <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-5xl lg:text-[54px] leading-[1.05]">
                  Let&apos;s turn your idea <br />
                  into something real<span className="text-[#52D9AD]">.</span>
                </h2>
              </Reveal>
            </div>

            {/* Middle: Purple Hand-drawn Squiggle Doodle */}
            <div className="hidden lg:flex items-center justify-center">
              <motion.svg
                viewBox="0 0 120 70"
                className="w-24 text-[#B18CFF] overflow-visible"
                fill="none"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <path
                  d="M 10 45 C 30 15, 45 60, 65 30 C 85 10, 95 55, 110 35"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </motion.svg>
            </div>

            {/* Right: Paragraph & Action Buttons */}
            <div className="space-y-6 lg:pl-4">
              <Reveal delay={0.12}>
                <p className="max-w-md text-sm leading-relaxed text-[#AAAAAA] sm:text-base">
                  Whether you have a clear plan or just a rough idea, we&apos;ll help you figure out the best way forward.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="flex flex-wrap items-center gap-5 pt-1">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#111111] transition-all duration-300 hover:bg-[#EEEEEE] hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span>Let&apos;s talk</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <Link
                    href="/work"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-white"
                  >
                    <span>See our work</span>
                    <ArrowLeftRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110 text-white/70" />
                  </Link>
                </div>
              </Reveal>
            </div>

          </div>

          {/* Bottom Right Decorative Hand-Drawn Orange Arcs & Yellow Sparks */}
          <div className="absolute -bottom-6 -right-6 pointer-events-none z-0">
            <svg width="220" height="150" viewBox="0 0 220 150" fill="none" className="overflow-visible">
              {/* Orange curved concentric arcs */}
              <path
                d="M 60 150 C 60 80, 140 60, 220 70"
                stroke="#FF7A50"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M 90 150 C 90 100, 160 85, 220 95"
                stroke="#FF7A50"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M 120 150 C 120 120, 180 110, 220 120"
                stroke="#FF7A50"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* Yellow Crown / Spark Rays */}
              <path
                d="M 20 60 L 30 40 L 40 60"
                stroke="#FFD65A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 50 45 L 60 25 L 70 45"
                stroke="#FFD65A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
