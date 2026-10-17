"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Lightbulb,
  Globe,
  Smartphone,
  Code2,
  MoreHorizontal,
  PenTool,
  Calendar,
  IndianRupee,
  Target,
  Users,
  BarChart3,
  FileText,
  ImageIcon,
  Play,
  Link2,
  Sparkles,
} from "lucide-react";
import {
  DoodleArrow,
  BurstTicks,
  DoodleStar,
  StickyNote,
  DoodleCircle,
  DoodleSwirl,
} from "./ContactDoodles";
import Spark from "@/components/graphics/Spark";

/* =========================================================
   ENTRY HERO GRAPHIC (Good Ideas, Better Conversations)
   ========================================================= */
export function EntryHeroGraphic() {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-[380px] md:h-[430px] pointer-events-none select-none">
      {/* Dynamic Connecting Curvy Line with animated stroke drawing */}
      <svg
        viewBox="0 0 1000 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[320px] z-0 overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M 120 180 C 173.146 205.132 169.949 234.35 167.316 267.489 C 160.295 355.851 148.875 375.545 208.891 392.281 C 243.262 401.866 209.911 486.795 256.995 491.127 M 742.864 527.307 C 754.207 539.646 838.075 519.63 850.26 454.479 C 862.445 389.328 877.012 360.721 943.487 345.152 C 992.541 337.619 1043.923 312.357 1018.948 250.614 C 993.973 188.871 970.282 191.171 970.282 191.171"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
        {/* Node Circle 1 - springs up when line passes */}
        <motion.circle
          cx="167"
          cy="280"
          r="9"
          fill="#FF91D4"
          stroke="#111111"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 450,
            damping: 15,
          }}
        />
        {/* Node Circle 2 */}
        <motion.circle
          cx="850"
          cy="450"
          r="7"
          fill="#7C98FF"
          stroke="#111111"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.85,
            type: "spring",
            stiffness: 450,
            damping: 15,
          }}
        />
      </svg>

      {/* ================= LEFT CLUSTER ================= */}
      {/* Lightbulb 3D Frosted Card with spring stamp-down */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -24, rotate: -14 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: -6 }}
        transition={{ type: "spring", stiffness: 340, damping: 22, delay: 0.2 }}
        className="absolute top-12 left-4 sm:left-12 lg:left-24 z-10"
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-background/50 via-soluble-pink/90 to-background/50 backdrop-blur-md border border-pink-200/60 shadow-[0_16px_36px_rgba(255,145,212,0.22)] flex items-center justify-center p-4">
          <Lightbulb className="w-12 h-12 text-[#111111] stroke-[2]" />
          {/* Burst ticks around lightbulb */}
          <BurstTicks
            className="absolute -top-5 -right-5 w-8 h-8 text-soluble-pink rotate-45"
            color="#FF91D4"
            delay={0.4}
          />
        </div>
      </motion.div>

      {/* Note: YOUR IDEA STARTS HERE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -15 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 20,
          delay: 0.35,
        }}
        className="absolute top-0 left-2 sm:left-8 lg:-left-5 z-20"
      >
        <span className="font-caveat text-sm sm:text-base font-bold text-[#111111] leading-tight block uppercase tracking-wide -rotate-22 text-center">
          Your <br /> Idea
          <br /> Starts <br /> Here.
        </span>
        <DoodleArrow
          direction="down-left"
          className="w-14 h-14 mt-1 -rotate-90 translate-x-10"
          delay={0.45}
        />
      </motion.div>

      {/* Blue pebble - blooming watercolor spring */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
        transition={{
          scale: { type: "spring", stiffness: 280, damping: 20, delay: 0.25 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
        }}
        className="absolute top-44 left-0 sm:left-4 lg:top-48 lg:-left-6 w-36 h-20 rounded-[45%_55%_60%_40%/50%_60%_40%_50%] bg-soluble-blue backdrop-blur-xs -rotate-12"
      />

      {/* Yellow sticky note: IDEA, GOALS, NEXT STEPS */}
      <div className="absolute top-76 left-6 sm:left-16 lg:-left-10 z-20">
        <StickyNote
          rotate="-rotate-6"
          className="w-28 sm:w-32 py-3 px-3 shadow-md"
          delay={0.4}
        >
          <ul className="text-xs sm:text-sm font-bold tracking-tight text-[#111111] space-y-1">
            <li className="flex items-center gap-1.5">
              <span>✓</span>
              <span>IDEA</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span>✓</span>
              <span>GOALS</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span>✓</span>
              <span>NEXT STEPS</span>
            </li>
          </ul>
        </StickyNote>
      </div>

      {/* ================= RIGHT CLUSTER ================= */}
      {/* Purple & Mint pebbles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, 8, 0] }}
        transition={{
          scale: { type: "spring", stiffness: 280, damping: 20, delay: 0.2 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
        }}
        className="absolute top-8 right-16 sm:right-28 lg:right-32 w-24 h-32 rounded-[55%_45%_50%_50%/60%_40%_60%_40%] bg-soluble-purple rotate-25 z-0"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -8, 0] }}
        transition={{
          scale: { type: "spring", stiffness: 280, damping: 20, delay: 0.3 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
        }}
        className="absolute top-2 right-8 sm:right-16 lg:right-10 w-24 h-36 rounded-[40%_60%_55%_45%/50%_50%_50%_50%] bg-soluble-mint rotate-12 z-0"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 450, damping: 18, delay: 0.4 }}
        className="absolute top-44 right-40 sm:right-30 w-7 h-7 rounded-full bg-[#FFD66B] z-0"
      />

      {/* Browser window frosted card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -20, rotate: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 4 }}
        transition={{ type: "spring", stiffness: 340, damping: 22, delay: 0.3 }}
        className="absolute bottom-10 right-4 sm:right-14 lg:right-4 z-10"
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-linear-to-br from-white/80 via-foreground/10 to-white/80 backdrop-blur-md border border-white/70 shadow-[0_16px_36px_rgba(0,0,0,0.06)] flex flex-col justify-center items-center p-4">
          <div className="w-14 h-11 border-3 border-[#111111] rounded-[5px] p-1 flex flex-col items-center justify-start">
            <div className="flex items-center justify-end gap-1 border-b-3 border-foreground w-14 h-3 -mt-[3px]">
              <div className="w-1 h-1 rounded-full bg-[#111111]" />
              <div className="w-1 h-1 rounded-full bg-[#111111] mr-1.5" />
            </div>
          </div>
          {/* Burst ticks */}
          <BurstTicks
            className="absolute -bottom-8 -right-8 w-12 h-12 text-[#65DDB5] rotate-135"
            color="#65DDB5"
            delay={0.5}
          />
        </div>
      </motion.div>

      {/* Mint circle behind browser card */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.28,
        }}
        className="absolute bottom-0 right-20 sm:right-32 w-28 h-28 rounded-full bg-[#65DDB5]/70 -z-10"
      />

      {/* Note: REAL SOLUTIONS TOGETHER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 15 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 20,
          delay: 0.45,
        }}
        className="absolute top-40 right-2 sm:right-6 lg:-right-12 z-20 text-left space-y-4"
      >
        <span className="font-caveat text-sm sm:text-lg font-bold text-black leading-tight block uppercase tracking-wide -rotate-12">
          Real
          <br />
          Solutions
          <br />
          Together.
        </span>
        <DoodleArrow
          direction="down-right"
          className="w-14 h-14 mt-1 ml-auto rotate-65"
          delay={0.55}
        />
      </motion.div>
    </div>
  );
}

/* =========================================================
   STEP 01 GRAPHIC (Tell us about you)
   ========================================================= */
export function Step01Graphic() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md h-[250px] sm:h-[280px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background watercolor blobs bloom out */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        className="absolute bottom-[-70%] left-[-50%] w-52 h-52 rounded-full bg-linear-to-bl from-background to-50% to-soluble-mint"
      />
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          delay: 0.15,
        }}
        className="absolute top-8 left-32 w-28 h-36 rounded-[50%_50%_45%_55%/60%_40%_60%_40%] bg-linear-to-tl from-background to-60% to-soluble-blue rotate-25"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 450, damping: 18, delay: 0.4 }}
        className="absolute top-14 -left-28 w-12 h-12 rounded-full bg-soluble-yellow z-0"
      />
      <Spark className="absolute top-36 -left-10 w-7 h-7 text-soluble-purple" color="#B18CFF" delay={1}/>

      {/* Hand-drawn loop doodle connecting to avatar: draws itself */}
      <svg
        viewBox="-40 -10 300 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-50%] inset-0 w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M 13.83 206.862 C 31.513 206.058 -6.047 124.283 62.174 175.092 C 130.395 225.901 127.846 193.327 118.091 170.139 C 108.336 146.951 78.681 134.866 111.606 101.381"
          stroke="#111111"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
            opacity: { duration: 0.1, delay: 0.1 },
          }}
        />
        <motion.circle
          cx="70"
          cy="180"
          r="5"
          fill="#65DDB5"
          stroke="#111111"
          strokeWidth="1.2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
        />
        <motion.path
          d="M 257.328 55.335 C 302.98 26.26 316.623 21.45 321.472 72.297 C 334 203.677 370.496 130.635 369 129.99"
          stroke="#111111"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
            opacity: { duration: 0.1, delay: 0.1 },
          }}
        />
        <motion.circle
          cx="318"
          cy="50"
          r="5"
          fill="#9DB1FC"
          stroke="#111111"
          strokeWidth="1.2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
        />
      </svg>

      {/* Main Avatar Frosted Card with bouncy stamp-down */}
      <motion.div
        initial={{ scale: 0.65, opacity: 0, y: -24, rotate: -12 }}
        animate={{ scale: 1, opacity: 1, y: 0, rotate: -3 }}
        transition={{ type: "spring", stiffness: 360, damping: 22, delay: 0.2 }}
        className="absolute left-10 bottom-8 z-10 -rotate-10"
      >
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl bg-white border border-white/80 shadow-[0_16px_36px_rgba(255,145,212,0.24)] p-4 flex justify-center items-center -rotate-4">
            {/* User icon with drawing outline */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center">
              {/*User Icon*/}
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="w-14 h-14"
                aria-hidden="true"
              >
                <motion.circle
                  cx="24"
                  cy="16"
                  r="8"
                  stroke="#111111"
                  strokeWidth="2.5"
                />
                <motion.path
                  d="M 10 40 C 10 30, 16 28, 24 28 C 32 28, 38 30, 38 40"
                  stroke="#111111"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          {/* Subtle pink back shadow plate */}
          <div className="absolute inset-0 -left-7 -bottom-2 w-36 h-36 sm:w-40 sm:h-40 rounded-3xl bg-linear-to-tr from-background to-soluble-pink -z-10" />

          <BurstTicks
            className="absolute -top-14 left-12 -rotate-20 w-10 h-10 text-[#111111]"
            color="#111111"
            delay={0.45}
          />
        </div>
      </motion.div>

      {/* Yellow sticky note: NICE TO MEET YOU! - :) */}
      <div className="absolute -bottom-10 left-28 sm:left-40 z-20">
        <StickyNote
          rotate="rotate-6"
          className="w-28 sm:w-32 py-2.5 px-3 text-center"
          delay={0.35}
        >
          <p className="font-bold text-xs sm:text-base tracking-normal text-[#111111] leading-tight text-left ml-2 mt-1">
            NICE
            <br />
            TO
            <br />
            MEET YOU!
            <br />
            <span className="mt-0.5 text-base tracking-widest flex items-center justify-evenly">— <span className="block rotate-90 font-outfit">:)</span></span>
          </p>
        </StickyNote>
      </div>

      {/* Handwritten note: JUST A FEW DETAILS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.4 }}
        className="absolute bottom-16 right-4 sm:right-8 z-20 text-left"
      >
        <span className="font-caveat text-sm sm:text-base font-bold text-[#111111] leading-tight block uppercase">
          Just
          <br />A Few
          <br />
          Details.
        </span>
      </motion.div>

      {/* Top right note: GOOD IDEAS START HERE */}
      
    </div>
  );
}

/* =========================================================
   STEP 02 GRAPHIC (What do you need?)
   ========================================================= */
export function Step02Graphic() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md h-[250px] sm:h-[280px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background blobs bloom out */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1}}
        transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.1 }}
        className="absolute bottom-[-65%] left-[-50%] w-52 h-52 rounded-full bg-soluble-yellow"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          delay: 0.15,
        }}
        className="absolute bottom-[-28%] right-24 w-28 h-28 rounded-[65%_35%_70%_30%/70%_30%_65%_35%] bg-soluble-mint "
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.2 }}
        className="absolute bottom-18 left-[-15%] w-16 h-16 rounded-[25%_80%_25%_50%/65%_70%_50%_40%] bg-soluble-pink"
      />

      {/* Playful hand-drawn swirl connecting the cluster */}
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full -z-5 overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M 50 80 C 100 30, 180 50, 170 120 C 160 190, 80 180, 70 140 C 60 100, 130 90, 160 130"
          stroke="#111111"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{
            pathLength: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
            opacity: { duration: 0.1, delay: 0.15 },
          }}
        />
      </svg>

      {/* Top Left Note: WE TURN IDEAS INTO WEBSITES, APPS AND MORE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.2 }}
        className="absolute top-[-16%] left-0 sm:left-[-24%] z-20"
      >
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] tracking-wide block uppercase -rotate-20 mb-4 -ml-2">
          We turn
          <br />
          ideas into
          <br />
          websites,
          <br />
          apps and
          <br />
          more.
        </span>
        <DoodleArrow
          direction="down-left"
          className="w-10 h-10 mt-1 ml-4 -rotate-94"
          delay={0.35}
        />
      </motion.div>

      {/* Clustered Pastel App Cards with staggered creative spring pops */}
      <div className="relative w-56 h-56 z-10">
        {/* Pink Globe card */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: -16, rotate: -16 }}
          animate={{ scale: 1, opacity: 1, y: [0, -4, 0], rotate: -10 }}
          transition={{
            scale: { type: "spring", stiffness: 360, damping: 20, delay: 0.12 },
            opacity: { duration: 0.1, delay: 0.12 },
            rotate: {
              type: "spring",
              stiffness: 360,
              damping: 20,
              delay: 0.12,
            },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
          className="absolute top-2 left-[-55%] w-32 h-30 rounded-lg bg-linear-to-br from-background to-soluble-pink shadow-md flex items-center justify-center cursor-default"
        >
          <Globe className="w-12 h-12 text-[#111111]" strokeWidth={1.6}/>
        </motion.div>

        {/* White Phone card */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: -16, rotate: 16 }}
          animate={{ scale: 1, opacity: 1, y: [0, 4, 0], rotate: 8 }}
          transition={{
            scale: { type: "spring", stiffness: 360, damping: 20, delay: 0.18 },
            opacity: { duration: 0.1, delay: 0.18 },
            rotate: {
              type: "spring",
              stiffness: 360,
              damping: 20,
              delay: 0.18,
            },
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.55,
            },
          }}
          className="absolute top-6 right-12 w-30 h-28 rounded-lg bg-white border border-gray-200 shadow-lg flex items-center justify-center cursor-default"
        >
          <Smartphone className="w-10 h-10 text-[#111111]" />
        </motion.div>

        {/* Blue Code card */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: -14, rotate: 12 }}
          animate={{ scale: 1, opacity: 1, y: [0, -5, 0], rotate: 5 }}
          transition={{
            scale: { type: "spring", stiffness: 360, damping: 20, delay: 0.24 },
            opacity: { duration: 0.1, delay: 0.24 },
            rotate: {
              type: "spring",
              stiffness: 360,
              damping: 20,
              delay: 0.24,
            },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
          }}
          className="absolute bottom-4 left-[-10%] w-28 h-24 rounded-lg bg-linear-to-r from-[#CCD9FB] to-soluble-blue shadow-md flex items-center justify-center z-10 cursor-default"
        >
          <Code2 className="w-9 h-9 text-[#111111]" />
        </motion.div>

        {/* Mint Dots card */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: -12, rotate: -24 }}
          animate={{ scale: 1, opacity: 1, y: [0, 3, 0], rotate: -20 }}
          transition={{
            scale: { type: "spring", stiffness: 360, damping: 20, delay: 0.3 },
            opacity: { duration: 0.1, delay: 0.3 },
            rotate: { type: "spring", stiffness: 360, damping: 20, delay: 0.3 },
            y: {
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.65,
            },
          }}
          className="absolute bottom-[-20%] left-16 w-24 h-24 rounded-lg backdrop-blur-md via- shadow-md flex items-center justify-center cursor-default z-50"
        >
          <MoreHorizontal className="w-8 h-8 text-[#111111]" />
        </motion.div>

        {/* Yellow Pencil card */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: -12, rotate: 20 }}
          animate={{ scale: 1, opacity: 1, y: [0, -3, 0], rotate: 12 }}
          transition={{
            scale: { type: "spring", stiffness: 360, damping: 20, delay: 0.36 },
            opacity: { duration: 0.1, delay: 0.36 },
            rotate: {
              type: "spring",
              stiffness: 360,
              damping: 20,
              delay: 0.36,
            },
            y: {
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            },
          }}
          className="absolute bottom-[-34%] left-[-30%] w-24 h-22 rounded-lg bg-linear-to-bl from-background to-soluble-yellow shadow-md flex items-center justify-center cursor-default"
        >
          <PenTool className="w-8 h-8 text-[#111111]" />
        </motion.div>

        {/* Burst marks around cluster */}
        <BurstTicks
          className="absolute top-[-6%] right-1 w-14 h-14 text-[#111111] rotate-34"
          color="#111111"
          delay={0.4}
        />
        <BurstTicks
          className="absolute -bottom-24 left-14 w-10 h-10 text-[#111111] rotate-200"
          color="#111111"
          delay={0.48}
        />
      </div>

      {/* Bottom Right Note: PICK WHAT FITS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 20,
          delay: 0.45,
        }}
        className="absolute bottom-10 right-4 sm:right-8 z-20 text-right"
      >
        <DoodleArrow
          direction="up-left"
          className="w-8 h-8 mb-1 ml-auto -rotate-12"
          delay={0.55}
        />
        <span className="font-caveat text-sm sm:text-base font-bold text-[#111111] leading-tight block uppercase">
          Pick
          <br />
          What
          <br />
          Fits.
        </span>
      </motion.div>
    </div>
  );
}

/* =========================================================
   STEP 03 GRAPHIC (Help us understand the scope)
   ========================================================= */
export function Step03Graphic() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md h-[250px] sm:h-[280px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background blobs bloom out */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.1 }}
        className="absolute top-16 left-6 w-24 h-24 rounded-full bg-[#FFD66B]/60 "
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          delay: 0.15,
        }}
        className="absolute bottom-8 left-2 w-32 h-32 rounded-full bg-[#A98BFF]/35"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.2 }}
        className="absolute bottom-16 right-16 w-20 h-20 rounded-full bg-[#7C98FF]/50 "
      />

      {/* Hand-drawn scope bracket / timeline curve that draws across */}
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full -z-5 overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M 40 180 C 70 210, 160 210, 200 160 C 220 130, 200 80, 150 70"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="5 7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{
            pathLength: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
            opacity: { duration: 0.1, delay: 0.15 },
          }}
        />
      </svg>

      {/* Top Left Note: NO PRESSURE JUST A BALLPARK */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.2 }}
        className="absolute top-6 left-0 sm:left-4 z-20"
      >
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] leading-tight block uppercase">
          No
          <br />
          pressure
          <br />
          just a<br />
          ballpark.
        </span>
        <DoodleArrow
          direction="down-right"
          className="w-8 h-8 mt-1 rotate-12"
          delay={0.35}
        />
      </motion.div>

      {/* Clustered Scope Cards with spring stamp-downs */}
      <div className="relative w-56 h-56 z-10 flex items-center justify-center">
        {/* Calendar frosted card */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: -20, rotate: -14 }}
          animate={{ scale: 1, opacity: 1, y: [0, -4, 0], rotate: -6 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.15 },
            opacity: { duration: 0.1, delay: 0.15 },
            rotate: {
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.15,
            },
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            },
          }}
          className="absolute -top-2 left-2 w-26 h-28 rounded-3xl bg-white/90 backdrop-blur-md border border-white/80 shadow-xl flex items-center justify-center z-10 cursor-default"
        >
          <Calendar className="w-10 h-10 text-[#111111] stroke-[2]" />
          <BurstTicks
            className="absolute -top-3 right-2 w-7 h-7 text-[#111111]"
            color="#111111"
            delay={0.4}
          />
        </motion.div>

        {/* Mint Rupee card */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: -16, rotate: 16 }}
          animate={{ scale: 1, opacity: 1, y: [0, 4, 0], rotate: 6 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.22 },
            opacity: { duration: 0.1, delay: 0.22 },
            rotate: {
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.22,
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.65,
            },
          }}
          className="absolute top-10 right-4 w-24 h-24 rounded-3xl bg-[#E0FAF0] border border-emerald-200 shadow-lg flex items-center justify-center cursor-default"
        >
          <IndianRupee className="w-10 h-10 text-[#111111] stroke-[2.5]" />
        </motion.div>

        {/* Yellow Target card */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: 16, rotate: -14 }}
          animate={{ scale: 1, opacity: 1, y: [0, -3, 0], rotate: -6 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.3 },
            opacity: { duration: 0.1, delay: 0.3 },
            rotate: { type: "spring", stiffness: 350, damping: 20, delay: 0.3 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
          }}
          className="absolute bottom-0 right-10 w-26 h-20 rounded-3xl bg-[#FEF3C7] border border-amber-200 shadow-lg flex items-center justify-center cursor-default"
        >
          <Target className="w-10 h-10 text-[#111111] stroke-[2]" />
          <BurstTicks
            className="absolute -bottom-3 left-2 w-7 h-7 text-[#111111] rotate-180"
            color="#111111"
            delay={0.48}
          />
        </motion.div>
      </div>

      {/* Top Right Note: THIS HELPS US PLAN BETTER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 20,
          delay: 0.35,
        }}
        className="absolute top-10 right-2 sm:right-6 z-20 text-right"
      >
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] leading-tight block uppercase">
          This
          <br />
          helps us
          <br />
          plan
          <br />
          better.
        </span>
        <DoodleArrow
          direction="down-left"
          className="w-8 h-8 mt-1 ml-auto -rotate-12"
          delay={0.45}
        />
      </motion.div>
    </div>
  );
}

/* =========================================================
   STEP 04 GRAPHIC (Tell us about your business and users)
   ========================================================= */
export function Step04Graphic() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md h-[250px] sm:h-[280px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background blobs bloom out */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.1 }}
        className="absolute bottom-6 left-0 w-36 h-36 rounded-full bg-[#FF91D4]/40"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 16,
          delay: 0.16,
        }}
        className="absolute top-16 left-6 w-14 h-14 rounded-full bg-[#FFD66B]"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.2 }}
        className="absolute top-24 right-4 w-28 h-28 rounded-full bg-[#65DDB5]/40"
      />

      {/* Hand-drawn network connecting doodle */}
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full -z-5 overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M 50 70 C 80 50, 140 60, 160 80 C 180 100, 170 160, 140 180 C 110 200, 60 170, 70 130"
          stroke="#111111"
          strokeWidth="2"
          strokeDasharray="4 5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.65 }}
          transition={{
            pathLength: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
            opacity: { duration: 0.1, delay: 0.15 },
          }}
        />
      </svg>

      {/* Top Left Note: WHO ARE YOUR USERS? */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.2 }}
        className="absolute top-6 left-0 sm:left-4 z-20"
      >
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] leading-tight block uppercase">
          Who
          <br />
          are your
          <br />
          users?
        </span>
        <DoodleArrow
          direction="down-right"
          className="w-8 h-8 mt-1 rotate-12"
          delay={0.35}
        />
      </motion.div>

      {/* Clustered Cards with staggered spring pop-ins */}
      <div className="relative w-56 h-56 z-10 flex items-center justify-center">
        {/* Pink Users card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: -16 }}
          animate={{ scale: 1, opacity: 1, y: [0, -4, 0], rotate: -6 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.14 },
            opacity: { duration: 0.1, delay: 0.14 },
            rotate: {
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.14,
            },
            y: {
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.55,
            },
          }}
          className="absolute top-2 left-4 w-22 h-22 rounded-3xl bg-[#FFE4F2] border border-pink-200 shadow-md flex items-center justify-center cursor-default"
        >
          <Users className="w-9 h-9 text-[#111111]" />
        </motion.div>

        {/* Blue Chart card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: 16 }}
          animate={{ scale: 1, opacity: 1, y: [0, 4, 0], rotate: 6 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.2 },
            opacity: { duration: 0.1, delay: 0.2 },
            rotate: { type: "spring", stiffness: 350, damping: 20, delay: 0.2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
          }}
          className="absolute top-4 right-4 w-22 h-22 rounded-3xl bg-[#E0ECFF] border border-blue-200 shadow-md flex items-center justify-center cursor-default"
        >
          <BarChart3 className="w-9 h-9 text-[#111111]" />
        </motion.div>

        {/* Yellow Target card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: 14, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, y: [0, -3, 0], rotate: 3 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.26 },
            opacity: { duration: 0.1, delay: 0.26 },
            rotate: {
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.26,
            },
            y: {
              duration: 4.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.65,
            },
          }}
          className="absolute bottom-4 left-6 w-22 h-22 rounded-3xl bg-[#FEF3C7] border border-amber-200 shadow-md flex items-center justify-center cursor-default"
        >
          <Target className="w-9 h-9 text-[#111111]" />
        </motion.div>

        {/* Mint Doc card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: 14, rotate: 14 }}
          animate={{ scale: 1, opacity: 1, y: [0, 3, 0], rotate: -6 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.32 },
            opacity: { duration: 0.1, delay: 0.32 },
            rotate: {
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.32,
            },
            y: {
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            },
          }}
          className="absolute bottom-6 right-6 w-20 h-20 rounded-3xl bg-[#E0FAF0] border border-emerald-200 shadow-md flex items-center justify-center cursor-default"
        >
          <FileText className="w-8 h-8 text-[#111111]" />
        </motion.div>

        {/* Burst ticks */}
        <BurstTicks
          className="absolute top-0 right-18 w-7 h-7 text-[#111111]"
          color="#111111"
          delay={0.4}
        />
        <BurstTicks
          className="absolute -bottom-3 left-18 w-7 h-7 text-[#111111] rotate-180"
          color="#111111"
          delay={0.46}
        />
      </div>

      {/* Top Right Note: UNDERSTAND YOUR BUSINESS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 20,
          delay: 0.35,
        }}
        className="absolute top-6 right-2 sm:right-6 z-20 text-right"
      >
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] leading-tight block uppercase">
          Understand
          <br />
          your
          <br />
          business.
        </span>
        <DoodleArrow
          direction="down-left"
          className="w-8 h-8 mt-1 ml-auto -rotate-12"
          delay={0.45}
        />
      </motion.div>

      {/* Bottom Note: SO WE CAN BUILD SOMETHING THAT WORKS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 20,
          delay: 0.45,
        }}
        className="absolute bottom-2 right-6 sm:right-12 z-20 text-right"
      >
        <DoodleArrow
          direction="up-left"
          className="w-8 h-8 mb-1 ml-auto"
          delay={0.55}
        />
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] leading-tight block uppercase">
          So we can
          <br />
          build something
          <br />
          that works.
        </span>
      </motion.div>
    </div>
  );
}

/* =========================================================
   STEP 05 GRAPHIC (Share anything that helps)
   ========================================================= */
export function Step05Graphic() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md h-[250px] sm:h-[280px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background blobs bloom out */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.1 }}
        className="absolute bottom-2 left-2 w-36 h-36 rounded-full bg-[#7C98FF]/45 "
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          delay: 0.15,
        }}
        className="absolute top-20 left-12 w-20 h-20 rounded-full bg-[#FFD66B]/50 "
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 18, delay: 0.2 }}
        className="absolute top-28 left-4 w-12 h-12 rounded-full bg-[#FFD66B] "
      />

      {/* Hand-drawn loop doodle connecting upload files */}
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full -z-5 overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M 50 160 C 40 90, 110 50, 150 70 C 190 90, 180 170, 120 180 C 80 190, 90 130, 130 130"
          stroke="#111111"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.65 }}
          transition={{
            pathLength: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
            opacity: { duration: 0.1, delay: 0.15 },
          }}
        />
      </svg>

      {/* Top Left Note: MOODBOARDS, DESIGNS, IDEAS... */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.2 }}
        className="absolute top-4 left-0 sm:left-4 z-20"
      >
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] leading-tight block uppercase">
          Moodboards,
          <br />
          designs,
          <br />
          ideas...
        </span>
        <DoodleArrow
          direction="curved-down"
          className="w-8 h-8 mt-1"
          delay={0.35}
        />
      </motion.div>

      {/* Clustered Files & Media Cards with spring pops */}
      <div className="relative w-56 h-56 z-10 flex items-center justify-center">
        {/* Pink Image card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: -16 }}
          animate={{ scale: 1, opacity: 1, y: [0, -4, 0], rotate: -6 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.12 },
            opacity: { duration: 0.1, delay: 0.12 },
            rotate: {
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.12,
            },
            y: {
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.55,
            },
          }}
          className="absolute top-0 left-4 w-22 h-22 rounded-3xl bg-[#FFE4F2] border border-pink-200 shadow-md flex items-center justify-center cursor-default"
        >
          <ImageIcon className="w-9 h-9 text-[#111111]" />
        </motion.div>

        {/* Blue Document card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: 16 }}
          animate={{ scale: 1, opacity: 1, y: [0, 4, 0], rotate: 4 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.18 },
            opacity: { duration: 0.1, delay: 0.18 },
            rotate: {
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.18,
            },
            y: {
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            },
          }}
          className="absolute top-4 right-6 w-20 h-22 rounded-3xl bg-[#E0ECFF] border border-blue-200 shadow-md flex items-center justify-center cursor-default"
        >
          <FileText className="w-8 h-8 text-[#111111]" />
        </motion.div>

        {/* Cyan Sparkles / Figma Card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -12, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, y: [0, -3, 0], rotate: 3 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.24 },
            opacity: { duration: 0.1, delay: 0.24 },
            rotate: {
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.24,
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.65,
            },
          }}
          className="absolute top-18 left-10 w-20 h-20 rounded-3xl bg-[#DDF4FF] border border-sky-200 shadow-md flex items-center justify-center z-10 cursor-default"
        >
          <Sparkles className="w-8 h-8 text-[#111111]" />
        </motion.div>

        {/* Yellow Play card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: 14, rotate: -16 }}
          animate={{ scale: 1, opacity: 1, y: [0, 3, 0], rotate: -6 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.3 },
            opacity: { duration: 0.1, delay: 0.3 },
            rotate: { type: "spring", stiffness: 350, damping: 20, delay: 0.3 },
            y: {
              duration: 4.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            },
          }}
          className="absolute bottom-2 left-6 w-20 h-18 rounded-3xl bg-[#FEF3C7] border border-amber-200 shadow-md flex items-center justify-center cursor-default"
        >
          <Play className="w-8 h-8 text-[#111111]" />
        </motion.div>

        {/* Mint Link card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: 14, rotate: 16 }}
          animate={{ scale: 1, opacity: 1, y: [0, -3, 0], rotate: 6 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.36 },
            opacity: { duration: 0.1, delay: 0.36 },
            rotate: {
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.36,
            },
            y: {
              duration: 4.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.75,
            },
          }}
          className="absolute bottom-6 right-8 w-20 h-20 rounded-3xl bg-[#E0FAF0] border border-emerald-200 shadow-md flex items-center justify-center cursor-default"
        >
          <Link2 className="w-8 h-8 text-[#111111]" />
        </motion.div>

        {/* Burst ticks */}
        <BurstTicks
          className="absolute -top-3 right-16 w-7 h-7 text-[#111111]"
          color="#111111"
          delay={0.42}
        />
      </div>

      {/* Bottom Right Note: ANYTHING THAT HELPS US UNDERSTAND BETTER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 20,
          delay: 0.45,
        }}
        className="absolute bottom-4 right-4 sm:right-8 z-20 text-right"
      >
        <DoodleArrow
          direction="up-left"
          className="w-8 h-8 mb-1 ml-auto"
          delay={0.55}
        />
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] leading-tight block uppercase">
          Anything
          <br />
          that helps
          <br />
          us understand
          <br />
          better.
        </span>
      </motion.div>
    </div>
  );
}

/* =========================================================
   STEP 06 GRAPHIC (Anything else we should know?)
   ========================================================= */
export function Step06Graphic() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md h-[250px] sm:h-[280px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background blobs bloom out */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.1 }}
        className="absolute bottom-2 left-0 w-36 h-36 rounded-full bg-[#FFD66B]/50 "
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          delay: 0.15,
        }}
        className="absolute top-18 right-8 w-24 h-32 rounded-full bg-[#7C98FF]/60 "
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 18, delay: 0.2 }}
        className="absolute bottom-16 right-20 w-12 h-12 rounded-full bg-[#FF91D4]/60"
      />

      {/* Hand-drawn celebration flourish that draws */}
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full -z-5 overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M 40 100 C 60 50, 140 40, 180 80 C 220 120, 190 200, 130 190 C 70 180, 80 120, 120 130"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="5 7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{
            pathLength: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
            opacity: { duration: 0.1, delay: 0.15 },
          }}
        />
      </svg>

      {/* Top Left Note: TELL US ANYTHING THAT MATTERS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.2 }}
        className="absolute top-6 left-0 sm:left-4 z-20"
      >
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] leading-tight block uppercase">
          Tell us
          <br />
          anything
          <br />
          that
          <br />
          matters.
        </span>
        <DoodleArrow
          direction="down-right"
          className="w-8 h-8 mt-1 rotate-12"
          delay={0.35}
        />
      </motion.div>

      {/* Clustered Cards with spring stamp-downs */}
      <div className="relative w-56 h-56 z-10 flex items-center justify-center">
        {/* Pink Lightbulb card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: -16 }}
          animate={{ scale: 1, opacity: 1, y: [0, -4, 0], rotate: -6 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.14 },
            opacity: { duration: 0.1, delay: 0.14 },
            rotate: {
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.14,
            },
            y: {
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.55,
            },
          }}
          className="absolute top-2 left-6 w-24 h-24 rounded-3xl bg-[#FFE4F2] border border-pink-200 shadow-md flex items-center justify-center cursor-default"
        >
          <Lightbulb className="w-10 h-10 text-[#111111]" />
        </motion.div>

        {/* Mint Big Ideas card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: 16 }}
          animate={{ scale: 1, opacity: 1, y: [0, 4, 0], rotate: 4 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.22 },
            opacity: { duration: 0.1, delay: 0.22 },
            rotate: {
              type: "spring",
              stiffness: 350,
              damping: 20,
              delay: 0.22,
            },
            y: {
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.65,
            },
          }}
          className="absolute top-16 right-4 w-28 h-28 rounded-3xl bg-[#E0FAF0] border border-emerald-200 shadow-lg flex flex-col items-center justify-center p-3 cursor-default"
        >
          <span className="font-caveat font-bold text-xs sm:text-sm text-center uppercase tracking-tight text-[#111111] leading-tight">
            Big
            <br />
            ideas
            <br />
            welcome.
            <br />
            —)
          </span>
        </motion.div>

        {/* Yellow Scribble Smiley card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: 16, rotate: -12 }}
          animate={{ scale: 1, opacity: 1, y: [0, -3, 0], rotate: -3 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.3 },
            opacity: { duration: 0.1, delay: 0.3 },
            rotate: { type: "spring", stiffness: 350, damping: 20, delay: 0.3 },
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            },
          }}
          className="absolute bottom-2 left-4 w-24 h-22 rounded-3xl bg-[#FEF3C7] border border-amber-200 shadow-md flex flex-col items-center justify-center cursor-default"
        >
          {/* Hand drawn scribble icon */}
          <div className="font-caveat text-2xl font-bold">~ ͜ʖ ~</div>
          <div className="font-caveat text-sm font-bold">☺</div>
        </motion.div>

        {/* Burst ticks */}
        <BurstTicks
          className="absolute top-0 right-20 w-7 h-7 text-[#111111]"
          color="#111111"
          delay={0.4}
        />
        <BurstTicks
          className="absolute -bottom-3 left-18 w-7 h-7 text-[#111111] rotate-180"
          color="#111111"
          delay={0.48}
        />
      </div>

      {/* Top Right Note: QUESTIONS? IDEAS? SPECIAL REQUIREMENTS? */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 20,
          delay: 0.35,
        }}
        className="absolute top-12 right-0 sm:right-4 z-20 text-right"
      >
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] leading-tight block uppercase">
          Questions?
          <br />
          ideas?
          <br />
          special
          <br />
          requirements?
        </span>
        <DoodleArrow
          direction="down-left"
          className="w-8 h-8 mt-1 ml-auto -rotate-12"
          delay={0.45}
        />
      </motion.div>
    </div>
  );
}

/* =========================================================
   SUCCESS GRAPHIC (Your idea is with us)
   ========================================================= */
export function SuccessGraphic() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md h-[290px] sm:h-[330px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background blobs bloom out */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.1 }}
        className="absolute top-4 right-4 w-28 h-36 rounded-full bg-[#FF91D4]/40"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          delay: 0.15,
        }}
        className="absolute bottom-4 left-0 w-36 h-36 rounded-full bg-[#A98BFF]/40"
      />

      {/* Radiating Curved Lines to 7 cards: draw themselves outward like sunbeams */}
      <svg
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full -z-5 overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M 170 170 C 140 120, 100 110, 80 80"
          stroke="#FF91D4"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 170 170 C 140 160, 90 150, 60 145"
          stroke="#7C98FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 170 170 C 130 190, 80 200, 65 230"
          stroke="#FF91D4"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 170 170 C 180 120, 190 90, 200 70"
          stroke="#65DDB5"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 170 170 C 210 130, 230 120, 250 110"
          stroke="#FFD66B"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 170 170 C 210 180, 230 200, 240 230"
          stroke="#A98BFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 170 170 C 150 210, 120 230, 95 260"
          stroke="#65DDB5"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>

      {/* Central Frosted Logo Card with punchy spring entrance */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 20, delay: 0.1 }}
        className="relative z-20"
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white/90 backdrop-blur-md border border-white/90 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center justify-center p-4">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16">
            <Image
              src="/assets/images/logo/logo-6.png"
              alt="Soluble Logo"
              width={80}
              height={80}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Orbiting Capability Cards with staggered spring reveals */}
      {/* 1. Lightbulb (Pink) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -3, 0] }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 20, delay: 0.3 },
          opacity: { duration: 0.1, delay: 0.3 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
        }}
        className="absolute top-6 left-12 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FFE4F2] border border-pink-200 shadow-md flex items-center justify-center z-10"
      >
        <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-[#111111]" />
      </motion.div>

      {/* 2. Users (Blue) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, 3, 0] }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 20, delay: 0.35 },
          opacity: { duration: 0.1, delay: 0.35 },
          y: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.75,
          },
        }}
        className="absolute top-26 left-2 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E0ECFF] border border-blue-200 shadow-md flex items-center justify-center z-10"
      >
        <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#111111]" />
      </motion.div>

      {/* 3. Image (White/Pink) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -3, 0] }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 20, delay: 0.4 },
          opacity: { duration: 0.1, delay: 0.4 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
        }}
        className="absolute bottom-22 left-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center z-10"
      >
        <ImageIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#111111]" />
      </motion.div>

      {/* 4. Link (Pink) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, 4, 0] }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 20, delay: 0.45 },
          opacity: { duration: 0.1, delay: 0.45 },
          y: {
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.85,
          },
        }}
        className="absolute -bottom-2 left-16 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FFE4F2] border border-pink-200 shadow-md flex items-center justify-center z-10"
      >
        <Link2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#111111]" />
      </motion.div>

      {/* 5. Document (Mint) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -4, 0] }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 20, delay: 0.32 },
          opacity: { duration: 0.1, delay: 0.32 },
          y: {
            duration: 4.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.72,
          },
        }}
        className="absolute top-4 left-36 sm:left-40 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E0FAF0] border border-emerald-200 shadow-md flex items-center justify-center z-10"
      >
        <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-[#111111]" />
      </motion.div>

      {/* 6. Target (Yellow) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, 3, 0] }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 20, delay: 0.38 },
          opacity: { duration: 0.1, delay: 0.38 },
          y: {
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.78,
          },
        }}
        className="absolute top-18 right-2 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FEF3C7] border border-amber-200 shadow-md flex items-center justify-center z-10"
      >
        <Target className="w-6 h-6 sm:w-7 sm:h-7 text-[#111111]" />
      </motion.div>

      {/* 7. Code (Purple) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -3, 0] }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 20, delay: 0.42 },
          opacity: { duration: 0.1, delay: 0.42 },
          y: {
            duration: 4.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.82,
          },
        }}
        className="absolute bottom-16 right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EBE4FF] border border-purple-200 shadow-md flex items-center justify-center z-10"
      >
        <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#111111]" />
      </motion.div>

      {/* Top Left Note: YOUR IDEAS, IN ONE PLACE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 20,
          delay: 0.35,
        }}
        className="absolute top-0 left-0 sm:left-4 z-20"
      >
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] leading-tight block uppercase">
          Your
          <br />
          ideas,
          <br />
          in one
          <br />
          place.
        </span>
        <DoodleArrow
          direction="curved-down"
          className="w-8 h-8 mt-1"
          delay={0.45}
        />
      </motion.div>

      {/* Bottom Right Note: WE TURN YOUR IDEAS INTO REAL SOLUTIONS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 20,
          delay: 0.45,
        }}
        className="absolute -bottom-4 right-2 sm:right-6 z-20 text-right"
      >
        <DoodleArrow
          direction="up-left"
          className="w-8 h-8 mb-1 ml-auto"
          delay={0.55}
        />
        <span className="font-caveat text-xs sm:text-sm font-bold text-[#111111] leading-tight block uppercase">
          We turn
          <br />
          your ideas
          <br />
          into real
          <br />
          solutions.
        </span>
      </motion.div>
    </div>
  );
}
