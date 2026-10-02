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
  SiExpress,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";

export const technologies = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "React Native",
    icon: SiReact,
    color:"#5FDCFB"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    icon: SiExpress,
    name: "Express.js",
    color: "#000000",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "Cloudinary",
    icon: SiCloudinary,
    color:'#3448C5'
  },
  {
    name: "Razorpay",
    icon: SiRazorpay,
    color:'#0D94FB'
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#181717",
  },
    {
    icon: SiFirebase,
    name: "Firebase",
    color: "#FFCA28",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    color: "#4169E1",
  },
] as const;

export const technologiesHero = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Cloudinary", icon: SiCloudinary },
  { name: "Razorpay", icon: SiRazorpay },
];