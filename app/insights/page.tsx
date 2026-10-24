import FinalCTA from "@/components/common/FinalCTA";
import FeaturedInsight from "@/components/insights/FeaturedInsight";
import InsightsFeed from "@/components/insights/InsightsFeed";
import InsightsHero from "@/components/insights/InsightsHero";
import NewsletterBanner from "@/components/insights/NewsletterBanner";
import TopicExplorer from "@/components/insights/TopicExplorer";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";

export const metadata = generatePageMetadata("insights");

export default function InsightsPage() {
  return (
    <main className="overflow-hidden bg-background">
      <JsonLd data={getPageJsonLd("insights")} />
      <InsightsHero />
      <FeaturedInsight />
      <div id="articles">
        <InsightsFeed />
      </div>
      <NewsletterBanner />
      <TopicExplorer />
      <FinalCTA />
    </main>
  );
}