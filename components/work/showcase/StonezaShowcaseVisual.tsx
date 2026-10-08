"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function StonezaShowcaseVisual() {
  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden bg-[#ECEAE3] flex items-center justify-center p-6 select-none">
      
      {/* Stone / Marble Textured Relief Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8E6DF] via-[#F2EFE9] to-[#DFDCD4] opacity-90" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#9E9A90_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Ambient Lighting & Shadow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-[#FFFFFF]/60 blur-3xl" />
      
      {/* Laptop Mockup Wrapper */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[480px] sm:max-w-[540px] filter drop-shadow-[0_24px_45px_rgba(0,0,0,0.18)]"
      >
        {/* Laptop Lid Screen */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl sm:rounded-t-2xl border-[8px] sm:border-[10px] border-[#1C1C1E] bg-[#111111] shadow-2xl">
          
          {/* Webpage Content */}
          <div className="relative w-full h-full bg-[#111111] text-white flex flex-col justify-between overflow-hidden">
            
            {/* Stoneza Web Header */}
            <div className="flex h-7 sm:h-8 items-center justify-between border-b border-white/10 bg-black/60 px-4 backdrop-blur-md">
              <span className="font-extrabold text-[9px] sm:text-[11px] tracking-widest text-white">
                STONEZA
              </span>
              <div className="hidden sm:flex items-center gap-3 text-[7px] sm:text-[8px] text-white/70">
                <span className="text-white">Home</span>
                <span>Products</span>
                <span>Collections</span>
                <span>About</span>
                <span>Contact</span>
              </div>
              <div className="rounded-full bg-white/10 px-2 py-0.5 text-[6.5px] sm:text-[7.5px] text-white">
                Enquiry
              </div>
            </div>

            {/* Stoneza Hero Section */}
            <div className="relative flex-1 p-4 sm:p-6 flex flex-col justify-center overflow-hidden">
              
              {/* Architecture Interior Visual Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#2A231C]/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-[#2C2621]">
                <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-gradient-to-l from-[#A69888]/40 to-transparent" />
                {/* Modern Arch Architectural element */}
                <div className="absolute right-6 top-3 bottom-0 w-36 rounded-t-full bg-gradient-to-b from-[#DFD7CC] via-[#BCB0A1] to-[#8C8071] opacity-90 shadow-2xl" />
                {/* Plant silhouette */}
                <div className="absolute right-32 bottom-2 h-16 w-8 rounded-full bg-[#2A3B2A]/70 blur-[0.5px]" />
              </div>

              {/* Hero Typography */}
              <div className="relative z-20 max-w-[240px]">
                <div className="text-[14px] sm:text-[18px] font-extrabold leading-[1.08] tracking-tight text-white">
                  Timeless <br />
                  Stone for <br />
                  Modern Spaces
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="rounded-md bg-white/20 px-2 py-0.5 text-[6.5px] sm:text-[7.5px] font-semibold text-white backdrop-blur-xs">
                    Explore Collection →
                  </span>
                </div>
              </div>

              {/* Bottom Featured Collections Bar */}
              <div className="relative z-20 mt-auto pt-2 flex items-center justify-between text-[7px] sm:text-[8px] text-white/60 border-t border-white/10">
                <span>Featured Collections</span>
                <span>Natural Marble • Travertine • Granite</span>
              </div>

            </div>

          </div>

        </div>

        {/* Laptop Bottom Base */}
        <div className="relative mx-auto h-2.5 sm:h-3 w-[106%] -translate-x-[3%] rounded-b-xl bg-gradient-to-b from-[#2A2A2E] to-[#161618] border-t border-white/20 flex items-center justify-center">
          <div className="h-0.5 w-12 rounded-full bg-white/20" />
        </div>

      </motion.div>

    </div>
  );
}
