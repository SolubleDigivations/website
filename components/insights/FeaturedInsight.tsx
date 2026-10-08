"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { useEffect, useState } from "react";

import CurvedArrow from "../graphics/CurvedArrow";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "../common/MagneticButton";

interface FeaturedArticle {
  category: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

const featuredArticles: FeaturedArticle[] = [
  {
    category: "Case Study",
    readTime: "5 min read",
    title: "Building Stoneza: From Idea to a Scalable E-Commerce Experience",
    description:
      "A behind-the-scenes look at how we designed and developed Stoneza — a modern e-commerce platform for premium stone and tiles.",
    image: "/assets/featured-works/e-commerce.webp",
    alt: "Modern ecommerce website displayed on a laptop",
    href: "/insights/building-stoneza",
  },
  {
    category: "Development",
    readTime: "7 min read",
    title: "Why We Love Next.js for Modern Web Apps",
    description:
      "How Next.js helps us build fast, scalable and maintainable web applications for modern businesses.",
    image: "/assets/featured-works/b2b-sas.webp",
    alt: "Business software dashboard displayed on a laptop",
    href: "/insights/nextjs-modern-web-apps",
  },
  {
    category: "Products",
    readTime: "5 min read",
    title: "From Idea to MVP: A Practical Guide",
    description:
      "Key steps, tools and lessons for turning your product idea into a validated MVP without overcomplicating things.",
    image: "/assets/featured-works/eduflow.webp",
    alt: "Digital product interface",
    href: "/insights/idea-to-mvp",
  },
];

type EmblaApi = NonNullable<UseEmblaCarouselType[1]>;

export default function FeaturedInsight() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = (api: EmblaApi) => {
      setActiveIndex(api.selectedScrollSnap());
    };

    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 7000);

    return () => window.clearInterval(timer);
  }, [emblaApi, isPaused]);

  function goToSlide(index: number) {
    emblaApi?.scrollTo(index);
  }

  return (
    <section className="relative z-0 container-soluble py-16 md:py-24">
      <div className="mb-12">
        <Reveal>
          <span className="inline-flex rounded-full border border-border bg-soluble-blue/20 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Case Studies
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="relative mt-4 inline text-4xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-5xl md:text-6xl">
            Featured Articles
            <CurvedArrow
              className="absolute right-0 top-0 hidden md:block lg:-right-28"
              size={90}
            />
          </h2>
        </Reveal>
      </div>

      <Reveal>
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            ref={emblaRef}
            className="overflow-hidden rounded-2xl border border-border bg-white"
            aria-roledescription="carousel"
            aria-label="Featured articles"
          >
            <div className="flex">
              {featuredArticles.map((article, index) => (
                <div
                  key={article.href}
                  className="grid min-w-0 flex-[0_0_100%] lg:grid-cols-[1.25fr_0.75fr]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${featuredArticles.length}`}
                >
                  <div className="relative min-h-72 overflow-hidden bg-[#272727] lg:min-h-96">
                    <Image
                      src={article.image}
                      alt={article.alt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold">
                      ✦ &nbsp; Featured Article
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      <span>{article.category}</span>
                      <span className="h-1 w-1 rounded-full bg-[#ff8b3d]" />
                      <Clock3 size={12} />
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="mt-5 text-3xl font-extrabold leading-[0.98] tracking-[-0.06em] md:text-4xl">
                      {article.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6">
                      {article.description}
                    </p>
                    <MagneticButton className="mr-auto">
                      <Link
                        href={article.href}
                        className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
                      >
                        Read full story <ArrowUpRight size={15} />
                      </Link>
                    </MagneticButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div
              className="flex items-center gap-2"
              aria-label="Choose featured article"
            >
              {featuredArticles.map((article, index) => (
                <button
                  key={article.href}
                  type="button"
                  aria-label={`Show article ${index + 1}: ${article.title}`}
                  aria-current={activeIndex === index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-8 bg-foreground"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goToSlide(activeIndex - 1)}
                aria-label="Previous featured article"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition-colors hover:bg-muted"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => goToSlide(activeIndex + 1)}
                aria-label="Next featured article"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition-colors hover:bg-muted"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
