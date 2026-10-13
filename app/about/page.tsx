import type { Metadata } from "next";
import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutTechStack } from "@/components/about/AboutTechStack";
import { AboutValues } from "@/components/about/AboutValues";

export const metadata: Metadata = {
  title: "About | Soluble Digivations",
  description: "Meet the people and principles behind Soluble Digivations.",
};

export default function About() {
  return (
    <main className="overflow-hidden bg-background">
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