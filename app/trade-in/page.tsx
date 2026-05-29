import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { tradeInFaqs } from "@/lib/data/faqs";
import { pageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema } from "@/lib/seo/schema";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata.tradeIn;

const steps = [
  {
    step: "01",
    title: "Bring Your Vehicle",
    text: "Drive to our Emporia lot with your current car, truck, or SUV. No appointment necessary — walk-ins welcome.",
  },
  {
    step: "02",
    title: "Get a Fair Appraisal",
    text: "Our team evaluates your vehicle's condition, mileage, and market value to provide a straightforward trade-in offer.",
  },
  {
    step: "03",
    title: "Apply Value Toward Your Next Ride",
    text: "Use your trade-in value toward any vehicle on our lot — and combine it with auto financing in Emporia KS for an easy upgrade.",
  },
];

export default function TradeInPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(tradeInFaqs)} />

      <PageHero
        h1="Trade In Your Vehicle in Emporia, KS"
        subtitle="Upgrade smarter at DLF Auto Sales. Get a fair trade-in value toward your next used car, truck, or SUV — fast appraisals and honest numbers from your local Emporia dealer."
        eyebrow="Trade-In"
        primaryCta={{ label: "Get Trade-In Value", href: ROUTES.contact }}
        secondaryCta={{ label: "Browse Inventory", href: ROUTES.inventory }}
      />

      <section className="bg-light-gray py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold uppercase text-dark sm:text-3xl">
              Trade In Vehicle Emporia KS — Simple &amp; Fair
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-dark/75">
              Whether you&apos;re upgrading to a larger SUV, downsizing to a
              fuel-efficient sedan, or switching to a work truck, trading in at
              DLF Auto Sales saves time and money. We serve drivers across
              Emporia, Lyon County, and nearby Kansas communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-border-gray bg-white p-6"
              >
                <span className="font-display text-4xl font-extrabold text-primary/25">
                  {item.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase text-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dark/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={ROUTES.contact} size="lg">
              Request Trade-In Appraisal
            </Button>
            <Button href={ROUTES.financingApplication} variant="secondary" size="lg">
              Get Pre-Approved
            </Button>
          </div>
        </div>
      </section>

      <FAQ
        title="Trade-In Questions"
        description="What to know before you trade in your vehicle at DLF Auto Sales."
        items={tradeInFaqs}
      />

      <PageCTA
        title="Ready to Upgrade?"
        description="Contact DLF Auto Sales today for a trade-in appraisal and find your next vehicle on our Emporia lot."
        primaryLabel="Contact Us"
        primaryHref={ROUTES.contact}
        secondaryLabel="View Inventory"
        secondaryHref={ROUTES.inventory}
      />
    </>
  );
}
