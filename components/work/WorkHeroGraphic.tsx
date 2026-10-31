"use client";

import { motion } from "motion/react";
import {
  IdeasDesignDevelopLaunch,
  SunburstTop,
  SunburstBottom,
  BlackCursorArrow,
  RightTopDoodleArrow,
} from "./WorkHeroDoodles";
import {
  GenericWebsiteScreen,
  GenericMobileAppScreen,
} from "./GenericDeviceScreens";
import { useState } from "react";

export default function WorkHeroGraphic() {
  const [entered,setEntered]=useState(false)
  return (
    <div className="relative mx-auto h-[480px] w-full max-w-[560px] sm:h-[540px] sm:max-w-[620px] lg:h-[580px] lg:max-w-[660px]">
      {/* ===================================================================
          1. BACKGROUND CARDS
          =================================================================== */}

      {/* Yellow Card (Behind Laptop) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[4%] top-[12%] z-0 h-[240px] w-[300px] rounded-[32px] bg-linear-to-br from-background to-50% to-soluble-yellow shadow-[0_16px_36px_rgba(254,214,91,0.22)] sm:left-[12%] sm:top-[10%] lg:top-[15%] sm:h-[290px] sm:w-[370px] sm:rounded-[40px] lg:left-[-2%] lg:h-[290px] lg:w-[380px] lg:rounded-[44px]"
      >
        {/* Tiny bird/wave doodle on top-left of yellow card */}
        <div className="absolute left-6 top-6 sm:left-8 sm:top-8 text-[#111111]">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <path
              d="M 2 8 C 6 2, 10 3, 12 7 C 14 3, 18 2, 22 8"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </motion.div>

      {/* Purple Card (Behind Phone) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 7 }}
        transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[-5%] top-[35%] z-0 h-[260px] w-[150px] rounded-[34px] bg-gradient-to-br from-background to-45% to-soluble-purple shadow-[0_16px_36px_rgba(199,179,250,0.25)] sm:right-[10%] sm:top-[14%] sm:h-[370px] sm:w-[230px] sm:rounded-[42px] lg:right-[10%] lg:h-[380px] lg:w-[220px] lg:rounded-[46px]"
      />

      {/* ===================================================================
          2. HAND-DRAWN DOODLES & ANNOTATIONS
          =================================================================== */}

      {/* Top Left Angled Text: IDEAS / DESIGN / DEVELOP / LAUNCH + Arrow */}
      <IdeasDesignDevelopLaunch />

      {/* Top Center Sunburst */}
      <div className="absolute left-[70%] top-[2%] rotate-20 md:rotate-0 z-20 md:left-[46%] md:top-[0%] scale-60 md:scale-100">
        <SunburstTop />
      </div>

      {/* Top Center-Left Cursor Arrow */}
      <BlackCursorArrow className="absolute left-[40%] top-[10%] z-50 sm:left-[36%] sm:top-[8%] lg:top-[7%] lg:left-[35%] scale-50 md:scale-100" />
      

      {/* Bottom Right Sunburst */}
      <div className="absolute bottom-[-8%] right-[-8%] z-20 md:bottom-[-5%] md:right-[9%] scale-60 md:scale-100">
        <SunburstBottom />
      </div>

      {/* Bottom Center Cursor Arrow */}
      <div className="absolute bottom-[15%] left-[40%] z-20 sm:bottom-[0%] sm:left-[35%] -rotate-15 scale-50 md:scale-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
          animate={{ opacity: 1, scale: 1, rotate: 30 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="relative"
        >
          <svg
            width="90"
            height="70"
            viewBox="-30 -8 110 26"
            fill="none"
            className=""
          >
            <path
              d="M 0.137 -4.831 C -0.945 -6.018 -5.136 -6.089 -5.9 -2.766 C -7.483 4.119 -8.442 24.366 -6.61 31.917 C -5.841 35.086 -1.725 34.68 0.534 32.56 C 3.72 29.57 6.897 23.914 8.469 24.438 C 8.322 23.703 17.197 26.206 21.372 25.193 C 23.224 24.744 24.173 22.489 24.143 20.773 C 24.047 15.336 4.206 -2.33 0.137 -4.831 Z"
              fill="#111111"
            />
          </svg>
        </motion.div>
      </div>

      {/* ===================================================================
          3. DEVICE MOCKUPS (PURE CSS / DIV BASED)
          =================================================================== */}

      {/* Laptop Mockup (Generic Div-Based Website Design) */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        onAnimationComplete={()=>setEntered(true)}
        transition={entered? {}:{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, rotate: -2, transition: { duration: 0.3 } }}
        className="group absolute left-[0%] top-[19%] z-10 w-[290px] sm:left-[7%] sm:top-[17%] lg:top-[22%] sm:w-[370px] lg:left-[5%] lg:w-[350px]"
      >
        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 h-8 w-[92%] -translate-x-1/2 rounded-full bg-black/20 blur-md transition-all duration-300 group-hover:blur-lg" />

        {/* Laptop Screen / Top Lid */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[10px] border-[5px] border-[#18181A] bg-[#18181A] shadow-2xl sm:rounded-t-[14px] sm:border-[6px]">

          {/* Screen Content: Generic Div-Based Website */}
          <div className="relative h-full w-full overflow-hidden">
            <GenericWebsiteScreen />
            {/* Screen Gloss Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-transparent via-white/4 to-white/12" />
          </div>
        </div>

        {/* Laptop Base / Lower Chassis */}
        <div className="relative mx-auto -mt-[1px] h-3 w-[108%] -translate-x-[4%] rounded-b-[10px] bg-gradient-to-b from-[#D4D4D8] via-[#B8B8BE] to-[#8E8E96] shadow-[0_4px_12px_rgba(0,0,0,0.18)] sm:h-4 sm:rounded-b-[14px]">
          {/* Center Thumb Notch */}
          <div className="absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 rounded-b-md bg-[#66666E] sm:h-1.5 sm:w-16" />
        </div>
      </motion.div>

      {/* Smartphone Mockup (Generic Div-Based Mobile App Design) */}
      <motion.div
        initial={{ opacity: 0, y: 35, rotate: 6 }}
        animate={{ opacity: 1, y: 0, rotate: 9 }}
        transition={entered?{}:{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8, rotate: 7, transition: { duration: 0.3 } }}
        className="group absolute right-[0%] top-[38%] z-15 w-[135px] sm:right-[13%] sm:top-[20%] sm:w-[185px] lg:right-[15%] lg:w-[200px]"
      >
        {/* Shadow */}
        <div className="absolute -bottom-5 left-1/2 h-10 w-[86%] -translate-x-1/2 rounded-full bg-black/30 blur-md transition-all duration-300 group-hover:blur-lg" />

        {/* Phone Body */}
        <div className="relative aspect-[9/19] overflow-hidden rounded-[28px] border-[5px] border-[#1C1C1E] bg-black shadow-[0_24px_50px_rgba(0,0,0,0.38)] sm:rounded-[36px] sm:border-[6px] lg:rounded-[40px] lg:border-[7px]">
          {/* Dynamic Island Pill */}
          <div className="absolute left-1/2 top-2.5 z-30 h-3.5 w-12 -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-4 sm:w-16 lg:h-4 lg:w-14" />

          {/* Screen Content: Generic Div-Based Mobile App */}
          <div className="relative h-full w-full">
            <GenericMobileAppScreen />
            {/* Gloss reflection overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.14]" />
          </div>
        </div>
      </motion.div>

      {/* ===================================================================
          4. FLOATING PASTEL PILL BADGES
          =================================================================== */}

      {/* Pill 1: "Websites" (Blue/Periwinkle) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -10 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -4, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.35 },
          scale: { duration: 0.5, delay: 0.35 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
        }}
        className="absolute left-[24%] top-[7%] z-30 cursor-default select-none rounded-full bg-[#7E9CFF] px-4 py-2 font-sans text-[12px] font-bold tracking-tight text-[#081745] shadow-[0_8px_20px_rgba(126,156,255,0.35)] sm:left-[20%] sm:top-[3%] -rotate-8 sm:px-5 sm:py-2.5 sm:text-[13.5px] lg:text-[18px] hover:scale-108 transition-all duration-200"
      >
        Websites
      </motion.div>

      {/* Pill 2: "Web Apps" (Pink/Magenta) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: 10 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 5, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.42 },
          scale: { duration: 0.5, delay: 0.42 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
        className="absolute -right-5 top-[20%] z-30 cursor-default select-none rounded-full bg-[#FFA4E0] px-4 py-2 font-sans text-[12px] font-bold tracking-tight text-[#3E0A30] rotate-12 shadow-[0_8px_20px_rgba(255,164,224,0.35)] sm:right-[1%] sm:top-[24%] lg:top-[10%] sm:px-5 sm:py-2.5 sm:text-[13.5px] lg:text-[18px] hover:scale-108 transition-all duration-200"
      >
        Web Apps
      </motion.div>

      {/* Pill 3: "Mobile Apps" (Mint/Cyan) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 12 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -5, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.48 },
          scale: { duration: 0.5, delay: 0.48 },
          y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
        }}
        className="absolute bottom-[5%] left-[8%] z-30 cursor-default select-none rounded-full bg-linear-to-r from-[#17E6B2] to-[#01D2B4] px-5 py-2 font-sans text-[12px] font-bold tracking-tight text-[#023B2D] shadow-[0_8px_22px_rgba(23,230,178,0.38)] sm:bottom-[8%] sm:left-[10%] lg:bottom-[20%] -rotate-8 lg:left-[15%] sm:px-6 sm:py-2.5 sm:text-[13.5px] lg:text-[20px] hover:scale-108 transition-all duration-200"
      >
        Mobile Apps
      </motion.div>
    </div>
  );
}
