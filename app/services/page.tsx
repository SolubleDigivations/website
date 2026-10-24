import JsonLd from "@/components/seo/JsonLd";
import ServicesPageContent from "@/components/services/ServicesPageContent";
import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";

export const metadata = generatePageMetadata("services");

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <JsonLd data={getPageJsonLd("services")} />
      <ServicesPageContent />
    </div>
  );
}
