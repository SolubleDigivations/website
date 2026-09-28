import Spark from "@/components/graphics/Spark";
import Hero from "@/components/sections/Hero";
import QuoteBand from "@/components/home/QuoteBand";
import Navbar from "@/components/layout/Navbar";
import Reveal from "@/components/motion/Reveal";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ProcessPreview from "@/components/sections/ProcessPreview";
import Expertise from "@/components/home/Expertise";
import TechnologiesPreview from "@/components/sections/TechnologiesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <Reveal>
      <QuoteBand />
      </Reveal>
      <ProjectsPreview />
      <ProcessPreview/>
      <TechnologiesPreview/>
      <AboutPreview/>
      <TestimonialsPreview/>
      <FinalCTA/>
      <Footer/>
    </div>
  );
}
