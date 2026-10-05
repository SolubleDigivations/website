"use client";

import React from "react";

/* =========================================================================
   GENERIC WEBSITE UI (LAPTOP SCREEN) - 100% DIV & CSS BASED
   ========================================================================= */
export function GenericWebsiteScreen() {
  return (
    <div className="relative h-full w-full select-none overflow-hidden bg-[#F6F4EE] text-[#222222] font-sans">
      
      {/* Top Website Header / Navigation Bar */}
      <div className="flex h-6 sm:h-7 items-center justify-between border-b border-[#E7E3D8] bg-[#F6F4EE]/90 px-3 sm:px-4 backdrop-blur-xs">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#111111]" />
          <span className="text-[7.5px] sm:text-[9px] font-bold tracking-tight text-[#111111]">
            STUDIO ARCH
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden sm:flex items-center gap-3 text-[7px] sm:text-[8px] font-medium text-[#77756D]">
          <span className="text-[#111111] font-semibold">Works</span>
          <span>Spaces</span>
          <span>Studio</span>
          <span>Journal</span>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-1">
          <div className="rounded-full bg-[#111111] px-2 py-0.5 text-[6.5px] sm:text-[7.5px] font-semibold text-white">
            Inquire
          </div>
        </div>
      </div>

      {/* Website Hero / Main Content */}
      <div className="relative h-[calc(100%-24px)] sm:h-[calc(100%-28px)] w-full p-3 sm:p-4 flex flex-col justify-between">
        
        {/* Background Decorative Architecture Canvas */}
        <div className="absolute inset-x-3 inset-y-3 sm:inset-x-4 sm:inset-y-4 rounded-lg bg-[#EFECE3] overflow-hidden border border-[#E3DFC] shadow-inner">
          
          {/* Subtle Ambient Gradients */}
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#E4DAC8]/60 blur-xl" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#D5CEBF]/50 blur-xl" />

          {/* Architectural 3D Arch Shapes & Composition */}
          <div className="absolute right-2 bottom-0 top-2 w-[55%] flex items-end justify-center">
            {/* Background Tall Arch */}
            <div className="absolute bottom-0 right-4 h-[85%] w-24 rounded-t-full bg-gradient-to-b from-[#DFD6C8] to-[#C9BFAة]/80 border border-[#D5CA] shadow-md" />
            
            {/* Center Curved Sculptural Pillar */}
            <div className="absolute bottom-0 right-14 h-[65%] w-20 rounded-t-[32px] bg-gradient-to-b from-[#EDE7DC] via-[#D8CFC2] to-[#BDB3A4] shadow-lg border border-[#EDE5DA]" />
            
            {/* Foreground Organic Sphere / Pedestal */}
            <div className="absolute bottom-2 right-6 h-12 w-12 rounded-full bg-gradient-to-br from-white via-[#E0D8CB] to-[#9E9485] shadow-xl border border-white/50" />
            
            {/* Sun/Light Ray Ambient Glow */}
            <div className="absolute top-3 right-12 h-10 w-10 rounded-full bg-[#FFF9E6] blur-sm opacity-80" />
          </div>

          {/* Left Text / Typography Overlay */}
          <div className="relative z-10 flex h-full flex-col justify-between p-3 sm:p-4">
            <div>
              {/* Category Pill */}
              <div className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[6.5px] sm:text-[7.5px] font-semibold text-[#66645D] shadow-xs backdrop-blur-xs">
                <span className="h-1 w-1 rounded-full bg-[#52D9AD]" />
                Architectural Experience
              </div>

              {/* Headline */}
              <div className="mt-2 text-[13px] sm:text-[16px] lg:text-[18px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#1A1A18]">
                Minimalist
                <br />
                Sanctuaries.
              </div>

              {/* Sub-copy lines */}
              <div className="mt-1.5 space-y-1">
                <div className="h-1.5 w-24 sm:w-32 rounded-full bg-[#7A776F]/30" />
                <div className="h-1.5 w-16 sm:w-24 rounded-full bg-[#7A776F]/20" />
              </div>
            </div>

            {/* Bottom Project Stats Pill */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-md bg-white/90 px-2 py-1 shadow-sm backdrop-blur-xs">
                <span className="text-[6.5px] sm:text-[7.5px] font-bold text-[#111111]">12+</span>
                <span className="text-[6px] sm:text-[7px] text-[#77756D]">Global Works</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md bg-white/90 px-2 py-1 shadow-sm backdrop-blur-xs">
                <span className="text-[6.5px] sm:text-[7.5px] font-bold text-[#111111]">2026</span>
                <span className="text-[6px] sm:text-[7px] text-[#77756D]">Design Award</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================================
   GENERIC MOBILE APP UI (PHONE SCREEN) - 100% DIV & CSS BASED
   ========================================================================= */
export function GenericMobileAppScreen() {
  return (
    <div className="relative h-full w-full select-none overflow-hidden bg-[#0D0D11] text-white font-sans flex flex-col justify-between">
      
      {/* Top Status Bar Padding (Under Dynamic Island) */}
      <div className="pt-7 sm:pt-8 px-3.5">
        
        {/* App Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[7px] sm:text-[8px] font-medium uppercase tracking-[0.14em] text-[#9A9AA6]">
              Featured Stream
            </div>
            <div className="text-[12px] sm:text-[14px] font-extrabold tracking-[-0.03em] text-white">
              CineVerse
            </div>
          </div>

          {/* Profile / Search Action Icons */}
          <div className="flex items-center gap-1.5">
            <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/10 text-[9px] backdrop-blur-sm">
              🔍
            </div>
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-tr from-[#FF9B86] to-[#B18CFF] ring-1 ring-white/20" />
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-2.5 flex items-center gap-1.5 overflow-hidden">
          <span className="rounded-full bg-[#B18CFF] px-2.5 py-0.5 text-[7px] sm:text-[8px] font-bold text-[#111111]">
            Trending
          </span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[7px] sm:text-[8px] font-medium text-[#AAAAB4]">
            Sci-Fi
          </span>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[7px] sm:text-[8px] font-medium text-[#AAAAB4]">
            Action
          </span>
        </div>

      </div>

      {/* Main Showcase Poster Card */}
      <div className="px-3.5 my-auto">
        <div className="relative overflow-hidden rounded-[16px] sm:rounded-[18px] border border-white/15 bg-gradient-to-b from-[#2A1845] via-[#1E1136] to-[#120B24] p-3 shadow-lg">
          
          {/* Glowing Ambient Artwork Backdrop */}
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#FF7B54]/40 blur-lg" />
          <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-[#9B51E0]/40 blur-lg" />

          {/* Abstract Cinematic Illustration Elements */}
          <div className="relative h-20 sm:h-24 w-full rounded-xl overflow-hidden bg-gradient-to-tr from-[#160B29] via-[#351C5E] to-[#E85D3F] flex items-center justify-center border border-white/10">
            {/* Sun / Planet Glow */}
            <div className="absolute h-12 w-12 rounded-full bg-gradient-to-tr from-[#FFB300] to-[#FF4500] shadow-[0_0_20px_rgba(255,100,0,0.6)]" />
            {/* Horizon Silhouette */}
            <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-black via-black/80 to-transparent" />
            {/* Floating Star Badges */}
            <span className="absolute top-2 right-2 rounded-md bg-black/60 px-1.5 py-0.5 text-[6.5px] font-bold text-[#FFD65A] backdrop-blur-xs">
              ★ 4.9
            </span>
          </div>

          {/* Poster Card Metadata */}
          <div className="mt-2.5 flex items-center justify-between">
            <div>
              <div className="text-[9.5px] sm:text-[11px] font-bold tracking-tight text-white">
                Interstellar Horizon
              </div>
              <div className="text-[6.5px] sm:text-[7.5px] text-[#A6A6B8]">
                Sci-Fi • 4K HDR • 2h 24m
              </div>
            </div>

            {/* Watch CTA Button */}
            <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-[#111111] text-[8px] font-bold shadow-sm">
              ▶
            </div>
          </div>

        </div>
      </div>

      {/* Mini Thumbnails / Recommended Row */}
      <div className="px-3.5 mb-2">
        <div className="mb-1 text-[7px] sm:text-[8px] font-semibold text-[#8B8B9E]">
          Continue Watching
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {/* Card 1 */}
          <div className="h-10 sm:h-12 rounded-lg bg-gradient-to-br from-[#2D124D] to-[#140826] border border-white/10 p-1 flex flex-col justify-end">
            <div className="h-1 w-8 rounded-full bg-[#B18CFF]" />
          </div>
          {/* Card 2 */}
          <div className="h-10 sm:h-12 rounded-lg bg-gradient-to-br from-[#4A192C] to-[#1C060E] border border-white/10 p-1 flex flex-col justify-end">
            <div className="h-1 w-6 rounded-full bg-[#FF91D4]" />
          </div>
          {/* Card 3 */}
          <div className="h-10 sm:h-12 rounded-lg bg-gradient-to-br from-[#0B3830] to-[#041714] border border-white/10 p-1 flex flex-col justify-end">
            <div className="h-1 w-7 rounded-full bg-[#52D9AD]" />
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="h-8 sm:h-9 border-t border-white/10 bg-[#121217]/90 px-4 flex items-center justify-between backdrop-blur-md">
        <div className="h-1.5 w-1.5 rounded-full bg-[#B18CFF] shadow-[0_0_6px_#B18CFF]" />
        <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
        <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
        <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
      </div>

    </div>
  );
}
