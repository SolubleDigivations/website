"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import UnderstandGraphic from "./stages/UnderstandGraphic";
import ShapeGraphic from "./stages/ShapeGraphic";
import DesignGraphic from "./stages/DesignGraphic";
import BuildGraphic from "./stages/BuildGraphic";
import ReleaseGraphic from "./stages/ReleaseGraphic";

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the continuous connecting line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative py-12 md:py-20 overflow-hidden">
      
      {/* 
        Continuous Winding Line across all 5 Stages (Desktop SVG connector)
      */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        <svg
          viewBox="0 0 1000 2400"
          className="w-full h-full"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Subtle Background Ghost Path */}
          <path
            d="M 460 120 C 603.316 213.339 473.473 435.106 453.42 595.122 C 433.367 755.138 430 920 480 1080 C 530 1240 560 1400 480 1560 C 400 1720 450 1880 500 2040 C 530 2160 500 2280 500 2400"
            stroke="#111111"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.12"
          />

          {/* Active Animated Connecting Path on Scroll */}
          <motion.path
            d="M 460 120 C 603.316 213.339 473.473 435.106 453.42 595.122 C 433.367 755.138 430 920 480 1080 C 530 1240 560 1400 480 1560 C 400 1720 450 1880 500 2040 C 530 2160 500 2280 500 2400"
            stroke="#111111"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength: pathProgress }}
          />

          {/* Connected Waypoint Circles along the path */}
          <circle cx="460" cy="120" r="5" fill="#FF91D4" />
          <circle cx="540" cy="600" r="5" fill="#6C8CFF" />
          <circle cx="480" cy="1080" r="5" fill="#FFD65A" />
          <circle cx="480" cy="1560" r="5" fill="#52D9AD" />
          <circle cx="500" cy="2040" r="5" fill="#FF7A50" />
        </svg>
      </div>

      <div className="container-soluble relative z-10 space-y-24 md:space-y-36">
        
        {/* =========================================================
            STAGE 01: UNDERSTAND (Text Left / Graphic Right)
            ========================================================= */}
        <div id="stage-understand" className="scroll-mt-32">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Info */}
            <div className="space-y-5">
              <Reveal>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-[#888888] uppercase tracking-widest">
                    01
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="flex items-center gap-2.5">
                  <span className="text-xl text-[#FF91D4] font-bold">↑</span>
                  <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-5xl">
                    Understand<span className="text-[#FF91D4]">.</span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <h3 className="text-lg font-bold leading-snug text-[#222222] sm:text-xl">
                  We start by understanding the real problem — not just the initial idea.
                </h3>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="max-w-xl text-sm leading-relaxed text-[#666666] sm:text-base">
                  Through conversations, research and exploration, we uncover user needs, business goals and the bigger opportunity.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Discovery Workshops", "User Research", "Problem Framing", "Goal Alignment"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-[#E5E5E0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#444444] shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Graphic */}
            <div className="flex justify-center lg:justify-end">
              <UnderstandGraphic />
            </div>
          </div>
        </div>


        {/* =========================================================
            STAGE 02: SHAPE (Graphic Left / Text Right)
            ========================================================= */}
        <div id="stage-shape" className="scroll-mt-32">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Graphic */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <ShapeGraphic />
            </div>

            {/* Right Info */}
            <div className="order-1 lg:order-2 space-y-5">
              <Reveal>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-[#888888] uppercase tracking-widest">
                    02
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="flex items-center gap-2.5">
                  <span className="text-xl text-[#6C8CFF] font-bold">↕</span>
                  <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-5xl">
                    Shape<span className="text-[#6C8CFF]">.</span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <h3 className="text-lg font-bold leading-snug text-[#222222] sm:text-xl">
                  We turn insights into a clear strategy, product direction and roadmap.
                </h3>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="max-w-xl text-sm leading-relaxed text-[#666666] sm:text-base">
                  We define the product vision, key features, technical approach and a step-by-step plan tailored to your business.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Strategy", "Roadmap", "User Personas", "Feature Planning"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-[#E5E5E0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#444444] shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>


        {/* =========================================================
            STAGE 03: DESIGN (Text Left / Graphic Right)
            ========================================================= */}
        <div id="stage-design" className="scroll-mt-32">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Info */}
            <div className="space-y-5">
              <Reveal>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-[#888888] uppercase tracking-widest">
                    03
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="flex items-center gap-2.5">
                  <span className="h-3 w-3 rounded-full bg-[#FFD65A]" />
                  <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-5xl">
                    Design<span className="text-[#FFD65A]">.</span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <h3 className="text-lg font-bold leading-snug text-[#222222] sm:text-xl">
                  We create intuitive, modern and engaging experiences that solve real user problems.
                </h3>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="max-w-xl text-sm leading-relaxed text-[#666666] sm:text-base">
                  Our design process focuses on clarity, usability and aesthetics, turning ideas into pixel-perfect interfaces.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Information Architecture", "UI/UX Design", "Prototyping", "Design Systems"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-[#E5E5E0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#444444] shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Graphic */}
            <div className="flex justify-center lg:justify-end">
              <DesignGraphic />
            </div>
          </div>
        </div>


        {/* =========================================================
            STAGE 04: BUILD (Graphic Left / Text Right)
            ========================================================= */}
        <div id="stage-build" className="scroll-mt-32">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Graphic */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <BuildGraphic />
            </div>

            {/* Right Info */}
            <div className="order-1 lg:order-2 space-y-5">
              <Reveal>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-[#888888] uppercase tracking-widest">
                    04
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="flex items-center gap-2.5">
                  <span className="h-3 w-3 rounded-full bg-[#52D9AD]" />
                  <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-5xl">
                    Build<span className="text-[#52D9AD]">.</span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <h3 className="text-lg font-bold leading-snug text-[#222222] sm:text-xl">
                  We build scalable, high-performance solutions using modern technologies.
                </h3>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="max-w-xl text-sm leading-relaxed text-[#666666] sm:text-base">
                  Clean, maintainable code, regular updates and rigorous testing ensure a reliable and future-ready product.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Development", "Testing", "Integrations", "Performance"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-[#E5E5E0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#444444] shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>


        {/* =========================================================
            STAGE 05: RELEASE (Text Left / Graphic Right)
            ========================================================= */}
        <div id="stage-release" className="scroll-mt-32">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Info */}
            <div className="space-y-5">
              <Reveal>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-[#888888] uppercase tracking-widest">
                    05
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="flex items-center gap-2.5">
                  <span className="h-3 w-3 rounded-full bg-[#FF7A50]" />
                  <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-5xl">
                    Release<span className="text-[#FF7A50]">.</span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <h3 className="text-lg font-bold leading-snug text-[#222222] sm:text-xl">
                  We deploy, optimize and support your product — so it keeps growing.
                </h3>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="max-w-xl text-sm leading-relaxed text-[#666666] sm:text-base">
                  From launch to long-term iteration, we monitor performance, gather feedback and continuously improve.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Deployment", "Monitoring", "Feedback", "Iteration"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-[#E5E5E0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#444444] shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Graphic */}
            <div className="flex justify-center lg:justify-end">
              <ReleaseGraphic />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
