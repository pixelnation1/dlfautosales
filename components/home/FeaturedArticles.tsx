import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { getFeaturedArticles } from "@/lib/knowledge/articles";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArticleCard } from "@/components/knowledge/ArticleCard";

export function FeaturedArticles() {
  const articles = getFeaturedArticles(3);

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Car Buying Tips"
            title="Expert Guides for Kansas Drivers"
            description="Financing, trade-ins, and used vehicle advice from DLF Auto Sales in Emporia — free articles to help you shop with confidence."
          />
          <Button
            href={ROUTES.knowledge}
            variant="secondary"
            className="shrink-0 self-start lg:self-auto"
          >
            All Car Buying Tips
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <p className="mt-8 text-center">
          <Link
            href={ROUTES.knowledge}
            className="text-sm font-bold uppercase tracking-wide text-primary hover:underline"
          >
            View all car buying tips →
          </Link>
        </p>
      </div>
    </section>
  );
}
