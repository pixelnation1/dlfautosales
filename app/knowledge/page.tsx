import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { KnowledgeHub } from "@/components/knowledge/KnowledgeHub";
import { knowledgeHubMetadata } from "@/lib/seo/knowledge-metadata";
import { ROUTES, SITE } from "@/lib/constants";
import { allArticles } from "@/lib/knowledge/articles";

export const metadata: Metadata = knowledgeHubMetadata;

function knowledgeHubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DLF Auto Sales Knowledge Center",
    description:
      "Guides on used car financing, trade-ins, buying tips, and shopping local in Kansas.",
    url: `${SITE.url}/knowledge`,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    hasPart: allArticles.map((article) => ({
      "@type": "Article",
      headline: article.title,
      url: `${SITE.url}/knowledge/${article.slug}`,
    })),
  };
}

export default function KnowledgePage() {
  return (
    <>
      <JsonLd data={knowledgeHubSchema()} />

      <PageHero
        h1="Knowledge Center"
        subtitle="Expert guides on financing, trade-ins, vehicle shopping, and buying smart in Kansas — written for local buyers and searchable on Google and AI assistants."
        eyebrow="Learn Before You Buy"
        primaryCta={{ label: "Browse Inventory", href: ROUTES.inventory }}
        secondaryCta={{ label: "Get Pre-Qualified", href: ROUTES.financingPreQualify }}
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KnowledgeHub />
        </div>
      </section>

      <PageCTA
        eyebrow="DLF Auto Sales · Emporia KS"
        title="Questions? We Are Here to Help"
        description="Call, visit, or browse our lot — we help Kansas buyers with financing, trade-ins, and finding the right used vehicle."
        primaryLabel="Contact Us"
        primaryHref={ROUTES.contact}
        secondaryLabel="View Inventory"
        secondaryHref={ROUTES.inventory}
      />
    </>
  );
}
