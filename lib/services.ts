import {
  Globe,
  LayoutGrid,
  Smartphone,
  Palette,
  Wrench,
  Share2,
  BarChart3,
  Megaphone,
  Search,
} from "lucide-react";
import { title } from "process";

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

export const servicesPage = [
  {
    index: 1,
    id: "web",
    title: "Web Development",
    subtitle:
      "Modern, high performance websites that look great and deliver results",
    list: [
      "Marketing Websites",
      "Corporate Websites",
      "Landing Pages",
      "E-commerce",
    ],
    icon: Globe,
    color: "#7C98FF",
    image: "/assets/images/services/web-development.png",
  },
  {
    index: 2,
    id: "web-apps",
    title: "Web Application",
    subtitle:
      "Custom web applications tailored to your business needs.",
    list: [
      "SaaS Platforms",
      "Dashboards",
      "Booking Systems",
      "Internal Tools",
    ],
    icon: LayoutGrid,
    color: "#FF91D4",
    image: "/assets/images/services/web-application.png",
  },
  {
    index: 3,
    id: "app-development",
    title: "App Development",
    subtitle:
      "Scalable, intuitive mobile apps built to engage users and grow your business.",
    list: [
      "iOS & Android Apps",
      "Cross-Platform Apps",
      "Business Apps",
      "App UI & UX",
    ],
    icon: Smartphone,
    color: "#8FE3CF",
    image: "/assets/images/services/app-development.png",
  },
  {
    index: 4,
    id: "seo-geo",
    title: "SEO & GEO",
    subtitle:
      "Improve your online visibility and get discovered by both search engines and AI-powered platforms.",
    list: [
      "Technical SEO",
      "Local SEO",
      "Generative Engine Optimization",
      "Content Optimization",
    ],
    icon: Search,
    color: "#FFD166",
    image: "/assets/images/services/seo-geo.png",
  },
  {
    index: 5,
    id: "ad-management",
    title: "Ad Management",
    subtitle:
      "Performance-driven advertising campaigns designed to reach the right audience and maximize your return.",
    list: [
      "Google Ads",
      "Meta Ads",
      "Campaign Strategy",
      "Performance Optimization",
    ],
    icon: Megaphone,
    color: "#FF9F7F",
    image: "/assets/images/services/ad-management.png",
  },
  {
    index: 6,
    id: "data-analysis",
    title: "Data & Insights",
    subtitle:
      "Turn your business data into clear insights that help you make smarter decisions.",
    list: [
      "Business Analytics",
      "Performance Dashboards",
      "Customer Insights",
      "Data-Driven Strategy",
    ],
    icon: BarChart3,
    color: "#A78BFA",
    image: "/assets/images/services/data-analysis.png",
  },
  {
    index: 7,
    id: "social-media",
    title: "Social Media Management",
    subtitle:
      "Build a consistent social presence that connects your brand with the right audience.",
    list: [
      "Content Strategy",
      "Social Media Management",
      "Content Creation",
      "Audience Engagement",
    ],
    icon: Share2,
    color: "#FF91B8",
    image: "/assets/images/services/social-media.png",
  },
  {
    index: 8,
    id: "maintenance-support",
    title: "Maintenance & Support",
    subtitle:
      "Keep your digital products secure, reliable, up to date, and running smoothly.",
    list: [
      "Website Maintenance",
      "Bug Fixes",
      "Security & Updates",
      "Technical Support",
    ],
    icon: Wrench,
    color: "#6ED6FF",
    image: "/assets/images/services/maintenance-support.png",
  },
] as const;

export const servicesTracker = [
  {
    id: "web",
    number: "01",
  },
  {
    id: "web-apps",
    number: "02",
  },
  // {
  //   id: "mobile",
  //   number: "03",
  // },
  // {
  //   id: "design",
  //   number: "04",
  // },
  // {
  //   id: "backend",
  //   number: "05",
  // },
  // {
  //   id: "maintenance",
  //   number: "06",
  // },
];
