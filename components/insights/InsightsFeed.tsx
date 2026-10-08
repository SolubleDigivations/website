"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { insightCategories, insights, type InsightCategory } from "@/lib/insights";

export default function InsightsFeed() {
  const [activeCategory, setActiveCategory] = useState<InsightCategory>("All");
  const [query, setQuery] = useState("");

  const filteredInsights = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return insights.filter((insight) => {
      const matchesCategory = activeCategory === "All" || insight.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        `${insight.title} ${insight.description} ${insight.category}`
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section className="container-soluble pb-24">
      <div className="flex flex-col gap-5 border-y border-border py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {insightCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                activeCategory === category
                  ? "bg-foreground text-white"
                  : "bg-white text-muted-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="flex min-w-52 items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-sm text-muted-foreground lg:w-64">
          <Search size={15} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </label>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredInsights.map((insight) => (
          <article
            key={insight.title}
            className="group overflow-hidden rounded-xl border border-border bg-white p-3 transition-shadow hover:shadow-[0_12px_35px_rgba(17,17,17,0.08)]"
          >
            <div className="relative aspect-[1.55] overflow-hidden rounded-lg bg-muted">
              <Image
                src={insight.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-3 pb-2">
              <div className="flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: insight.accent }} />
                  {insight.category}
                </span>
                <span className="flex items-center gap-1 normal-case tracking-normal">
                  <Clock3 size={11} /> {insight.readTime}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-extrabold leading-[1.02] tracking-[-0.05em]">
                {insight.title}
              </h3>
              <p className="mt-3 text-sm leading-6">{insight.description}</p>
              <Link
                href={insight.href}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold underline underline-offset-4 transition-colors hover:text-soluble-blue"
              >
                Read more <ArrowRight size={13} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      {filteredInsights.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">No articles match your search.</p>
      )}
    </section>
  );
}
