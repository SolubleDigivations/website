"use client";

import Reveal from "@/components/motion/Reveal";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/services";
import CurvedArrow from "../graphics/CurvedArrow";

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-soluble">

        {/* Section heading */}
        <div className="mb-10 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          
          <div className="relative">
            <Reveal>
              <span className="inline-flex rounded-full border border-border bg-soluble-purple/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Our services
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-4 text-5xl font-bold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                What we make
              </h2>
            </Reveal>
            <CurvedArrow className="absolute -right-5 -rotate-10 top-16 md:right-10 md:top-14 lg:rotate-0 lg:right-60 lg:top-10 font-extrabold" size={100}/>
          </div>

          <Reveal delay={0.15}>
            <p className="max-w-md text-sm leading-6 text-muted-foreground md:justify-self-end">
              From marketing websites to complex web applications,
              we design and develop digital products that are fast,
              scalable and actually useful.
            </p>
          </Reveal>
        </div>

        {/* Services */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.08}
            />
          ))}
        </div>

      </div>
    </section>
  );
}