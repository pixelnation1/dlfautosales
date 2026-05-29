import type { KnowledgeArticle } from "./types";

export function getArticlePath(slug: string): string {
  return `/knowledge/${slug}`;
}

export function computeReadingTime(sections: KnowledgeArticle["sections"]): number {
  const text = sections
    .flatMap((s) => [...s.paragraphs, ...(s.bullets ?? [])])
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatArticleDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoDate));
}
