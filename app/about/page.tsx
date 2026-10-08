import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About | Soluble Digivations",
  description: "Meet the people and principles behind Soluble Digivations.",
};

export default function About() {
  return <AboutPage />;
}