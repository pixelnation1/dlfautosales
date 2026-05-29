import type { KnowledgeArticle } from "../types";
import { computeReadingTime } from "../utils";
import { financingArticles } from "./financing";
import { tradeInArticles } from "./trade-ins";
import { buyingGuideArticles } from "./buying-guides";
import { vehicleTipArticles } from "./vehicle-tips";
import { localArticles } from "./local";

const rawArticles: KnowledgeArticle[] = [
  ...financingArticles,
  ...tradeInArticles,
  ...buyingGuideArticles,
  ...vehicleTipArticles,
  ...localArticles,
];

/** Articles with computed reading time if not set manually */
export const allArticles: KnowledgeArticle[] = rawArticles.map((article) => ({
  ...article,
  readingTimeMinutes:
    article.readingTimeMinutes || computeReadingTime(article.sections),
}));

export const articleSlugs = allArticles.map((a) => a.slug);

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: KnowledgeArticle): KnowledgeArticle[] {
  return article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is KnowledgeArticle => Boolean(a));
}

export function getFeaturedArticles(limit = 3): KnowledgeArticle[] {
  const featured = allArticles.filter((a) => a.featured);
  return (featured.length >= limit ? featured : allArticles).slice(0, limit);
}

export function searchArticles(query: string): KnowledgeArticle[] {
  const q = query.trim().toLowerCase();
  if (!q) return allArticles;
  return allArticles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
  );
}

export function filterArticlesByCategory(
  category: string | null
): KnowledgeArticle[] {
  if (!category || category === "All") return allArticles;
  return allArticles.filter((a) => a.category === category);
}
