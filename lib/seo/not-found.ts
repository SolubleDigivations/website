import type { SEOPage } from "./types";

const notFoundSEO: SEOPage = {
  pageName: "Page Not Found",
  title: "Page Not Found",
  description: "The page you requested could not be found.",
  canonicalPath: "/",
  robots: { index: false, follow: false },
};

export default notFoundSEO;
