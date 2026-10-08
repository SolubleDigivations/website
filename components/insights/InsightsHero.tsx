import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  FileText,
  Layers,
  Mail,
} from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import PinkHighlight from "@/components/graphics/Insights/PinkHighlight";
import DecorationBlobs from "./DecorationBlobs";
import InsightsGraphic from "./InsightsGraphic";
import MagneticButton from "../common/MagneticButton";

export default function InsightsHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* <DecorationBlobs/> */}

      <div className="container-soluble relative grid min-h-[calc(100vh-72px)] gap-4 pb-8 pt-20 md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-0 md:pb-12 md:pt-12">
        <div className="relative z-50 min-w-0">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f0e3ff] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.08em]">
              <BarChart3 size={13} />
              Insights
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="relative mt-7 max-w-[620px] text-[clamp(3.35rem,5.5vw,5.75rem)] font-extrabold leading-[0.97] tracking-[-0.08em]">
              <span className="whitespace-nowrap relative z-50">
                Ideas, insights
              </span>
              <br />
              and
              <span className="relative inline-block ml-5">
                <span className="relative z-50">perspectives</span>
                <PinkHighlight />
              </span>
              <br />
              <span className="whitespace-nowrap relative z-50">
                for what&apos;s next<span className=" text-[#FF8B3D]">.</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-[500px] text-base leading-7 md:text-lg md:leading-8">
              Thoughts, learnings and practical guides on design, development,
              technology and the future of digital products — from our team, for
              builders like you.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="#articles"
                  className="inline-flex items-center gap-5 rounded-full bg-foreground px-6 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-1"
                >
                  Explore insights <ArrowUpRight size={17} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#newsletter"
                  className="inline-flex items-center gap-5 rounded-full border border-black/20 bg-white/70 px-6 py-4 text-sm font-bold transition-colors hover:bg-white"
                >
                  Subscribe <Mail size={17} />
                </a>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
        <div>
          <InsightsGraphic />
        </div>
      </div>
      {/* <div className="pointer-events-none absolute bottom-[0px] left-1/2 -z-10 -translate-x-1/2 whitespace-nowrap text-[clamp(9rem,24vw,22rem)] font-extrabold leading-none tracking-[-0.1em] text-[#f1f1f8]">
        INSIGHTS
      </div> */}
    </section>
  );
}
