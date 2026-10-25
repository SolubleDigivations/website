"use client";

import Reveal from "@/components/motion/Reveal";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/services";
import CurvedArrow from "../graphics/CurvedArrow";
import { AdIcon, ArrowUpRight, DatabaseSearch, LucideIcon, LucideWrench } from "lucide-react";
import { motion } from "motion/react";
import { CSSProperties } from "react";
import Link from "next/link";

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
          <MoreServiceCard title="6+ Services" description="Solution to more than six different needs under one roof." icon={DatabaseSearch} icon2={AdIcon} icon3={LucideWrench} color="#FFD65A" delay={0.24} href={'/services#services-list'}/>
        </div>

      </div>
    </section>
  );
}

interface ServiceCardProps {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  icon2: LucideIcon;
  icon3: LucideIcon;
  color: string;
  delay?: number;
}

export function MoreServiceCard({
  href,
  title,
  description,
  icon: Icon,
  icon2: Icon2,
  icon3: Icon3,
  color,
  delay = 0,
}: ServiceCardProps) {
  return (
    <Link href={href}>
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative min-h-[270px] overflow-hidden rounded-[1.25rem] border border-border bg-white p-6 cursor-pointer"
    >
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}
        <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background">
          <Icon size={25} strokeWidth={1.8} />
        </div>
        <div className="absolute top-0 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background -z-5 group-hover:translate-x-3.5 transition-transform duration-100">
          <Icon2 size={25} strokeWidth={1.8} />
        </div>
        <div className="absolute top-0 left-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background -z-10 group-hover:translate-x-6 transition-transform duration-100">
          <Icon3 size={25} strokeWidth={1.8} />
        </div>
        

        {/* Text */}
        <div className="my-auto max-w-[220px]">
          <h3 className="text-2xl font-bold tracking-[-0.04em]">{title}</h3>

          <p className="mt-2 text-sm leading-5 text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Arrow */}
        <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-full border border-border text-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-foreground group-hover:text-background">
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Decorative color shape */}
      <div
        className={`absolute -bottom-12 -right-7 lg:-bottom-12 lg:-right-8 h-40 w-40 lg:h-32 lg:w-32 rounded-full ${color} transition-transform duration-500 group-hover:scale-110`}
        style={
          {
            backgroundImage:
              `linear-gradient(to bottom right, var(--background), color-mix(in srgb, var(--service-color) 100%, transparent), var(--service-color))`,
            "--service-color": color,
          } as CSSProperties
        }
      />
    </motion.article>
    </Link>
  );
}
