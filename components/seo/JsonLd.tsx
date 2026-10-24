import type { JsonLdObject } from "@/lib/seo/types";

interface JsonLdProps {
  data: JsonLdObject | JsonLdObject[];
}

export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
