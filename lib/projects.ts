export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  href: string;
  className?: string;
}

export const projects: Project[] = [
  {
    slug: "stoneza",
    title: "Stoneza",
    category: "Web Design & Development",
    description:
      "A premium stone and tile showcase website with a modern product experience and custom CMS.",
    image: "/assets/images/projects/stoneza/stoneza-homepage.png",
    technologies: [
      "Next.js",
      "MongoDB",
      "Cloudinary",
      "Razorpay",
    ],
    href: "/work/stoneza",
  },
  {
    slug: "cineverse",
    title: "CineVerse",
    category: "Mobile Application",
    description:
      "A movie discovery app with watchlists, favorites, reviews and personalized movie experiences.",
    image: "/projects/cineverse.webp",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "MongoDB",
    ],
    href: "/work/cineverse",
  },
];