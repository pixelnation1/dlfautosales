import type { FAQItem } from "@/lib/data/faqs";

export const ARTICLE_CATEGORIES = [
  "Financing",
  "Trade-Ins",
  "Buying Guides",
  "Vehicle Tips",
  "Local Kansas Buyers",
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

export type ArticleSection = {
  id: string;
  heading: string;
  level?: 2 | 3;
  paragraphs: string[];
  bullets?: string[];
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  featuredImage: string;
  featuredImageAlt: string;
  author: string;
  publishedAt: string;
  readingTimeMinutes: number;
  metaTitle: string;
  metaDescription: string;
  sections: ArticleSection[];
  faqs: FAQItem[];
  relatedSlugs: string[];
  featured?: boolean;
};
