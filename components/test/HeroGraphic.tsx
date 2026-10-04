"use client";

import { BarChart3, Code2, Globe2, Palette } from "lucide-react";
import { motion } from "motion/react";
import WorkflowCard from "./WorkflowCard";
import WorkflowArrows from "./WorkflowArrows";
import HeroDecorations from "./HeroDecorations";

export default function HeroGraphic() {
  return (
    <div className="relative h-[500px] w-full max-w-[620px] sm:h-[560px] lg:h-[600px] xl:max-w-[660px]">
      {/* 1. Background Organic Accent Shapes & Doodles (Entrance: 0.35s) */}
      <HeroDecorations />

      {/* 2. Hand-drawn SVG Workflow Connecting Arrows (Staggered: 0.45s, 0.60s, 0.75s, 0.90s) */}
      <WorkflowArrows />

      {/* 3. The 4 Workflow Cards (Staggered: 0.00s, 0.10s, 0.20s, 0.30s) */}
      
      {/* CARD 1: IDEA / Strategy (Entrance: 0.00s) */}
      <WorkflowCard
        className="left-[6%] top-[5%] sm:left-[5%] sm:top-[-4%]"
        color="#6C8CFF"
        rotate="-6deg"
        hoverRotate="0deg"
        delay={0.0}
        widthClass="w-[156px] sm:w-[172px] lg:w-[184px]"
        heightClass="h-[150px] sm:h-[166px] lg:h-[178px]"
        icon={<Globe2 className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={2.1} />}
        title="IDEA"
        subtitle="Strategy"
        shadowColor="0 20px 50px rgba(108, 140, 255, 0.20)"
        extraElement={''
        }
      />

      {/* CARD 2: DESIGN / UI/UX (Entrance: 0.10s) */}
      <WorkflowCard
        className="right-[6%] top-[9%] sm:right-[24%] sm:top-[1%]"
        color="#FFD65A"
        rotate="-6deg"
        hoverRotate="0deg"
        delay={0.5}
        widthClass="w-[156px] sm:w-[172px] lg:w-[184px]"
        heightClass="h-[150px] sm:h-[166px] lg:h-[178px]"
        icon={<Palette className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={2.1} />}
        title="DESIGN"
        subtitle="UI/UX"
        shadowColor="0 20px 50px rgba(255, 214, 90, 0.22)"
      />

      {/* CARD 3: DEVELOP / Engineering (Visual Center, Entrance: 0.20s) */}
      <WorkflowCard
        className="right-[35%] top-[38%] sm:right-[26%] sm:top-[42%]"
        color="#52D9AD"
        rotate="-6deg"
        hoverRotate="0deg"
        delay={1}
        widthClass="w-[162px] sm:w-[178px] lg:w-[190px]"
        heightClass="h-[156px] sm:h-[172px] lg:h-[184px]"
        icon={<Code2 className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={2.2} />}
        title="DEVELOP"
        subtitle="Engineering"
        shadowColor="0 22px 52px rgba(82, 217, 173, 0.25)"
      />

      {/* CARD 4: LAUNCH / Growth + White Puzzle Tab + Mouse Cursor (Entrance: 0.30s) */}
      <WorkflowCard
        className="bottom-[4%] left-[14%] sm:bottom-[4%] sm:left-[10%]"
        color="#FF9B86"
        rotate="-4deg"
        hoverRotate="0deg"
        delay={1.5}
        widthClass="w-[156px] sm:w-[172px] lg:w-[184px]"
        heightClass="h-[150px] sm:h-[166px] lg:h-[178px]"
        icon={<BarChart3 className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={2.2} />}
        title="LAUNCH"
        subtitle="Growth"
        shadowColor="0 20px 50px rgba(255, 155, 134, 0.22)"
        extraElement={
          <>
            {/* White Puzzle Tab */}

            {/* Mouse Cursor Pointer (Black Arrow) */}
            <motion.div
              animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-7 top-0.5 z-30 drop-shadow-md"
            >
              <svg width="32" height="32" viewBox="0 0 34 34" fill="none">
                <path
                  d="M 5 5 L 14 29 L 19 20 L 28 17 Z"
                  fill="#111111"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </>
        }
      />
    </div>
  );
}
