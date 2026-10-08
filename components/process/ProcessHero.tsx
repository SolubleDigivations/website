"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "../common/MagneticButton";

export default function ProcessHero() {
  const scrollToStages = () => {
    const el = document.getElementById("process-stages");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-32 lg:pb-0 lg:pt-0 lg:min-h-[calc(100vh-72px)] flex items-center justify-center">
      <div className="container-soluble">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8 ">
          {/* Left Column: Heading and CTAs */}
          <div className="">
            {/* Eyebrow */}
            <Reveal>
              <span className="inline-flex rounded-full border border-border bg-soluble-blue/25 px-3 py-1 my-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Our Process
              </span>
            </Reveal>

            {/* Main Title */}
            <Reveal delay={0.06}>
              <h1 className="mt-4 text-5xl font-extrabold tracking-[-0.05em] text-[#111111] sm:text-6xl lg:text-[68px] leading-[1.02]">
                Some ideas <br />
                need to dissolve<span className="text-[#FF6B4A]">.</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#555555] sm:text-lg">
                We turn messy problems, ambitious ideas and unclear requirements
                into digital products people can actually use.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3.5 text-xs font-semibold text-white transition-transform duration-300 shadow-md hover:bg-black"
                >
                  Start a project
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-110"
                    />
                  </span>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-5 py-3.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-foreground shadow-sm"
                >
                  See our work
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-xs transition-transform duration-300 group-hover:rotate-[-45deg]">
                    ↓
                  </span>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Transformation Graphic (Scribble -> Arrow -> Glowing Crystal Cube) */}
          <div className="relative flex items-center justify-center py-6">
            <HeroTransformationGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroTransformationGraphic() {
  return (
    <div className="relative w-full max-w-[540px] aspect-[16/11] flex items-center justify-between select-none">
      {/* 1. Left: Tangled Chaos / Scribble Sphere */}
      <div className="relative w-1/2 h-full flex items-center justify-center">
        {/* Handwritten Labels around scribble */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute -top-1 left-8 z-10 lg:-top-24 lg:-left-20 font-caveat text-[15px] sm:text-[17px] font-bold leading-tight text-[#111111] -rotate-6 text-left"
        >
          <span>IDEAS</span>
          <br />
          <span>PROBLEMS</span>
          <br />
          <span className="text-[#333333]">
            OPPORTUNITIES
          </span>
          <br />
          <span className="text-[14px] sm:text-[16px]">WHAT IF ?</span>
        </motion.div>

        {/* Dynamic Tangled Scribble SVG */}
        <div className="absolute -top-32 left-4 w-[180px] sm:w-[220px] aspect-square flex items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            {/* Soft backdrop blur aura for scribble */}
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="url(#scribbleGlow)"
              opacity="0.6"
            />

            <defs>
              <radialGradient id="scribbleGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6C8CFF" stopOpacity="0.2" />
                <stop offset="60%" stopColor="#FF91D4" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Scribble Layer 1 - Blue */}
            <motion.path
              d="M 60 70 C 40 30, 140 20, 150 70 C 160 120, 80 160, 50 120 C 20 80, 110 50, 160 100 C 180 130, 90 170, 70 140 C 50 110, 130 90, 120 60 C 110 30, 40 60, 60 110 C 80 160, 170 140, 140 90"
              stroke="#6C8CFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            {/* Scribble Layer 2 - Pink & Purple */}
            <motion.path
              d="M 80 50 C 130 30, 160 90, 120 140 C 80 190, 30 130, 40 80 C 50 30, 140 40, 170 80 C 200 120, 100 180, 60 150 C 20 120, 80 60, 130 70 C 170 80, 150 150, 90 140 C 30 130, 70 40, 110 50"
              stroke="#FF91D4"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, delay: 0.2, ease: "easeInOut" }}
            />

            {/* Scribble Layer 3 - Yellow & Orange */}
            <motion.path
              d="M 100 40 C 150 60, 170 120, 130 160 C 90 200, 40 150, 50 100 C 60 50, 120 60, 150 110 C 180 160, 90 160, 70 130 C 50 100, 100 70, 130 80 C 160 90, 140 140, 80 120"
              stroke="#FFD65A"
              strokeWidth="1.8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Scribble Layer 4 - Mint & Charcoal */}
            <motion.path
              d="M 70 80 C 50 120, 90 170, 140 140 C 190 110, 140 40, 90 50 C 40 60, 60 140, 110 160 C 160 180, 180 100, 130 70 C 80 40, 40 100, 70 150"
              stroke="#52D9AD"
              strokeWidth="1.6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.4, delay: 0.3, ease: "easeInOut" }}
            />

            {/* Subtle pencil sketch outlines */}
            <motion.path
              d="M 55 95 C 45 60, 85 45, 125 55 C 165 65, 175 115, 145 145 C 115 175, 65 165, 55 125 C 45 85, 95 65, 135 75 C 175 85, 165 135, 125 155"
              stroke="#111111"
              strokeWidth="1.2"
              strokeOpacity="0.45"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.5 }}
            />
          </svg>
        </div>
      </div>

      {/* 2. Middle: Hand-drawn Curved Arrow */}
      <div className="relative flex-shrink-0 w-16 sm:w-20 -mx-3 flex items-center justify-center z-10">
        <svg viewBox="0 0 80 40" fill="none" className="w-full text-[#111111]">
          <motion.path
            d="M 10 22 C 30 12, 50 14, 66 22"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.path
            d="M 56 14 L 68 22 L 58 29"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          />
        </svg>
      </div>

      {/* 3. Right: Radiant 3D Glowing Iridescent Crystal Cube & Notes */}
      <div className="w-1/2 h-auto flex items-center justify-center absolute -bottom-8 right-8">
        {/* Handwritten Labels around Crystal Cube */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute -top-1 right-2 sm:right-6 z-10 font-caveat text-[15px] sm:text-[17px] font-bold leading-tight text-[#111111] rotate-4 text-left"
        >
          <span>SOLUTIONS</span>
          <br />
          <span>PRODUCTS</span>
          <br />
          <span className="text-[13px] sm:text-[15px] text-[#333333]">
            REAL IMPACT
          </span>
        </motion.div>

        {/* Radiating Spark Rays Doodle on Cube */}
        <div className="absolute -top-3 -right-2 pointer-events-none">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            className="text-[#FF7A50]"
          >
            <path
              d="M 17 4 L 17 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 26 8 L 29 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 30 17 L 34 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute -bottom-2 right-4 pointer-events-none">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className="text-[#111111]"
          >
            <path
              d="M 12 18 L 4 26"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 18 20 L 18 28"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 3D Crystal Prism Cube Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[150px] sm:w-[185px] aspect-square flex items-center justify-center"
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, 1.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full h-full"
          >
            {/* Glow backing */}
            <div className="absolute inset-2 rounded-3xl bg-gradient-to-tr from-[#6C8CFF]/40 via-[#FF91D4]/40 to-[#52D9AD]/40 blur-xl opacity-70" />

            {/* Isometric Glass Prism Cube SVG */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full relative z-10 filter drop-shadow-[0_18px_25px_rgba(108,140,255,0.22)]"
            >
              <defs>
                {/* Top face gradient */}
                <linearGradient
                  id="prismTop"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#A8C5FF" stopOpacity="0.85" />
                  <stop offset="85%" stopColor="#879FFF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#6C8CFF" stopOpacity="0.95" />
                </linearGradient>

                {/* Left face gradient */}
                <linearGradient
                  id="prismLeft"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#7B99FF" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#B388FF" stopOpacity="0.85" />
                  <stop offset="75%" stopColor="#FF88C2" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0.95" />
                </linearGradient>

                {/* Right face gradient */}
                <linearGradient
                  id="prismRight"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#62F2C5" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#52D9AD" stopOpacity="0.85" />
                  <stop offset="80%" stopColor="#7CD4FD" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#4A90E2" stopOpacity="0.9" />
                </linearGradient>

                {/* Specular sheen */}
                <linearGradient id="sheen" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Prism Outer Faces with smooth rounded polygon styling */}
              {/* Top Face */}
              <path
                d="M 100 24 C 104 22, 108 22, 112 24 L 168 56 C 173 59, 175 64, 172 68 L 112 102 C 104 106, 96 106, 88 102 L 28 68 C 25 64, 27 59, 32 56 Z"
                fill="url(#prismTop)"
              />

              {/* Left Face */}
              <path
                d="M 28 68 L 88 102 C 94 105, 98 111, 98 118 L 98 172 C 98 177, 93 181, 88 178 L 32 146 C 27 143, 24 138, 24 132 L 24 74 C 24 69, 27 67, 28 68 Z"
                fill="url(#prismLeft)"
              />

              {/* Right Face */}
              <path
                d="M 112 102 L 172 68 C 173 67, 176 69, 176 74 L 176 132 C 176 138, 173 143, 168 146 L 112 178 C 107 181, 102 177, 102 172 L 102 118 C 102 111, 106 105, 112 102 Z"
                fill="url(#prismRight)"
              />

              {/* Highlight Ridge Lines */}
              <path
                d="M 100 26 L 100 104 L 170 66 M 100 104 L 30 66 M 100 104 L 100 174"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.65"
              />

              {/* Specular Glint */}
              <circle cx="100" cy="55" r="4.5" fill="#FFFFFF" opacity="0.8" />
              <path
                d="M 40 62 L 95 93"
                stroke="url(#sheen)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
