"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import HeroGraphic from "@/components/test/HeroGraphic";
import MagneticButton from "../common/MagneticButton";
import { technologiesHero } from "@/lib/technologies";
import { ReactNode } from "react";
import { IconType } from "react-icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-4 md:px-10 md:pb-16 md:pt-6 lg:px-12 lg:pb-20 lg:pt-8">
        <div className="grid items-center gap-4 lg:grid-cols-[0.88fr_1.12fr] lg:gap-0">
          {/* LEFT */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <span className="inline-flex rounded-full border border-border bg-white/70 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
                Digital Engineering for Modern Businesses
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-[570px] text-[clamp(3.2rem,5.1vw,5rem)] font-bold leading-[0.92] [word-spacing:4px] tracking-[-0.07em]"
            >
              We build
              <br />
              digital products
              <br />
              that{" "}
              <span className="relative inline-block ml-2">
                <YellowHighlight />
                <span className="relative z-10 mx-2">move</span>
              </span>
              <br />
              businesses
              <br />
              forward.
            </motion.h1>

            {/* Description */}
            <motion.p
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
                delay: 0.3,
              }}
              className="mt-6 max-w-[430px] text-sm leading-6 text-muted-foreground md:text-base"
            >
              Websites, web applications and digital experiences engineered for
              modern businesses.
            </motion.p>

            {/* Buttons */}
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
                  className="group inline-flex items-center gap-3 rounded-full bg-[#111111] px-4 py-3 text-xs font-semibold text-white transition-transform duration-300 "
                >
                  Start a project
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                    group-hover:scale-110"
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

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.15 }}
              className="my-4"
            >
              <p className="mb-3.5 text-[11px] font-medium tracking-tight text-[#888882] sm:text-[11.5px]">
                Trusted by builders, startups and businesses
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[12.5px] font-semibold text-[#555550] sm:text-[13px]">
                {technologiesHero.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 transition-colors hover:text-[#111111]"
                  >
                    <span className="text-[#333333]"><Icon icon={tech.icon} size={15}/></span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              x: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function YellowHighlight() {
  return (
    <svg
      viewBox="0 0 180 70"
      className="pointer-events-none absolute -inset-x-4 -bottom-4 z-0 h-[125%] w-[calc(100%+32px)]"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="
          M 7 38

          C 3 25, 20 14, 48 10
          C 82 5, 133 7, 160 17
          C 177 23, 180 34, 166 42
          C 148 52, 103 57, 61 55
          C 28 53, 8 47, 7 38

          C 6 29, 22 20, 49 16
          C 82 11, 130 13, 157 21
          C 174 26, 177 36, 163 45
          C 145 56, 101 61, 59 59
          C 27 57, 8 49, 7 38
        "
        stroke="#F7C928"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 2.5,
          delay: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </svg>
  );
}

function Icon({
  icon: TechIcon,
  size,
  className,
}: {
  icon: IconType;
  size: number;
  className?:string
}) {
  return <TechIcon size={size} className={className} />;
}
