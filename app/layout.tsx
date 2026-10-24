import type { Metadata } from "next";
import { Manrope, Caveat, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import SiteShell from "@/components/layout/SiteShell";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata, getGlobalJsonLd } from "@/lib/seo";
import { siteSEO } from "@/lib/seo/site";

const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-LRBF36JBLJ";
const clarityProjectId =
  process.env.NEXT_PUBLIC_CLARITY_ID ?? "yy0vk0k1dy";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  ...generatePageMetadata("home"),
  metadataBase: new URL(siteSEO.url),
  title: {
    default: siteSEO.defaultTitle,
    template: siteSEO.titleTemplate,
  },
  verification: {
    google: "rdEcBOjJ_QwNIIXiqgxlx-AesDUEEmAD6A-XF-jwn1U",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        manrope.variable,
        caveat.variable,
        outfit.variable,
      )}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <JsonLd data={getGlobalJsonLd()} />
        <SiteShell>{children}</SiteShell>

        <GoogleAnalytics gaId={googleAnalyticsId} />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityProjectId}");
          `}
        </Script>
      </body>
    </html>
  );
}
