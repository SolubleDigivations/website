import { absoluteUrl, siteSEO } from "../site";
import type { JsonLdObject } from "../types";

const organizationSchema: JsonLdObject = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteSEO.url}/#organization`,
  name: siteSEO.organization.name,
  url: siteSEO.url,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl(siteSEO.logo),
  },
  description: siteSEO.organization.description,
  sameAs: siteSEO.organization.sameAs,
};

export default organizationSchema;
