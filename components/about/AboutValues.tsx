import { Handshake, Lightbulb, Target, Users } from "lucide-react";
import { SectionHeading } from "./AboutShared";

const values = [
  [Target, "Quality First", "We care about details and deliver work we&apos;re proud of.", "bg-[#DBEAFE] text-[#2563EB]"],
  [Users, "Client Focused", "Your goals become our goals. We work closely with you.", "bg-[#D1FAE5] text-[#059669]"],
  [Lightbulb, "Continuous Learning", "We keep exploring new technologies and better ways to build.", "bg-[#F3E8FF] text-[#9333EA]"],
  [Handshake, "Long-Term Partnerships", "We believe in building lasting relationships, not one-time projects.", "bg-[#FEF3C7] text-[#D97706]"],
] as const;

export function AboutValues() {
  return <section className="container-soluble py-16 md:py-24"><SectionHeading label="Our values" title="What drives us" /><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{values.map(([Icon, title, description, color]) => <article className="rounded-3xl border border-border bg-white p-6 shadow-xs transition-all hover:shadow-md" key={title}><div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full ${color}`}><Icon size={20} /></div><h3 className="text-base font-bold text-foreground">{title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p></article>)}</div></section>;
}
