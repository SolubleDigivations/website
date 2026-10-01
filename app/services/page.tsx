import CurvedArrow from "@/components/graphics/CurvedArrow";
import Reveal from "@/components/motion/Reveal";
import { servicesPage } from "@/lib/services";
import ServicesPageCard from "@/components/services/ServicesPageCard";
import ServicesPageHero from "@/components/services/ServicesPageHero";
import FinalCTA from "@/components/sections/FinalCTA";
import ServicesList from "@/components/services/ServicesList";

function ServicesPage() {
  return (
    <div className="pb-15">
      <ServicesPageHero/>
      <div className="container-soluble py-5">
        <div className="">
          <Reveal>
            <span className="inline-flex rounded-full border border-border bg-soluble-purple/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              What we Offer
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] md:text-6xl relative">
              Our Services
              <CurvedArrow
                className="absolute left-88 top-0 font-extrabold"
                size={100}
              />
            </h2>
          </Reveal>
        </div>
      </div>
        
      <div className="min-h-[90vh] px-20">
        <ServicesList/>
      </div>
      <div className="container-soluble w-full mt-8 space-y-8">
        {servicesPage.map((service) => (
          <ServicesPageCard
            key={service.index}
            index={service.index}
            title={service.title}
            subtitle={service.subtitle}
            icon={service.icon}
            color={service.color}
            list={service.list}
            image={service.image}
          />
        ))}
      </div>
      <FinalCTA/>
    </div>
  );
}

export default ServicesPage;