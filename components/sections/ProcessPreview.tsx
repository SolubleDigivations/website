"use client";

import Reveal from "@/components/motion/Reveal";
import { processSteps } from "@/lib/process";
import ProcessStep from "./ProcessStep";
import CrowShape from "../graphics/CrowShape";

export default function ProcessPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-soluble">

        {/* Heading */}
        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-border bg-red-500/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Our process
              </span>
            </Reveal>

            <Reveal delay={0.08} className="relative">
              <h2 className="mt-4 text-5xl font-bold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                From idea to reality
              </h2>
              <CrowShape className="absolute right-5 top-0 md:-right-4 md:-top-5 lg:top-0 lg:right-1/4 rotate-6 w-20"/>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="max-w-md text-sm leading-6 text-muted-foreground md:justify-self-end">
              A simple, clear process to turn your idea into
              a successful digital product.
            </p>
          </Reveal>
        </div>

        {/* Process */}
        <div className="relative">

          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}