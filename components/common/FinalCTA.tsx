"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import Reveal from "@/components/motion/Reveal";
import MagneticButton from "./MagneticButton";

export default function FinalCTA() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-20">
      <div className="container-soluble">
          <div className="relative isolate overflow-hidden rounded-[28px] border border-border bg-linear-to-br from-soluble-yellow via-soluble-pink to-soluble-blue px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="absolute top-0 backdrop-blur-xl h-full w-full"></div>

            {/* Decorative shapes */}
            <DecorativeShapes />

            {/* Content */}
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              {/* Heading */}
              <div>
                <Reveal>
                  <span className="inline-flex rounded-full border border-border bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground backdrop-blur-sm">
                    Let's work together
                  </span>
                </Reveal>

                <Reveal delay={0.08}>
                  <h2 className="mt-5 max-w-2xl text-5xl font-bold leading-[0.9] tracking-[-0.065em] md:text-6xl lg:text-7xl">
                    Have something
                    <br />
                    <span className="relative inline-block">
                      worth building?
                      <Underline />
                    </span>
                  </h2>
                </Reveal>
              </div>

              {/* CTA */}
              <div className="lg:pb-1">
                <Reveal delay={0.16}>
                  <p className="max-w-sm text-sm leading-6 text-gray-800">
                    Let's discuss your idea and turn it into a real product.
                  </p>
                </Reveal>

                <Reveal delay={0.24}>
                  <MagneticButton>
                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
                  >
                    Start a conversation
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight size={14} />
                    </span>
                  </Link>
                  </MagneticButton>
                </Reveal>
              </div>
            </div>

            {/* Doodle arrow */}
            <DoodleArrow />
          </div>
      </div>
    </section>
  );
}
function Underline() {
  return (
    <svg
      viewBox="0 0 420 24"
      className="pointer-events-none absolute -bottom-2 left-0 h-4 w-full"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M4 13 C100 7 220 18 416 7"
        stroke="#FFD65A"
        strokeWidth="8"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </svg>
  );
}
function DecorativeShapes() {
  return (
    <>
      {/* Purple */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#B18CFF]/70"
      />

      {/* Yellow */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[#FFD65A]/80"
      />

      {/* Mint */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.16,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute -bottom-24 -right-10 h-52 w-52 rounded-[45%_55%_60%_40%] bg-[#52D9AD]/70"
      />

      {/* Blue */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.24,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute -right-20 -top-24 h-48 w-48 rounded-full bg-[#6C8CFF]/60"
      />
    </>
  );
}
function DoodleArrow() {
  return (
    <motion.svg
      viewBox="0 0 130 80"
      className="absolute bottom-7 right-[30%] hidden h-16 w-28 lg:block"
      fill="none"
      aria-hidden="true"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 0.45,
        duration: 0.4,
      }}
    >
      <motion.path
        d="M8 60 C35 64 45 44 68 35 C82 30 98 32 115 20"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.65,
          delay: 0.5,
        }}
      />

      <motion.path
        d="M103 13 L115 20 L106 30"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 1,
          duration: 0.2,
        }}
      />
    </motion.svg>
  );
}
