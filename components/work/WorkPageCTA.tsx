"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export default function WorkPageCTA() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16 select-none">
      <div className="container-soluble">
        
        {/* Soft Pastel Iridescent Gradient Card */}
        <div className="relative isolate overflow-hidden rounded-[32px] border border-[#E5E0F2] bg-gradient-to-r from-[#D2C5FF]/60 via-[#FFF2D0]/70 to-[#BAF7E4]/60 px-7 py-12 shadow-sm md:px-14 md:py-16">
          
          {/* Subtle Backing Blur */}
          <div className="absolute inset-0 backdrop-blur-2xl -z-10" />

          {/* Decorative Corner Pastel Blobs */}
          <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-[#B18CFF]/50 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[#52D9AD]/50 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            
            {/* Left: Eyebrow + Heading */}
            <div className="space-y-4">
              <Reveal>
                <span className="inline-flex rounded-full border border-black/10 bg-white/80 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#555555] backdrop-blur-xs">
                  Let&apos;s Work Together
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-[#111111] sm:text-5xl lg:text-[54px] leading-[1.05]">
                  Have a project <br />
                  <span className="relative inline-block">
                    in mind?
                    {/* Hand-drawn Yellow Highlight Underline */}
                    <svg
                      viewBox="0 0 200 16"
                      className="absolute -bottom-2 left-0 w-full h-3 overflow-visible pointer-events-none"
                      fill="none"
                    >
                      <motion.path
                        d="M 4 8 C 50 14, 150 4, 196 10"
                        stroke="#FFD65A"
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      />
                    </svg>
                  </span>
                </h2>
              </Reveal>
            </div>

            {/* Right: Subtext + Button + Doodle Arrow */}
            <div className="space-y-6 lg:pl-6">
              <Reveal delay={0.12}>
                <p className="max-w-sm text-base font-medium leading-relaxed text-[#2B2B2B]">
                  Let&apos;s discuss your idea and turn it into a real product.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="relative flex items-center gap-6 pt-1">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#222222] hover:-translate-y-0.5"
                  >
                    <span>Start a conversation</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  {/* Curved Doodle Arrow pointing to button */}
                  <div className="hidden sm:block pointer-events-none text-[#111111]">
                    <svg width="50" height="30" viewBox="0 0 60 35" fill="none">
                      <path
                        d="M 6 22 C 24 8, 38 12, 52 20"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 42 12 L 52 20 L 46 28"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
