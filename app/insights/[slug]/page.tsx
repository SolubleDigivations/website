import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";

import FinalCTA from "@/components/common/FinalCTA";
import { insights, type InsightBlock } from "@/lib/insights";
import JsonLd from "@/components/seo/JsonLd";
import {
  generateInsightMetadata,
  getInsightBySlug,
  getInsightJsonLd,
  generatePageMetadata,
} from "@/lib/seo";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

function ArticleBlock({ block }: { block: InsightBlock }) {
  if (block.type === "paragraph") {
    return <p className="text-lg leading-8 text-foreground/80">{block.text}</p>;
  }

  if (block.type === "quote") {
    return (
      <blockquote className="border-l-4 border-soluble-pink pl-6 text-2xl font-bold leading-tight tracking-[-0.04em] md:text-3xl">
        “{block.text}”
        {block.attribution && (
          <cite className="mt-4 block text-sm font-semibold not-italic tracking-normal text-muted-foreground">
            — {block.attribution}
          </cite>
        )}
      </blockquote>
    );
  }

  return (
    <section id={block.id} className="scroll-mt-28">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
        {block.eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-extrabold leading-[1.02] tracking-[-0.06em] md:text-4xl">
        {block.title}
      </h2>
      {"paragraphs" in block &&
        block.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-5 text-base leading-8">
            {paragraph}
          </p>
        ))}
      {"points" in block && block.points && (
        <ul className="mt-6 space-y-3">
          {block.points.map((point) => (
            <li key={point} className="flex gap-3 text-base leading-7">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-soluble-mint" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      {"items" in block && (
        <ul className="mt-6 space-y-3">
          {block.items.map((item, index) => (
            <li key={`${item}-${index}`} className="flex gap-3 text-base leading-7">
              <span className="font-bold text-soluble-orange">0{index + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return generatePageMetadata("not-found");
  }

  return generateInsightMetadata(article);
}

export default async function InsightArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insights
    .filter((insight) => insight.slug !== article.slug && insight.category === article.category)
    .slice(0, 2);
  const articleSections = article.content.filter(
    (block): block is Extract<InsightBlock, { id: string }> => "id" in block,
  );

  return (
    <main className="overflow-hidden bg-background">
      <JsonLd data={getInsightJsonLd(article)} />
      <article>
        <header className="container-soluble max-w-5xl pb-12 pt-16 md:pb-16 md:pt-24">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} /> Back to insights
          </Link>
          <div className="mt-12 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            <span
              className="h-3.5 w-3.5 rounded-full"
              style={{ backgroundColor: article.accent }}
            />
            <span>{article.category}</span>
            <span className="h-1 w-1 rounded-full bg-[#ff8b3d]" />
            <Clock3 size={13} />
            <span>{article.readTime}</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.94] tracking-[-0.075em] md:text-7xl">
            {article.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 md:text-xl">{article.description}</p>
        </header>

        <div className="container-soluble max-w-6xl">
          <div className="relative aspect-[1.8] overflow-hidden rounded-2xl bg-muted md:aspect-[2.2]">
            <Image
              src={article.image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </div>

        <div className="container-soluble grid max-w-5xl gap-12 py-16 md:grid-cols-[minmax(0,1fr)_220px] md:py-24">
          <div className="max-w-2xl">
            <div className="mt-14 space-y-14">
              {article.content.map((block, index) => (
                <ArticleBlock key={"id" in block ? block.id : `${block.type}-${index}`} block={block} />
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-white p-5 md:sticky md:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              In this article
            </p>
            <nav className="mt-5 space-y-3 text-sm font-semibold">
              {articleSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  {section.eyebrow}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="container-soluble max-w-5xl border-t border-border py-16 md:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Keep reading
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.06em]">More like this.</h2>
            </div>
            <Link
              href="/insights"
              className="hidden items-center gap-2 text-sm font-bold sm:inline-flex"
            >
              View all <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={related.href}
                className="group overflow-hidden rounded-xl border border-border bg-white p-3"
              >
                <div className="relative aspect-[1.8] overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={related.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-3">
                  <h3 className="text-xl font-extrabold leading-tight tracking-[-0.05em]">
                    {related.title}
                  </h3>
                  <ArrowUpRight className="shrink-0" size={18} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      <FinalCTA />
    </main>
  );
}
