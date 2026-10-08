"use client";

import { motion } from "motion/react";
import { Image as ImageIcon, LayoutGrid, Layers, MousePointer } from "lucide-react";

export default function DesignGraphic() {
  return (
    <div className="relative w-full max-w-[500px] h-[350px] flex items-center justify-center select-none">
      
      {/* Background Soft Yellow Glow */}
      <div className="absolute inset-4 rounded-full bg-[#FFD65A]/15 blur-3xl" />

      {/* Decorative Yellow Underlay Card */}
      <div className="absolute top-16 right-10 w-[240px] h-[160px] rounded-2xl bg-[#FFEBA3] rotate-6 opacity-60 pointer-events-none" />

      {/* 1. Desktop Browser Wireframe Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 w-[270px] sm:w-[295px] rounded-xl bg-white p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-[#ECECEC]"
      >
        {/* Browser Top Bar Dots */}
        <div className="flex items-center gap-1.5 pb-2.5 border-b border-gray-100">
          <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
          <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
          <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
        </div>

        {/* Mock Interface Content */}
        <div className="mt-3 flex gap-2.5">
          {/* Mini Sidebar */}
          <div className="flex flex-col gap-2 w-5 shrink-0 text-gray-400">
            <LayoutGrid className="h-3.5 w-3.5 text-[#FFD65A]" />
            <Layers className="h-3.5 w-3.5" />
          </div>

          {/* Main Area */}
          <div className="flex-1 space-y-2.5">
            {/* Image Placeholder Banner */}
            <div className="h-16 w-full rounded-lg bg-[#F3F4F6] flex items-center justify-center text-gray-400">
              <ImageIcon className="h-5 w-5 opacity-60" />
            </div>

            {/* Skeleton lines */}
            <div className="h-2 w-3/4 rounded-full bg-gray-200" />
            <div className="h-2 w-1/2 rounded-full bg-gray-100" />
          </div>
        </div>
      </motion.div>

      {/* 2. Overlapping Mobile Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 12 }}
        whileInView={{ opacity: 1, y: 0, rotate: 8 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.25 }}
        whileHover={{ rotate: 5, scale: 1.03 }}
        className="absolute -right-2 sm:right-4 bottom-2 z-20 w-[140px] sm:w-[155px] rounded-[22px] bg-[#111111] p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.18)] cursor-pointer"
      >
        <div className="rounded-[18px] bg-white p-2.5 pt-2 flex flex-col gap-2 min-h-[190px]">
          {/* Phone Notch/Speaker */}
          <div className="mx-auto h-1 w-8 rounded-full bg-gray-300 mb-1" />

          {/* Header pill */}
          <div className="h-2.5 w-12 rounded-full bg-[#6C8CFF]/30" />

          {/* Blue UI Card Component */}
          <div className="h-12 w-full rounded-lg bg-gradient-to-r from-[#EAF0FF] to-[#D5E2FF] p-1.5 flex flex-col justify-between border border-[#C2D4FF]">
            <div className="h-1.5 w-10 rounded-full bg-[#6C8CFF]" />
            <div className="h-1 w-14 rounded-full bg-[#6C8CFF]/50" />
          </div>

          {/* Secondary card */}
          <div className="h-9 w-full rounded-lg bg-gray-50 border border-gray-100 p-1.5 flex flex-col justify-center gap-1">
            <div className="h-1.5 w-8 rounded-full bg-gray-300" />
            <div className="h-1 w-12 rounded-full bg-gray-200" />
          </div>

          {/* Bottom nav tabs */}
          <div className="mt-auto flex justify-around pt-1 border-t border-gray-100">
            <div className="h-1.5 w-3 rounded-full bg-[#6C8CFF]" />
            <div className="h-1.5 w-3 rounded-full bg-gray-200" />
            <div className="h-1.5 w-3 rounded-full bg-gray-200" />
          </div>
        </div>
      </motion.div>

      {/* 3. Floating Mouse Pointer Cursor on Desktop Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="absolute top-28 left-44 z-30 pointer-events-none"
      >
        <div className="relative">
          <MousePointer className="h-6 w-6 text-[#111111] fill-[#111111] drop-shadow-md -rotate-45" />
        </div>
      </motion.div>

      {/* 4. Handwritten Text on Top-Right */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="absolute -top-1 -right-2 sm:right-2 z-20 font-caveat text-[15px] sm:text-[17px] font-bold text-[#111111] leading-tight text-left rotate-3"
      >
        <span>IDEAS</span><br />
        <span>TAKE</span><br />
        <span>SHAPE.</span>
      </motion.div>

    </div>
  );
}
