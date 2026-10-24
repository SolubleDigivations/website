import type { SEOPage } from "./types";

const aboutSEO: SEOPage = {
  pageName: "About",
  title: "About",
  description: "Meet the people and principles behind Soluble Digivations.",
  canonicalPath: "/about",
  openGraph: {
    title: "About Soluble Digivations",
    description: "Meet the people and principles behind Soluble Digivations.",
  },
  schema: { type: "AboutPage" },
};

export default aboutSEO;
