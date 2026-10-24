import type { MetadataRoute } from "next";

import { insights } from "@/lib/insights";
import { absoluteUrl } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/services", "/work", "/process", "/contact", "/insights"];
  const insightRoutes = insights.map((insight) => insight.href);

  return [...staticRoutes, ...insightRoutes].map((path) => ({
    url: absoluteUrl(path),
  }));
}
