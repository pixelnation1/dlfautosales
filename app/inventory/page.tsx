import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { VehicleGrid } from "@/components/inventory/VehicleGrid";
import { FAQ } from "@/components/shared/FAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { inventoryFaqs } from "@/lib/data/faqs";
import { allVehicles } from "@/lib/data/inventory";
import { pageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema, vehicleListSchema } from "@/lib/seo/schema";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata.inventory;

export default function InventoryPage() {
  return (
    <>
      <JsonLd data={[vehicleListSchema(allVehicles), faqPageSchema(inventoryFaqs)]} />

      <PageHero
        h1="Used Cars, Trucks, and SUVs for Sale in Emporia, KS"
        subtitle="Browse our hand-picked lot of quality used vehicles at DLF Auto Sales — a trusted used car dealership in Emporia KS with transparent pricing and financing on every ride."
        eyebrow="Inventory"
        primaryCta={{ label: "Get Pre-Approved", href: ROUTES.financingPreQualify }}
        secondaryCta={{ label: "Contact Us", href: ROUTES.contact }}
      />

      <section className="bg-light-gray py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-text-dark/80">
              Looking for used cars in Emporia KS, used trucks and SUVs near
              Emporia, or a dependable daily driver? Our inventory is updated
              regularly with sedans, SUVs, pickups, and more — each selected for
              value and reliability. Serving Emporia and nearby Kansas
              communities including Burlington, Ottawa, and Council Grove.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={ROUTES.financingPreQualify} size="sm">
              Finance Any Vehicle
            </Button>
            <Button href={ROUTES.tradeIn} variant="secondary" size="sm">
              Value Your Trade-In
            </Button>
          </div>

          <div className="mt-12">
            <VehicleGrid />
          </div>

          <p className="mt-8 text-center text-xs text-text-dark/50">
            Prices and monthly estimates are subject to credit approval. Contact
            us for the most current availability.
          </p>
        </div>
      </section>

      <FAQ
        title="Inventory Questions"
        description="Common questions about our used cars, trucks, and SUVs in Emporia."
        items={inventoryFaqs}
      />

      <PageCTA
        title="Found Something You Like?"
        description="Schedule a visit or get pre-approved before you shop — we'll help you drive home with confidence."
        primaryLabel="Contact Us"
        primaryHref={ROUTES.contact}
        secondaryLabel="Apply for Financing"
        secondaryHref={ROUTES.financingPreQualify}
      />
    </>
  );
}
