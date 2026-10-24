import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";
import TestPageContent from "@/components/test/TestPageContent";

export const metadata = generatePageMetadata("test");

export default function TestPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F5]">
      <JsonLd data={getPageJsonLd("test")} />
      <TestPageContent />
    </main>
  );
}
