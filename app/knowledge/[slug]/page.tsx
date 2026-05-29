import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/knowledge/ArticleTemplate";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  articleSlugs,
  getArticleBySlug,
} from "@/lib/knowledge/articles";
import { buildArticleMetadata } from "@/lib/seo/knowledge-metadata";
import { articlePageSchema } from "@/lib/seo/article-schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildArticleMetadata(article);
}

export default async function KnowledgeArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <JsonLd data={articlePageSchema(article)} />
      <ArticleTemplate article={article} />
    </>
  );
}
