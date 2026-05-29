import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  AboutFinalCTA,
  AboutPageContent,
} from "@/components/about/AboutPageContent";
import { aboutFaqs } from "@/lib/data/about-faqs";
import { pageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema } from "@/lib/seo/schema";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(aboutFaqs)} />

      <PageHero
        h1="About DLF Auto Sales"
        subtitle="Meet Carlos and the team behind Emporia's local used car dealership — affordable vehicles, financing help, trade-ins, and the kind of customer service people actually talk about."
        eyebrow="About Us"
        primaryCta={{ label: "View Inventory", href: ROUTES.inventory }}
        secondaryCta={{ label: "Get Approved", href: ROUTES.financingPreQualify }}
      />

      <AboutPageContent />

      <ReviewsSection background="light-gray" />

      <FAQ
        title="About DLF Auto Sales"
        description="Quick answers about ownership, financing, language support, trade-ins, and our Emporia location."
        items={aboutFaqs}
      />

      <AboutFinalCTA />
    </>
  );
}
