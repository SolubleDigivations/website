import type { Metadata } from "next";

import { insights, type Insight } from "@/lib/insights";

import aboutSEO from "./about";
import contactSEO from "./contact";
import homeSEO from "./home";
import insightsSEO from "./insights";
import notFoundSEO from "./not-found";
import processSEO from "./process";
import servicesSEO from "./services";
import { siteSEO, absoluteUrl } from "./site";
import testSEO from "./test";
import type { JsonLdObject, SEOPage } from "./types";
import workSEO from "./work";
import organizationSchema from "./schemas/organization";
import websiteSchema from "./schemas/website";

const pageSEO = {
  home: homeSEO,
  about: aboutSEO,
  services: servicesSEO,
  work: workSEO,
  process: processSEO,
  contact: contactSEO,
  insights: insightsSEO,
  test: testSEO,
  "not-found": notFoundSEO,
} as const;

export type PageKey = keyof typeof pageSEO;

export function getPageSEO(pageKey: PageKey): SEOPage {
  return pageSEO[pageKey];
}

export function generatePageMetadata(pageKey: PageKey): Metadata {
  const page = getPageSEO(pageKey);
  const image = page.openGraph?.image ?? siteSEO.defaultOgImage;
  const imageAlt = page.openGraph?.imageAlt ?? siteSEO.defaultOgImageAlt;
  const title = page.openGraph?.title ?? page.title;
  const description = page.openGraph?.description ?? page.description;
  const index = page.robots?.index ?? true;
  const follow = page.robots?.follow ?? true;
  const twitterImage = page.twitter?.image ?? image;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: absoluteUrl(page.canonicalPath) },
    openGraph: {
      type: "website",
      locale: siteSEO.locale,
      url: absoluteUrl(page.canonicalPath),
      siteName: siteSEO.name,
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: page.twitter?.card ?? "summary_large_image",
      title: page.twitter?.title ?? title,
      description: page.twitter?.description ?? description,
      images: [{ url: twitterImage, alt: page.twitter?.imageAlt ?? imageAlt }],
    },
    robots: { index, follow },
  };
}

export function getPageJsonLd(pageKey: PageKey): JsonLdObject[] {
  const page = getPageSEO(pageKey);
  return [buildWebPageSchema(page)];
}

export function getGlobalJsonLd(): JsonLdObject[] {
  return [organizationSchema, websiteSchema];
}

export function getInsightSEO(insight: Insight): SEOPage {
  return {
    pageName: insight.title,
    title: insight.title,
    description: insight.description,
    canonicalPath: insight.href,
    openGraph: {
      title: insight.title,
      description: insight.description,
      image: insight.image,
      imageAlt: insight.title,
    },
    schema: { type: "WebPage" },
  };
}

export function generateInsightMetadata(insight: Insight): Metadata {
  const page = getInsightSEO(insight);
  return {
    ...generateMetadataForPage(page),
    openGraph: {
      ...generateMetadataForPage(page).openGraph,
      type: "article",
    },
  };
}

export function getInsightJsonLd(insight: Insight): JsonLdObject[] {
  const page = getInsightSEO(insight);
  const url = absoluteUrl(page.canonicalPath);
  return [
    buildWebPageSchema(page),
    {
      "@type": "Article",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@id": url },
      headline: insight.title,
      description: insight.description,
      image: absoluteUrl(insight.image),
      author: { "@id": `${siteSEO.url}/#organization` },
      publisher: { "@id": `${siteSEO.url}/#organization` },
      articleSection: insight.category,
      inLanguage: "en-IN",
    },
  ];
}

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

function generateMetadataForPage(page: SEOPage): Metadata {
  const image = page.openGraph?.image ?? siteSEO.defaultOgImage;
  const imageAlt = page.openGraph?.imageAlt ?? siteSEO.defaultOgImageAlt;
  const title = page.openGraph?.title ?? page.title;
  const description = page.openGraph?.description ?? page.description;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: absoluteUrl(page.canonicalPath) },
    openGraph: {
      type: "website",
      locale: siteSEO.locale,
      url: absoluteUrl(page.canonicalPath),
      siteName: siteSEO.name,
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    robots: {
      index: page.robots?.index ?? true,
      follow: page.robots?.follow ?? true,
    },
  };
}

function buildWebPageSchema(page: SEOPage): JsonLdObject {
  const url = absoluteUrl(page.canonicalPath);
  return {
    "@context": "https://schema.org",
    "@type": page.schema?.type ?? "WebPage",
    "@id": url,
    url,
    name: page.schema?.name ?? page.title,
    description: page.schema?.description ?? page.description,
    isPartOf: { "@id": `${siteSEO.url}/#website` },
    about: { "@id": `${siteSEO.url}/#organization` },
    inLanguage: "en-IN",
  };
}
