import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactInfo } from "@/components/shared/ContactInfo";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQ } from "@/components/shared/FAQ";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { PageCTA } from "@/components/shared/PageCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { contactFaqs } from "@/lib/data/faqs";
import { pageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema } from "@/lib/seo/schema";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = pageMetadata.contact;

type ContactPageProps = {
  searchParams: Promise<{ vehicle?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { vehicle } = await searchParams;

  return (
    <>
      <JsonLd data={faqPageSchema(contactFaqs)} />

      <PageHero
        h1="Contact DLF Auto Sales in Emporia, KS"
        subtitle="Questions about used cars in Emporia KS, auto financing, or trade-ins? Reach out — our team responds fast and treats every inquiry with respect."
        eyebrow="Contact"
        primaryCta={{ label: "View Inventory", href: ROUTES.inventory }}
        secondaryCta={{ label: "Get Approved", href: ROUTES.financing }}
      />

      <section className="bg-light-gray py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <ContactInfo />
            <div className="rounded-xl border border-border-gray bg-white p-6 sm:p-8">
              <ContactForm defaultVehicle={vehicle ?? ""} />
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection background="white" />

      <FAQ
        title="Contact & Visit Questions"
        description="Hours, location, and how to reach DLF Auto Sales in Emporia."
        items={contactFaqs}
      />

      <PageCTA
        title="We're Here to Help"
        description="Stop by the lot or send a message — let's get you into the right vehicle with the right payment."
        primaryLabel="Browse Inventory"
        primaryHref={ROUTES.inventory}
        secondaryLabel="Apply for Financing"
        secondaryHref={ROUTES.financing}
      />
    </>
  );
}
