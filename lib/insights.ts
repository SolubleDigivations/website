export const insightCategories = [
  "All",
  "Design",
  "Development",
  "Products",
  "Case Studies",
  "Tips & Guides",
  "Company",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export interface Insight {
  slug: string;
  title: string;
  description: string;
  category: Exclude<InsightCategory, "All">;
  readTime: string;
  image: string;
  accent: string;
  href: string;
}

export const insights: Insight[] = [
  {
    slug: "building-stoneza",
    title: "Building Stoneza: From Idea to a Scalable E-Commerce Experience",
    description:
      "A behind-the-scenes look at how we designed and developed Stoneza — a modern e-commerce platform for premium stone and tiles.",
    category: "Case Studies",
    readTime: "5 min read",
    image: "/assets/featured-works/e-commerce.webp",
    accent: "#6c8cff",
    href: "/insights/building-stoneza",
  },
  {
    slug: "designing-user-centric-experiences",
    title: "How We Design User-Centric Experiences",
    description:
      "Our approach to UI/UX design, from research and wireframes to high-fidelity designs that solve real user problems.",
    category: "Design",
    readTime: "6 min read",
    image: "/assets/images/projects/stoneza/stoneza-homepage.png",
    accent: "#ff91d4",
    href: "/insights/designing-user-centric-experiences",
  },
  {
    slug: "nextjs-modern-web-apps",
    title: "Why We Love Next.js for Modern Web Apps",
    description:
      "How Next.js helps us build fast, scalable and maintainable web applications for modern businesses.",
    category: "Development",
    readTime: "7 min read",
    image: "/assets/featured-works/b2b-sas.webp",
    accent: "#ffd65a",
    href: "/insights/nextjs-modern-web-apps",
  },
  {
    slug: "idea-to-mvp",
    title: "From Idea to MVP: A Practical Guide",
    description:
      "Key steps, tools and lessons for turning your product idea into a validated MVP without overcomplicating things.",
    category: "Products",
    readTime: "5 min read",
    image: "/assets/featured-works/eduflow.webp",
    accent: "#52d9ad",
    href: "/insights/idea-to-mvp",
  },
  {
    slug: "cineverse-movie-discovery-experience",
    title: "CineVerse: A Movie Discovery Experience",
    description:
      "How we built CineVerse — a cross-platform mobile app for movie lovers with a clean, modern and engaging experience.",
    category: "Case Studies",
    readTime: "6 min read",
    image: "/assets/images/projects/stoneza/cineverse-1.jpg",
    accent: "#b18cff",
    href: "/insights/cineverse-movie-discovery-experience",
  },
  {
    slug: "choosing-the-right-tech-stack",
    title: "A Simple Guide to Choosing the Right Tech Stack",
    description:
      "Things to consider when selecting technologies for your next web or mobile application.",
    category: "Tips & Guides",
    readTime: "4 min read",
    image: "/assets/featured-works/real-state-website.webp",
    accent: "#6c8cff",
    href: "/insights/choosing-the-right-tech-stack",
  },
  {
    slug: "website-performance",
    title: "How to Optimize Your Website for Better Performance",
    description:
      "Practical tips and techniques we use to make websites faster, smoother and more reliable.",
    category: "Development",
    readTime: "5 min read",
    image: "/assets/featured-works/fitness.webp",
    accent: "#52d9ad",
    href: "/insights/website-performance",
  },
  {
    slug: "typography-in-web-design",
    title: "Typography in Web Design: Small Details, Big Impact",
    description:
      "Why typography matters and how to use it effectively to create clean, modern and engaging digital experiences.",
    category: "Design",
    readTime: "6 min read",
    image: "/assets/featured-works/restaurant-website.webp",
    accent: "#ffd65a",
    href: "/insights/typography-in-web-design",
  },
  {
    slug: "two-people-one-obsession",
    title: "Two People. One Obsession.",
    description:
      "The story behind Soluble — our journey, our values and what drives us to build meaningful digital products.",
    category: "Company",
    readTime: "3 min read",
    image: "/assets/images/about/founders.png",
    accent: "#6c8cff",
    href: "/insights/two-people-one-obsession",
  },
  {
    slug: "business-ideas-to-digital-products",
    title: "How We Turn Business Ideas into Digital Products",
    description:
      "Our end-to-end process for transforming ideas into real, useful and scalable digital solutions.",
    category: "Products",
    readTime: "5 min read",
    image: "/assets/featured-works/e-commerce.webp",
    accent: "#52d9ad",
    href: "/insights/business-ideas-to-digital-products",
  },
];

export const topics = [
  { name: "Design", count: 12, color: "#ff91d4" },
  { name: "Development", count: 18, color: "#6c8cff" },
  { name: "Products", count: 10, color: "#52d9ad" },
  { name: "Case Studies", count: 6, color: "#ffd65a" },
  { name: "Tips & Guides", count: 14, color: "#b18cff" },
  { name: "Company", count: 5, color: "#ff8b3d" },
];
