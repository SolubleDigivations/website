import React from "react";
import ResponsiveShowcase from "@/components/test/ResponsiveShowcase";

export const metadata = {
  title: "Responsive Showcase | Soluble Digivations",
  description: "Optimized for every screen size - Desktop, Tablet, and Mobile.",
};

export default function TestPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F5]">
      <ResponsiveShowcase />
    </main>
  );
}
