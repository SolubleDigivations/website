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
  DatabaseSearchIcon,
  SearchIcon,
} from "lucide-react";
import { title } from "process";
import { BsGraphUpArrow } from "react-icons/bs";

export const services = [
  {
    title: "Websites",
    href:"/services#web-design-application",
    description:
      "Marketing & corporate websites, landing pages, SaaS products.",
    icon: Globe,
    color: "#6C8CFF",
  },
  {
    title: "Mobile Applications",
    href:"/services#app-development",
    description:
      "iOS, Android & cross-platform apps.",
    icon: Smartphone,
    color: "#FF91D4",
  },
  {
    title: "Seo & Geo",
    href:"/services#seo-geo",
    description:
      "Technical SEO, Local SEO, Generative Engine Optimization",
    icon: SearchIcon,
    color: "#52D9AD",
  },
  // {
  //   title: "Data & Insights",
  //   description:
  //     "Business Analytics, Performance Dashboards, Customer Insights & Data-Driven Strategy",
  //   icon: DatabaseSearchIcon,
  //   color: "#FFD65A",
  // },
] as const;

export const servicesPage = [
  {
    index: 1,
    id: "web-design-application",
    title: "Web Design & Application",
    subtitle:
      "Modern, high performance websites that look great and deliver results. Custom web applications tailored to your business needs.",
    list: [
      "Marketing Websites",
      "Corporate Websites",
      "Landing Pages",
      "E-commerce",
      "SaaS Platforms",
      "Dashboards",
      "Booking Systems",
      "Internal Tools",
    ],
    icon: Globe,
    color: "#7C98FF",
    image: "/assets/images/services/web-development.png",
    imageClassName:'lg:absolute bottom-18 right-5 aspect-auto w-140'
  },
  // {
  //   index: 2,
  //   id: "web-apps",
  //   title: "Web Application",
  //   subtitle:
  //     "",
  //   list: [
      
  //   ],
  //   icon: LayoutGrid,
  //   color: "#FF91D4",
  //   image: "/assets/images/services/web-application.png",
  // },
  {
    index: 2,
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
    imageClassName:'lg:absolute bottom-18 right-5 aspect-auto w-140'
  },
  {
    index: 3,
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
    imageClassName:'lg:absolute bottom-0 right-5 aspect-auto w-130'
  },
  {
    index: 4,
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
    imageClassName:'lg:absolute bottom-18 right-5 aspect-auto w-140'
  },
  {
    index: 5,
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
    imageClassName:'lg:absolute bottom-18 right-5 aspect-auto w-140'
  },
  {
    index: 6,
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
    image: "/assets/images/services/social-media-management.png",
    imageClassName:'lg:absolute bottom-18 right-5 aspect-auto w-140'
  },
  // {
  //   index: 8,
  //   id: "maintenance-support",
  //   title: "Maintenance & Support",
  //   subtitle:
  //     "Keep your digital products secure, reliable, up to date, and running smoothly.",
  //   list: [
  //     "Website Maintenance",
  //     "Bug Fixes",
  //     "Security & Updates",
  //     "Technical Support",
  //   ],
  //   icon: Wrench,
  //   color: "#6ED6FF",
  //   image: "/assets/images/services/maintenance-support.png",
  // },
] as const;
