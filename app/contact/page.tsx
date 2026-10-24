import ContactFormContainer from "@/components/contact/ContactFormContainer";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";

export const metadata = generatePageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getPageJsonLd("contact")} />
      <ContactFormContainer />
    </>
  );
}