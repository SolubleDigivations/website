import Hero from "@/components/sections/Hero";
import QuoteBand from "@/components/home/QuoteBand";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ProcessPreview from "@/components/sections/ProcessPreview";
import TechnologiesPreview from "@/components/sections/TechnologiesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import FinalCTA from "@/components/common/FinalCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <QuoteBand />
      <ProjectsPreview />
      <ProcessPreview/>
      <TechnologiesPreview/>
      <AboutPreview/>
      <TestimonialsPreview/>
      <FinalCTA/>
    </div>
  );
}
