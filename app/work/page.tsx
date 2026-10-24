import WorkHero from "@/components/work/WorkHero";
import WorkProjectsShowcase from "@/components/work/WorkProjectsShowcase";
import WorkPageCTA from "@/components/work/WorkPageCTA";

import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";

export const metadata = generatePageMetadata("work");

export default function WorkPage() {
  return (
    <main className="overflow-hidden bg-[#F8F8F5]">
      <JsonLd data={getPageJsonLd("work")} />
      {/* 1. HERO SECTION */}
      <WorkHero />

      {/* 2. SELECTED PROJECTS SHOWCASE WITH FILTER & BESPOKE MOCKUPS */}
      <WorkProjectsShowcase />

      {/* 3. WORK PAGE CTA BANNER */}
      <WorkPageCTA />
    </main>
  );
}