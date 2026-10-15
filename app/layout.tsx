import type { Metadata } from "next";
import { Manrope, Caveat, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import SiteShell from "@/components/layout/SiteShell";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

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
  title: "Soluble Digivations",
  description: "Digital Engineering for Modern Businesses.",
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
