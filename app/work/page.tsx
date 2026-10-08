import React from "react";
import WorkHero from "@/components/work/WorkHero";
import WorkProjectsShowcase from "@/components/work/WorkProjectsShowcase";
import WorkPageCTA from "@/components/work/WorkPageCTA";

export const metadata = {
  title: "Our Work | Soluble Digivations",
  description:
    "Real projects. Real people. Real impact. Explore digital products, websites, and applications built by Soluble Digivations.",
};

export default function WorkPage() {
  return (
    <main className="overflow-hidden bg-[#F8F8F5]">
      {/* 1. HERO SECTION */}
      <WorkHero />

      {/* 2. SELECTED PROJECTS SHOWCASE WITH FILTER & BESPOKE MOCKUPS */}
      <WorkProjectsShowcase />

      {/* 3. WORK PAGE CTA BANNER */}
      <WorkPageCTA />
    </main>
  );
}