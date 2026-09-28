import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soluble Digivations",
  description: "Digital Engineering for Modern Businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", manrope.variable)}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <Navbar />
        <div className="pt-[80px] lg:pt-[72px]">{children}</div>
      </body>
    </html>
  );
}
