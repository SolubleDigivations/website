import { SectionHeading, techStack } from "./AboutShared";

export function AboutTechStack() {
  return <section className="container-soluble py-16 md:py-24"><SectionHeading label="Tools we love" title="Our tech stack"><p className="max-w-xs text-xs leading-relaxed text-muted-foreground sm:text-sm">We use modern and reliable technologies to build scalable and high performance products.</p></SectionHeading><div className="flex flex-wrap gap-3">{techStack.map(({ name, icon: Icon, color }) => <span key={name} className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-5 py-2.5 text-xs font-bold text-foreground shadow-xs transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm"><Icon size={18} color={color} className="shrink-0 transition-transform duration-300 group-hover:scale-110" /><span>{name}</span></span>)}</div></section>;
}
