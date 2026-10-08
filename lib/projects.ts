export interface Project {
  slug: string;
  number: string;
  badge: string;
  badgeColor: string;
  type: "Websites" | "Web Applications" | "Mobile Apps" | "UI/UX Design" | "Other";
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image?: string;
  technologies: string[];
  href: string;
  liveUrl?: string;
  primaryButtonText: string;
  className?: string;
}

export const projects: Project[] = [
  {
    slug: "stoneza",
    number: "01",
    badge: "Featured Project",
    badgeColor: "#B18CFF",
    type: "Websites",
    title: "Stoneza",
    subtitle: "Premium stone & tile showcase website",
    category: "Web Design & Development",
    description:
      "A modern, elegant website for a stone and tile brand with product showcase, enquiry system and custom CMS. Designed to reflect the premium nature of their products.",
    image: "/assets/images/projects/stoneza/stoneza-homepage.png",
    technologies: ["Next.js", "MongoDB", "Cloudinary", "Razorpay"],
    href: "/work/stoneza",
    liveUrl: "https://stoneza.com",
    primaryButtonText: "View live site",
  },
  {
    slug: "cineverse",
    number: "02",
    badge: "Featured Project",
    badgeColor: "#FF91D4",
    type: "Mobile Apps",
    title: "CineVerse",
    subtitle: "Movie discovery mobile app",
    category: "Mobile Application",
    description:
      "A feature-rich movie app with watchlist, favorites, reviews and personalized experience. Available on Android with a powerful backend.",
    image: "/assets/images/projects/stoneza/cineverse-1.jpg",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB"],
    href: "/work/cineverse",
    primaryButtonText: "View project",
  },
  {
    slug: "taskly",
    number: "03",
    badge: "Web Application",
    badgeColor: "#6C8CFF",
    type: "Web Applications",
    title: "Taskly",
    subtitle: "Team collaboration web application",
    category: "Web Application",
    description:
      "A modern project management tool for teams to plan, track and collaborate efficiently. Built with a focus on clean UI and smooth user experience.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    href: "/work/taskly",
    primaryButtonText: "View project",
  },
  {
    slug: "edulearn",
    number: "04",
    badge: "UI/UX Design",
    badgeColor: "#52D9AD",
    type: "UI/UX Design",
    title: "EduLearn",
    subtitle: "Learning platform UI/UX",
    category: "UI/UX Design",
    description:
      "A clean and modern UI/UX design for an online learning platform with engaging visuals and user-focused experience.",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    href: "/work/edulearn",
    primaryButtonText: "View design",
  },
];