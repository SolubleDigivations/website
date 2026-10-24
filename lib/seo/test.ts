import type { SEOPage } from "./types";

const testSEO: SEOPage = {
  pageName: "Responsive Showcase",
  title: "Responsive Showcase",
  description: "Internal responsive layout and form showcase.",
  canonicalPath: "/test",
  robots: { index: false, follow: false },
  schema: { type: "WebPage" },
};

export default testSEO;
