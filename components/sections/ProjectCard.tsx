"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import type { Project } from "@/lib/projects";
import ProjectVisual from "./ProjectVisual";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group overflow-hidden rounded-[1.5rem] border border-border bg-white"
    >
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        {/* Project information */}
        <div className="flex flex-col p-7 md:p-9 lg:p-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              {project.category}
            </p>

            <h3 className="mt-3 flex items-center gap-2 text-3xl font-bold tracking-[-0.05em]">
              {project.title}

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-foreground group-hover:text-background">
                <ArrowUpRight size={15} />
              </span>
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Link */}
          <Link
            href={project.href}
            className="mt-auto pt-10 text-sm font-semibold underline-offset-4 hover:underline"
          >
            View project
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Project visual */}
        <div className="relative min-h-[320px] overflow-hidden bg-[#ECECE7] lg:min-h-[440px]">
          <motion.div
            className="absolute inset-0"
            whileHover={{
              scale: 1.025,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[440px]">
              <ProjectVisual project={project.slug as "stoneza" | "cineverse"} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
