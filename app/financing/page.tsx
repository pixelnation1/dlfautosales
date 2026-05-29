import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { FinancingApplicationForm } from "@/components/forms/FinancingApplicationForm";
import { financingFaqs } from "@/lib/data/faqs";
import { pageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema } from "@/lib/seo/schema";
import { ROUTES, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata.financing;

const benefits = [
  {
    title: "Bad Credit & No Credit",
    text: "Past challenges don't have to stop you. We work with lenders who specialize in rebuilding credit and first-time approvals.",
  },
  {
    title: "First-Time Buyers",
    text: "Never financed a car before? We'll walk you through every step — terms, payments, and what documents to bring.",
  },
  {
    title: "Same-Day Decisions",
    text: "Most applications receive a response the same business day. Get pre-approved before you shop our Emporia lot.",
  },
  {
    title: "Flexible Payments",
    text: "Multiple lender relationships mean more options for down payment, term length, and monthly budget.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(financingFaqs)} />

      <PageHero
        h1="Auto Financing in Emporia, KS"
        subtitle="DLF Auto Sales makes auto financing in Emporia KS straightforward — whether you have great credit, bad credit, or no credit history at all. Apply online or call our local team today."
        eyebrow="Financing"
        primaryCta={{ label: "Start Application", href: ROUTES.financingApplication }}
        secondaryCta={{ label: "View Inventory", href: ROUTES.inventory }}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-dark sm:text-3xl">
                Financing Built for Real Drivers
              </h2>
              <p className="mt-4 leading-relaxed text-text-dark/75">
                As a used car dealership in Emporia KS, we know that life
                doesn&apos;t always fit a perfect credit score. That&apos;s why
                we partner with multiple lenders to maximize your approval
                chances and find a payment you can live with.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-xl border border-border-gray p-5"
                  >
                    <h3 className="font-display font-bold uppercase text-dark">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-dark/70">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href={SITE.phoneHref}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Prefer to apply by phone? Call {SITE.phone} →
                </a>
              </div>
            </div>

            <div id="application" className="scroll-mt-28">
              <FinancingApplicationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-white/80">Already found a vehicle?</p>
          <Button href={ROUTES.inventory} size="sm">
            Browse Inventory
          </Button>
        </div>
      </section>

      <FAQ
        title="Financing Questions"
        description="Answers about auto financing in Emporia KS at DLF Auto Sales."
        items={financingFaqs}
      />

      <PageCTA
        eyebrow="Get Started"
        title="Apply for Financing Today"
        description="Take the first step toward your next vehicle. No pressure — just honest answers from your local Emporia dealership."
        primaryLabel="Submit Application"
        primaryHref={ROUTES.financingApplication}
        secondaryLabel="Call Us Now"
        secondaryHref={SITE.phoneHref}
      />
    </>
  );
}
