"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import WorkFilterBar, { FilterCategory } from "./WorkFilterBar";
import { projects, Project } from "@/lib/projects";
import StonezaShowcaseVisual from "./showcase/StonezaShowcaseVisual";
import CineVerseShowcaseVisual from "./showcase/CineVerseShowcaseVisual";
import TasklyShowcaseVisual from "./showcase/TasklyShowcaseVisual";
import EduLearnShowcaseVisual from "./showcase/EduLearnShowcaseVisual";

export default function WorkProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [sortBy, setSortBy] = useState("Latest");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.type === activeCategory;
  });

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container-soluble">
        
        {/* Top Category Filter & Sort Bar */}
        <WorkFilterBar
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Projects Cards List */}
        <div className="space-y-16 md:space-y-24 pt-4">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectShowcaseItem
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

function ProjectShowcaseItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  // Visual Left on even index (0: Stoneza, 2: Taskly), Visual Right on odd index (1: CineVerse, 3: EduLearn)
  const isVisualLeft = index % 2 === 0;

  const renderVisual = () => {
    switch (project.slug) {
      case "stoneza":
        return <StonezaShowcaseVisual />;
      case "cineverse":
        return <CineVerseShowcaseVisual />;
      case "taskly":
        return <TasklyShowcaseVisual />;
      case "edulearn":
        return <EduLearnShowcaseVisual />;
      default:
        return <StonezaShowcaseVisual />;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        
        {/* =========================================================
            VISUAL COLUMN
            ========================================================= */}
        <div className={isVisualLeft ? "order-1" : "order-1 lg:order-2"}>
          {renderVisual()}
        </div>

        {/* =========================================================
            CONTENT COLUMN
            ========================================================= */}
        <div className={`space-y-6 ${isVisualLeft ? "order-2" : "order-2 lg:order-1"}`}>
          
          {/* Top Badge & Project Number */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: project.badgeColor }}
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#777777]">
                {project.badge}
              </span>
            </div>

            <span className="font-mono text-xs font-bold text-[#999999]">
              {project.number}
            </span>
          </div>

          {/* Title & Doodle if any */}
          <div className="relative">
            <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-5xl">
              {project.title}
            </h2>

            {/* Doodle Arrow on Taskly */}
            {project.slug === "taskly" && (
              <div className="absolute -top-4 right-8 hidden sm:block pointer-events-none text-[#111111]">
                <svg width="45" height="35" viewBox="0 0 50 40" fill="none">
                  <path
                    d="M 6 32 C 18 10, 32 8, 44 14"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 34 8 L 44 14 L 38 24"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Subtitle */}
          <h3 className="text-lg font-bold text-[#222222] sm:text-xl">
            {project.subtitle}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[#555555] sm:text-base max-w-xl">
            {project.description}
          </p>

          {/* Technologies Pill Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#E6E6E0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#444444] shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Primary Action Button (Black Pill) */}
            <Link
              href={project.liveUrl || project.href}
              target={project.liveUrl ? "_blank" : undefined}
              className="group/btn inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:bg-[#222222] hover:-translate-y-0.5"
            >
              <span>{project.primaryButtonText}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>

            {/* View Case Study Button (White Pill with Circle Icon) */}
            <Link
              href={project.href}
              className="group/study inline-flex items-center gap-2 rounded-full border border-[#E4E4DE] bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#222222] shadow-2xs transition-all duration-300 hover:border-gray-400 hover:-translate-y-0.5"
            >
              <span>View case study</span>
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 text-[#444444] text-[9px] group-hover/study:bg-[#111111] group-hover/study:text-white transition-colors">
                ⊙
              </div>
            </Link>
          </div>

        </div>

      </div>
    </motion.article>
  );
}
