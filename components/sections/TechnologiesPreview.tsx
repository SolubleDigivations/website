"use client";

import Reveal from "@/components/motion/Reveal";
import TechnologyPill from "./TechnologyPill";

import { technologies } from "@/lib/technologies";

export default function TechnologiesPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-soluble">

        <div className="grid gap-10 md:grid-cols-[1fr_0.65fr] md:items-end">

          {/* Heading */}
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-border bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Technologies
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-4 text-5xl font-bold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                Tools we work with
              </h2>
            </Reveal>
          </div>

          {/* Description */}
          <Reveal delay={0.15}>
            <p className="max-w-md text-sm leading-6 text-muted-foreground md:justify-self-end">
              We use modern and reliable technologies to
              build scalable and high-performance products.
            </p>
          </Reveal>

        </div>

        {/* Technology pills */}
        <div className="mt-12 flex flex-wrap gap-3">
          {technologies.map((technology, index) => (
            <TechnologyPill
              key={technology.name}
              name={technology.name}
              icon={technology.icon}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}