import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  CursorDoodle,
  DoodleCurlyLoop,
  DoodleObsessionLoop,
} from "./AboutDoodles";
import { Label } from "./AboutShared";
import SolubleLogo from "../common/SolubleLogo";
import CurvedArrow2 from "../graphics/CurvedArrow2";
import { Sunburst3 } from "../graphics/Sunburst3";
import Cursor from "../graphics/Cursor";
import MagneticButton from "../common/MagneticButton";

export function AboutHero() {
  return (
    <section className="container-soluble relative grid min-h-[calc(100vh-72px)] items-center gap-8 md:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      <div className="relative z-10">
        <Label>About us</Label>
        <h1 className="mt-5 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[68px]">
          Two people.
          <br />
          One{" "}
          <span className="relative inline-block">
            <span className="relative z-40">obsession.</span>
            <DoodleObsessionLoop className="pointer-events-none absolute -inset-x-4 -inset-y-2.5 h-[calc(100%+1.5rem)] w-[calc(100%+2rem)] z-0" />
          </span>
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Soluble Digivations is an independent digital engineering studio
          focused on building websites, applications and digital experiences for
          modern businesses.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-bold text-background shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Our work <ArrowUpRight size={15} />
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-white py-2 pl-6 pr-2 text-xs font-bold text-foreground shadow-xs transition-all hover:-translate-y-0.5 hover:border-foreground/30"
            >
              Get in touch{" "}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:scale-105">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </MagneticButton>
        </div>
      </div>
      <div className="relative mx-auto h-[380px] w-full max-w-[560px] sm:h-[460px] lg:h-[490px]">
        <div className="absolute left-[20%] top-[8%] h-44 w-44 rounded-[46%_54%_40%_60%] bg-linear-to-tl from-background to-70% to-soluble-blue transition-transform duration-700 hover:scale-105 sm:h-52 sm:w-52" />
        <div className="absolute left-[40%] top-[20%] h-48 w-44 rotate-12 rounded-[52%_48%_55%_45%] bg-linear-to-tl to-60% from-background to-soluble-mint transition-transform duration-700 hover:scale-105 sm:h-56 sm:w-52" />
        <div className="absolute left-[8%] top-[30%] h-48 w-48 rounded-[50%_50%_58%_42%] bg-linear-to-br from-background to-soluble-yellow to-40% transition-transform duration-700 hover:scale-105 sm:h-56 sm:w-56" />
        <div className="absolute right-[2%] top-[38%] h-32 w-32 rounded-full bg-linear-to-tr to-60% from-background to-soluble-pink transition-transform duration-700 hover:scale-105 sm:h-36 sm:w-36" />
        <div className="absolute left-[-4%] top-[-4%] z-20 -rotate-6 font-caveat text-lg font-bold uppercase leading-tight tracking-wide text-foreground sm:text-xl">
          IDEAS
          <br />
          DESIGN
          <br />
          DEVELOP
          <br />
          LAUNCH
          <CurvedArrow2 size={80} className="rotate-80 mt-5 translate-x-2" />
        </div>

        <div className="absolute right-[28%] top-[-4%] z-20 flex flex-col items-center">
          <span className="rounded-full border border-border/60 bg-white px-1 py font-black tracking-wider text-foreground shadow-sm flex items-center justify-center -rotate-6">
            <SolubleLogo className="scale-70 mr-0 -ml-2" />
          </span>
        </div>
        <div className="absolute -right-2 top-[6%] z-20 rotate-6 font-caveat text-lg font-bold uppercase leading-tight tracking-wide text-foreground sm:right-2 sm:text-xl">
          BUILDING
          <br />
          DIGITAL
          <br />
          TOGETHER
          <CurvedArrow2 size={80} className="-rotate-15 mt-5 -translate-x-5" />
        </div>

        <div className="absolute -left-12 top-[44%] z-20">
          <Cursor className="-rotate-25" />
          <CursorDoodle className="-translate-x-6 -translate-y-5"/>
        </div>

        <div className="absolute top-[-12%] left-[20%] rotate-20">
          <Sunburst3 className="rotate-180 " />
        </div>

        <div className="absolute inset-x-0 bottom-18 z-10 flex justify-center">
          <Image
            src="/assets/images/about/founders.png"
            alt="Soluble founders Adarsh and Kushal"
            width={700}
            height={500}
            priority
            sizes="(max-width: 768px) 90vw, 520px"
            className="h-auto w-[85%] select-none object-contain object-bottom drop-shadow-sm sm:w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}
