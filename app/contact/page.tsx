import type { Metadata } from "next";
import ContactFormContainer from "@/components/contact/ContactFormContainer";

export const metadata: Metadata = {
  title: "Contact Soluble — Tell Us About Your Idea",
  description:
    "Start a conversation with Soluble Digivations. Share your project requirements, budget, timeline, and goals for modern digital engineering.",
};

export default function ContactPage() {
  return <ContactFormContainer />;
}