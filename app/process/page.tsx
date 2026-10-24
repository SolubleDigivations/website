import ProcessHero from "@/components/process/ProcessHero";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import ProcessInfinitySection from "@/components/process/ProcessInfinitySection";
import ProcessCTA from "@/components/process/ProcessCTA";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";

export const metadata = generatePageMetadata("process");

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F5]">
      <JsonLd data={getPageJsonLd("process")} />
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