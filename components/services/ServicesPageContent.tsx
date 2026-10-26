"use client";

import CurvedArrow from "@/components/graphics/CurvedArrow";
import Reveal from "@/components/motion/Reveal";
import { servicesPage } from "@/lib/services";
import ServicesPageHero from "@/components/services/ServicesPageHero";
import FinalCTA from "@/components/common/FinalCTA";
import ServicesList from "@/components/services/ServicesList";
import ServicesMarque from "@/components/services/ServicesMarque";
import ServicesSections from "@/components/services/ServicesSections";
import Expertise from "@/components/home/Expertise";

export default function ServicesPageContent() {
  return (
    <>
      <ServicesPageHero />
      <div className="container-soluble py-5">
        <div>
          <Reveal>
            <span className="inline-flex rounded-full border border-border bg-soluble-purple/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              What we Offer
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="relative mt-4 text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] md:text-6xl scroll-mt-40" id="services-list">
              Our Services
              <CurvedArrow
                className="absolute left-68 top-0 -rotate-6 font-extrabold sm:left-64 lg:left-88"
                size={100}
              />
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="min-h-[90vh] px-4 sm:px-8 lg:px-20">
        <ServicesList />
      </div>

      <div className="overflow-hidden">
        <ServicesMarque />
      </div>

      <div className="pb-20">
        <Expertise />
        <Expertise left={false} />
      </div>

      <div className="container-soluble">
        {servicesPage.map((service) => (
          <ServicesSections
            key={service.index}
            index={service.index}
            title={service.title}
            subtitle={service.subtitle}
            icon={service.icon}
            id={service.id}
            color={service.color}
            list={service.list}
            image={service.image}
            imageClassName={service.imageClassName}
          />
        ))}
      </div>

      <FinalCTA />
    </>
  );
}
