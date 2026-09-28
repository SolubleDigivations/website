"use client";

import type { ReactNode } from "react";
import { BarChart3, Code2, Globe2, Palette } from "lucide-react";
import { motion } from "motion/react";

const workflowCards = [
  { className: "left-[19%] top-[8%]", color: "#6c8cff", rotate: "-7deg", icon: <Globe2 size={29} strokeWidth={2.1} />, title: "IDEA", subtitle: "Strategy", delay: 0.3 },
  { className: "left-[54%] top-[13%]", color: "#ffd65a", rotate: "5deg", icon: <Palette size={29} strokeWidth={2.1} />, title: "DESIGN", subtitle: "UI/UX", delay: 0.45 },
  { className: "left-[37%] top-[43%]", color: "#52d9ad", rotate: "-3deg", icon: <Code2 size={31} strokeWidth={2.1} />, title: "DEVELOP", subtitle: "Engineering", delay: 0.6 },
  { className: "left-[18%] top-[74%]", color: "#ff91d4", rotate: "-4deg", icon: <BarChart3 size={29} strokeWidth={2.1} />, title: "LAUNCH", subtitle: "Growth", delay: 0.75 },
];

export default function HeroGraphic() {
  return (
    <div className="absolute inset-0 -translate-y-5 lg:-translate-y-7">
      <div className="absolute right-[-2%] top-[5%] h-[92%] w-[99%] max-w-175">
        <DecorativeShapes />
        <IdeaMarks />
        <WorkflowPaths />
        <ScribbleMarks />
        <ImpactLabel />
        <CursorMark />
        {workflowCards.map((card) => <WorkflowCard key={card.title} {...card} />)}
      </div>
    </div>
  );
}

function DecorativeShapes() {
  return (
    <>
      <motion.div initial={{ opacity: 0, scale: 0.7, rotate: -12 }} animate={{ opacity: 1, scale: 1, rotate: 16 }} transition={{ duration: 0.7, delay: 0.75 }} className="absolute left-[5%] top-[37%] z-0 h-17 w-23.5 rounded-[58%_42%_65%_35%] bg-soluble-purple" />
      <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1, rotate: 18 }} transition={{ duration: 0.7, delay: 0.85 }} className="absolute right-[-1%] top-[15%] z-0 h-22 w-23 rounded-[65%_35%_52%_48%] bg-soluble-blue" />
      <motion.div initial={{ opacity: 0, scale: 0.7, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 26 }} transition={{ duration: 0.7, delay: 0.95 }} className="absolute right-[10%] top-[48%] z-0 h-24.5 w-16.5 rounded-[62%_38%_68%_32%] bg-[#ff7445]" />
      <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 1 }} className="absolute bottom-[8%] right-[9%] z-0 h-22.5 w-22.5 rounded-full bg-soluble-mint">
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-xs bg-[#111]" />
      </motion.div>
    </>
  );
}

function IdeaMarks() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 1 }} className="absolute left-[5%] top-[1%] z-30 rotate-[-18deg]">
      <span className="absolute left-4 top-0 h-3 w-7 rotate-45 rounded-full bg-soluble-yellow" />
      <span className="absolute left-0 top-5 h-2 w-5 rounded-full bg-[#ff5747]" />
      <span className="absolute left-9 top-6 h-3 w-3 rounded-full bg-soluble-pink" />
    </motion.div>
  );
}

function ScribbleMarks() {
  return (
    <motion.svg viewBox="0 0 72 58" className="absolute left-[47%] top-[28%] z-30 h-14.5 w-18" fill="none" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 1.15 }}>
      <path d="M8 42L18 22" stroke="#111" strokeWidth="4" strokeLinecap="round" />
      <path d="M27 37L30 15" stroke="#111" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 40L51 20" stroke="#111" strokeWidth="4" strokeLinecap="round" />
    </motion.svg>
  );
}

function WorkflowPaths() {
  return (
    <svg viewBox="0 0 600 560" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible" fill="none" aria-hidden="true">
      <WorkflowPath delay={0.8} path="M265 130 C300 42 350 30 405 112" arrowPath="M405 112 L382 101 L388 124" />
      <WorkflowPath delay={1} path="M468 128 C548 166 548 272 486 322 C458 346 430 336 390 306" arrowPath="M390 306 L418 298 M390 306 L410 328" />
      <WorkflowPath delay={1.15} path="M270 372 C174 372 91 400 78 466 C68 514 111 541 188 535" arrowPath="M188 535 L169 522 L172 546" />
      <motion.path d="M560 430 C575 457 567 486 543 500 C532 506 521 508 510 507" stroke="#111" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 1.45 }} />
      <motion.path d="M511 507 L524 495 M511 507 L525 512" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }} />
    </svg>
  );
}

function WorkflowPath({ path, arrowPath, delay }: { path: string; arrowPath: string; delay: number }) {
  return (
    <>
      <motion.path d={path} stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }} />
      <motion.path d={arrowPath} stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: delay + 0.75 }} />
    </>
  );
}

function CursorMark() {
  return (
    <motion.svg viewBox="0 0 46 42" className="absolute left-[52%] top-[68%] z-40 h-10 w-11 rotate-8" initial={{ opacity: 0, scale: 0, rotate: -20 }} animate={{ opacity: 1, scale: 1, rotate: 8 }} transition={{ duration: 0.45, delay: 1.3 }}>
      <path d="M4 3L39 20L17 39L4 3Z" fill="#111" />
    </motion.svg>
  );
}

function ImpactLabel() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.35 }} className="absolute right-[3%] top-[65%] z-20 w-25 rotate-[-11deg] text-center text-[11px] font-semibold uppercase leading-[1.35] tracking-[0.08em]">
      FROM<br />IDEAS TO<br />IMPACT
    </motion.div>
  );
}

function WorkflowCard({ className, color, rotate, delay, icon, title, subtitle }: { className: string; color: string; rotate: string; delay: number; icon: ReactNode; title: string; subtitle: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30, scale: 1, rotate: 0 }} animate={{ opacity: 1, y: 0, scale: 1, rotate }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -6, scale: 1.025 }} className={`absolute z-20 ${className}`}>
      <div style={{ backgroundColor: color, width: 156.25, height: 156.25 }} className="flex flex-col items-center justify-center rounded-[19px] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.07)]">
        <div className="mb-3">{icon}</div>
        <p className="text-[15px] font-bold tracking-[-0.02em]">{title}</p>
        <p className="mt-1 text-xs font-medium opacity-65">{subtitle}</p>
      </div>
    </motion.div>
  );
}
