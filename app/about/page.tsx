import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutTechStack } from "@/components/about/AboutTechStack";
import { AboutValues } from "@/components/about/AboutValues";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";

export const metadata = generatePageMetadata("about");

export default function About() {
  return (
    <main className="overflow-hidden bg-background">
      <JsonLd data={getPageJsonLd("about")} />
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutApproach />
      <AboutTeam />
      <AboutValues />
      <AboutTechStack />
      <AboutCta />
    </main>
  );
}