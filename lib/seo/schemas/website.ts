import { siteSEO } from "../site";
import type { JsonLdObject } from "../types";

const websiteSchema: JsonLdObject = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteSEO.url}/#website`,
  name: siteSEO.name,
  url: siteSEO.url,
  publisher: { "@id": `${siteSEO.url}/#organization` },
  inLanguage: "en-IN",
};

export default websiteSchema;
