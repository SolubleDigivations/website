export const siteSEO = {
  name: "Soluble Digivations",
  shortName: "Soluble",
  url: "https://soluble.in",
  locale: "en_IN",
  defaultTitle: "Digital Engineering for Modern Businesses",
  titleTemplate: "%s | Soluble Digivations",
  description:
    "Soluble Digivations designs and builds useful digital products, websites, and applications for modern businesses.",
  defaultOgImage: "/assets/images/logo/logo-6.png",
  defaultOgImageAlt: "Soluble Digivations logo",
  logo: "/assets/images/logo/logo-6.png",
  organization: {
    name: "Soluble Digivations",
    description:
      "Soluble Digivations designs and builds useful digital products, websites, and applications for modern businesses.",
    sameAs: [
      "https://www.instagram.com/solubledigivations",
      "https://www.linkedin.com/company/soluble-digivations",
      "https://github.com/SolubleDigivations",
    ],
  },
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteSEO.url).toString();
}
