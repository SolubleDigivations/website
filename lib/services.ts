import {
  Globe,
  LayoutGrid,
  Smartphone,
  Palette,
} from "lucide-react";

export const services = [
  {
    title: "Websites",
    description:
      "Marketing sites, corporate websites, landing pages.",
    icon: Globe,
    color: "bg-soluble-blue",
  },
  {
    title: "Web Applications",
    description:
      "Dashboards, platforms, SaaS products.",
    icon: LayoutGrid,
    color: "bg-soluble-pink",
  },
  {
    title: "Mobile Applications",
    description:
      "iOS, Android & cross-platform apps.",
    icon: Smartphone,
    color: "bg-soluble-mint",
  },
  {
    title: "UI/UX Design",
    description:
      "Modern, user-focused design experiences.",
    icon: Palette,
    color: "bg-soluble-yellow",
  },
] as const;