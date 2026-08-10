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
  {
    icon: SiVercel,
    title: "Vercel",
    color: "#000000",
  },
];
function Expertise() {
  return (
    <div className="w-full overflow-hidden pt-16 pb-24 px-16">
      <h2 className="text-[#0a0a0a] font-outfit-500 text-lg flex flex-row">
        <AiFillExperiment size={25} />
        Our Expertise
      </h2>
      <div className="w-full overflow-x-hidden relative">
        <div className="absolute z-10 inset-x-0 top-7.5 left-0 h-[70%] w-18 bg-linear-to-r from-[#f4f4f2] to-transparent"></div>

        <div className="absolute z-10 top-7.5 right-0 h-[70%] w-18 bg-linear-to-l  from-[#f4f4f2] to-transparent"></div>
        <div className="flex w-max animate-marquee gap-6 py-8 z-0">
          {[...expertiseData, ...expertiseData].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-3xl px-18 py-12 bg-white flex items-center justify-center group hover:shadow-xl z-0 transition-all duration-200"
                style={
                  {
                    "--icon-color": item.color,
                  } as React.CSSProperties
                }
              >
                <Icon
                  size={40}
                  className="text-[#222222] transition-colors duration-300 group-hover:text-(--icon-color)"
                />
                {/* {item.title} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
