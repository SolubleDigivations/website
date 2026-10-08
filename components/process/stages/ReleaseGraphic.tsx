"use client";

import { motion } from "motion/react";
import { MousePointer } from "lucide-react";

export default function ReleaseGraphic() {
  return (
    <div className="relative w-full max-w-[500px] h-[350px] flex items-center justify-center select-none">
      
      {/* Background Soft Coral Glow */}
      <div className="absolute inset-4 rounded-full bg-[#FF7A50]/15 blur-3xl" />

      {/* Modern Browser Launch Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10 w-[300px] sm:w-[330px] rounded-2xl bg-white p-4 shadow-[0_20px_40px_rgba(255,122,80,0.12)] border border-[#F0EBE6]"
      >
        {/* Top Browser Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-gray-300" />
            <span className="h-2 w-2 rounded-full bg-gray-300" />
            <span className="h-2 w-2 rounded-full bg-gray-300" />
          </div>
          <div className="h-2 w-16 rounded-full bg-gray-100" />
          <span className="h-2 w-2 rounded-full bg-[#FF7A50]" />
        </div>

        {/* Card Content */}
        <div className="mt-3.5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-extrabold text-[#111111] tracking-tight">
              Your Product
            </h4>

            {/* Glowing Live Status Badge */}
            <div className="relative flex items-center gap-1.5 rounded-full bg-[#E8FAF0] px-3 py-1 border border-[#BFF3D4] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-[11px] font-bold text-[#0D7A55]">
                Live
              </span>
            </div>
          </div>

          {/* Product Hero Image Mockup */}
          <div className="h-28 w-full rounded-xl bg-gradient-to-tr from-[#F4EFEB] via-[#FFF3EB] to-[#F7F4F0] p-3 flex flex-col justify-end border border-[#EDE5DE] overflow-hidden relative">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d1c7bc_1px,transparent_1px)] [background-size:10px_10px]" />
            <div className="relative z-10 flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-white/80 shadow-xs backdrop-blur-xs flex items-center justify-center text-xs font-bold text-[#FF7A50]">
                ✦
              </div>
              <div className="space-y-1">
                <div className="h-2 w-16 rounded-full bg-gray-400/60" />
                <div className="h-1.5 w-10 rounded-full bg-gray-300/60" />
              </div>
            </div>
          </div>

          {/* Bottom stats row */}
          <div className="flex items-center justify-between pt-1 text-xs text-gray-400">
            <div className="h-1.5 w-16 rounded-full bg-gray-200" />
            <div className="h-1.5 w-8 rounded-full bg-gray-200" />
          </div>
        </div>
      </motion.div>

      {/* Floating Mouse Cursor on Live Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="absolute top-16 right-6 sm:right-10 z-30 pointer-events-none"
      >
        <MousePointer className="h-6 w-6 text-[#111111] fill-[#111111] drop-shadow-md -rotate-45" />
      </motion.div>

      {/* Handwritten Text on Right with curved doodle arrow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="absolute -top-1 -right-2 sm:right-2 z-20 font-caveat text-[15px] sm:text-[17px] font-bold text-[#111111] leading-tight text-left rotate-3"
      >
        <span>IDEAS</span><br />
        <span>THAT</span><br />
        <span>CREATE</span><br />
        <span className="text-[#FF7A50]">REAL</span><br />
        <span>IMPACT.</span>

        {/* Doodle spark arrow */}
        <svg width="40" height="35" viewBox="0 0 40 35" fill="none" className="text-[#111111] mt-1 -ml-3">
          <path
            d="M 28 6 C 16 10, 8 20, 12 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 6 24 L 12 30 L 18 22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

    </div>
  );
}
