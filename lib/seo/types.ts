import type { Metadata } from "next";

export interface SEOPage {
  pageName: string;
  title: string;
  description: string;
  canonicalPath: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  schema?: {
    type?: "WebPage" | "CollectionPage" | "ContactPage" | "AboutPage" | "Service";
    name?: string;
    description?: string;
  };
}

export interface JsonLdObject {
  "@context"?: string;
  "@type": string;
  [key: string]: unknown;
}

export interface GeneratedSEO {
  page: SEOPage;
  metadata: Metadata;
  jsonLd: JsonLdObject[];
}
