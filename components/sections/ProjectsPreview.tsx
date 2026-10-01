"use client";

import Reveal from "@/components/motion/Reveal";
import ProjectCard from "./ProjectCard";

import { projects } from "@/lib/projects";
import Link from "next/link";
import CurvedArrow from "../graphics/CurvedArrow";

export default function ProjectsPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-soluble">

        {/* Heading */}
        <div className="mb-10 grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">

          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground bg-soluble-blue/25">
                Featured work
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-4 text-5xl font-bold leading-[0.95] tracking-[-0.06em] md:text-6xl relative">
                Selected projects
                <CurvedArrow className="absolute top-2 right-44" size={100}/>
              </h2>
              
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="max-w-md md:justify-self-end">
              <p className="text-sm leading-6 text-muted-foreground">
                Real projects. Real impact.
                <br />
                Here are some of the products we've built.
              </p>

              <Link
                href="/work"
                className="mt-4 inline-flex text-sm font-semibold underline-offset-4 hover:underline"
              >
                View all work
                <span className="ml-2">↗</span>
              </Link>
            </div>
          </Reveal>

        </div>

        {/* Projects */}
        <div className="space-y-10">
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
  );
}