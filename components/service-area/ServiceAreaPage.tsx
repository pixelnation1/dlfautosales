import Link from "next/link";
import type { ServiceArea } from "@/lib/data/service-areas";
import { ROUTES, SITE } from "@/lib/constants";
import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { PageCTA } from "@/components/shared/PageCTA";
import { VehicleGrid } from "@/components/inventory/VehicleGrid";
import { Button } from "@/components/ui/Button";
import { ServiceAreaInternalLinks } from "./ServiceAreaInternalLinks";
import { ServiceAreaMap } from "./ServiceAreaMap";

type ServiceAreaPageProps = {
  area: ServiceArea;
};

export function ServiceAreaPage({ area }: ServiceAreaPageProps) {
  return (
    <>
      <PageHero
        h1={area.h1}
        subtitle={area.heroSubtitle}
        eyebrow={area.heroEyebrow}
        primaryCta={{ label: "View Inventory", href: ROUTES.inventory }}
        secondaryCta={{
          label: "Get Pre-Qualified",
          href: ROUTES.financingPreQualify,
        }}
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-primary">
            {area.distanceNote}
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold uppercase text-dark sm:text-3xl">
            {area.introTitle}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-text-dark/75">
            {area.introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10">
            <ServiceAreaInternalLinks />
          </div>
        </div>
      </section>

      <section className="border-t border-border-gray bg-light-gray py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Inventory
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase text-dark">
                {area.inventoryTitle}
              </h2>
              <p className="mt-2 max-w-xl text-text-dark/70">
                {area.inventoryDescription}
              </p>
            </div>
            <Button href={ROUTES.inventory} variant="secondary" className="shrink-0">
              Full Inventory
            </Button>
          </div>
          <div className="mt-10">
            <VehicleGrid limit={3} />
          </div>
        </div>
      </section>

      <section className="bg-dark py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Financing
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase text-white sm:text-3xl">
                {area.financingTitle}
              </h2>
              <div className="mt-4 space-y-4 text-white/75">
                {area.financingParagraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              <Button href={ROUTES.financingPreQualify} size="lg" className="mt-8">
                Start Pre-Qualification
              </Button>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold uppercase text-white">
                {area.tradeInTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {area.tradeInParagraph}
              </p>
              <Button href={ROUTES.tradeIn} variant="outline" size="md" className="mt-6">
                Get Trade-In Value
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title={area.faqTitle}
        description={area.faqDescription}
        items={area.faqs}
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Contact
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase text-dark">
                Visit DLF from {area.city}
              </h2>
              <p className="mt-4 text-text-dark/75">
                Ready to shop used cars in {area.city} and surrounding areas? Call,
                message, or drive to our Emporia dealership — we serve buyers across
                Kansas with used cars, financing, and trade-ins.
              </p>
              {area.nearbyTowns && area.nearbyTowns.length > 0 && (
                <p className="mt-4 text-sm text-text-dark/60">
                  Also serving: {area.nearbyTowns.join(", ")}
                </p>
              )}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={ROUTES.contact} size="md">
                  Contact Us
                </Button>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center rounded-md border border-border-gray px-6 py-3 text-sm font-semibold uppercase tracking-wide text-dark hover:border-primary hover:text-primary"
                >
                  Call {SITE.phone}
                </a>
              </div>
            </div>
            <ServiceAreaMap mapQuery={area.mapQuery} city={area.city} />
          </div>
        </div>
      </section>

      <PageCTA
        title={`Drive Home from ${area.city}`}
        description={`Shop used cars, get financed, and trade in at DLF Auto Sales — your used car dealership serving ${area.city} and Kansas communities.`}
        primaryLabel="Browse Inventory"
        primaryHref={ROUTES.inventory}
        secondaryLabel="Get Pre-Qualified"
        secondaryHref={ROUTES.financingPreQualify}
      />

      <div className="border-t border-border-gray bg-light-gray py-6 text-center text-sm text-text-dark/60">
        <Link href="/areas-we-serve" className="font-semibold text-primary hover:underline">
          View all areas we serve →
        </Link>
      </div>
    </>
  );
}
