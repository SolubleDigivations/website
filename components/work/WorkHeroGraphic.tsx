"use client";

import { motion } from "motion/react";
import {
  IdeasDesignDevelopLaunch,
  SunburstTop,
  SunburstBottom,
  BlackCursorArrow,
  LeftDoodleArrow,
  RightTopDoodleArrow,
  RightBottomDoodleArrow,
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
        className="absolute left-[8%] top-[12%] z-0 h-[240px] w-[300px] rounded-[32px] bg-[#FED65B] shadow-[0_16px_36px_rgba(254,214,91,0.22)] sm:left-[12%] sm:top-[10%] lg:top-[15%] sm:h-[290px] sm:w-[370px] sm:rounded-[40px] lg:left-[-2%] lg:h-[290px] lg:w-[380px] lg:rounded-[44px]"
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
        className="absolute right-[8%] top-[16%] z-0 h-[310px] w-[190px] rounded-[34px] bg-gradient-to-b from-[#DCD0FD] to-[#C7B3FA] shadow-[0_16px_36px_rgba(199,179,250,0.25)] sm:right-[10%] sm:top-[14%] sm:h-[370px] sm:w-[230px] sm:rounded-[42px] lg:right-[10%] lg:h-[380px] lg:w-[220px] lg:rounded-[46px]"
      />

      {/* ===================================================================
          2. HAND-DRAWN DOODLES & ANNOTATIONS
          =================================================================== */}

      {/* Top Left Angled Text: IDEAS / DESIGN / DEVELOP / LAUNCH + Arrow */}
      <IdeasDesignDevelopLaunch />

      {/* Top Center Sunburst */}
      <div className="absolute left-[44%] top-[1%] z-20 sm:left-[46%] sm:top-[0%]">
        <SunburstTop />
      </div>

      {/* Top Center-Left Cursor Arrow */}
      <BlackCursorArrow className="absolute left-[34%] top-[9%] z-50 sm:left-[36%] sm:top-[8%] lg:top-[7%] lg:left-[35%]" />

      {/* Left Hand-Drawn Arrow pointing inwards */}
      <div className="absolute -left-3 top-[48%] z-20 sm:left-[2%] sm:top-[46%]">
        <LeftDoodleArrow />
      </div>

      {/* Top-Right Hand-Drawn Arrow near Websites */}
      <div className="absolute right-[4%] top-[3%] z-20 sm:right-[6%] sm:top-[2%]">
        <RightTopDoodleArrow />
      </div>

      {/* Right Hand-Drawn Arrow curving around Phone */}
      <div className="absolute -right-2 bottom-[20%] z-20 sm:right-[0%] sm:bottom-[18%]">
        <RightBottomDoodleArrow />
      </div>

      {/* Bottom Right Sunburst */}
      <div className="absolute bottom-[4%] right-[6%] z-20 sm:bottom-[-5%] sm:right-[9%]">
        <SunburstBottom />
      </div>

      {/* Bottom Center Cursor Arrow */}
      <div className="absolute bottom-[9%] left-[45%] z-20 sm:bottom-[0%] sm:left-[35%] -rotate-15">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
          animate={{ opacity: 1, scale: 1, rotate: 30 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="relative"
        >
          <svg
            viewBox="-80 -12 95 60" height={100} width={100} className="absolute -bottom-5 -left-14">
            <path
             strokeWidth={4}
              d="M -73.626 24.809 C -73.626 25.525 -66.101 24.797 -58.981 25.054 C -53.085 24.733 -50.09 24.047 -45.473 22.558 C -40.516 20.959 -35.933 18.614 -31.197 17.502"
            ></path>
            <path
              strokeWidth={4}
              d="M -65.087 22.704 C -60.524 21.54 -56.441 21.483 -53.408 20.962 C -51.169 20.578 -47.497 19.75 -45.937 19.785 C -44.499 19.817 -42.426 19.287 -41.034 18.892 C -39.75 18.527 -37.307 18.264 -35.872 17.872 C -34.769 17.571 -33.381 16.925 -32.317 16.974 C -31.418 17.015 -29.635 18.288 -29.222 18.885 C -28.374 20.112 -31.623 20.094 -32.648 20.733 C -33.163 21.054 -30.879 19.862 -31.483 20.335 C -32.203 20.9 -33.203 21.042 -34.603 21.082 C -39.206 21.214 -37.419 22.023 -39.752 22.226 C -42.674 22.48 -46.919 23.944 -49.388 23.862 C -50.922 23.811 -52.659 24.813 -54.247 24.743 C -56.937 24.625 -62.626 25.735 -65.983 26.537 C -68.908 27.236 -71.254 27.289 -73.041 27.327 C -75.097 27.371 -77.24 27.278 -77.786 27.321 C -79.373 27.447 -78.367 25.554 -76.722 24.331 C -75.891 23.713 -75.124 23.803 -74.613 23.573 C -73.779 23.198 -73.137 23.869 -71.688 23.492 C -69.965 23.044 -68.366 23.54 -65.087 22.704 Z"
              
            ></path>
          </svg>
          <svg
            viewBox="-80 -12 95 60" height={100} width={100} className="absolute bottom-4 -right-17 -rotate-12">
            <path
             strokeWidth={4}
              d="M -73.626 24.809 C -73.626 25.525 -66.101 24.797 -58.981 25.054 C -53.085 24.733 -50.09 24.047 -45.473 22.558 C -40.516 20.959 -35.933 18.614 -31.197 17.502"
            ></path>
            <path
              strokeWidth={4}
              d="M -65.087 22.704 C -60.524 21.54 -56.441 21.483 -53.408 20.962 C -51.169 20.578 -47.497 19.75 -45.937 19.785 C -44.499 19.817 -42.426 19.287 -41.034 18.892 C -39.75 18.527 -37.307 18.264 -35.872 17.872 C -34.769 17.571 -33.381 16.925 -32.317 16.974 C -31.418 17.015 -29.635 18.288 -29.222 18.885 C -28.374 20.112 -31.623 20.094 -32.648 20.733 C -33.163 21.054 -30.879 19.862 -31.483 20.335 C -32.203 20.9 -33.203 21.042 -34.603 21.082 C -39.206 21.214 -37.419 22.023 -39.752 22.226 C -42.674 22.48 -46.919 23.944 -49.388 23.862 C -50.922 23.811 -52.659 24.813 -54.247 24.743 C -56.937 24.625 -62.626 25.735 -65.983 26.537 C -68.908 27.236 -71.254 27.289 -73.041 27.327 C -75.097 27.371 -77.24 27.278 -77.786 27.321 C -79.373 27.447 -78.367 25.554 -76.722 24.331 C -75.891 23.713 -75.124 23.803 -74.613 23.573 C -73.779 23.198 -73.137 23.869 -71.688 23.492 C -69.965 23.044 -68.366 23.54 -65.087 22.704 Z"
              
            ></path>
          </svg>
          <svg
            width="100"
            height="80"
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
        className="group absolute left-[4%] top-[19%] z-10 w-[290px] sm:left-[7%] sm:top-[17%] lg:top-[22%] sm:w-[370px] lg:left-[5%] lg:w-[350px]"
      >
        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 h-8 w-[92%] -translate-x-1/2 rounded-full bg-black/20 blur-md transition-all duration-300 group-hover:blur-lg" />

        {/* Laptop Screen / Top Lid */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-[10px] border-[5px] border-[#18181A] bg-[#18181A] shadow-2xl sm:rounded-t-[14px] sm:border-[6px]">
          {/* Screen Camera */}
          <div className="absolute left-1/2 top-1 z-20 h-1 w-1 -translate-x-1/2 rounded-full bg-neutral-600 sm:top-1.5 sm:h-1.5 sm:w-1.5" />

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
        className="group absolute right-[11%] top-[22%] z-15 w-[145px] sm:right-[13%] sm:top-[20%] sm:w-[185px] lg:right-[15%] lg:w-[200px]"
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
        className="absolute -right-2 top-[27%] z-30 cursor-default select-none rounded-full bg-[#FFA4E0] px-4 py-2 font-sans text-[12px] font-bold tracking-tight text-[#3E0A30] rotate-12 shadow-[0_8px_20px_rgba(255,164,224,0.35)] sm:right-[1%] sm:top-[24%] lg:top-[10%] sm:px-5 sm:py-2.5 sm:text-[13.5px] lg:text-[18px] hover:scale-108 transition-all duration-200"
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
        className="absolute bottom-[10%] left-[8%] z-30 cursor-default select-none rounded-full bg-linear-to-r from-[#17E6B2] to-[#01D2B4] px-5 py-2 font-sans text-[12px] font-bold tracking-tight text-[#023B2D] shadow-[0_8px_22px_rgba(23,230,178,0.38)] sm:bottom-[8%] sm:left-[10%] lg:bottom-[20%] -rotate-8 lg:left-[15%] sm:px-6 sm:py-2.5 sm:text-[13.5px] lg:text-[20px] hover:scale-108 transition-all duration-200"
      >
        Mobile Apps
      </motion.div>
    </div>
  );
}
