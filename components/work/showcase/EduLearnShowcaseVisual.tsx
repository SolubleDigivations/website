"use client";

import { motion } from "motion/react";
import { Play, ArrowRight, BookOpen, Star } from "lucide-react";

export default function EduLearnShowcaseVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[480px] rounded-2xl overflow-hidden bg-[#F8F6F4] flex items-center justify-center p-4 sm:p-7 select-none">
      
      {/* Soft Pink / Purple / Yellow Pastel Background Glows */}
      <div className="absolute top-6 right-6 h-64 w-64 rounded-full bg-[#FF91D4]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-[#B18CFF]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-20 h-48 w-48 rounded-full bg-[#FFD65A]/25 blur-3xl pointer-events-none" />

      {/* Floating Hand-drawn Doodle Arrow */}
      <div className="absolute bottom-12 left-6 sm:left-10 text-[#111111] pointer-events-none z-30">
        <svg width="40" height="40" viewBox="0 0 45 45" fill="none">
          <path
            d="M 6 20 C 18 12, 28 28, 22 36"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M 14 34 L 22 36 L 24 28"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Overlapping Dual Showcase UI Cards */}
      <div className="relative w-full max-w-[480px] h-[340px] sm:h-[370px] flex items-center justify-center">
        
        {/* =========================================================
            CARD 1: EduLearn Hero Landing Interface (Left)
            ========================================================= */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="absolute left-0 sm:left-2 top-2 sm:top-4 z-20 w-[240px] sm:w-[280px] rounded-2xl bg-white p-4 shadow-[0_20px_40px_rgba(140,82,255,0.12)] border border-[#EBE6F5]"
        >
          {/* Logo & Header */}
          <div className="flex items-center gap-1.5 pb-2">
            <div className="h-4 w-4 rounded-full bg-[#8C52FF] flex items-center justify-center text-[8px] font-black text-white">
              E
            </div>
            <span className="font-extrabold text-[10px] sm:text-[11px] text-[#111111] tracking-tight">
              EduLearn
            </span>
          </div>

          {/* Hero Typography */}
          <div className="mt-2 space-y-1.5">
            <h4 className="text-[14px] sm:text-[17px] font-black leading-[1.08] tracking-tight text-[#111111]">
              Learn <span className="text-[#8C52FF]">without</span> <br />
              limits
            </h4>
            <p className="text-[7.5px] sm:text-[8.5px] leading-relaxed text-gray-500">
              Access high-quality courses, learn from experts and build the skills you need for the future.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-3 flex items-center gap-2">
            <button className="rounded-lg bg-[#8C52FF] px-3 py-1.5 text-[8px] sm:text-[9px] font-bold text-white shadow-xs">
              Get started
            </button>
            <button className="flex items-center gap-1 rounded-lg bg-gray-50 px-2.5 py-1.5 text-[8px] sm:text-[9px] font-semibold text-gray-700 border border-gray-100">
              <Play className="h-2 w-2 fill-current text-[#8C52FF]" />
              <span>Watch demo</span>
            </button>
          </div>

          {/* Stats Row */}
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-gray-100 pt-2.5">
            <div>
              <div className="text-[10px] sm:text-[11px] font-black text-[#111111]">10K+</div>
              <div className="text-[6px] sm:text-[7px] text-gray-400">Students</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] font-black text-[#111111]">500+</div>
              <div className="text-[6px] sm:text-[7px] text-gray-400">Courses</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] font-black text-[#111111] flex items-center">
                4.8 <Star className="h-2 w-2 fill-[#FFD65A] text-[#FFD65A] ml-0.5" />
              </div>
              <div className="text-[6px] sm:text-[7px] text-gray-400">Rating</div>
            </div>
          </div>
        </motion.div>


        {/* =========================================================
            CARD 2: Courses Catalog Showcase (Right Overlapping)
            ========================================================= */}
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="absolute right-0 sm:right-2 top-8 sm:top-10 z-10 w-[220px] sm:w-[250px] rounded-2xl bg-white p-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100"
        >
          {/* Header */}
          <div className="text-[11px] sm:text-[12px] font-black text-[#111111] tracking-tight">
            Explore <br />
            Our Courses
          </div>

          {/* Filter Pills */}
          <div className="mt-2.5 flex items-center gap-1 overflow-hidden">
            <span className="rounded-full bg-[#8C52FF] px-2 py-0.5 text-[6.5px] font-bold text-white">
              All
            </span>
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[6.5px] font-medium text-gray-600">
              Development
            </span>
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[6.5px] font-medium text-gray-600">
              Design
            </span>
          </div>

          {/* Featured Course Card */}
          <div className="mt-3 rounded-xl bg-gradient-to-br from-[#FAF8FF] to-[#F1ECFF] p-2.5 border border-[#E4D9FF] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-[#FF8C68] to-[#FFD65A] flex items-center justify-center text-white shadow-xs">
                <BookOpen className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[8.5px] sm:text-[9.5px] font-bold text-[#111111]">
                  Web Development
                </div>
                <div className="text-[6.5px] text-gray-500">
                  Build modern web applications
                </div>
                <div className="mt-1 flex items-center gap-1 text-[6.5px] text-[#8C52FF] font-semibold">
                  <span>★ 4.9 (1.2k reviews)</span>
                </div>
              </div>
            </div>

            {/* Next Arrow Circle */}
            <div className="h-6 w-6 rounded-full bg-[#111111] text-white flex items-center justify-center text-[8px] shadow-xs">
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>

          {/* Secondary Course Sneak Peek */}
          <div className="mt-2 rounded-xl bg-gray-50 p-2 border border-gray-100 flex items-center justify-between opacity-80">
            <div className="text-[7.5px] font-semibold text-gray-600">
              UI/UX Design Masterclass
            </div>
            <span className="text-[7px] text-[#8C52FF] font-bold">New</span>
          </div>

        </motion.div>

      </div>

    </div>
  );
}
