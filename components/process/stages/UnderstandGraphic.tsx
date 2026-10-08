"use client";

import { motion } from "motion/react";
import { HelpCircle } from "lucide-react";

export default function UnderstandGraphic() {
  return (
    <div className="relative w-full max-w-[480px] h-[340px] flex items-center justify-center select-none">
      
      {/* Background soft aura */}
      <div className="absolute inset-4 rounded-full bg-[#FF91D4]/15 blur-3xl" />

      {/* Cluster of Sticky Notes */}
      <div className="relative w-[320px] h-[260px]">
        
        {/* Note 1: White/Cream Top-Left Sticky Note */}
        <motion.div
          initial={{ opacity: 0, y: 15, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -6 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ rotate: -2, scale: 1.03 }}
          className="absolute -top-2 left-2 z-10 w-36 rounded-lg bg-[#FAF8F2] p-3 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-[#EBE7DC] cursor-pointer"
        >
          <p className="text-[12px] font-medium leading-snug text-[#2B2B2B] font-sans">
            What's the real problem?
          </p>
        </motion.div>

        {/* Note 2: Pink Question Sticky Note Top-Center/Right */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 4 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ rotate: 1, scale: 1.04 }}
          className="absolute top-2 right-14 z-20 w-28 rounded-lg bg-[#FFE6F2] p-3 shadow-[0_10px_22px_rgba(255,145,212,0.2)] border border-[#FFD2E8] flex flex-col items-center justify-center text-center cursor-pointer"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF91D4]/30 text-[#D8458D] mb-1">
            <HelpCircle className="h-4 w-4 stroke-[2.5]" />
          </div>
          <p className="text-[10px] font-semibold text-[#8C2758]">
            Key pain points
          </p>
        </motion.div>

        {/* Note 3: Yellow Sticky Note Center-Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          whileHover={{ rotate: 4, scale: 1.03 }}
          className="absolute top-24 left-10 z-30 w-36 rounded-lg bg-[#FFF7D6] p-3.5 shadow-[0_10px_24px_rgba(255,214,90,0.22)] border border-[#FFECA6] cursor-pointer"
        >
          <p className="text-[12px] font-medium leading-snug text-[#4D4114] font-sans">
            What success looks like?
          </p>
        </motion.div>

        {/* Note 4: Soft Blue / Lavender Sticky Note Center-Right */}
        <motion.div
          initial={{ opacity: 0, y: 15, rotate: 8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 7 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ rotate: 3, scale: 1.03 }}
          className="absolute top-20 right-2 z-20 w-36 rounded-lg bg-[#EBF0FF] p-3.5 shadow-[0_10px_22px_rgba(108,140,255,0.18)] border border-[#D5E1FF] cursor-pointer"
        >
          <p className="text-[12px] font-medium leading-snug text-[#233876] font-sans">
            What are the constraints?
          </p>
        </motion.div>

      </div>

      {/* Handwritten Bullet List & Curved Doodle Arrow on Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute -right-2 sm:right-4 top-16 z-30 flex flex-col items-start font-caveat text-[16px] sm:text-[18px] font-bold text-[#111111] leading-[1.35]"
      >
        <div className="flex flex-col">
          <span>- Research</span>
          <span>- Discussion</span>
          <span>- Insights</span>
          <span>- Clarity</span>
        </div>

        {/* Hand-drawn curved arrow wrapping down */}
        <svg width="45" height="45" viewBox="0 0 50 50" fill="none" className="text-[#111111] -mt-1 ml-4">
          <path
            d="M 12 6 C 28 8, 38 22, 24 38 C 20 42, 14 44, 8 42"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M 14 36 L 6 42 L 14 46"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

    </div>
  );
}
