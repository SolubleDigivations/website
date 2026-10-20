export interface ContactFormData {
  // Step 01: Introduction
  name: string;
  email: string;
  phoneCountryCode: string;
  phone: string;
  company: string;

  // Step 02: Services
  services: string[];
  otherServices: string;

  // Step 03: Scope
  budget: string;
  timeline: string;
  primaryGoal: string;
  specialRequirements: string;

  // Step 04: Business & Users
  primaryUsers: string;
  industry: string;
  businessDescription: string;
  projectObjectives: string[];

  // Step 05: References & Files
  files: UploadedFile[];
  referenceLinks: string;

  // Step 06: Final
  additionalMessage: string;
}

export interface UploadedFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  previewUrl?: string;
}

export type FormStep = 
  | "entry"
  | "step1"
  | "step2"
  | "step3"
  | "step4"
  | "step5"
  | "step6"
  | "success";

export const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  phoneCountryCode: "+91",
  phone: "",
  company: "",
  services: [],
  otherServices: "",
  budget: "",
  timeline: "",
  primaryGoal: "",
  specialRequirements: "",
  primaryUsers: "",
  industry: "",
  businessDescription: "",
  projectObjectives: [],
  files: [],
  referenceLinks: "",
  additionalMessage: "",
};

export const SERVICE_OPTIONS = [
  {
    id: "web-dev",
    label: "Website Development",
    description: "Marketing sites, corporate, e-commerce and more.",
    icon: "globe",
    color: "#7C98FF",
    bgColor: "bg-soluble-blue/50",
    borderColor: "border-blue-400",
  },
  {
    id: "mobile-app",
    label: "Mobile Application",
    description: "iOS, Android or cross-platform apps.",
    icon: "phone",
    color: "#FF91D4",
    bgColor: "bg-soluble-pink/50",
    borderColor: "border-pink-400",
  },
  {
    id: "custom-software",
    label: "Custom Software",
    description: "Tailored solutions for your unique needs.",
    icon: "code",
    color: "#65DDB5",
    bgColor: "bg-soluble-mint/50",
    borderColor: "border-emerald-400",
  },
  {
    id: "ui-ux",
    label: "UI/UX Design",
    description: "User focused, modern and intuitive designs.",
    icon: "pencil",
    color: "#FFD66B",
    bgColor: "bg-soluble-yellow/50",
    borderColor: "border-amber-400",
  },
  {
    id: "product-strategy",
    label: "Product Strategy",
    description: "Research, planning and technical guidance.",
    icon: "layers",
    color: "#A98BFF",
    bgColor: "bg-soluble-purple/50",
    borderColor: "border-purple-400",
  },
  {
    id: "ongoing-support",
    label: "Ongoing Support",
    description: "Maintenance, optimization and feature updates.",
    icon: "dots",
    color: "#94A3B8",
    bgColor: "bg-slate-200",
    borderColor: "border-slate-400",
  },
];

export const BUDGET_OPTIONS = [
  { id: "under-25k", label: "Under ₹25k" },
  { id: "25k-50k", label: "₹25k – ₹50k" },
  { id: "50k-1l", label: "₹50k – ₹1L" },
  { id: "1l-3l", label: "₹1L – ₹3L" },
  { id: "3l-plus", label: "₹3L+" },
  { id: "not-sure-budget", label: "Not sure yet" },
];

export const TIMELINE_OPTIONS = [
  { id: "asap", label: "ASAP (2–4 weeks)" },
  { id: "1-2-months", label: "1 – 2 months" },
  { id: "3-plus-months", label: "3+ months" },
  { id: "flexible", label: "Flexible" },
  { id: "not-sure-timeline", label: "Not sure yet" },
];

export const PRIMARY_GOAL_OPTIONS = [
  {
    id: "generate-leads",
    label: "Generate leads",
    description: "Get more enquiries or signups.",
    icon: "trending-up",
    iconBgColor: "bg-soluble-pink/40",
  },
  {
    id: "sell-online",
    label: "Sell online",
    description: "E-commerce or paid products.",
    icon: "shopping-cart",
    iconBgColor: "bg-soluble-blue/40",
  },
  {
    id: "build-brand",
    label: "Build the brand",
    description: "A stronger online presence.",
    icon: "users",
    iconBgColor: "bg-soluble-mint/40",
  },
  {
    id: "internal-tool",
    label: "Internal tool",
    description: "For my team or internal use.",
    icon: "settings",
    iconBgColor: "bg-soluble-yellow/40",
  },
  {
    id: "just-exploring",
    label: "Just exploring",
    description: "Still figuring it out.",
    icon: "lightbulb",
    iconBgColor: "bg-soluble-purple/40",
  },
  {
    id: "other-goal",
    label: "Other",
    description: "Tell us your goal.",
    icon: "more-horizontal",
    iconBgColor: "bg-gray-200",
  },
];

export const PRIMARY_USER_OPTIONS = [
  {
    id: "consumers",
    label: "Consumers",
    sublabel: "(B2C)",
    icon: "user",
    iconBg: "#FFE4F2",
    iconColor: "#E048A0",
  },
  {
    id: "businesses",
    label: "Businesses",
    sublabel: "(B2B)",
    icon: "building",
    iconBg: "#E0ECFF",
    iconColor: "#3B82F6",
  },
  {
    id: "both",
    label: "Both",
    sublabel: "(B2B & B2C)",
    icon: "users",
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
  },
];

export const INDUSTRY_OPTIONS = [
  "Technology & SaaS",
  "E-commerce & Retail",
  "Healthcare & Wellness",
  "Finance & Fintech",
  "Education & EdTech",
  "Real Estate & PropTech",
  "Media, Entertainment & Gaming",
  "Agency & Professional Services",
  "Hospitality & Travel",
  "Manufacturing & Logistics",
  "Non-Profit & Social Enterprise",
  "Other",
];

export const PROJECT_ACHIEVEMENT_OPTIONS = [
  {
    id: "leads-signups",
    label: "Generate leads / signups",
    icon: "trending-up",
    iconBgColor: "bg-soluble-blue/20",
  },
  {
    id: "sell-products",
    label: "Sell products online",
    icon: "shopping-cart",
    iconBgColor: "bg-soluble-pink/40",
  },
  {
    id: "improve-product",
    label: "Improve existing product",
    icon: "sparkles",
    iconBgColor: "bg-soluble-mint/40",
  },
  {
    id: "brand-presence",
    label: "Build brand presence",
    icon: "megaphone",
    iconBgColor: "bg-soluble-yellow/40",
  },
  {
    id: "automation",
    label: "Save time with automation",
    icon: "settings",
    iconBgColor: "bg-soluble-purple/40",
  },
  {
    id: "other-achievement",
    label: "Other",
    icon: "more-horizontal",
    iconBgColor: "bg-gray-200",
  },
];
