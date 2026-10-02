import React from "react";
import { RiNextjsLine } from "react-icons/ri";
import { FaDocker, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { AiFillExperiment } from "react-icons/ai";
import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const expertiseData = [
  {
    icon: RiNextjsLine,
    title: "Next.js",
    color: "#000000",
  },
  {
    icon: FaReact,
    title: "React",
    color: "#61DAFB",
  },
  {
    icon: SiMongodb,
    title: "MongoDB",
    color: "#47A248",
  },
  {
    icon: SiExpress,
    title: "Express.js",
    color: "#000000",
  },
  {
    icon: FaNodeJs,
    title: "Node.js",
    color: "#339933",
  },
  {
    icon: SiJavascript,
    title: "JavaScript",
    color: "#F7DF1E",
  },
  {
    icon: SiVercel,
    title: "Vercel",
    color: "#000000",
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
    color: "#3178C6",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    color: "#06B6D4",
  },
  {
    icon: SiGit,
    title: "Git",
    color: "#F05032",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    color: "#181717",
  },
  {
    icon: FaDocker,
    title: "Docker",
    color: "#2496ED",
  },
  {
    icon: SiFigma,
    title: "Figma",
    color: "#F24E1E",
  },
  {
    icon: SiFirebase,
    title: "Firebase",
    color: "#FFCA28",
  },
  {
    icon: SiPostgresql,
    title: "PostgreSQL",
    color: "#4169E1",
  },
  {
    icon: SiPrisma,
    title: "Prisma",
    color: "#2D3748",
  },
];
function Expertise({left=true}:{left?:boolean}) {
  return (
    <div className="w-full overflow-hidden px-16">
      <div className="w-full overflow-hidden relative">
        <div className="absolute z-10 inset-x-0 top-8 -left-1.5 h-full w-18 bg-linear-to-r from-background to-transparent"></div>

        <div className="absolute z-10 top-8 -right-1.5 h-full w-18 bg-linear-to-l  from-background to-transparent"></div>
        
        <div className={`flex w-max ${left?'animate-soluble-marquee':'animate-soluble-marquee-right'} gap-6 py-8 z-0`}>
          {[...expertiseData, ...expertiseData].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-3xl w-15 h-12 md:w-60 md:h-40 bg-white flex flex-col items-center justify-center group hover:shadow-xl z-0 transition-all duration-200"
                style={
                  {
                    "--icon-color": item.color,
                  } as React.CSSProperties
                }
              >
                <Icon
                  size={40}
                  className="text-(--icon-color) transition-colors duration-300"
                />
                <h3 className="font-outfit-400 text-[#222222] mt-1.5 text-base">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
