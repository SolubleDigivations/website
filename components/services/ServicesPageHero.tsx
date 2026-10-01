"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../motion/Reveal";

function ServicesPageHero() {
  return (
    <div className="container-soluble flex items-center h-[90vh]">
      <div className="w-1/2">
        <Reveal>
          <span className="inline-flex rounded-full border border-border bg-soluble-blue/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Our Services
          </span>
        </Reveal>
        <Reveal delay={0.2}>
          <h4 className="font-extrabold text-7xl tracking-tighter">
            Everything
            <br />
            you need,
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
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#111111] px-4 py-3 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
          >
            Start a project
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>

          <Link
            href="/work"
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-4 py-3 text-xs font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-foreground"
          >
            See our work
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-xs transition-transform duration-300 group-hover:rotate-[-45deg]">
              ↓
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesPageHero;
