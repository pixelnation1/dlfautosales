import { SITE } from "@/lib/constants";
import { getArticlePath } from "@/lib/knowledge/utils";
import type { KnowledgeArticle } from "@/lib/knowledge/types";
import { faqPageSchema } from "@/lib/seo/schema";

export function articleSchema(article: KnowledgeArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: article.featuredImage,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}${getArticlePath(article.slug)}`,
    },
  };
}

export function articleBreadcrumbSchema(article: KnowledgeArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Knowledge Center",
        item: `${SITE.url}/knowledge`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE.url}${getArticlePath(article.slug)}`,
      },
    ],
  };
}

export function articlePageSchema(article: KnowledgeArticle) {
  return [
    articleSchema(article),
    articleBreadcrumbSchema(article),
    faqPageSchema(article.faqs),
  ];
}
