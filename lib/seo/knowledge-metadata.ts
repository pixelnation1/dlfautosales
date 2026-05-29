import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo/metadata";
import type { KnowledgeArticle } from "@/lib/knowledge/types";
import { getArticlePath } from "@/lib/knowledge/utils";

export const knowledgeHubMetadata = buildPageMetadata({
  title: "Knowledge Center | Car Buying & Financing Tips",
  description:
    "DLF Auto Sales Knowledge Center — expert guides on used cars, auto financing, trade-ins, and buying smart in Kansas. Tips for Emporia and statewide buyers.",
  path: "/knowledge",
  keywords: [
    "used car buying tips Kansas",
    "auto financing advice",
    "trade-in guide",
    "DLF Auto Sales blog",
  ],
});

export function buildArticleMetadata(article: KnowledgeArticle): Metadata {
  return {
    ...buildPageMetadata({
      title: article.metaTitle,
      description: article.metaDescription,
      path: getArticlePath(article.slug),
      keywords: [
        article.category,
        "used cars Kansas",
        "DLF Auto Sales",
      ],
    }),
    openGraph: {
      title: `${article.metaTitle} | ${SITE.shortName}`,
      description: article.metaDescription,
      url: `${SITE.url}${getArticlePath(article.slug)}`,
      siteName: SITE.shortName,
      locale: "en_US",
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: article.featuredImage,
          alt: article.featuredImageAlt,
        },
      ],
    },
  };
}
