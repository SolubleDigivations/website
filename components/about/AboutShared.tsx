import type { ReactNode } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiDocker,
  SiCloudinary,
  SiRazorpay,
  SiFigma,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DoodleTitleArrow } from "./AboutDoodles";

export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#EDE9FE] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#6D28D9]">
      {children}
    </span>
  );
}

export function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <div>
        <Label>{label}</Label>
        <div className="mt-3 flex items-center gap-3">
          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[44px]">
            {title}
          </h2>
          <DoodleTitleArrow className="h-6 w-9 shrink-0 self-center text-foreground" />
        </div>
      </div>
      {children}
    </div>
  );
}

export const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
  { name: "Razorpay", icon: SiRazorpay, color: "#0D94FB" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
];
