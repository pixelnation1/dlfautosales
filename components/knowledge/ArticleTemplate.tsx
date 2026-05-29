import Image from "next/image";
import Link from "next/link";
import type { KnowledgeArticle } from "@/lib/knowledge/types";
import { getRelatedArticles } from "@/lib/knowledge/articles";
import { formatArticleDate } from "@/lib/knowledge/utils";
import { ROUTES } from "@/lib/constants";
import { FAQ } from "@/components/shared/FAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { ArticleBody } from "./ArticleBody";
import { TableOfContents } from "./TableOfContents";
import { ArticleCard } from "./ArticleCard";

/**
 * Reusable article template — add new articles in lib/knowledge/articles/
 * and they render through this layout automatically.
 */
type ArticleTemplateProps = {
  article: KnowledgeArticle;
};

export function ArticleTemplate({ article }: ArticleTemplateProps) {
  const related = getRelatedArticles(article);

  return (
    <>
      <section className="relative overflow-hidden bg-dark pt-24 pb-8 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
          <div className="absolute -right-1/4 top-0 h-96 w-96 rounded-full bg-primary/25 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-white/60" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={ROUTES.home} className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={ROUTES.knowledge} className="hover:text-primary">
                  Knowledge
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white/90">{article.category}</li>
            </ol>
          </nav>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {article.category}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{article.excerpt}</p>
          <p className="mt-6 text-sm text-white/60">
            By {article.author} · {formatArticleDate(article.publishedAt)} ·{" "}
            {article.readingTimeMinutes} min read
          </p>
        </div>
      </section>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-8 aspect-[21/9] overflow-hidden rounded-2xl border border-border-gray shadow-xl sm:-mt-12">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-4 lg:order-2">
              <div className="sticky top-28">
                <TableOfContents sections={article.sections} />
              </div>
            </aside>
            <div className="lg:col-span-8 lg:order-1">
              <ArticleBody sections={article.sections} />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title="Frequently Asked Questions"
        description={`Quick answers related to ${article.title.toLowerCase()}`}
        items={article.faqs}
      />

      {related.length > 0 && (
        <section className="border-t border-border-gray bg-light-gray py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold uppercase text-dark">
              Related Articles
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <ArticleCard key={rel.slug} article={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCTA
        eyebrow="DLF Auto Sales"
        title="Put This Advice to Work Today"
        description="Shop used cars in Emporia KS, get pre-qualified for financing, or ask about your trade-in — we are here to help."
        primaryLabel="View Inventory"
        primaryHref={ROUTES.inventory}
        secondaryLabel="Get Pre-Qualified"
        secondaryHref={ROUTES.financingPreQualify}
      />
    </>
  );
}
