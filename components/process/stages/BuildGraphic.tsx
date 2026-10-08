"use client";

import { motion } from "motion/react";
import { Database } from "lucide-react";

export default function BuildGraphic() {
  return (
    <div className="relative w-full max-w-[480px] h-[340px] flex items-center justify-center select-none">
      
      {/* Background Soft Mint Glow */}
      <div className="absolute inset-4 rounded-full bg-[#52D9AD]/15 blur-3xl" />

      {/* Handwritten Text on Left with curved arrow */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute -top-1 left-0 sm:left-2 z-20 font-caveat text-[15px] sm:text-[17px] font-bold text-[#111111] leading-tight text-left -rotate-6"
      >
        <span>DESIGNS</span><br />
        <span>INTO</span><br />
        <span>REAL</span><br />
        <span>SOFTWARE.</span>

        {/* Hand-drawn curved arrow pointing to terminal */}
        <svg width="40" height="35" viewBox="0 0 40 35" fill="none" className="text-[#111111] mt-1 ml-2">
          <path
            d="M 6 4 C 18 8, 26 18, 22 28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 16 26 L 22 28 L 26 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Modern Dark Code Terminal Editor Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10 w-[260px] sm:w-[280px] rounded-2xl bg-[#13151A] p-4 text-white shadow-[0_20px_40px_rgba(0,0,0,0.25)] border border-[#2A2E39]"
      >
        {/* macOS Terminal Dots */}
        <div className="flex items-center gap-1.5 pb-3 border-b border-[#222633]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        </div>

        {/* Syntax-Colored Code Snippet */}
        <div className="mt-3 font-mono text-[11px] sm:text-[12px] leading-[1.65] space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[#FF91D4]">const</span>
            <span className="text-[#52D9AD]">product</span>
            <span className="text-[#888888]">=</span>
            <span className="text-[#FFD65A]">create</span>
            <span className="text-[#888888]">()</span>
          </div>

          <div className="flex items-center gap-1.5 pl-3">
            <span className="text-[#6C8CFF]">stack:</span>
            <span className="text-[#888888]">[</span>
            <span className="text-[#FFD65A]">&apos;React&apos;</span>
            <span className="text-[#888888]">,</span>
            <span className="text-[#52D9AD]">&apos;Node&apos;</span>
            <span className="text-[#888888]">]</span>
          </div>

          <div className="flex items-center gap-1.5 pl-3">
            <span className="text-[#6C8CFF]">status:</span>
            <span className="text-[#52D9AD]">&apos;shipping&apos;</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[#FF91D4]">export</span>
            <span className="text-[#FF91D4]">default</span>
            <span className="text-[#52D9AD]">product</span>
          </div>
        </div>
      </motion.div>

      {/* Floating 3D/Glass Tech Badges Orbiting */}
      {/* 1. React Atom (Cyan Glowing Badge) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00D8FF]/15 backdrop-blur-md border border-[#00D8FF]/40 shadow-[0_8px_18px_rgba(0,216,255,0.25)]"
      >
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-6 w-6 text-[#00D8FF]" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </motion.div>

      {/* 2. Node.js Hexagon (Green Badge) */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-28 right-0 z-20 flex h-9 w-9 items-center justify-center rounded-xl bg-[#539E43]/15 backdrop-blur-md border border-[#539E43]/40 shadow-[0_8px_18px_rgba(83,158,67,0.25)]"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#539E43]" fill="currentColor">
          <path d="M12 2L3.5 6.9v9.8L12 22l8.5-5.3V6.9L12 2zm0 2.3l6.5 3.8v7.6L12 19.5 5.5 15.7V8.1L12 4.3z"/>
        </svg>
      </motion.div>

      {/* 3. Next.js `N` (Black Badge) */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-6 left-12 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-white shadow-[0_8px_18px_rgba(0,0,0,0.3)] border border-white/20"
      >
        <span className="font-extrabold text-sm font-sans tracking-tighter">N</span>
      </motion.div>

      {/* 4. Database (Blue Glass Badge) */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-4 right-10 z-20 flex h-9 w-9 items-center justify-center rounded-xl bg-[#6C8CFF]/20 backdrop-blur-md border border-[#6C8CFF]/40 text-[#4E75FF] shadow-[0_8px_18px_rgba(108,140,255,0.25)]"
      >
        <Database className="h-4 w-4 stroke-[2.2]" />
      </motion.div>

    </div>
  );
}
