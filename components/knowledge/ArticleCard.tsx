import Image from "next/image";
import Link from "next/link";
import type { KnowledgeArticle } from "@/lib/knowledge/types";
import { getArticlePath, formatArticleDate } from "@/lib/knowledge/utils";

type ArticleCardProps = {
  article: KnowledgeArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-gray bg-white shadow-sm transition-all hover:border-primary/30 hover:shadow-lg">
      <Link
        href={getArticlePath(article.slug)}
        className="relative block aspect-[16/10] overflow-hidden bg-dark"
      >
        <Image
          src={article.featuredImage}
          alt={article.featuredImageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {article.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-text-dark/50">
          {formatArticleDate(article.publishedAt)} · {article.readingTimeMinutes} min read
        </p>
        <h3 className="mt-2 font-display text-lg font-bold uppercase leading-tight text-dark group-hover:text-primary">
          <Link href={getArticlePath(article.slug)}>{article.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-dark/70">
          {article.excerpt}
        </p>
        <Link
          href={getArticlePath(article.slug)}
          className="mt-4 text-sm font-bold uppercase tracking-wide text-primary hover:underline"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
