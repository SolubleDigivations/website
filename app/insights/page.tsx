import FinalCTA from "@/components/common/FinalCTA";
import FeaturedInsight from "@/components/insights/FeaturedInsight";
import InsightsFeed from "@/components/insights/InsightsFeed";
import InsightsHero from "@/components/insights/InsightsHero";
import NewsletterBanner from "@/components/insights/NewsletterBanner";
import TopicExplorer from "@/components/insights/TopicExplorer";

export const metadata = {
  title: "Insights | Soluble Digivations",
  description:
    "Practical insights on design, development, products and building digital experiences.",
};

export default function InsightsPage() {
  return (
    <main className="overflow-hidden bg-background">
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