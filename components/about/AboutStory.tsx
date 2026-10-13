import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lightbulb, Rocket, Users } from "lucide-react";
import { DoodleCurlyLoop, DoodleTitleArrow } from "./AboutDoodles";
import { Label } from "./AboutShared";
import CurvedArrow2 from "../graphics/CurvedArrow2";
import CrowShape from "../graphics/CrowShape";
import Spark from "../graphics/Spark";

export function AboutStory() {
  return (
    <section className="container-soluble py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div>
          <Label>Our story</Label>
          <div className="mt-3 inline relative">
            <h2 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[48px] ">
              From curiosity
              <br />
              to Soluble.
            </h2>
            <CurvedArrow2 className="absolute -rotate-12 top-[20%] right-[40%]" size={90}/>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            We started Soluble Digivations with a simple idea — combine design,
            engineering and strategy to build digital products that actually
            solve real problems.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            What began as two people exploring ideas, quickly turned into a
            focused effort to help businesses, startups and independent founders
            bring their ideas to life on the web and mobile.
          </p>
          <Link
            href="/process"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-bold text-background shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Our journey <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -left-14 top-1/2 z-10 hidden -translate-y-1/2 sm:block">
            <CrowShape className="scale-80 rotate-210"/>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-bl from-white to-background p-4 shadow-sm sm:p-5">
            <div className="relative h-[260px] w-full sm:h-[320px] flex">
              <div className="flex flex-col justify-between w-3/5">
                <div className="z-10 -rotate-3 font-caveat text-lg font-bold uppercase tracking-wider text-foreground drop-shadow-xs sm:text-xl">
                  SAME TEAM. <Spark className="inline scale-70 -ml-1 -mt-2"/><br />
                  BIGGER IDEAS.
                </div>
                <Image
                  src="/assets/images/about/workspace.jpg"
                  alt="Soluble creative developer and designer workspace"
                  width={200}
                  height={150}
                  className="aspect-auto w-[95%] rounded-sm -rotate-5 ml-3 mb-2"
                />
              </div>
              <div className="z-20 flex max-w-[230px] flex-col gap-2 sm:bottom-5 sm:right-5 sm:max-w-[260px] sm:gap-2.5 ml-auto">
                {[
                  [
                    Lightbulb,
                    "bg-soluble-purple/80",
                    "Turn ideas into products",
                    "bg-linear-to-r from-soluble-purple/40 to-soluble-purple/80",
                  ],
                  [
                    Users,
                    "bg-soluble-mint/80",
                    "Work closely with clients",
                    "bg-linear-to-r from-soluble-mint/30 to-soluble-mint/80",
                  ],
                  [
                    Rocket,
                    "bg-soluble-yellow/80",
                    "Keep learning and growing",
                    "bg-linear-to-r from-soluble-yellow/30 to-soluble-yellow/80",
                  ],
                ].map(([Icon, iconCircle, text, color]) => (
                  <div
                    className={`flex items-center gap-3 rounded-2xl px-3 py-2 shadow-md backdrop-blur-xs transition-transform hover:scale-102 ${color}`}
                    key={text as string}
                  >
                    <span className={`p-3.5 rounded-full ${iconCircle}`}>
                      <Icon size={16} color="#000000"/>
                    </span>
                    <span className="text-xs font-bold leading-tight text-foreground sm:text-sm w-28 flex items-center justify-center h-14 pl-1">
                      {text as string}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
