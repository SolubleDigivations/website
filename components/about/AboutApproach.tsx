import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DoodleCurlyLoop, DoodleVennArrow } from "./AboutDoodles";
import { Label } from "./AboutShared";
import { Sunburst3 } from "../graphics/Sunburst3";
import CrowShape from "../graphics/CrowShape";
import Spark from "../graphics/Spark";
import Image from "next/image";

export function AboutApproach() {
  return (
    <section className="container-soluble py-16 md:py-24 lg:py-0 lg:min-h-[calc(100vh-72px)] flex justify-center items-center">
      <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Label>Our approach</Label>
          <div className="mt-3 flex items-start gap-3">
            <h2 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[48px]">
              More than just
              <br />
              development.
            </h2>
            <Sunburst3 className="mt-2 ml-2 h-12 w-12 shrink-0 text-foreground -rotate-90" />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            We don&apos;t just write code. We work across the entire product
            journey — from understanding the problem to designing, building and
            deploying the solution.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our goal is to create digital experiences that are fast, scalable
            and truly useful for your business.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-bold text-background shadow-sm transition-transform hover:-translate-y-0.5"
          >
            How we work <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-between">
          <div className="absolute -left-12 top-[60%] -translate-y-1/2">
            <CrowShape className="scale-90 rotate-200" />
          </div>
          <div className="absolute top-[-5%] left-[-4%]">
            <Spark />
          </div>
          <div className="relative h-[320px] w-[300px] shrink-0 sm:h-[350px] sm:w-[330px] rotate-5">
            <div className="absolute left-1/2 top-[45%] z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-2xl font-black text-white shadow-lg">
              <Image
                src="/assets/images/logo/logo-6.png"
                alt="Soluble Digital Innovation"
                width={90}
                height={90}
                priority
                className="w-8 md:w-10 aspect-square h-auto"
              />
            </div>
            {[
              [
                "Design",
                "User focused",
                "experiences",
                "-left-[10px] top-2 bg-linear-to-r from-soluble-purple to-soluble-purple/40",
              ],
              [
                "Engineering",
                "Scalable and",
                "modern solutions.",
                "-right-[10px] top-2 bg-linear-to-l from-soluble-mint to-soluble-mint/40",
              ],
              [
                "Strategy",
                "Understand your",
                "business and goals.",
                "bottom-1 left-1/2 -translate-x-1/2 bg-linear-to-t from-soluble-yellow to-soluble-yellow/40",
              ],
            ].map(([title, line1, line2, position]) => (
              <div
                key={title}
                className={`absolute flex aspect-square w-48 flex-col items-center justify-center rounded-full p-3 text-center shadow-xs transition-transform hover:scale-105 ${position}`}
              >
                <span className="text-lg font-black text-foreground">
                  {title}
                </span>
                <span className="mt-0.5 text-xs leading-tight text-foreground">
                  {line1}
                  <br />
                  {line2}
                </span>
              </div>
            ))}
            <div className="absolute -bottom-10 -right-4">
              <Sunburst3 className="scale-90 text-foreground -rotate-6" />
            </div>
          </div>
          <div className="relative flex flex-col items-center pl-2">
            <DoodleVennArrow className="mb-1 h-12 w-16 text-foreground rotate-z-180 rotate-x-180 rotate-50 -translate-x-20" />
            <div className="text-center font-caveat text-lg font-black uppercase leading-snug tracking-wider text-foreground -rotate-8">
              IDEAS
              <br />
              <span className="text-sm text-muted-foreground">+</span>
              <br />
              STRATEGY
              <br />
              <span className="text-sm text-muted-foreground">+</span>
              <br />
              DESIGN
              <br />
              <span className="text-sm text-muted-foreground">+</span>
              <br />
              ENGINEERING
              <br />
              <span className="text-sm text-muted-foreground">=</span>
              <br />
              REAL{" "}
              <span className="underline decoration-2 underline-offset-2">
                IMPACT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
