"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Monitor, Tablet, Smartphone, Menu } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export default function ResponsiveShowcase() {
  return (
    <section className="py-16 md:py-28 bg-[#F8F8F5] select-none overflow-hidden">
      <div className="container-soluble">
        
        {/* =========================================================
            1. HEADER: HEADLINE & SUBTITLE
            ========================================================= */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-16 md:mb-24">
          {/* Main Headline */}
          <div>
            <Reveal>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-[-0.05em] text-[#111111] leading-[1.02]">
                <span className="relative inline-block px-1 mr-2">
                  {/* Soluble Rainbow Gradient Backing Pill */}
                  <span className="absolute inset-0 top-1 -bottom-1 -inset-x-2 rounded-xl bg-gradient-to-r from-soluble-yellow via-soluble-mint via-soluble-blue to-soluble-pink -z-10 opacity-90 shadow-xs" />
                  <span className="relative text-[#111111]">Optimized</span>
                </span>
                for <br />
                every screen size<span className="text-[#111111]">.</span>
              </h2>
            </Reveal>
          </div>

          {/* Subtitle / Paragraph on Right */}
          <div className="lg:pb-2">
            <Reveal delay={0.1}>
              <p className="max-w-md text-base sm:text-lg leading-relaxed text-[#555555]">
                We build responsive by default. Your site, app, or product looks and performs great on any device.
              </p>
            </Reveal>
          </div>
        </div>


        {/* =========================================================
            2. MAIN SHOWCASE: STATS (LEFT) + 3 DEVICES (RIGHT)
            ========================================================= */}
        <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-14 items-start">
          
          {/* Left Column: Stat Metrics */}
          <div className="space-y-12 sm:space-y-16">
            
            {/* Metric 1: >60% Mobile First */}
            <Reveal delay={0.15}>
              <div className="space-y-3">
                <div className="flex items-start gap-1">
                  <span className="text-5xl sm:text-6xl font-black tracking-tight text-[#111111]">
                    &gt;60
                  </span>
                  {/* Soluble Blue Circular % Badge */}
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-soluble-blue text-[12px] font-black text-white shadow-xs mt-1.5">
                    %
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[#555555] max-w-[220px]">
                  of your users will visit on mobile first. We design and build for that reality.
                </p>
              </div>
            </Reveal>

            {/* Metric 2: 1 second Extra Load Time */}
            <Reveal delay={0.25}>
              <div className="space-y-3">
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111]">
                  1 second
                </div>
                <p className="text-sm leading-relaxed text-[#555555] max-w-[230px]">
                  of extra load time can drop <strong className="font-bold text-[#111111]">conversion by up to 20%</strong>
                </p>
              </div>
            </Reveal>

          </div>


          {/* Right Column: 3 Screen Mockups (Desktop, Tablet, Phone) */}
          <div className="grid grid-cols-1 md:grid-cols-[1.35fr_0.95fr_0.7fr] gap-6 items-end">
            
            {/* =========================================================
                DEVICE 1: DESKTOP MOCKUP
                ========================================================= */}
            <Reveal delay={0.15} className="w-full">
              <div className="space-y-3">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[16/10.5] w-full rounded-2xl bg-[#0F0F12] p-2.5 sm:p-3.5 text-white shadow-[0_20px_45px_rgba(0,0,0,0.18)] border border-[#222228] overflow-hidden flex flex-col justify-between"
                >
                  {/* Website Nav */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[7px] sm:text-[8px]">
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold tracking-wider text-soluble-mint">7UK</span>
                      <span className="text-[6px] text-white/50">GROUP UK</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2.5 text-white/60">
                      <span className="text-white">Home</span>
                      <span>Programs ▾</span>
                      <span>About Us</span>
                      <span>FAQ</span>
                      <span>Partner With Us</span>
                      <span>Contact Us</span>
                    </div>
                  </div>

                  {/* Desktop Hero Content */}
                  <div className="my-auto space-y-1.5 pt-1">
                    <h4 className="text-[12px] sm:text-[15px] font-black leading-[1.08] tracking-tight text-white">
                      Your Clear Path <br />
                      Into the UK Job <br />
                      Market..
                    </h4>

                    {/* Soluble Purple/Pink Gradient Divider Accent */}
                    <div className="h-0.5 w-3/4 rounded-full bg-gradient-to-r from-soluble-purple via-soluble-pink to-transparent" />

                    <p className="text-[6px] sm:text-[7px] text-white/60 max-w-[180px] leading-snug">
                      Built for international students who are serious about working in the UK. Structured Guidance. Real access and mentor support.
                    </p>

                    <div className="pt-1">
                      <span className="rounded-md bg-soluble-mint px-2 py-0.5 text-[6.5px] font-bold text-[#111111]">
                        EXPLORE PROGRAMS
                      </span>
                    </div>
                  </div>

                  {/* Floating Mentors Avatars / Bottom Slogan */}
                  <div className="relative pt-1 flex items-center justify-between border-t border-white/5">
                    <span className="text-[6.5px] sm:text-[7.5px] font-bold text-white/90">
                      Structure creates clarity.
                    </span>
                    {/* Floating Avatar Circles */}
                    <div className="flex items-center gap-1">
                      <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-soluble-yellow to-soluble-pink border border-white/20" />
                      <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-soluble-blue to-soluble-purple border border-white/20" />
                    </div>
                  </div>
                </motion.div>

                {/* Device Label Tag with Soluble Mint Accent */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-soluble-mint/25 text-[#0F634A]">
                    <Monitor className="h-3 w-3" />
                  </div>
                  <span className="text-xs font-semibold text-[#333333]">Desktop</span>
                </div>
              </div>
            </Reveal>


            {/* =========================================================
                DEVICE 2: TABLET MOCKUP
                ========================================================= */}
            <Reveal delay={0.25} className="w-full">
              <div className="space-y-3">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[3/4] w-full rounded-2xl bg-[#0F0F12] p-3 text-white shadow-[0_20px_45px_rgba(0,0,0,0.18)] border border-[#222228] overflow-hidden flex flex-col justify-between"
                >
                  {/* Tablet Nav */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[7px]">
                    <div className="flex items-center gap-1">
                      <span className="font-extrabold text-soluble-mint">7UK</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[6.5px] text-white/60">
                      <span>Home</span>
                      <span>Programs ▾</span>
                      <span>About Us</span>
                    </div>
                  </div>

                  {/* Tablet Hero Content */}
                  <div className="space-y-2 my-auto">
                    <h4 className="text-[13px] sm:text-[14px] font-black leading-[1.08] tracking-tight text-white">
                      Your Clear Path <br />
                      Into the UK Job <br />
                      Market..
                    </h4>

                    {/* Soluble Purple bar */}
                    <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-soluble-purple via-soluble-blue to-transparent" />

                    <p className="text-[6.5px] text-white/60 leading-snug">
                      Built for international students who are serious about working in the UK.
                    </p>

                    <div>
                      <span className="rounded-md bg-soluble-mint px-2 py-0.5 text-[6.5px] font-bold text-[#111111]">
                        EXPLORE PROGRAMS
                      </span>
                    </div>

                    {/* Avatars */}
                    <div className="flex items-center gap-1.5 pt-1">
                      <div className="h-4 w-4 rounded-full bg-soluble-yellow border border-white/20" />
                      <div className="h-4 w-4 rounded-full bg-soluble-purple border border-white/20" />
                      <div className="h-4 w-4 rounded-full bg-soluble-blue border border-white/20" />
                    </div>
                  </div>

                  {/* Bottom Slogan with Pill */}
                  <div className="pt-2 border-t border-white/5">
                    <div className="text-[7.5px] font-bold text-white leading-tight">
                      Structure creates clarity.
                    </div>
                    <div className="flex items-center gap-1 text-[7.5px] text-white/80">
                      <span>Clarity builds</span>
                      <span className="rounded-full bg-soluble-purple px-1.5 py-0.2 text-[6.5px] font-bold text-white">
                        careers.
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Device Label Tag with Soluble Mint Accent */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-soluble-mint/25 text-[#0F634A]">
                    <Tablet className="h-3 w-3" />
                  </div>
                  <span className="text-xs font-semibold text-[#333333]">Tablet</span>
                </div>
              </div>
            </Reveal>


            {/* =========================================================
                DEVICE 3: PHONE MOCKUP
                ========================================================= */}
            <Reveal delay={0.35} className="w-full">
              <div className="space-y-3">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[9/18.5] w-full rounded-2xl bg-[#0F0F12] p-2.5 text-white shadow-[0_20px_45px_rgba(0,0,0,0.18)] border border-[#222228] overflow-hidden flex flex-col justify-between"
                >
                  {/* Phone Header & Hamburger */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                    <span className="font-extrabold text-[8px] text-soluble-mint">7UK</span>
                    <Menu className="h-2.5 w-2.5 text-white/70" />
                  </div>

                  {/* Phone Content */}
                  <div className="space-y-1.5 my-auto">
                    <h4 className="text-[10.5px] font-black leading-[1.08] tracking-tight text-white">
                      Your Clear Path <br />
                      Into the UK Job <br />
                      Market..
                    </h4>

                    {/* Soluble Purple bar */}
                    <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-soluble-purple to-transparent" />

                    <p className="text-[5.5px] text-white/60 leading-snug">
                      Built for international students who are serious about working in the UK.
                    </p>

                    <div>
                      <span className="rounded-md bg-soluble-mint px-1.5 py-0.5 text-[5.5px] font-bold text-[#111111]">
                        EXPLORE PROGRAMS
                      </span>
                    </div>

                    {/* Avatars */}
                    <div className="flex items-center gap-1 pt-1">
                      <div className="h-3.5 w-3.5 rounded-full bg-soluble-yellow border border-white/20" />
                      <div className="h-3.5 w-3.5 rounded-full bg-soluble-purple border border-white/20" />
                    </div>
                  </div>

                  {/* Bottom tagline */}
                  <div className="pt-1.5 border-t border-white/5 text-[6px]">
                    <span className="text-white/80">Structure creates clarity.</span>
                    <div className="flex items-center gap-0.5">
                      <span className="text-white/80">Clarity builds</span>
                      <span className="rounded-full bg-soluble-purple px-1 text-[5px] font-bold text-white">
                        careers.
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Device Label Tag with Soluble Mint Accent */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-soluble-mint/25 text-[#0F634A]">
                    <Smartphone className="h-3 w-3" />
                  </div>
                  <span className="text-xs font-semibold text-[#333333]">Phone</span>
                </div>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}
