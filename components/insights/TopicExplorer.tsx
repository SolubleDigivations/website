import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { topics } from "@/lib/insights";

export default function TopicExplorer() {
  return (
    <section className="container-soluble pb-24">
      <Reveal>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end">
          <div className="lg:w-56">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
              Popular topics <span className="h-px w-12 bg-border" />
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[0.9] tracking-[-0.07em]">
              Explore by
              <br />
              topic<span className="text-[#ff8b3d]">.</span>
            </h2>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {topics.map((topic) => (
              <Link
                key={topic.name}
                href="#articles"
                className="group rounded-xl border border-border bg-white p-4 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: topic.color }}>
                  {topic.name.charAt(0)}
                </span>
                <span className="mt-5 block text-xs font-bold">{topic.name}</span>
                <span className="mt-1 block text-[10px] text-muted-foreground">{topic.count} articles</span>
                <ArrowUpRight size={14} className="mt-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
