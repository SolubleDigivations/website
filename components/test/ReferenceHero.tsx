"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, BarChart3, Code2, Globe2, Palette } from "lucide-react";
import { motion } from "motion/react";

const technologies = ["Next.js", "React", "MongoDB", "Cloudinary", "Razorpay"];

const cards = [
  {
    className: "left-[8%] top-[8%]",
    color: "#8b9cff",
    rotate: "-7deg",
    icon: Globe2,
    title: "IDEA",
    subtitle: "Strategy",
  },
  {
    className: "right-[10%] top-[12%]",
    color: "#ffd65a",
    rotate: "5deg",
    icon: Palette,
    title: "DESIGN",
    subtitle: "UI/UX",
  },
  {
    className: "left-[39%] top-[38%]",
    color: "#54d6b0",
    rotate: "-3deg",
    icon: Code2,
    title: "DEVELOP",
    subtitle: "Engineering",
  },
  {
    className: "left-[20%] bottom-[4%]",
    color: "#ff9b86",
    rotate: "4deg",
    icon: BarChart3,
    title: "LAUNCH",
    subtitle: "Growth",
  },
];

export default function ReferenceHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-295 items-center gap-3 px-6 pb-14 pt-5 md:px-10 md:pb-16 md:pt-7 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:pb-20 lg:pt-8">
        <div className="relative z-10 max-w-140">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full border border-[#e4e4df] bg-white/70 px-3 py-1 text-[10px] font-medium text-[#777771]"
          >
            Digital Engineering for Modern Businesses
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="mt-5 max-w-130 text-[clamp(3.35rem,5.2vw,5rem)] font-bold leading-[0.88] tracking-[-0.075em]"
          >
            We build
            <br />
            digital products
            <br />
            that <span className="relative inline-block">move<Highlight /></span>
            <br />
            businesses
            <br />
            forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="mt-5 max-w-97.5 text-sm leading-5 text-[#666660]"
          >
            Websites, web applications and digital experiences
            <br />
            engineered for modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2.5 text-[11px] font-semibold text-white">
              Start a project
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10"><ArrowUpRight size={12} /></span>
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 rounded-full border border-[#deded8] bg-white px-4 py-2.5 text-[11px] font-semibold text-[#222]">
              See our work
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#deded8]"><ArrowDown size={11} /></span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="mt-8"
          >
            <p className="text-[9px] text-[#898982]">Trusted by builders, startups and businesses</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-semibold text-[#555550]">
              {technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </motion.div>
        </div>

        <ReferenceGraphic />
      </div>
    </section>
  );
}

function ReferenceGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, x: 16 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative -mt-4 min-h-102.5 md:min-h-117.5 lg:-ml-8 lg:mt-0 lg:min-h-130"
    >
      <span className="absolute right-[-1%] top-[16%] h-20 w-14 rotate-20 rounded-[70%_30%_60%_40%] bg-soluble-blue" />
      <span className="absolute left-[1%] top-[38%] h-14 w-24 rotate-18 rounded-[55%_45%_60%_40%] bg-soluble-purple" />
      <span className="absolute right-[10%] top-[48%] h-24 w-14 rotate-32 rounded-[70%_30%_55%_45%] bg-[#ff7445]" />
      <span className="absolute right-[8%] bottom-[8%] h-20 w-20 rounded-full bg-soluble-mint" />

      <span className="absolute left-[13%] top-[3%] z-30 flex rotate-[-18deg] flex-col gap-1.5">
        <i className="ml-3 h-3 w-7 rotate-45 rounded-full bg-soluble-yellow" />
        <i className="h-2 w-5 rounded-full bg-[#ff5747]" />
      </span>
      <span className="absolute left-[49%] top-[28%] z-30 flex gap-2">
        <i className="h-8 w-1 rotate-18 rounded-full bg-[#111]" />
        <i className="h-7 w-1 rotate-[-22deg] rounded-full bg-[#111]" />
        <i className="h-5 w-1 rotate-55 rounded-full bg-[#111]" />
      </span>
      <span className="absolute right-[37%] bottom-[19%] z-30 rotate-[-8deg] text-4xl text-[#111]">▶</span>

      <svg viewBox="0 0 600 560" preserveAspectRatio="none" fill="none" aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible">
        <WorkflowPath path="M168 142 C238 58 345 70 405 128" arrow="M388 116 L405 128 L384 135" delay={0.85} />
        <WorkflowPath path="M405 154 C386 188 362 224 338 245 C321 260 308 274 300 285" arrow="M300 285 L316 268 L320 289" delay={1} />
        <WorkflowPath path="M272 314 C258 360 230 414 195 450" arrow="M195 450 L214 441 L207 461" delay={1.15} />
      </svg>

      {cards.map(({ className, color, rotate, icon: Icon, title, subtitle }) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate }}
          transition={{ duration: 0.65, delay: 0.2 + cards.findIndex((card) => card.title === title) * 0.12 }}
          whileHover={{ y: -6, rotate: "0deg", scale: 1.03 }}
          className={`absolute z-20 ${className}`}
        >
          <div style={{ backgroundColor: color }} className="flex h-32 w-32 flex-col items-center justify-center rounded-[18px] p-3 shadow-[0_18px_35px_rgba(0,0,0,0.08)] md:h-36 md:w-36">
            <Icon size={24} strokeWidth={2.3} />
            <strong className="mt-2 text-xs tracking-[-0.03em] md:text-sm">{title}</strong>
            <span className="mt-0.5 text-[10px] font-medium opacity-70">{subtitle}</span>
          </div>
        </motion.div>
      ))}

      <p className="absolute bottom-[16%] right-[1%] z-20 max-w-25 rotate-[-8deg] text-center text-[10px] font-bold uppercase leading-3.5 tracking-wide">
        From ideas<br />to impact
      </p>
    </motion.div>
  );
}

function WorkflowPath({ path, arrow, delay }: { path: string; arrow: string; delay: number }) {
  return (
    <>
      <motion.path d={path} stroke="#111" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay, ease: "easeInOut" }} />
      <motion.path d={arrow} stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.65 }} />
    </>
  );
}

function Highlight() {
  return (
    <svg viewBox="0 0 180 55" className="pointer-events-none absolute -inset-x-3 -bottom-1 h-[110%] w-[calc(100%+24px)]" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <motion.path d="M7 28 C35 5 140 8 171 26 C145 50 35 53 7 28Z" stroke="#ffd65a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.55 }} />
    </svg>
  );
}
