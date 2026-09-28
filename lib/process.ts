import {
  Search,
  Target,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your goals, users and market.",
    icon: Search,
    color: "bg-soluble-blue",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Plan the right strategy and features.",
    icon: Target,
    color: "bg-soluble-yellow",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create clean, modern and user-focused designs.",
    icon: PenTool,
    color: "bg-soluble-pink",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Build with best practices and modern technologies.",
    icon: Code2,
    color: "bg-soluble-mint",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Launch, optimize and support.",
    icon: Rocket,
    color: "bg-soluble-purple",
  },
] as const;