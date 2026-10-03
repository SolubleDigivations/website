"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../motion/Reveal";
import MagneticButton from "../common/MagneticButton";

function ServicesPageHero() {
  return (
    <div className="container-soluble flex flex-col lg:flex-row items-center h-[90vh]">
      <div className="w-full lg:w-1/2">
        <Reveal>
          <span className="inline-flex rounded-full border border-border bg-soluble-blue/25 px-3 py-1 my-4.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Our Services
          </span>
        </Reveal>
        <Reveal delay={0.2}>
          <h4 className="font-extrabold text-5xl lg:text-7xl tracking-tighter">
            Everything
            <br />
            <div className="relative inline-block">
              <YellowHighlight className="absolute -left-[7%] -top-[12%] z-0 h-[125%] w-[114%]" />
              <span className="relative z-10">you need,</span>
            </div>
            <br />
            to build
            <br />
            digital products.
          </h4>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-foreground mt-4 w-[65%]">
            We combine strategy, design and engineering to build websites,
            application and digital experienes that are fast, scalable and
            actually useful.
          </p>
        </Reveal>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <MagneticButton>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#111111] px-4 py-3 text-xs font-semibold text-white transition-transform duration-300"
          >
            Start a project
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-110"
              />
            </span>
          </Link>
          </MagneticButton>

          <MagneticButton>
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-4 py-3 text-xs font-semibold text-foreground transition-all duration-300 hover:border-foreground"
          >
            See our work
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-xs transition-transform duration-300 group-hover:rotate-[-45deg]">
              ↓
            </span>
          </Link>
          </MagneticButton>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2"></div>
    </div>
  );
}

export default ServicesPageHero;

function YellowHighlight({ className = "" }) {
  return (
    <motion.svg
      viewBox="0 0 760 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute ${className}`}
      preserveAspectRatio="none"
      initial="hidden"
      animate="visible"
    >
      {/* Main oval / loop */}
      <motion.path
        d="
          M 35 145
          C 45 75, 165 25, 370 30
          C 570 34, 720 75, 725 135
          C 730 195, 570 220, 365 218
          C 170 215, 55 195, 35 145
        "
        stroke="#FFD65A"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: {
            pathLength: 0,
            opacity: 0,
          },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: {
                duration: 1.1,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.2,
              },
            },
          },
        }}
      />

      {/* Bottom hand-drawn underline */}
      <motion.path
        d="
          M 28 178
          C 170 184, 310 181, 455 183
          C 575 185, 670 181, 735 176
        "
        stroke="#FFD65A"
        strokeWidth="15"
        strokeLinecap="round"
        variants={{
          hidden: {
            pathLength: 0,
            opacity: 0,
          },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: {
                duration: 0.75,
                delay: 0.75,
                ease: "easeOut",
              },
              opacity: {
                duration: 0.2,
                delay: 0.75,
              },
            },
          },
        }}
      />
    </motion.svg>
  );
}
