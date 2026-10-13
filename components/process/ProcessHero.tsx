"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Lightbulb,
  Code2,
  SlidersHorizontal,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import Spark from "../graphics/Spark";
import RotatingCube from "../graphics/RotatingCube";
import MagneticButton from "../common/MagneticButton";

export default function ProcessHero() {
  const scrollToStages = () => {
    const el = document.getElementById("process-stages");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 lg:min-h-[calc(100vh-80px)] flex items-center bg-[#F8F8F5]">
      <div className="container-soluble">
        <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-4">
          {/* =========================================================
              LEFT COLUMN: Eyebrow, Main Title, Description & Action Buttons
              ========================================================= */}
          <div className="relative z-10 max-w-xl">
            {/* Eyebrow badge */}
            <span className="inline-flex rounded-full bg-[#EDE9FE] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#6D28D9]">
              Our Process
            </span>

            {/* Main Title */}
            <h1 className="mt-5 text-4xl font-black tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[68px] leading-[0.94]">
              Some ideas
              <br />
              need to
              <br />
              <span className="relative inline-block mt-0.5">
                <span className="relative z-20">dissolve</span>
                <span className="text-[#FF4A22] font-black relative z-20">
                  .
                </span>
                {/* Yellow hand-drawn oval doodle loop encircling dissolve. */}
                <svg
                  viewBox="0 0 310 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -inset-x-5 -inset-y-3.5 w-[calc(100%+2.5rem)] h-[calc(100%+1.75rem)] pointer-events-none z-0"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M28 48 C16 22, 80 8, 168 7 C255 6, 305 20, 302 46 C298 74, 228 88, 130 88 C48 88, 6 70, 12 44 C16 26, 60 14, 124 12"
                    stroke="#FFD65A"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 1.1,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-md text-sm leading-relaxed text-[#555555] sm:text-base">
              We turn messy problems, ambitious ideas and unclear requirements
              into digital products people can actually use.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs sm:text-sm font-bold text-background transition-transform hover:-translate-y-0.5 shadow-sm"
                >
                  Start a project
                  <ArrowUpRight size={15} />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <button
                  type="button"
                  onClick={scrollToStages}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs sm:text-sm font-bold text-foreground transition-all hover:border-foreground/40 hover:-translate-y-0.5 shadow-xs cursor-pointer"
                >
                  See our process
                  <span className="bg-black p-2 rounded-full text-white">
                    <ArrowDown size={18} className="-rotate-135" />
                  </span>
                </button>
              </MagneticButton>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: 3-Stage Transformation Journey Graphic
              ========================================================= */}
          <div className="relative flex items-center justify-center">
            <HeroTransformationGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroTransformationGraphic() {
  const comicDelay = 4.8;

  return (
    <div className="relative w-full max-w-[680px] h-[520px] select-none mx-auto">
      {/* =========================================================
          STAGE 1: Tangled Chaos / Scribble Problem (Top-Left)
          ========================================================= */}
      <div className="absolute left-[4%] sm:left-[8%] lg:left-[-8%] top-[2%] w-[220px] sm:w-[250px] z-10">
        {/* Ray burst ticks above blobs on top left */}
        <motion.div
          initial={{ y: 20, x: 10, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: comicDelay }}
          className="absolute -top-7 -left-2 z-20"
        >
          <svg
            viewBox="0 0 30 35"
            className="w-18 h-9 -rotate-20 text-foreground"
            fill="none"
          >
            <path
              d="M 5.314 28.115 L -0.401 9.829 M 18 25 L 18 4 M 29.086 29.943 L 38.001 9.6"
              stroke="#111111"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Organic colorful pastel blobs */}
        <div className="relative h-[160px] sm:h-[180px] w-full">
          {/* Yellow blob (left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="absolute left-0 top-6 h-32 w-32 sm:h-36 sm:w-36 rounded-[48%_52%_42%_58%] bg-linear-to-br from-background to-40% to-soluble-yellow"
          />
          {/* Pink blob (center/top) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="absolute left-10 top-0 h-30 w-30 sm:h-34 sm:w-34 rounded-[52%_48%_60%_40%] bg-linear-to-br from-background to-40% to-soluble-pink"
          />
          {/* Blue blob (right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.45 }}
            className="absolute left-28 top-6 h-28 w-28 sm:h-32 sm:w-32 rounded-[45%_55%_50%_50%] bg-linear-to-br from-background to-40% to-soluble-blue"
          />
          {/* Floating small blue pill bottom-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.6 }}
            className="absolute -left-4 top-44 h-9 w-12 -rotate-12 rounded-[50%]"
            style={{ backgroundColor: "#6C8CFF" }}
          />

          {/* Tangled continuous black scribble ball in center of blobs */}
          <div className="absolute -top-4 inset-0 flex items-center justify-center z-10 pointer-events-none pl-6 pt-6">
            <svg
              viewBox="25 15 120 120"
              className="w-36 sm:w-40 lg:w-44 h-auto text-[#111111]"
              fill="none"
            >
              <motion.path
                d="M 68.939 87.758 C 48.939 57.758 70 20 95 35 C 120 50 119.806 64.021 94.806 84.021 C 69.806 104.021 45 120 35 90 C 25 60 60 40 100 45 C 140 50 149.604 91.711 119.604 111.711 C 89.604 131.711 31.779 130.65 41.779 100.65 C 51.779 70.65 95.202 37.302 110.202 72.302 C 125.202 107.302 102.564 107.571 72.564 97.571 C 42.564 87.571 45.66 64.572 71.121 63.55 C 96.582 62.528 92.133 68.184 86.652 74.813 C 81.171 81.442 55 120 45 95 C 35 70 60.859 61.772 90.859 71.772 C 120.859 81.772 125 105.134 90 110.134 C 55 115.134 58.416 96.248 78.416 71.248 C 98.416 46.248 136.627 63.047 127.302 87.302 C 117.977 111.557 115.583 102.048 85.583 82.048 C 55.583 62.048 50 50 90 40 C 130 30 133.423 68.49 108.423 98.49 C 83.423 128.49 60 115 45 85 C 30 55 64.544 46.51 99.544 61.51 C 134.544 76.51 130 115 85 125 C 40 135 46.51 89.275 81.51 64.275 C 116.51 39.275 113.643 81.692 99.806 92.175 C 85.969 102.658 24.349 106.45 29.349 71.45"
                stroke="#111111"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2.6,
                  delay: 0.85,
                  opacity: { duration: 0.4, delay: 0.85 },
                }}
              />
            </svg>
          </div>
        </div>

        {/* Handwritten text note to the right of scribble */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.85 }}
          className="absolute left-[215px] sm:left-[220px] -top-16 z-20 -rotate-14 font-caveat text-sm sm:text-base font-bold uppercase tracking-wider text-foreground whitespace-nowrap"
        >
          IDEAS
          <br />
          PROBLEMS
          <br />
          OPPORTUNITIES
          <br />
          WHAT IF ?
        </motion.div>

        {/* Doodle curved arrow pointing from text to scribble */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="absolute left-[205px] sm:left-[170px] -top-5 z-20"
        >
          <svg
            viewBox="0 0 45 30"
            className="w-9 h-6 text-foreground"
            fill="none"
          >
            <path
              d="M38 6 C28 4, 12 10, 6 20"
              stroke="#111111"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M14 22 L6 20 L8 12"
              stroke="#111111"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Hand-drawn long curved connector from Scribble to Soluble Lab Card */}
      <div className="absolute left-[26%] sm:left-[15%] top-[20%] w-[120px] sm:w-[160px] z-10 pointer-events-none">
        <svg
          viewBox="-90 0 170 220"
          className="w-full h-auto text-foreground"
          fill="none"
        >
          <motion.path
            d="M 20 10 C 115.607 15.622 44.288 57.734 -11.807 96.349 C -70.05 136.442 -109.065 210.076 -10.599 210.435"
            stroke="#111111"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.9 }}
          />
          <motion.path
            d="M -22.208 217.639 C -22.208 217.639 -10.02 210.39 -10.02 210.39 L -20.763 203.072"
            stroke="#111111"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.8 }}
          />
        </svg>
      </div>

      {/* =========================================================
          STAGE 2: Soluble Lab Card (Center / Mid-Right)
          ========================================================= */}
      <div className="absolute left-[33%] sm:left-[36%] lg:left-[30%] top-[38%] sm:top-[36%] w-[225px] sm:w-[260px] z-20">
        {/* Purple card tab peeking from behind on top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 2.3 }}
          className="absolute -top-4 -right-4 h-24 w-28 sm:h-28 sm:w-32 -rotate-6 rounded-2xl sm:rounded-3xl -z-10 shadow-xs"
          style={{ backgroundColor: "#C4B5FD" }}
        />

        {/* Doodle ray burst on the left of the card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: comicDelay + 0.25 }}
          className="absolute left-[-30%] bottom-[-50%] -translate-y-1/2 z-20 -rotate-25"
        >
          <svg
            viewBox="-10 -10 60 50"
            className="w-20 h-20 text-foreground"
            fill="none"
          >
            <path
              d="M 29.658 2.672 L 2.342 -4.304 M 24.669 17.667 L -2.986 18 M 30.323 30.666 L 3.341 41.968"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Main Soluble Lab Card */}
        <motion.div
          initial={{ opacity: 0, y: 15, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.7, delay: 2.35 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-white p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-xs hover:scale-105 hover:rotate-3 transition-all duration-150"
        >
          {/* Top window dots & Soluble lab header */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
            <span className="h-2 w-2 rounded-full bg-[#FFD65A]" />
            <span className="h-2 w-2 rounded-full bg-[#52D9AD]" />
          </div>

          <div className="flex items-center gap-1.5 mb-3">
            {/* Soluble Logo Icon */}
            <span className="flex h-8 w-8 items-center justify-center">
              <Image
                src="/assets/images/logo/logo-6.png"
                alt="Soluble"
                width={20}
                height={20}
                className="size-8 aspect-square"
              />
            </span>
            <span className="text-xs sm:text-sm lg:text-lg font-extrabold tracking-tight text-foreground">
              Soluble
            </span>
          </div>

          {/* Row 1: 3 colorful tool cards */}
          <div className="grid grid-cols-3 gap-2 mb-2.5">
            {/* Lightbulb (Pink) */}
            <div className="flex h-10 sm:h-11 items-center justify-center rounded-xl bg-[#FCE7F3] text-[#DB2777]">
              <Lightbulb size={18} />
            </div>

            {/* Code (Blue) */}
            <div className="flex h-10 sm:h-11 items-center justify-center rounded-xl bg-[#E0E7FF] text-[#4F46E5]">
              <Code2 size={18} />
            </div>

            {/* Sliders / Design (Yellow) */}
            <div className="flex h-10 sm:h-11 items-center justify-center rounded-xl bg-[#FEF3C7] text-[#D97706]">
              <SlidersHorizontal size={17} />
            </div>
          </div>

          {/* Row 2: Wireframe Placeholder Bars & Analytics Chart */}
          <div className="flex items-center justify-between gap-2 pt-1">
            {/* Left wireframe bars */}
            <div className="flex flex-col gap-1.5 flex-1 pl-1 animate-pulse">
              <div className="h-1.5 w-16 sm:w-20 rounded-full bg-[#ECECE8]" />
              <div className="h-1.5 w-10 sm:w-12 rounded-full bg-[#ECECE8]/70" />
            </div>

            {/* Right Bar Chart (Mint) */}
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-[#D1FAE5] text-[#059669]">
              <BarChart3 size={17} />
            </div>
          </div>
        </motion.div>

        {/* Handwritten text note next to Soluble Lab (placed to the right of card) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 2.35 }}
          className="absolute -top-10 -right-20 sm:-right-24 z-20 rotate-6 font-caveat text-sm sm:text-base font-bold uppercase leading-tight tracking-wider text-foreground whitespace-nowrap"
        >
          STRATEGY
          <br />
          DESIGN
          <br />
          DEVELOP
          <br />
          REFINE
        </motion.div>

        {/* Doodle curved arrow pointing from text to card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 2.25 }}
          className="absolute -top-2 -right-8 z-20"
        >
          <svg
            viewBox="0 0 35 30"
            className="w-7 h-6 text-foreground"
            fill="none"
          >
            <path
              d="M28 4 C20 10, 12 14, 6 22"
              stroke="#111111"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M12 24 L6 22 L7 15"
              stroke="#111111"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Hand-drawn curved connector from Soluble Lab Card to 3D Cube */}
      <div className="absolute right-[22%] sm:right-[6%] bottom-[16%] sm:bottom-[16%] w-[90px] sm:w-[250px] z-50 pointer-events-none">
        <svg
          viewBox="0 -80 200 170"
          className="w-full h-auto text-foreground"
          fill="none"
        >
          <motion.path
            d="M 68.355 -69.062 C 335.541 -57.78 29.385 -25.688 172.807 61.353"
            stroke="#111111"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 3.2,
              opacity: { duration: 0.4, delay: 3.2 },
            }}
          />
          <motion.path
            d="M 161.71 61.044 L 173.853 62.103 L 169.313 51.625"
            stroke="#111111"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 4.05 }}
          />
        </svg>
      </div>

      {/* =========================================================
          STAGE 3: Structured 3D Geometric Prism Cube (Bottom-Right)
          ========================================================= */}
      <div className="absolute right-[0%] sm:right-[2%] lg:right-[-10%] bottom-[0%] sm:bottom-[2%] lg:bottom-[-6%] w-[150px] sm:w-[185px] z-10">
        {/* Magenta 4-point doodle star / sparkle on upper left of cube */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: comicDelay }}
          className="absolute -top-6 right-0 z-20"
        >
          <Spark />
        </motion.div>

        {/* 2 little doodle ticks on upper left of cube */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: comicDelay + 0.1 }}
          className="absolute top-2 -left-3 z-20"
        >
          <svg
            viewBox="0 0 20 20"
            className="w-4 h-4 text-foreground"
            fill="none"
          >
            <path
              d="M4 14 L8 6 M12 16 L16 8"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Floating pastel ellipses / pills around cube */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: comicDelay + 0.15 }}
          className="absolute -left-9 top-12 h-6 w-11 -rotate-12 rounded-full"
          style={{ backgroundColor: "#FFD65A" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: comicDelay + 0.25 }}
          className="absolute -left-4 bottom-1 h-7 w-12 -rotate-20 rounded-full"
          style={{ backgroundColor: "#FF80BF" }}
        />

        {/* 3 doodle ray ticks under bottom right of cube */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: comicDelay + 0.3 }}
          className="absolute bottom-[-15%] right-[-30%] z-20 -rotate-10"
        >
          <svg
            viewBox="-10 -10 70 30"
            className="w-20 h-20 text-foreground"
            fill="none"
          >
            <path
              d="M 5.181 0.328 L 11.448 22 M 20.495 -3.971 L 34.116 13.138 M 30.395 -16.794 L 49.549 -5.9"
              stroke="#111111"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Isometric 3D Solid Cube SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 3.75 }}
          className="aspect-square drop-shadow-[0_18px_30px_rgba(79,117,255,0.18)] flex items-center justify-center"
        >
          <RotatingCube />
        </motion.div>

        {/* Handwritten text note above Cube */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 3.75 }}
          className="absolute bottom-0 left-2 sm:left-[-65%] z-20 -rotate-10 font-caveat text-sm sm:text-base font-bold uppercase leading-tight tracking-wider text-foreground whitespace-nowrap"
        >
          SOLUTIONS
          <br />
          PRODUCTS
          <br />
          REAL IMPACT
        </motion.div>

        {/* Doodle curved arrow pointing to cube */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 3.65 }}
          className="absolute bottom-10 left-[-25%] z-20"
        >
          <svg
            viewBox="0 0 25 30"
            className="w-12 h-10 text-foreground"
            fill="none"
          >
            <path
              d="M 28.712 6.233 C 16.569 5.137 10.642 12.443 5.362 22.638"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 24.163 9.417 L 29.268 6.166 L 23.938 3.061"
              stroke="#111111"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
