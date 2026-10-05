import type { Metadata } from "next";
import { Manrope, Caveat, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SiteShell from "@/components/layout/SiteShell";

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
      </body>
    </html>
  );
}
