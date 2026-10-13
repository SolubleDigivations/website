import { Briefcase, Globe, Rocket, User } from "lucide-react";
import { Counter } from "../common/Counter";

const stats = [
  [
    User,
    0,
    "2",
    "Team members",
    "Small team. Big focus.",
    "bg-[#D1FAE5] text-[#059669]",
  ],
  [
    Briefcase,
    0,
    "10+",
    "Projects built",
    "From ideas to real products.",
    "bg-[#FCE7F3] text-[#DB2777]",
  ],
  [
    Globe,
    70,
    "100%",
    "Client satisfaction",
    "Long-term relationships.",
    "bg-[#E0E7FF] text-[#4F46E5]",
  ],
  [
    Rocket,
    0,
    "∞",
    "Ideas in progress",
    "Always building.",
    "bg-[#FEF3C7] text-[#D97706]",
  ],
] as const;

export function AboutStats() {
  return (
    <section className="container-soluble relative z-20 my-16">
      <div className="grid grid-cols-2 gap-6 border-y-[1.5px] border-border lg:grid-cols-4 lg:gap-8">
        {stats.map(([Icon, initialValue, value, title, description, color], index) => (
          <div
            className={`flex flex-col ${index != 3 && "border-r-[1.5px]"} border-border p-6 sm:p-8`}
            key={title}
          >
            <div
              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${color}`}
            >
              <Icon size={20} />
            </div>
            <strong className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              <Counter initialValue={initialValue} value={`${value}`} />
            </strong>
            <span className="mt-1 text-sm font-bold text-foreground">
              {title}
            </span>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
