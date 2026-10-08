import type { Metadata } from "next";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessStepperNav from "@/components/process/ProcessStepperNav";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import ProcessInfinitySection from "@/components/process/ProcessInfinitySection";
import ProcessCTA from "@/components/process/ProcessCTA";

export const metadata: Metadata = {
  title: "Process | Soluble Digivations",
  description: "How we turn messy problems into digital products people actually use.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F5]">
      {/* 1. Hero Section */}
      <ProcessHero />

      {/* 2. Stepper Navigation Pill Bar */}
      {/* <ProcessStepperNav /> */}

      {/* 3. 5-Stage Interactive Timeline with Continuous Connecting Path */}
      <ProcessTimeline />

      {/* 4. "It doesn't end at launch" Infinity Lifecycle Section */}
      <ProcessInfinitySection />

      {/* 5. Bottom Dark CTA Banner */}
      <ProcessCTA />
    </main>
  );
}