"use client";

import { useEffect, useState } from "react";
import { Check, ArrowRight } from "lucide-react";

export interface NavStep {
  id: string;
  number: string;
  name: string;
  tagline: string;
  color: string;
  dotBg: string;
  dotBorder: string;
}

export const PROCESS_NAV_STEPS: NavStep[] = [
  {
    id: "stage-understand",
    number: "01",
    name: "Understand",
    tagline: "Find clarity",
    color: "#FF91D4",
    dotBg: "bg-[#FF91D4]",
    dotBorder: "border-[#FF91D4]",
  },
  {
    id: "stage-shape",
    number: "02",
    name: "Shape",
    tagline: "Define direction",
    color: "#6C8CFF",
    dotBg: "bg-[#6C8CFF]",
    dotBorder: "border-[#6C8CFF]",
  },
  {
    id: "stage-design",
    number: "03",
    name: "Design",
    tagline: "Craft experiences",
    color: "#FFD65A",
    dotBg: "bg-[#FFD65A]",
    dotBorder: "border-[#FFD65A]",
  },
  {
    id: "stage-build",
    number: "04",
    name: "Build",
    tagline: "Bring to life",
    color: "#52D9AD",
    dotBg: "bg-[#52D9AD]",
    dotBorder: "border-[#52D9AD]",
  },
  {
    id: "stage-release",
    number: "05",
    name: "Release",
    tagline: "Grow & improve",
    color: "#FF7A50",
    dotBg: "bg-[#FF7A50]",
    dotBorder: "border-[#FF7A50]",
  },
];

export default function ProcessStepperNav() {
  const [activeStep, setActiveStep] = useState<string>("stage-understand");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 350;
      for (let i = PROCESS_NAV_STEPS.length - 1; i >= 0; i--) {
        const el = document.getElementById(PROCESS_NAV_STEPS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveStep(PROCESS_NAV_STEPS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      id="process-stages"
      className=" z-30 py-3 backdrop-blur-md transition-all border-y border-[#111111]/5 bg-[#F8F8F5]/85"
    >
      <div className="container-soluble">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-1 gap-2 sm:gap-4 md:justify-center">
          {PROCESS_NAV_STEPS.map((step, idx) => {
            const isActive = activeStep === step.id;
            return (
              <div key={step.id} className="flex items-center gap-2 sm:gap-4 shrink-0">
                <button
                  type="button"
                  onClick={() => scrollToSection(step.id)}
                  className={`group relative flex items-center gap-2.5 rounded-full px-3.5 py-2 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-sm ring-1 ring-black/5"
                      : "hover:bg-white/60 text-[#6B6B6B]"
                  }`}
                >
                  {/* Color Circle Indicator */}
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-white transition-transform duration-300 ${
                      isActive ? "scale-110 ring-2 ring-offset-1 ring-black/10" : "group-hover:scale-105"
                    }`}
                    style={{ backgroundColor: step.color }}
                  >
                    {isActive ? (
                      <Check className="h-3 w-3 stroke-[3]" />
                    ) : (
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </div>

                  {/* Stage Name & Tagline */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5">
                    <span
                      className={`text-xs font-bold tracking-tight ${
                        isActive ? "text-[#111111]" : "text-[#333333] group-hover:text-[#111111]"
                      }`}
                    >
                      {step.name}
                    </span>
                    <span className="text-[10px] text-[#777777] hidden sm:inline">
                      {step.tagline}
                    </span>
                  </div>
                </button>

                {/* Arrow Connector between steps */}
                {idx < PROCESS_NAV_STEPS.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-[#111111]/25 shrink-0 hidden md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
