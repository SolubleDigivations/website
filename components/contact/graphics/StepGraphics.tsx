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
  IndianRupee,
  Target,
  Users,
  BarChart3,
  FileText,
  ImageIcon,
  Play,
  Link2,
  Sparkles,
  LucidePartyPopper,
} from "lucide-react";
import { CiCalendarDate } from "react-icons/ci";
import { TbTargetArrow } from "react-icons/tb";
import {
  DoodleArrow,
  BurstTicks,
  DoodleStar,
  StickyNote,
  DoodleCircle,
  DoodleSwirl,
} from "./ContactDoodles";
import Spark from "@/components/graphics/Spark";
import { FaFigma } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import BorderGlow from "@/components/BorderGlow";

/* =========================================================
   ENTRY HERO GRAPHIC (Good Ideas, Better Conversations)
   ========================================================= */
export function EntryHeroGraphic() {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-full md:h-[430px] pointer-events-none select-none">
      {/* Dynamic Connecting Curvy Line with animated stroke drawing */}
      <svg
        viewBox="0 0 1000 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-x-0 -ml-5 bottom-0 lg:top-1/2 -translate-y-1/2 w-full h-[320px] z-0 overflow-visible"
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
        className="absolute top-14 left-18 lg:top-12 lg:left-24 z-10"
      >
        <div className="relative w-22 h-22 lg:w-32 lg:h-32 rounded-xl lg:rounded-3xl bg-gradient-to-br from-background/50 via-soluble-pink/90 to-background/50 backdrop-blur-md border border-pink-200/60 shadow-[0_16px_36px_rgba(255,145,212,0.22)] flex items-center justify-center p-4">
          <Lightbulb className="h-9 w-9 lg:w-12 lg:h-12 text-[#111111] stroke-[2]" />
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
        className="absolute top-28 left-4 lg:top-0 lg:-left-5 z-20"
      >
        <span className="font-caveat text-sm sm:text-base font-bold text-[#111111] leading-tight block uppercase tracking-wide -rotate-22 text-left lg:text-center">
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
        className="absolute bottom-32 left-6 sm:left-4 lg:top-48 lg:-left-6 w-24 h-14 lg:w-36 lg:h-20 rounded-[45%_55%_60%_40%/50%_60%_40%_50%] bg-soluble-blue backdrop-blur-xs -rotate-12"
      />

      {/* Yellow sticky note: IDEA, GOALS, NEXT STEPS */}
      <div className="absolute bottom-10 lg:top-76 left-6 sm:left-16 lg:-left-10 z-20">
        <StickyNote
          rotate="-rotate-6"
          className="w-26 lg:w-32 py-3 px-3 shadow-md"
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
        className="absolute top-8 right-17 sm:right-28 lg:right-32 w-18 h-24 lg:w-24 lg:h-32 rounded-[55%_45%_50%_50%/60%_40%_60%_40%] bg-soluble-purple rotate-25 z-0"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -8, 0] }}
        transition={{
          scale: { type: "spring", stiffness: 280, damping: 20, delay: 0.3 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
        }}
        className="absolute top-4 right-6 sm:right-16 lg:right-10 w-16 h-24 lg:w-24 lg:h-36 rounded-[40%_60%_55%_45%/50%_50%_50%_50%] bg-soluble-mint rotate-12 z-0"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 450, damping: 18, delay: 0.4 }}
        className="absolute top-34 right-36 lg:top-44 w-5 h-5 lg:right-30 lg:w-7 lg:h-7 rounded-full bg-[#FFD66B] z-0"
      />

      {/* Browser window frosted card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -20, rotate: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 4 }}
        transition={{ type: "spring", stiffness: 340, damping: 22, delay: 0.3 }}
        className="absolute bottom-6 lg:bottom-10 right-6 lg:right-4 z-10"
      >
        <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-3xl bg-linear-to-br from-white/80 via-foreground/10 to-white/80 backdrop-blur-md border border-white/70 shadow-[0_16px_36px_rgba(0,0,0,0.06)] flex flex-col justify-center items-center p-4">
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
        className="absolute bottom-0 right-20 lg:right-32 w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-[#65DDB5]/70 -z-10"
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
    <div className="relative w-full max-w-sm sm:max-w-md h-[180px] lg:h-[280px] mx-auto flex items-center justify-center select-none pointer-events-none ">
      {/* Background watercolor blobs bloom out */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        className="absolute border bottom-[-60%] lg:bottom-[-70%] left-[-15%] lg:left-[-50%] w-36 h-36 lg:w-52 lg:h-52 rounded-full bg-linear-to-bl from-background to-50% to-soluble-mint"
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
        className="absolute top-0 lg:top-8 lg:left-32 left-1/2 w-20 h-24 lg:w-28 lg:h-36 rounded-[50%_50%_45%_55%/60%_40%_60%_40%] bg-linear-to-tl from-background to-60% to-soluble-blue rotate-25"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 450, damping: 18, delay: 0.4 }}
        className="absolute top-4 left-8 lg:-left-28 aspect-square w-8 lg:w-12 lg:h-12 rounded-full bg-soluble-yellow z-0"
      />
      <Spark
        className="absolute top-20 lg:top-36 left-10 lg:-left-20 w-7 h-7 text-soluble-purple"
        color="#B18CFF"
        delay={1}
      />

      {/* Hand-drawn loop doodle connecting to avatar: draws itself */}
      <svg
        viewBox="-40 -10 300 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-20%] left-[-20%] lg:left-[-50%] inset-0 w-[90%] lg:w-full h-full overflow-visible"
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
        className="absolute left-[35%] lg:left-10 top-9 lg:bottom-8 z-10 -rotate-10"
      >
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-25 h-25 lg:w-40 lg:h-40 rounded-xl lg:rounded-3xl bg-white border border-white/80 shadow-[0_16px_36px_rgba(255,145,212,0.24)] p-4 flex justify-center items-center -rotate-4">
            {/* User icon with drawing outline */}
            <div className="w-12 h-12 lg:w-16 lg:h-16 flex flex-col items-center justify-center">
              {/*User Icon*/}
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="w-14 h-14 aspect-square lg:w-18 lg:h-18"
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
          <div className="absolute inset-0 -left-5 lg:-left-7 -bottom-2 w-26 h-26 lg:w-40 lg:h-40 rounded-xl lg:rounded-3xl bg-linear-to-tr from-background to-soluble-pink -z-10" />

          <BurstTicks
            className="absolute -top-9 lg:-top-14 left-12 -rotate-20 aspect-square w-8 lg:w-10 text-[#111111]"
            color="#111111"
            delay={0.45}
          />
        </div>
      </motion.div>

      {/* Yellow sticky note: NICE TO MEET YOU! - :) */}
      <div className="absolute -bottom-14 lg:-bottom-10 left-1/2 lg:left-40 z-20">
        <StickyNote
          rotate="rotate-6"
          className="w-22 lg:w-32 py-2.5 px-3 text-center"
          delay={0.35}
        >
          <p className="font-bold text-xs sm:text-base tracking-normal text-[#111111] leading-tight text-left ml-2 mt-1">
            NICE
            <br />
            TO
            <br />
            MEET YOU!
            <br />
            <span className="mt-0.5 text-base tracking-widest flex items-center justify-evenly">
              — <span className="block rotate-90 font-outfit">:)</span>
            </span>
          </p>
        </StickyNote>
      </div>

      {/* Handwritten note: JUST A FEW DETAILS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.4 }}
        className="absolute -bottom-10 lg:bottom-26 right-0 lg:right-8 z-20 text-left"
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
    <div className="relative w-full lg:max-w-md h-[220px] lg:h-[280px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background blobs bloom out */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.1 }}
        className="absolute bottom-[-55%] left-[-20%] lg:bottom-[-65%] lg:left-[-50%] aspect-square w-32 lg:w-52 rounded-full bg-soluble-yellow"
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
        className="absolute bottom-[-18%] right-10 lg:bottom-[-28%] lg:right-24 aspect-square w-18 lg:w-28 lg:h-28 rounded-[65%_35%_70%_30%/70%_30%_65%_35%] bg-soluble-mint"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.2 }}
        className="absolute bottom-30 left-4 lg:bottom-18 lg:left-[-15%] aspect-square w-10 lg:w-16 rounded-[25%_80%_25%_50%/65%_70%_50%_40%] bg-soluble-pink"
      />


      {/* Top Left Note: WE TURN IDEAS INTO WEBSITES, APPS AND MORE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.2 }}
        className="absolute top-[-10%] left-0 sm:left-[-24%] z-20 hidden lg:block"
      >
        <span className="font-caveat text-xs sm:text-base font-bold text-[#111111] tracking-wide block uppercase -rotate-20 mb-4 -ml-2">
          We turn
          <br />
          ideas into
          <br />
          digital <br />
          products.
        </span>
        <DoodleArrow
          direction="down-left"
          className="w-10 h-10 mt-1 ml-4 -rotate-94"
          delay={0.35}
        />
      </motion.div>

      {/* Clustered Pastel App Cards with staggered creative spring pops */}
      <div className="relative w-full h-full lg:w-56 lg:h-56 z-10">
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
          className="absolute top-8 left-22 lg:top-2 lg:left-[-55%] w-20 h-18 lg:w-32 lg:h-30 rounded-lg bg-linear-to-br from-background to-soluble-pink shadow-md flex items-center justify-center cursor-default"
        >
          <Globe className="w-8 h-8 lg:w-12 lg:h-12 text-[#111111]" strokeWidth={1.6} />
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
          className="absolute top-10 right-16 lg:top-6 lg:right-12 w-20 h-19 lg:w-30 lg:h-28 rounded-lg bg-white border border-gray-200 shadow-lg flex items-center justify-center cursor-default"
        >
          <Smartphone className="aspect-square w-8 lg:w-10 text-[#111111]" />
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
          className="absolute bottom-10 left-40 lg:bottom-4 lg:left-[-10%] w-20 h-18 lg:w-28 lg:h-24 rounded-lg bg-linear-to-r from-[#CCD9FB] to-soluble-blue shadow-md flex items-center justify-center z-10 cursor-default"
        >
          <Code2 className="w-8 h-8 md:w-9 md:h-9 text-[#111111]" />
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
          className="absolute -bottom-2 right-22 lg:bottom-[-20%] lg:left-16 w-18 h-18 lg:w-24 lg:h-24 rounded-lg backdrop-blur-md via- shadow-md flex items-center justify-center cursor-default z-50"
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
          className="absolute bottom-0 left-18 lg:bottom-[-34%] lg:left-[-30%] w-20 h-18 lg:w-24 lg:h-22 rounded-lg bg-linear-to-bl from-background to-soluble-yellow shadow-md flex items-center justify-center cursor-default"
        >
          <PenTool className="w-7 h-7 md:w-8 md:h-8 text-[#111111]" />
        </motion.div>

        {/* Burst marks around cluster */}
        <BurstTicks
          className="absolute top-4 right-9 lg:top-[-6%] lg:right-1 aspect-square w-8 lg:w-14 text-[#111111] rotate-34"
          color="#111111"
          delay={0.4}
        />
        <BurstTicks
          className="absolute bottom-[-20%] left-30 lg:-bottom-24 lg:left-14 w-10 h-10 text-[#111111] rotate-170 lg:rotate-200"
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
          direction="down-left"
          className="aspect-square w-8 lg:w-14 lg:h-14 mb-1 ml-auto rotate-90 mr-4"
          delay={0.55}
        />
        <span className="font-caveat text-sm sm:text-lg font-bold text-[#111111] leading-tight block uppercase rotate-12">
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
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          delay: 0.15,
        }}
        className="absolute bottom-[-50%] left-[-20%] lg:bottom-[-45%] lg:left-[-55%] aspect-square w-44 lg:w-60 rounded-full bg-linear-to-tr from-soluble-purple from-55% to-background"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.2 }}
        className="absolute top-20 left-[65%] lg:top-16 lg:right-36 aspect-square w-14 lg:w-20 rounded-full bg-[#7C98FF]/50 "
      />

      {/* Top Left Note: NO PRESSURE JUST A BALLPARK */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.2 }}
        className="absolute top-5 lg:top-[-10%] -rotate-18 left-2 lg:left-[-25%] z-20"
      >
        <span className="font-caveat text-xs sm:text-sm lg:text-base font-bold text-[#111111] leading-tight block uppercase">
          No
          <br />
          pressure
          <br />
          just a<br />
          ballpark.
        </span>
        <DoodleArrow
          direction="down-left"
          className="aspect-square w-8 lg:w-10 mt-1 -rotate-90 ml-5"
          delay={0.35}
        />
      </motion.div>

      {/* Clustered Scope Cards with spring stamp-downs */}
      <div className="w-full h-full relative lg:w-56 lg:h-56 z-10 flex items-center justify-center">
        {/* Calendar frosted card */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: -20, rotate: -14 }}
          animate={{ scale: 1, opacity: 1, y: [0, -4, 0], rotate: -10 }}
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
          className="absolute top-12 left-24 lg:-top-2 lg:left-[-50%] w-26 h-26 lg:w-34 lg:h-34 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-xl flex items-center justify-center z-10 cursor-default"
        >
          <CiCalendarDate
            className="w-12 h-12 lg:w-18 lg:h-18 text-[#111111]"
            strokeWidth={0.2}
          />
          <BurstTicks
            className="absolute -top-6 -right-8 rotate-45 w-10 h-10 text-[#111111]"
            color="#111111"
            delay={0.4}
          />
        </motion.div>
        <motion.div className="absolute top-10 left-20 lg:-top-4 lg:left-[-60%] w-26 h-30 lg:w-34 lg:h-38 rounded-xl bg-linear-to-tr from-background to-[#FF9C87] shadow-xl flex items-center -rotate-24 justify-center z-0 cursor-default"/>

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
          className="absolute top-[44%] left-[44%] lg:top-14 lg:left-0 aspect-square w-26 lg:w-32 rounded-lg bg-linear-to-bl from-background to-soluble-mint shadow-lg flex items-center justify-center cursor-default z-20"
        >
          <IndianRupee className="w-8 h-8 lg:w-10 lg:h-10 text-[#111111] stroke-[2.5]" />
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
          className="absolute lg:bottom-[-10%] bottom-[-8%] right-10 lg:right-10 w-26 h-22 lg:w-32 lg:h-24 rounded-md bg-linear-to-r from-[#FBEABA] to-soluble-yellow shadow-lg flex items-center justify-center cursor-default z-40"
        >
          <TbTargetArrow className="w-10 h-10 lg:w-12 lg:h-12 text-[#111111] stroke-[1.8]" />
        </motion.div>
      </div>

      <BurstTicks
        className="absolute bottom-7 left-[35%] lg:bottom-5 lg:left-15 aspect-square w-10 lg:w-15 text-[#111111] rotate-220"
        color="#111111"
        delay={0.48}
      />

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
        className="absolute top-2 right-6 lg:top-[-20%] lg:right-2 z-20 text-right"
      >
        <span className="font-caveat text-xs sm:text-sm lg:text-base font-bold text-[#111111] leading-tight block uppercase">
          This
          <br />
          helps us
          <br />
          plan
          <br />
          better.
        </span>
        <DoodleArrow
          direction="down-right"
          className="aspect-square w-10 lg:w-12 mt-1 mr-auto -ml-4 rotate-90"
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
        className="absolute bottom-[-50%] left-[-55%] w-xs h-xs"
      >
        <svg viewBox="30 50 400 400" className="">
          <defs>
            <radialGradient
              gradientUnits="userSpaceOnUse"
              cx="260.963"
              cy="243.53"
              r="171.264"
              id="gradient-0"
              gradientTransform="matrix(-0.716784, -1.175012, 0.853695, -0.520774, 198.115953, 673.324541)"
            >
              <stop offset="0" stopColor="rgb(249, 215, 248)"></stop>
              <stop offset="1" stopColor="rgb(255, 145, 212)"></stop>
            </radialGradient>
          </defs>

          <path
            fill="url(#gradient-0)"
            d="M 87.391 143.653 C 154.232 107.362 225.809 139.236 230.689 203.321 C 235.06 260.722 256.971 279.184 303.217 282.751 C 393.94 289.749 456.564 377.332 361.56 404.113 C 266.556 430.894 161.645 401.829 161.645 401.829 C 79.207 415.665 49.727 370.734 66.829 299.015 L 87.391 143.653 Z"
          ></path>
        </svg>
      </motion.div>
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
        className="absolute top-24 right-[10%] w-28 h-28 rounded-full bg-soluble-purple/50"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.2 }}
        className="absolute top-24 left-[-20%] w-12 h-12 rounded-[65%_35%_70%_30%/70%_30%_65%_35%] shadow-[0_10px_24px_rgba(255,116,69,0.2)] bg-soluble-yellow"
      />

      {/* Top Left Note: WHO ARE YOUR USERS? */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.2 }}
        className="absolute top-0 left-0 sm:left-4 lg:top-[-20%] lg:left-[-25%] z-20 -rotate-14"
      >
        <span className="font-caveat text-xs sm:text-sm lg:text-lg font-bold text-[#111111] leading-tight block uppercase">
          Who
          <br />
          are your
          <br />
          users?
        </span>
        <DoodleArrow
          direction="down-left"
          className="w-14 h-14 ml-auto mt-1 -rotate-90"
          delay={0.35}
        />
      </motion.div>

      {/* Clustered Cards with staggered spring pop-ins */}
      <div className="relative w-56 h-56 z-10 flex items-center justify-center">
        {/* Pink Users card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: -18 }}
          animate={{ scale: 1, opacity: 1, y: [0, -4, 0], rotate: -10 }}
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
          className="absolute top-[-10%] left-[-50%] w-30 h-30 rounded-lg bg-linear-to-br from-background to-soluble-pink shadow-md flex items-center justify-center cursor-default"
        >
          <Users className="w-10 h-10 text-[#111111]" />
        </motion.div>

        {/* Blue Chart card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: 22 }}
          animate={{ scale: 1, opacity: 1, y: [0, 4, 0], rotate: 15 }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 20, delay: 0.2 },
            opacity: { duration: 0.1, delay: 0.2 },
            rotate: { type: "spring", stiffness: 350, damping: 20, delay: 0.2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
          }}
          className="absolute top-0 right-18 w-30 h-30 rounded-lg bg-linear-to-bl from-background to-soluble-blue shadow-md flex items-center justify-center cursor-default"
        >
          <BarChart3 className="w-9 h-9 text-[#111111]" />
        </motion.div>

        {/* Yellow Target card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: 14, rotate: -18 }}
          animate={{ scale: 1, opacity: 1, y: [0, -3, 0], rotate: -8 }}
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
          className="absolute bottom-[-5%] left-[-40%] w-30 h-30 rounded-lg bg-linear-to-tl from-background to-soluble-yellow shadow-md flex items-center justify-center cursor-default"
        >
          <TbTargetArrow className="w-14 h-14 text-[#111111] stroke-[1.5]" />
        </motion.div>

        {/* Mint Doc card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: 14, rotate: 14 }}
          animate={{ scale: 1, opacity: 1, y: [0, 3, 0], rotate: -8 }}
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
          className="absolute bottom-[-12%] right-13 w-30 h-30 rounded-lg bg-linear-to-br from-background to-soluble-peach shadow-md flex items-center justify-center cursor-default"
        >
          <FileText className="w-10 h-10 text-[#111111]" />
        </motion.div>

        {/* Burst ticks */}
        <BurstTicks
          className="absolute top-[-20%] left-2 w-11 h-11 text-[#111111]"
          color="#111111"
          delay={0.4}
        />
        <BurstTicks
          className="absolute bottom-[20%] left-[-70%] w-12 h-12 text-[#111111] rotate-210"
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
        className="absolute top-6 right-2 sm:right-6 lg:right-6 lg:top-[-20%] z-20 text-right"
      >
        <span className="font-caveat text-xs sm:text-sm lg:text-lg font-bold text-[#111111] leading-tight block uppercase -rotate-12">
          Understand
          <br />
          your
          <br />
          business.
        </span>
        <DoodleArrow
          direction="down-right"
          className="w-16 h-16 mt-1.5 mr-auto rotate-90"
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
        className="absolute bottom-[-25%] right-6 sm:right-0 lg:right-0 z-20 text-right -rotate-11"
      >
        <DoodleArrow
          direction="up-left"
          className="w-14 h-14 mb-1 mr-auto -rotate-90"
          delay={0.55}
        />
        <span className="font-caveat text-xs sm:text-sm lg:text-base font-bold text-[#111111] leading-tight block uppercase">
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
        className="absolute bottom-[-78%] left-[-54%] w-78 h-78"
      >
        <svg viewBox="42 96 396 334">
          <defs>
            <radialGradient
              gradientUnits="userSpaceOnUse"
              cx="268.701"
              cy="256.508"
              r="171.264"
              id="gradient-2"
              gradientTransform="matrix(-0.564615, -0.890086, 1.134157, -0.719439, 93.009528, 639.47716)"
            >
              <stop offset="0" stopColor="rgb(205, 218, 251)"></stop>
              <stop offset="1" stopColor="rgb(108, 140, 255)"></stop>
            </radialGradient>
          </defs>

          <path
            fill="url(#gradient-2)"
            d="M 72.931 136.423 C 139.772 100.132 211.242 154.283 196.949 212.961 C 186.534 255.717 253.355 282.237 292.372 277.931 C 383.121 267.915 456.564 377.332 361.56 404.113 C 266.556 430.894 161.645 401.829 161.645 401.829 C 79.207 415.665 49.727 370.734 66.829 299.015 L 72.931 136.423 Z"
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          delay: 0.15,
        }}
        className="absolute top-20 left-[-20%] w-20 h-20 rounded-[65%_35%_70%_30%/70%_30%_65%_35%] bg-soluble-yellow"
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
        className="absolute top-10 left-[-20%] w-20 h-20 rounded-[65%_35%_70%_30%/70%_30%_65%_35%] bg-linear-to-br from-white/40 via-foreground/5 to-white/40 backdrop-blur-md"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 18, delay: 0.2 }}
        className="absolute top-14 right-18 w-14 h-14 rounded-[85%_30%_50%_30%/75%_30%_45%_25%] bg-blob-blue"
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
        className="absolute bottom-0 left-[-10%] w-14 h-18 rounded-[65%_35%_70%_30%/70%_30%_65%_35%] bg-blob-orange rotate-45"
      />

      {/* Top Left Note: MOODBOARDS, DESIGNS, IDEAS... */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.2 }}
        className="absolute top-[-15%] left-[-28%] z-20"
      >
        <span className="font-caveat text-xs sm:text-base font-bold text-[#111111] leading-tight block uppercase -rotate-18">
          Moodboards,
          <br />
          designs,
          <br />
          ideas...
        </span>
        <DoodleArrow
          direction="down-left"
          className="w-14 h-14 mt-4 mx-auto -rotate-90"
          delay={0.35}
        />
      </motion.div>

      {/* Clustered Files & Media Cards with spring pops */}
      <div className="relative w-56 h-56 z-10 flex items-center justify-center">
        {/* Pink Image card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: -6 }}
          animate={{ scale: 1, opacity: 1, y: [0, -4, 0], rotate: -14 }}
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
          className="absolute top-0 left-[-50%] w-29 h-29 rounded-lg bg-linear-to-br from-background bg-soluble-pink shadow-md flex items-center justify-center cursor-default"
        >
          <ImageIcon className="w-15 h-15 text-[#111111] stroke-[1.5]" />
        </motion.div>

        {/* Blue Document card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: 1 }}
          animate={{ scale: 1, opacity: 1, y: [0, 4, 0], rotate: 12 }}
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
          className="absolute top-6 right-18 w-28 h-28 rounded-lg bg-linear-to-bl from-background to-soluble-purple shadow-md flex items-center justify-center cursor-default"
        >
          <FileText className="w-13 h-13 stroke-[1.5] text-[#111111]" />
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
          className="absolute bottom-[0%] left-[-36%] w-28 h-28 rounded-lg bg-linear-to-bl from-background to-soluble-blue shadow-md flex items-center justify-center z-10 cursor-default"
        >
          <FaFigma className="w-10 h-10 text-[#111111]" />
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
          className="absolute bottom-[-40%] left-[-20%] w-24 h-24 rounded-lg bg-linear-to-br from-soluble-yellow to-[#FBE7B0] shadow-md flex items-center justify-center cursor-default z-20"
        >
          <Play className="w-8 h-8 text-[#111111]" />
        </motion.div>

        {/* Mint Link card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: 14, rotate: -16 }}
          animate={{ scale: 1, opacity: 1, y: [0, -3, 0], rotate: -6 }}
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
          className="absolute bottom-[-10%] left-14 w-24 h-24 rounded-lg bg-linear-to-br from-[#B4EAD3] to-soluble-mint/80  shadow-md flex items-center justify-center cursor-default"
        >
          <Link2 className="w-10 h-10 text-[#111111]" />
        </motion.div>

        {/* Burst ticks */}
        <BurstTicks
          className="absolute rotate-45 -top-8 right-16 w-14 h-14 text-[#111111]"
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
        className="absolute bottom-[-15%] right-4 sm:right-15 z-20 text-left -rotate-30"
      >
        <DoodleArrow
          direction="down-left"
          className="w-12 h-12 mb-2 mr-auto rotate-100"
          delay={0.55}
        />
        <span className="font-caveat text-xs sm:text-base font-extrabold text-[#111111] leading-tight block uppercase">
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
        className="absolute bottom-[-75%] left-[-50%] w-88 h-88"
      >
        <svg viewBox="40 50 400 400" className="">
          <defs>
            <radialGradient
              gradientUnits="userSpaceOnUse"
              cx="260.963"
              cy="243.53"
              r="171.264"
              id="gradient-0"
              gradientTransform="matrix(-0.716784, -1.175012, 0.853695, -0.520774, 198.115953, 673.324541)"
            >
              <stop offset="0" stopColor="#FCE5A1"></stop>
              <stop offset="1" stopColor="#FED559"></stop>
            </radialGradient>
          </defs>

          <path
            fill="url(#gradient-0)"
            d="M 72.931 136.423 C 164.086 87.147 197.8 154.783 207.849 212.961 C 215.378 256.549 260.827 281.716 292.372 277.931 C 320.91 274.507 366.201 292.977 382.094 312.98 C 403.837 340.345 424.415 380.843 361.56 404.113 C 268.993 438.383 161.645 401.829 161.645 401.829 C 79.207 415.665 49.727 370.734 66.829 299.015 L 72.931 136.423 Z"
          ></path>
        </svg>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          delay: 0.15,
        }}
        className="absolute top-[-10%] left-1/2 w-20 h-28 rounded-full bg-soluble-blue/90 rotate-20"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 18, delay: 0.2 }}
        className="absolute bottom-6 right-24 w-12 h-12 rounded-full bg-soluble-peach"
      />

      {/* Top Left Note: TELL US ANYTHING THAT MATTERS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.2 }}
        className="absolute top-[-10%] left-[-20%] z-20"
      >
        <span className="font-caveat text-xs sm:text-sm lg:text-base font-bold text-[#111111] leading-tight block uppercase -rotate-18">
          Tell us
          <br />
          anything
          <br />
          that
          <br />
          matters.
        </span>
        <DoodleArrow
          direction="down-left"
          className="w-12 h-12 mt-1 lg:mt-3 -rotate-90 ml-auto"
          delay={0.35}
        />
      </motion.div>

      {/* Clustered Cards with spring stamp-downs */}
      <div className="relative w-56 h-56 z-10 flex items-center justify-center">
        {/* Pink Lightbulb card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: 8 }}
          animate={{ scale: 1, opacity: 1, y: [0, -4, 0], rotate: -16 }}
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
          className="absolute top-2 left-[-45%] w-30 h-30 rounded-lg bg-linear-to-br from-[#FDD5E9] to-soluble-pink shadow-md flex items-center justify-center cursor-default"
        >
          <Lightbulb className="w-14 h-14 text-[#111111]" />
        </motion.div>

        {/* Mint Big Ideas card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: -16, rotate: 20 }}
          animate={{ scale: 1, opacity: 1, y: [0, 4, 0], rotate: 10 }}
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
          className="absolute top-16 right-22 w-30 h-30 rounded-lg bg-linear-to-bl from-background to-soluble-mint shadow-lg flex flex-col items-center justify-center p-3 cursor-default"
        >
          <span className="font-caveat font-black text-xs sm:text-base text-left uppercase tracking-[0.7] text-[#000000] leading-tight -rotate-12">
            Big
            <br />
            ideas
            <br />
            welcome.
            <br />
            <LucidePartyPopper size={20} className="mt-1 mx-auto" />
          </span>
        </motion.div>

        {/* Yellow Scribble Smiley card */}
        <motion.div
          initial={{ scale: 0.55, opacity: 0, y: 16, rotate: -12 }}
          animate={{ scale: 1, opacity: 1, y: [0, -3, 0], rotate: -5 }}
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
          className="absolute bottom-[-15%] left-[-50%] w-28 h-28 rounded-lg bg-linear-to-bl from-soluble-yellow/40 to-soluble-yellow shadow-md flex flex-col items-center justify-center cursor-default"
        >
          {/* Hand drawn scribble icon */}
          <div className="font-caveat text-sm font-bold">
            <FaRegSmile size={50} color="#111111" />
          </div>
        </motion.div>

        {/* Burst ticks */}
        <BurstTicks
          className="absolute top-[-20%] left-0 w-14 h-14 text-[#111111] rotate-40"
          color="#111111"
          delay={0.4}
        />
        <BurstTicks
          className="absolute -bottom-10 left-8 w-15 h-15 text-[#111111] rotate-160"
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
        className="absolute top-12 right-15 rotate-15 z-20 text-right"
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
          direction="down-right"
          className="w-14 h-14 mt-1 my-auto rotate-100"
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
        className="absolute top-[-40%] right-[-213%] w-28 h-36 rounded-full bg-[#FF91D4]/60 rotate-35"
      >
        <BurstTicks className="aspect-square w-14 absolute top-10 -rotate-85 left-[-70%]" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          delay: 0.15,
        }}
        className="absolute bottom-[-85%] left-[-55%] w-88 h-88"
      >
        <svg viewBox="30 50 400 400" className="">
          <defs>
            <radialGradient
              gradientUnits="userSpaceOnUse"
              cx="260.963"
              cy="243.53"
              r="171.264"
              id="gradient-0"
              gradientTransform="matrix(-0.716784, -1.175012, 0.853695, -0.520774, 198.115953, 673.324541)"
            >
              <stop offset="0" stopColor="#DFD6F9"></stop>
              <stop offset="1" stopColor="#B18CFF"></stop>
            </radialGradient>
          </defs>

          <path
            fill="url(#gradient-0)"
            d="M 87.391 143.653 C 154.232 107.362 225.809 139.236 230.689 203.321 C 235.06 260.722 256.971 279.184 303.217 282.751 C 393.94 289.749 456.564 377.332 361.56 404.113 C 266.556 430.894 161.645 401.829 161.645 401.829 C 79.207 415.665 49.727 370.734 66.829 299.015 L 87.391 143.653 Z"
          ></path>
        </svg>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
          delay: 0.15,
        }}
        className="absolute bottom-[-95%] right-[-225%] w-88 h-88"
      >
        <svg viewBox="30 50 400 400" className="rotate-y-180">
          <defs>
            <radialGradient
              gradientUnits="userSpaceOnUse"
              cx="260.963"
              cy="243.53"
              r="171.264"
              id="gradient-1"
              gradientTransform="matrix(-0.716784, -1.175012, 0.853695, -0.520774, 198.115953, 673.324541)"
            >
              <stop offset="0" stopColor="#FCE5A1"></stop>
              <stop offset="1" stopColor="#FED559"></stop>
            </radialGradient>
          </defs>

          <path
            fill="url(#gradient-1)"
            d="M 87.391 143.653 C 154.232 107.362 224.446 139.354 230.689 203.321 C 236.794 265.878 253.844 278.594 303.217 282.751 C 373.495 288.668 456.706 376.952 361.56 404.113 C 266.414 431.274 161.645 401.829 161.645 401.829 C 79.207 415.665 49.727 370.734 66.829 299.015 L 87.391 143.653 Z"
          ></path>
        </svg>
      </motion.div>

      {/* Radiating Curved Lines to 7 cards: draw themselves outward like sunbeams */}
      <svg
        viewBox="0 0 340 340"
        opacity={0.8}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M 132.301 126.59 C 116.222 71.595 72.774 86.77 59.437 43.444"
          stroke="#FF91D4"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 115.167 165.431 C 74.306 138.083 41.683 134.005 18.875 148.428"
          stroke="#7C98FF"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 123.163 198.559 C 83.163 218.559 62.864 234.271 47.864 264.271"
          stroke="#FF9C86"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 179.139 111.74 C 161.917 29.224 204.051 49.672 238.841 23.163"
          stroke="#7DB4F0"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 214.552 139.156 C 251.715 111.637 281.533 169.705 312.83 110"
          stroke="#FFD66B"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 191.706 183.709 C 231.706 193.709 251.706 219.421 261.706 249.421"
          stroke="#A98BFF"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 160.861 205.414 C 140.861 245.414 181.688 279.122 156.688 309.122"
          stroke="#65DDB5"
          strokeWidth="8"
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
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 20,
          delay: 0.1,
        }}
        className="relative z-20"
      >
        <div className="relative w-28 h-28 sm:w-28 sm:h-28 rounded-4xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center justify-center p-4">
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
        className="absolute top-[-10%] left-20 w-22 h-22 rounded-lg bg-linear-to-bl from-[#FED8EB] to-soluble-pink shadow-md flex items-center justify-center z-10 -rotate-20"
      >
        <Lightbulb className="w-6 h-6 sm:w-10 sm:h-10 text-[#111111]" />
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
        className="absolute top-32 left-0 w-22 h-22 rounded-lg bg-linear-to-br from-background to-soluble-blue shadow-md flex items-center justify-center z-10 rotate-12"
      >
        <Users className="w-6 h-6 sm:w-9 sm:h-9 text-[#111111]" />
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
        className="absolute bottom-0 left-12 w-20 h-20 rounded-lg bg-linear-to-br from-background to-soluble-peach shadow-md flex items-center justify-center z-10 -rotate-12"
      >
        <ImageIcon className="w-9 h-9 stroke-[1.5] text-[#111111]" />
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
        className="absolute -bottom-10 left-46 w-22 h-22 rounded-lg bg-linear-to-br from-background to-soluble-mint shadow-md flex items-center justify-center z-10 rotate-12"
      >
        <Link2 className="w-6 h-6 sm:w-9 sm:h-9 text-[#111111]" />
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
        className="absolute top-[-15%] left-60 w-20 h-20 rounded-lg bg-linear-to-br from-background to-[#7DB4F0] shadow-md flex items-center justify-center z-10 rotate-12"
      >
        <FileText className="w-6 h-6 sm:w-9 sm:h-9 text-[#111111]" />
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
        className="absolute top-18 right-2 w-22 h-22 rounded-lg bg-linear-to-br from-background to-soluble-yellow shadow-md flex items-center justify-center z-10"
      >
        <TbTargetArrow className="w-6 h-6 sm:w-12 sm:h-12 stroke-[1.5] text-[#111111]" />
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
        className="absolute bottom-8 right-14 w-20 h-20 rounded-lg bg-linear-to-br from-background to-soluble-purple shadow-md flex items-center justify-center z-10 -rotate-12"
      >
        <Code2 className="w-6 h-6 sm:w-9 sm:h-9 text-[#111111]" />
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
        className="absolute top-[-20%] left-[-10%] z-20 -rotate-22"
      >
        <span className="font-caveat text-xs sm:text-sm lg:text-lg font-bold text-[#111111] leading-tight block uppercase text-left">
          Your
          <br />
          ideas,
          <br />
          in one
          <br />
          place.
        </span>
        <DoodleArrow
          direction="down-left"
          className="w-16 h-16 mt-1 ml-auto -rotate-90"
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
        className="absolute -bottom-24 right-10 z-20 text-right rotate-12"
      >
        <DoodleArrow
          direction="down-left"
          className="w-12 h-12 mb-2 mx-auto rotate-100"
          delay={0.55}
        />
        <span className="font-caveat text-xs sm:text-sm lg:text-base font-bold text-[#111111] leading-tight block uppercase text-left">
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
