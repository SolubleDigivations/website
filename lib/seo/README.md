# Soluble SEO content guide

SEO content lives in this folder so it can be edited without changing React
components. The website reads these files during the Next.js build and request
rendering, so a redeploy (or a development refresh) applies the changes.

## Page files

| Page | File |
| --- | --- |
| Home | `home.ts` |
| About | `about.ts` |
| Services | `services.ts` |
| Our Work | `work.ts` |
| Process | `process.ts` |
| Contact | `contact.ts` |
| Insights index | `insights.ts` |
| Responsive showcase (no index) | `test.ts` |
| Insight articles | `index.ts` (`getInsightSEO`) |

In a page file, the safest fields to edit are `title`, `description`,
`canonicalPath`, and the values inside `openGraph`. Titles are written without
the brand suffix; the technical helper adds `| Soluble Digivations`.

- `title` is the search-result and browser title.
- `description` is the search description.
- `canonicalPath` is the preferred path for the page, beginning with `/`.
- `openGraph` controls previews shared on social networks.
- `twitter` can override the default X card when a page needs different text.
- `robots.index` controls whether search engines may index the page.
- `robots.follow` controls whether crawlers may follow links on the page.

Optional social fields inherit from the page title, description, and the global
image in `site.ts`. Do not delete or rename the field names, and use an image
that exists under `public/`.

## Global settings

[`site.ts`](./site.ts) is the single source of truth for the production URL,
brand, default title, default description, logo, locale, and verified social
profiles. Do not change `url`, `logo`, or organization facts without developer
assistance. The current production domain is `https://soluble.in`.

## Structured data

Global Organization and WebSite entities are defined in `schemas/` and are
rendered once by the root layout. Each page emits one connected WebPage entity.
Insight articles additionally emit an Article entity because the repository
contains genuine editorial content.

The technical code in `index.ts` creates stable absolute URLs and connects
pages to the Organization and WebSite with `@id` references. Do not delete or
rename `@context`, `@type`, `@id`, `url`, or the relationship fields. Edit
descriptive content in the page files rather than adding duplicate schema
objects.

Do not add ratings, reviews, prices, addresses, awards, dates, or credentials
unless the business can verify those facts. Structured data must describe
content visible on the page.

## Adding a page

1. Ask a developer to add a new page configuration under `lib/seo/`.
2. The developer connects it to the route's `generatePageMetadata` call and
   `JsonLd` component.
3. The developer adds its canonical URL to `app/sitemap.ts` if it is indexable.
4. Edit the resulting content-only configuration file as needed.

Route integration, metadata helpers, JSON-LD rendering, sitemap, robots rules,
and schema implementation are technical files. Do not edit those without a
developer.

## Checking changes

- View the page source and check the title, description, canonical link, Open
  Graph tags, X/Twitter tags, and robots directives.
- Check `/sitemap.xml` and `/robots.txt` on the deployed site.
- Use [Google Rich Results Test](https://search.google.com/test/rich-results)
  and the [Schema.org Validator](https://validator.schema.org/) to inspect
  representative JSON-LD.
- In Google Search Console, open **Sitemaps**, enter `sitemap.xml`, and submit.

The production URL is intentionally not derived from a request host. Preview
deployments and localhost must never become canonical URLs.
