import React from "react";
import WorkHero from "@/components/work/WorkHero";
import ProjectCard from "@/components/sections/ProjectCard";
import FinalCTA from "@/components/common/FinalCTA";
import { projects } from "@/lib/projects";
import Reveal from "@/components/motion/Reveal";
import CurvedArrow from "@/components/graphics/CurvedArrow";

export const metadata = {
  title: "Our Work | Soluble Digivations",
  description:
    "Real projects. Real people. Real impact. Explore digital products, websites, and applications built by Soluble Digivations.",
};

export default function WorkPage() {
  return (
    <main className="overflow-hidden bg-background">
      {/* 1. HERO SECTION */}
      <WorkHero />

      {/* 2. SELECTED PROJECTS SHOWCASE */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container-soluble">
          {/* Header */}
          <div className="mb-12">
            <Reveal>
              <span className="inline-flex rounded-full border border-border bg-soluble-blue/20 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Case Studies
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="relative mt-4 text-4xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-5xl md:text-6xl">
                Featured Work
                <CurvedArrow
                  className="absolute -top-6 left-60 hidden md:block lg:left-72"
                  size={90}
                />
              </h2>
            </Reveal>
          </div>

          {/* Project List */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <FinalCTA />
    </main>
  );
}