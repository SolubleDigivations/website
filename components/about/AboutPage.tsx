"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Handshake,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import { aboutStats, aboutValues, team, technologies } from "@/lib/about";

const iconMap = { target: Target, users: Users, bulb: Lightbulb, handshake: Handshake };

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-soluble-purple/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
      {children}
    </span>
  );
}

function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
      <div>
        <Label>{label}</Label>
        <h2 className="mt-3 max-w-[680px] text-4xl font-extrabold leading-[.92] tracking-[-.07em] sm:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

function ButtonLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold transition-transform hover:-translate-y-0.5 ${light ? "border border-border bg-white text-foreground" : "bg-foreground text-background"}`}
    >
      {children}
      <ArrowUpRight size={14} />
    </Link>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="container-soluble relative grid min-h-[500px] items-center gap-5 pb-14 pt-16 md:grid-cols-[.86fr_1.14fr] md:pb-10 md:pt-20">
        <div className="relative z-10">
          <Label>About us</Label>
          <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[.9] tracking-[-.08em] sm:text-5xl lg:text-7xl">
            Two people.
            <br />
            <span className="relative inline-block">One obsession.<i className="absolute -inset-x-3 bottom-0 -z-10 h-3 rounded-[50%] border-4 border-soluble-yellow sm:-inset-x-4 sm:h-4" /></span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-6">
            Soluble Digivations is an independent digital engineering studio focused on building websites, applications and digital experiences for modern businesses.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/work">Our work</ButtonLink>
            <ButtonLink href="/contact" light>Get in touch</ButtonLink>
          </div>
        </div>
        <div className="relative mx-auto h-[340px] w-full max-w-[620px] sm:h-[400px]">
          <div className="absolute left-[20%] top-[14%] h-44 w-44 rounded-full bg-soluble-blue" />
          <div className="absolute left-[42%] top-[27%] h-48 w-32 rotate-12 rounded-[48%] bg-soluble-mint" />
          <div className="absolute left-[12%] top-[37%] h-44 w-48 rounded-[45%] bg-soluble-yellow" />
          <div className="absolute right-[5%] top-[46%] h-28 w-28 rounded-full bg-soluble-pink" />
          <Image src="/assets/images/about/founders.png" alt="Soluble founders" fill priority sizes="(max-width: 1024px) 90vw, 55vw" className="object-contain object-bottom" />
          <span className="absolute right-[7%] top-[10%] rounded-full bg-white px-6 py-3 text-xs font-bold shadow-sm">SOLUBLE</span>
          <span className="absolute left-[4%] top-[15%] -rotate-6 font-caveat text-xl font-bold">IDEAS<br />DESIGN<br />DEVELOP<br />LAUNCH</span>
          <span className="absolute right-0 top-[34%] rotate-6 font-caveat text-xl font-bold">BUILDING<br />DIGITAL<br />TOGETHER</span>
        </div>
      </section>

      <section className="container-soluble relative z-10 -mt-2 grid grid-cols-2 divide-x divide-border rounded-2xl border border-border bg-white/90 p-5 shadow-[0_12px_40px_rgba(17,17,17,.05)] sm:grid-cols-4 sm:p-7">
        {aboutStats.map(([value, title, detail]) => (
          <div key={title} className="px-3 py-2 sm:px-5">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-soluble-yellow text-sm font-bold">{value === "∞" ? "✦" : value}</div>
            <strong className="block text-2xl tracking-[-.06em]">{value}</strong>
            <span className="mt-1 block text-xs font-bold">{title}</span>
            <p className="mt-1 text-[10px]">{detail}</p>
          </div>
        ))}
      </section>

      <section className="container-soluble grid gap-12 py-24 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading label="Our story" title={<>From curiosity<br />to Soluble.</>} />
          <p className="max-w-lg text-sm leading-6">We started Soluble Digivations with a simple idea — combine design, engineering and strategy to build digital products that actually solve real problems.</p>
          <p className="mt-4 max-w-lg text-sm leading-6">What began as two people exploring ideas, quickly turned into a focused effort to help businesses, startups and independent founders bring their ideas to life on the web and mobile.</p>
          <div className="mt-6"><ButtonLink href="/process">Our journey</ButtonLink></div>
        </div>
        <div className="relative rounded-3xl border border-border bg-white p-4 shadow-sm">
          <span className="absolute left-8 top-4 z-10 font-caveat text-xl font-bold">SAME TEAM.<br />BIGGER IDEAS.</span>
          <Image src="/assets/images/about/founders.png" alt="" width={700} height={430} className="h-72 w-full rounded-2xl object-cover object-top opacity-80 grayscale" />
          <div className="absolute bottom-7 right-7 grid gap-2 text-xs font-bold">
            {["Turn ideas into products", "Work closely with clients", "Keep learning and growing"].map((item, index) => <span key={item} className={`rounded-full px-4 py-3 ${index === 0 ? "bg-soluble-purple/80" : index === 1 ? "bg-soluble-mint/70" : "bg-soluble-yellow/80"}`}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="container-soluble grid gap-10 pb-24 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading label="Our approach" title={<>More than just<br />development.</>} />
          <p className="max-w-lg text-sm leading-6">We don&apos;t just write code. We work across the entire product journey — from understanding the problem to designing, building and deploying the solution.</p>
          <p className="mt-4 max-w-lg text-sm leading-6">Our goal is to create digital experiences that are fast, scalable and truly useful for your business.</p>
          <div className="mt-6"><ButtonLink href="/services">How we work</ButtonLink></div>
        </div>
        <div className="relative mx-auto h-80 w-full max-w-md">
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foreground text-3xl text-white">S</div>
          <div className="absolute left-1/2 top-10 flex h-36 w-36 -translate-x-1/2 items-center justify-center rounded-full bg-soluble-purple/80 text-center text-xs font-bold">Design<br /><small className="font-normal">User focused<br />experiences</small></div>
          <div className="absolute right-0 top-24 flex h-36 w-36 items-center justify-center rounded-full bg-soluble-mint/80 text-center text-xs font-bold">Engineering<br /><small className="font-normal">Scalable and<br />modern solutions.</small></div>
          <div className="absolute bottom-0 left-1/2 flex h-36 w-36 -translate-x-1/2 items-center justify-center rounded-full bg-soluble-yellow/80 text-center text-xs font-bold">Strategy<br /><small className="font-normal">Understand your<br />business and goals.</small></div>
        </div>
      </section>

      <section className="container-soluble pb-24">
        <SectionHeading label="The team" title={<>Meet the team</>}><p className="max-w-xs text-sm leading-5">Two people with a shared passion for building digital products and helping businesses grow.</p></SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          {team.map((member) => <article key={member.name} className="relative overflow-hidden rounded-2xl border border-border bg-white p-5 pl-[42%] shadow-sm">
            <div className={`absolute inset-y-0 left-0 w-[38%] ${member.position === "left" ? "bg-soluble-purple/60" : "bg-soluble-mint/60"}`} />
            <Image src="/assets/images/about/founders.png" alt="" width={400} height={400} className="absolute bottom-0 left-0 h-full w-[44%] object-cover object-left grayscale mix-blend-multiply" />
            <h3 className="text-2xl font-extrabold tracking-[-.06em]">{member.name}</h3>
            <span className="mt-1 inline-block whitespace-pre-line rounded-lg bg-muted px-2 py-1 text-[10px] leading-3">{member.role}</span>
            <p className="mt-4 text-xs leading-5">{member.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">{member.skills.map((skill) => <span key={skill} className="rounded-full bg-muted px-2 py-1 text-[9px]">{skill}</span>)}</div>
            <div className="mt-4 flex gap-2 text-sm"><span>◉</span><span>in</span><span>✉</span></div>
          </article>)}
        </div>
      </section>

      <section className="container-soluble pb-24">
        <SectionHeading label="Our values" title={<>What drives us</>} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map(([title, description, icon]) => { const Icon = iconMap[icon as keyof typeof iconMap]; return <article key={title} className="rounded-2xl border border-border bg-white p-5 shadow-sm"><div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-soluble-blue/30"><Icon size={18} /></div><h3 className="font-bold">{title}</h3><p className="mt-2 text-xs leading-5">{description}</p></article>; })}
        </div>
      </section>

      <section className="container-soluble pb-20">
        <SectionHeading label="Tools we love" title={<>Our tech stack</>}><p className="max-w-xs text-sm leading-5">We use modern and reliable technologies to build scalable and high performance products.</p></SectionHeading>
        <div className="flex flex-wrap gap-3">{technologies.map((technology) => <span key={technology} className="rounded-full border border-border bg-white px-4 py-2 text-xs font-bold shadow-sm">{technology}</span>)}</div>
      </section>

      <section className="container-soluble mb-20 overflow-hidden rounded-2xl bg-gradient-to-r from-soluble-purple/50 via-white to-soluble-mint/40 px-7 py-10 sm:flex sm:items-center sm:justify-between sm:px-16">
        <div><Label>Let&apos;s build together</Label><h2 className="mt-4 max-w-md text-4xl font-extrabold leading-[.9] tracking-[-.07em]">Have something<br />worth building?</h2></div>
        <div className="mt-8 sm:mt-0"><p className="mb-4 max-w-xs text-sm font-bold">Let&apos;s discuss your idea and turn it into a real product.</p><ButtonLink href="/contact">Start a conversation</ButtonLink></div>
      </section>
    </main>
  );
}
