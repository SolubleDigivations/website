import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";

import FinalCTA from "@/components/common/FinalCTA";
import { insights } from "@/lib/insights";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

const articleSections = [
  {
    eyebrow: "The starting point",
    title: "Good digital work starts with a better question.",
    body: "Before choosing a direction, we make space to understand the people, context and business problem behind the brief. That clarity gives every design and technical decision a useful job to do.",
  },
  {
    eyebrow: "Our approach",
    title: "Small, focused decisions create momentum.",
    body: "We work in short loops: explore the problem, make something tangible, test the thinking and improve it. This keeps the work grounded in evidence while leaving enough room for unexpected, better ideas.",
  },
  {
    eyebrow: "What we learned",
    title: "The details are where the experience earns trust.",
    body: "The strongest outcomes rarely come from one dramatic moment. They come from a clear hierarchy, thoughtful interactions, fast feedback and a system that remains useful long after launch.",
  },
];

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((insight) => insight.slug === slug);

  if (!article) {
    return { title: "Article not found | Soluble Digivations" };
  }

  return {
    title: `${article.title} | Soluble Digivations`,
    description: article.description,
  };
}

export default async function InsightArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = insights.find((insight) => insight.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insights
    .filter((insight) => insight.slug !== article.slug && insight.category === article.category)
    .slice(0, 2);

  return (
    <main className="overflow-hidden bg-background">
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
            <p className="text-lg leading-8 text-foreground/80">
              Building meaningful digital experiences is a practice of turning complexity into
              clarity. Here is what this project taught us about making better decisions and
              creating work that lasts.
            </p>
            <div className="mt-14 space-y-14">
              {articleSections.map((section) => (
                <section
                  key={section.eyebrow}
                  id={`section-${articleSections.indexOf(section) + 1}`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-extrabold leading-[1.02] tracking-[-0.06em] md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-5 text-base leading-8">{section.body}</p>
                </section>
              ))}
            </div>
            <blockquote className="my-16 border-l-4 border-soluble-pink pl-6 text-2xl font-bold leading-tight tracking-[-0.04em] md:text-3xl">
              “The best work makes the right thing feel simple.”
            </blockquote>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-white p-5 md:sticky md:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              In this article
            </p>
            <nav className="mt-5 space-y-3 text-sm font-semibold">
              {articleSections.map((section, index) => (
                <a
                  key={section.eyebrow}
                  href={`#section-${index + 1}`}
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
