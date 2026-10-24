import type { SEOPage } from "./types";

const contactSEO: SEOPage = {
  pageName: "Contact",
  title: "Tell Us About Your Idea",
  description:
    "Start a conversation with Soluble Digivations. Share your project requirements, budget, timeline, and goals for modern digital engineering.",
  canonicalPath: "/contact",
  openGraph: {
    title: "Contact Soluble Digivations",
    description:
      "Start a conversation about your next digital product, website, or application.",
  },
  schema: { type: "ContactPage" },
};

export default contactSEO;
