"use client";

import { motion } from "motion/react";
import { Search, Star, Bookmark, Play } from "lucide-react";

export default function CineVerseShowcaseVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[480px] rounded-2xl overflow-hidden bg-[#F5F3EF] flex items-center justify-center p-4 sm:p-8 select-none">
      
      {/* Colorful Pastel Organic Blob Shapes Backdrop */}
      <div className="absolute top-10 left-12 h-56 w-56 rounded-full bg-[#FFD65A]/45 blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 right-8 h-64 w-64 rounded-full bg-[#B18CFF]/45 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 left-16 h-48 w-48 rounded-full bg-[#6C8CFF]/35 blur-3xl pointer-events-none" />

      {/* Floating Hand-drawn Doodle Squiggles */}
      <div className="absolute top-8 left-8 text-[#111111] pointer-events-none">
        <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
          <path d="M 6 12 C 14 6, 20 20, 24 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-6 text-[#111111] pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M 8 4 C 18 10, 6 18, 16 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Overlapping Dual Mobile Phones Composition */}
      <div className="relative w-full max-w-[420px] h-[360px] sm:h-[400px] flex items-center justify-center">
        
        {/* =========================================================
            PHONE 1: Movie Discovery Screen (Tilted Left)
            ========================================================= */}
        <motion.div
          whileHover={{ y: -8, rotate: -4 }}
          transition={{ duration: 0.4 }}
          className="absolute left-2 sm:left-6 top-4 sm:top-6 z-10 w-[180px] sm:w-[210px] aspect-[9/19] rounded-[28px] sm:rounded-[32px] bg-[#0A0A0E] p-2 border-[5px] sm:border-[6px] border-[#18181F] shadow-[0_20px_45px_rgba(0,0,0,0.22)] -rotate-3"
        >
          <div className="relative w-full h-full rounded-[22px] sm:rounded-[26px] bg-[#0F0F14] p-3 text-white flex flex-col justify-between overflow-hidden">
            
            {/* Top Island & App Header */}
            <div>
              <div className="mx-auto h-2.5 w-12 rounded-full bg-[#1A1A22] mb-2" />
              <div className="flex items-center justify-between text-[8px] text-gray-400">
                <span className="font-extrabold text-white text-[9.5px]">CineVerse</span>
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-white/10" />
                  <div className="h-3 w-3 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Discovery Title */}
              <div className="mt-2 text-[11px] sm:text-[12px] font-extrabold leading-tight text-white">
                Discover <br />
                Movies You&apos;ll Love
              </div>

              {/* Search Bar */}
              <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-white/10 px-2 py-1 text-[7px] text-gray-400 border border-white/5">
                <Search className="h-2.5 w-2.5 text-gray-400" />
                <span>Search movies, actors...</span>
              </div>

              {/* Category Filter Pills */}
              <div className="mt-2 flex gap-1 overflow-hidden">
                <span className="rounded-full bg-[#B18CFF] px-2 py-0.5 text-[6.5px] font-bold text-[#111111]">
                  Popular
                </span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[6.5px] font-medium text-gray-300">
                  Top Rated
                </span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[6.5px] font-medium text-gray-300">
                  Upcoming
                </span>
              </div>
            </div>

            {/* Movie Poster Cards Row */}
            <div className="my-auto grid grid-cols-3 gap-1.5">
              {/* Dune */}
              <div className="aspect-[2/3] rounded-lg bg-gradient-to-t from-[#8E44AD] to-[#E67E22] p-1 flex flex-col justify-end border border-white/10 shadow-xs">
                <span className="text-[6px] font-bold text-white leading-tight">Dune</span>
              </div>
              {/* Interstellar */}
              <div className="aspect-[2/3] rounded-lg bg-gradient-to-t from-[#1F3A93] to-[#00E676] p-1 flex flex-col justify-end border border-white/10 shadow-xs scale-105 ring-1 ring-[#B18CFF]">
                <span className="text-[6px] font-bold text-white leading-tight">Interstellar</span>
              </div>
              {/* Spiderman */}
              <div className="aspect-[2/3] rounded-lg bg-gradient-to-t from-[#C0392B] to-[#2980B9] p-1 flex flex-col justify-end border border-white/10 shadow-xs">
                <span className="text-[6px] font-bold text-white leading-tight">Spider-Man</span>
              </div>
            </div>

            {/* Bottom Tab Bar */}
            <div className="flex items-center justify-around border-t border-white/10 pt-1.5 text-[7px] text-gray-400">
              <span className="text-[#B18CFF] font-bold">●</span>
              <span>★</span>
              <span>👤</span>
            </div>

          </div>
        </motion.div>


        {/* =========================================================
            PHONE 2: Movie Detail Screen (Tilted Right Overlapping)
            ========================================================= */}
        <motion.div
          whileHover={{ y: -10, rotate: 5 }}
          transition={{ duration: 0.4 }}
          className="absolute right-2 sm:right-6 top-1 sm:top-2 z-20 w-[185px] sm:w-[215px] aspect-[9/19] rounded-[28px] sm:rounded-[32px] bg-[#0A0A0E] p-2 border-[5px] sm:border-[6px] border-[#18181F] shadow-[0_25px_50px_rgba(0,0,0,0.28)] rotate-4"
        >
          <div className="relative w-full h-full rounded-[22px] sm:rounded-[26px] bg-[#12121A] text-white flex flex-col justify-between overflow-hidden">
            
            {/* Cinematic Backdrop Visual */}
            <div className="relative h-40 w-full overflow-hidden bg-gradient-to-b from-[#1C162E] via-[#2A1E4A] to-[#12121A] p-2.5 flex flex-col justify-between">
              
              {/* Top controls */}
              <div className="flex items-center justify-between">
                <div className="h-4 w-4 rounded-full bg-black/40 flex items-center justify-center text-[7px]">
                  ←
                </div>
                <div className="h-4 w-4 rounded-full bg-black/40 flex items-center justify-center text-[7px]">
                  <Bookmark className="h-2.5 w-2.5" />
                </div>
              </div>

              {/* Silhouette & Title in Backdrop */}
              <div className="mt-auto">
                <div className="flex items-center gap-1">
                  <span className="flex items-center text-[7px] font-bold text-[#FFD65A]">
                    <Star className="h-2 w-2 fill-current mr-0.5" /> 8.8
                  </span>
                  <span className="text-[6.5px] text-gray-400">• Sci-Fi / Action</span>
                </div>
                <div className="text-[13px] font-black tracking-tight text-white leading-tight">
                  Inception
                </div>
              </div>

            </div>

            {/* Movie Info & CTA Content */}
            <div className="p-2.5 space-y-2">
              
              {/* Summary skeleton lines */}
              <p className="text-[6.5px] leading-relaxed text-gray-300">
                A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.
              </p>

              {/* Add to Watchlist CTA Button */}
              <button className="w-full rounded-xl bg-gradient-to-r from-[#8C52FF] to-[#6C8CFF] py-2 text-[8px] font-bold text-white shadow-md flex items-center justify-center gap-1">
                <span>Add to Watchlist</span>
              </button>

              {/* Secondary action */}
              <button className="w-full rounded-xl bg-white/10 py-1.5 text-[7.5px] font-semibold text-white/90 border border-white/10 flex items-center justify-center gap-1">
                <Play className="h-2.5 w-2.5 fill-current" /> Watch Trailer
              </button>

            </div>

          </div>
        </motion.div>

      </div>

    </div>
  );
}
