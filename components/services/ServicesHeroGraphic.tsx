"use client";

import React from "react";
import { motion } from "motion/react";

export default function ServicesHeroGraphic() {
  return (
    <div className="relative mx-auto flex w-full max-w-[580px] items-center justify-center p-4 sm:p-6 lg:max-w-[640px] select-none">
      {/* Outer container preserving aspect ratio and dynamic perspective */}
      <div className="relative aspect-[1.12/1] w-full">
        
        {/* ======================================================== */}
        {/* 1. BACKGROUND ORGANIC SHAPES & DOODLES */}
        {/* ======================================================== */}

        {/* Top-Left Mint / Cyan Green Blob */}
        <motion.div
          animate={{
            y: [0, -5, 0],
            rotate: [-12, -8, -12],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-15%] top-[-10%] h-[15%] w-[20%] rounded-[52%_48%_60%_40%] bg-linear-to-br from-[#38EF7D] to-[#11998E] opacity-90 blur-[0.3px]"
          style={{ transformOrigin: "center" }}
        />

        {/* Top Periwinkle Rounded Card with Globe Icon */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [-6, -4, -6],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[22%] top-[-4%] z-10 flex h-[22%] w-[21%] items-center justify-center rounded-[24px] bg-[#9BB7FF] shadow-[0_12px_30px_rgba(108,140,255,0.25)]"
        >
          {/* Hand-drawn Globe SVG */}
          <svg
            viewBox="0 0 64 64"
            className="h-[62%] w-[62%] stroke-[#111111]"
            fill="none"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Outer Circle */}
            <circle cx="32" cy="32" r="24" />
            {/* Horizontal Equator Line */}
            <line x1="8" y1="32" x2="56" y2="32" />
            {/* Upper Latitudinal Arc */}
            <path d="M 12 20 Q 32 28 52 20" />
            {/* Lower Latitudinal Arc */}
            <path d="M 12 44 Q 32 36 52 44" />
            {/* Vertical Center Meridian */}
            <line x1="32" y1="8" x2="32" y2="56" />
            {/* Left Longitudinal Ellipse */}
            <path d="M 32 8 C 18 16 18 48 32 56" />
            {/* Right Longitudinal Ellipse */}
            <path d="M 32 8 C 46 16 46 48 32 56" />
          </svg>
        </motion.div>

        {/* Top-Right Black Sparkle / Burst Doodles */}
        {/* <motion.svg
          viewBox="0 0 80 80"
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[52%] top-[6%] z-10 h-[14%] w-[14%] stroke-[#111111]"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
        >
           4 radiating hand-drawn sketch lines 
          <path d="M 32 48 L 22 62" />
          <path d="M 46 46 L 50 24" />
          <path d="M 52 50 L 72 40" />
          <path d="M 38 48 L 34 32" />
        </motion.svg> */}

        {/* Top-Right Royal Blue Elongated Pill */}
        <motion.div
          animate={{
            y: [0, 6, 0],
            rotate: [-20, -17, -20],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[17%] rotate-45 top-[-4%] h-[52%] w-[22%] rounded-[55px] bg-linear-to-b from-[#4A72FF] to-[#2B54E8] shadow-[0_15px_35px_rgba(43,84,232,0.22)]"
        >
        </motion.div>

        {/* Right Warm Golden Yellow Blob */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [8, 12, 8],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[2%] top-[33%] h-[38%] w-[22%] rounded-[55%_45%_58%_42%] bg-gradient-to-br from-[#FFE17D] to-[#FBBF24] opacity-95 blur-[0.2px]"
        />

        {/* Right Hand-Drawn Curly Swirl Spiral Doodle */}
        <motion.svg
          viewBox="0 0 100 80"
          animate={{
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[7%] top-[50%] z-20 h-[14%] w-[18%] stroke-[#111111]"
          fill="none"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 5 45 C 30 15, 60 70, 75 42 C 85 24, 75 10, 60 20 C 50 30, 65 55, 85 45 C 95 40, 100 35, 105 38" />
        </motion.svg>

        {/* Bottom-Right Lavender / Lilac Organic Shape */}
        <motion.div
          animate={{
            y: [0, 5, 0],
            rotate: [-4, 2, -4],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[0%] right-[0%] h-[27%] w-[25%] rounded-[52%_48%_45%_55%] bg-linear-to-tr from-[#C084FC] to-[#D8B4FE] shadow-[0_12px_28px_rgba(192,132,252,0.25)]"
        />

        {/* Bottom-Left Pink / Magenta Soft Organic Blob */}
        <motion.div
          animate={{
            y: [0, -5, 0],
            rotate: [-8, -4, -8],
          }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[8%] left-[-10%] h-[32%] w-[40%] rounded-[60%_40%_52%_48%] bg-linear-to-br from-[#FF7EB3] to-[#FF758C] opacity-90 blur-[0.3px]"
        />

        {/* Bottom-Left Solid Black Triangle Doodle */}
        {/* <motion.div
          animate={{
            rotate: [-15, -8, -15],
            y: [0, 3, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] left-[5%] z-20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#111111">
            <polygon points="4,2 22,12 8,22" />
          </svg>
        </motion.div> */}


        {/* ======================================================== */}
        {/* 2. THE MAIN BROWSER / IDE WINDOW (CENTERPIECE) */}
        {/* ======================================================== */}

        {/* Stacked Shadow Card behind the browser for authentic 3D depth */}
        <div
          className="absolute left-[19%] top-[25%] h-[64%] w-[58%] rounded-[26px] bg-[#E2E8F0]/70 border border-white/60 shadow-[0_25px_50px_rgba(0,0,0,0.06)]"
          style={{
            transform: "rotate(-4deg) translate(8px, 8px)",
          }}
        />

        {/* Main Floating Code Editor Window */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[14%] top-[20%] z-20 flex h-[64%] w-[59%] flex-col rounded-[26px] border border-white bg-white/95 p-3.5 shadow-[0_28px_65px_-10px_rgba(15,23,42,0.18),0_10px_25px_-5px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-4"
          style={{
            transform: "rotate(-6deg)",
          }}
        >
          {/* Top Window Bar */}
          <div className="mb-2.5 flex items-center justify-between px-1">
            {/* 3 macOS Traffic Light Dots */}
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] shadow-sm" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] shadow-sm" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] shadow-sm" />
            </div>

            {/* Middle Window Icon Pill */}
            <div className="flex h-5 w-6 items-center justify-center rounded-md bg-[#F1F5F9] border border-[#E2E8F0] shadow-inner">
              <div className="h-2.5 w-2.5 rounded-[2px] bg-[#334155]" />
            </div>

            {/* Right Search Bar Pill */}
            <div className="flex h-5 w-24 sm:w-28 items-center gap-1.5 rounded-full bg-[#EEF2FF] px-2 border border-[#E0E7FF]">
              <div className="h-2 w-2 rounded-full border border-[#818CF8]" />
              <div className="h-1.5 w-8 rounded-full bg-[#C7D2FE]" />
            </div>
          </div>

          {/* Dark Slate Code Editor Pane */}
          <div className="relative flex flex-1 overflow-hidden rounded-[16px] bg-[#1E293B] shadow-inner">
            
            {/* Editor Top Right subtle label */}
            <div className="absolute right-2.5 top-2 z-10 flex items-center gap-1 text-[8px] font-semibold text-slate-400 opacity-60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
              <span>Dev.ts</span>
            </div>

            {/* Left Sidebar Rail */}
            <div className="flex w-9 flex-col items-center justify-between border-r border-[#334155]/60 bg-[#172033] py-2.5 text-[#94A3B8]">
              <div className="flex flex-col items-center gap-2.5">
                {/* Home / Explorer */}
                <svg className="h-3 w-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
                {/* Files */}
                <svg className="h-3 w-3 stroke-current opacity-70" fill="none" viewBox="0 0 24 24" strokeWidth="2.2">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                {/* Search */}
                <svg className="h-3 w-3 stroke-current opacity-70" fill="none" viewBox="0 0 24 24" strokeWidth="2.2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                {/* Git / Branch */}
                <svg className="h-3 w-3 stroke-current opacity-70" fill="none" viewBox="0 0 24 24" strokeWidth="2.2">
                  <line x1="6" y1="3" x2="6" y2="15" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
                {/* Database */}
                <svg className="h-3 w-3 stroke-current opacity-70" fill="none" viewBox="0 0 24 24" strokeWidth="2.2">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </div>

              {/* Bottom Bracket */}
              <span className="font-mono text-[10px] text-pink-400 font-bold">{"}"}</span>
            </div>

            {/* Code Canvas / Syntax Highlighting Bars */}
            <div className="flex flex-1 flex-col justify-center gap-2 px-3 py-3">
              {/* Line 1 */}
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-10 rounded-full bg-[#38BDF8]" />
                <div className="h-2 w-14 rounded-full bg-[#FB7185]" />
              </div>

              {/* Line 2 */}
              <div className="flex items-center gap-1.5 pl-3">
                <div className="h-2 w-8 rounded-full bg-[#60A5FA]" />
                <div className="h-2 w-12 rounded-full bg-[#C084FC]" />
                <div className="h-2 w-10 rounded-full bg-[#34D399]" />
                <div className="h-2 w-6 rounded-full bg-[#FBBF24]" />
              </div>

              {/* Line 3 */}
              <div className="flex items-center gap-1.5 pl-6">
                <div className="h-2 w-11 rounded-full bg-[#38BDF8]" />
                <div className="h-2 w-20 rounded-full bg-[#818CF8]" />
                <div className="h-2 w-4 rounded-full bg-[#F472B6]" />
              </div>

              {/* Line 4 */}
              <div className="flex items-center gap-1.5 pl-6">
                <div className="h-2 w-14 rounded-full bg-[#38BDF8]" />
                <div className="h-2 w-16 rounded-full bg-[#34D399]" />
                <div className="h-2 w-5 rounded-full bg-[#F59E0B]" />
              </div>

              {/* Line 5 */}
              <div className="flex items-center gap-1.5 pl-3">
                <div className="h-2 w-18 rounded-full bg-[#FB7185]" />
                <div className="h-2 w-10 rounded-full bg-[#60A5FA]" />
              </div>

              {/* Line 6 */}
              <div className="flex items-center pl-1">
                <span className="font-mono text-[10px] text-pink-400 font-bold">{"}"}</span>
              </div>
            </div>
          </div>
        </motion.div>


        {/* ======================================================== */}
        {/* 3. THE 3 FLOATING FOREGROUND BADGES / CARDS */}
        {/* ======================================================== */}

        {/* 3A: Top-Left Card: "Modern Digital Solutions" */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [-3, -1, -3],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-15%] top-[10%] -rotate-6 z-30 flex flex-col justify-center rounded-[20px] border border-white/90 bg-white/95 px-4 py-3 sm:px-5 sm:py-3.5 lg:px-10 lg:py-5 shadow-[0_16px_36px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] backdrop-blur-md"
        >
          <span className="text-xs sm:text-sm lg:text-base font-extrabold tracking-tight text-[#111111] leading-[1.15]">
            Modern
          </span>
          <span className="text-xs sm:text-sm lg:text-base font-extrabold tracking-tight text-[#111111] leading-[1.15]">
            Digital Solutions
          </span>
        </motion.div>

        {/* 3B: Right Card: Code Symbol </> */}
        <motion.div
          animate={{
            y: [0, 7, 0],
            rotate: [-6, -3, -6],
          }}
          transition={{
            duration: 4.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] top-[45%] rotate-12 z-30 flex h-[22%] w-[20%] items-center justify-center rounded-[22px] border border-white/90 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.13),0_4px_12px_rgba(0,0,0,0.05)] backdrop-blur-md sm:rounded-[26px]"
        >
          <span className="text-black text-5xl tracking-[-0.15em] font-black">{'</>'}</span>
        </motion.div>

        {/* 3C: Bottom Card: Growth Bar Chart (Blue Ascending Bars) */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [-5, -2, -5],
          }}
          transition={{
            duration: 5.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] left-[10%] -rotate-4 z-30 flex h-[23%] w-[20%] items-center justify-center rounded-[22px] border border-white/90 bg-white shadow-[0_18px_42px_rgba(0,0,0,0.13),0_4px_12px_rgba(0,0,0,0.05)] backdrop-blur-md sm:rounded-[26px]"
        >
          {/* 3 Blue Ascending Bars */}
          <div className="flex items-end gap-1.5 sm:gap-2">
            {/* Bar 1 (Short) */}
            <div className="h-4 w-2 sm:h-5 sm:w-2.5 rounded-[3px] bg-[#2563EB]" />
            {/* Bar 2 (Medium) */}
            <div className="h-7 w-2 sm:h-9 sm:w-2.5 rounded-[3px] bg-[#2563EB]" />
            {/* Bar 3 (Tall) */}
            <div className="h-10 w-2 sm:h-13 sm:w-2.5 rounded-[3px] bg-[#2563EB]" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
