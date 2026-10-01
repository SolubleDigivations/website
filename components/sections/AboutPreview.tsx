"use client";

import Link from "next/link";
import { Target, Layers3, Clock3, Users } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import AboutGraphic from "@/components/graphics/AboutGraphic";

import { aboutHighlights } from "@/lib/about";
import DoodleNote from "../graphics/DoodleNote";

const icons = {
  target: Target,
  layers: Layers3,
  clock: Clock3,
  users: Users,
} as const;

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-soluble">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr_0.75fr] relative">
          {/* Left content */}
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-border bg-soluble-pink/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                About Soluble
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-4 text-5xl font-bold leading-[0.92] tracking-[-0.065em] md:text-6xl">
                Two people.
                <br />
                One obsession.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
                Soluble Digivations is an independent digital engineering studio
                focused on building websites, applications and digital
                experiences for modern businesses.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                We combine design, engineering and strategy to create products
                that make a real impact.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Our story
                <span>↗</span>
              </Link>
            </Reveal>
          </div>

          {/* Graphic */}

          <div className="relative">
            <Reveal delay={0.12}>
              <AboutGraphic />
            </Reveal>
            
          </div>

          {/* Principles */}
          <div className="space-y-5">
            {aboutHighlights.map((highlight, index) => {
              const Icon = icons[highlight.icon];

              return (
                <Reveal key={highlight.title} delay={0.2 + index * 0.07}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>

                    <span className="text-sm font-medium">
                      {highlight.title}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <DoodleNote/>
        </div>
      </div>
    </section>
  );
}
