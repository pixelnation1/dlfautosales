import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { autoDealerSchema } from "@/lib/seo/schema";
import { areasWeServeMetadata } from "@/lib/seo/service-area-metadata";
import {
  serviceAreas,
  getServiceAreaPath,
  type ServiceAreaSlug,
} from "@/lib/data/service-areas";
import { ROUTES, SITE } from "@/lib/constants";
import { ServiceAreaInternalLinks } from "@/components/service-area/ServiceAreaInternalLinks";

export const metadata: Metadata = areasWeServeMetadata;

const kansasOverview = [
  "DLF Auto Sales is headquartered in Emporia, Kansas — a central hub for Lyon County and the Flint Hills region. From our Commercial Street lot, we serve drivers who want a local used car dealership with honest pricing, flexible financing, and trade-in options.",
  "Whether you are in a larger metro like Wichita or Topeka, or a smaller community like Olpe, Burlingame, Lyndon, or Cottonwood Falls, you can shop our inventory, apply for financing, and visit for a test drive.",
  "Our focus is simple: quality used cars, used trucks, and used SUVs; auto financing for good and challenging credit; and trade-in value that helps you upgrade. Every community below has a dedicated page with local information for buyers in that area.",
];

export default function AreasWeServePage() {
  return (
    <>
      <JsonLd data={autoDealerSchema()} />

      <PageHero
        h1="Areas We Serve in Kansas"
        subtitle="DLF Auto Sales proudly serves Emporia and communities across Kansas — browse location pages for used cars, financing, and trade-in information near you."
        eyebrow="Service Areas"
        primaryCta={{ label: "View Inventory", href: ROUTES.inventory }}
        secondaryCta={{ label: "Contact Us", href: ROUTES.contact }}
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold uppercase text-dark sm:text-3xl">
            Kansas Service Area Overview
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-text-dark/75">
            {kansasOverview.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <ServiceAreaInternalLinks />
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Location Pages
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase text-dark sm:text-3xl">
            Cities &amp; Communities We Serve
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={getServiceAreaPath(area.slug as ServiceAreaSlug)}
                className="group rounded-2xl border border-border-gray bg-white p-6 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {area.state}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold uppercase text-dark group-hover:text-primary">
                  {area.city}
                </h3>
                <p className="mt-2 text-sm text-text-dark/70">{area.distanceNote}</p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  View local page →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-12 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <p className="text-white/80">
            Headquartered at {SITE.address}. Call{" "}
            <a href={SITE.phoneHref} className="font-bold text-white hover:text-primary">
              {SITE.phone}
            </a>{" "}
            for directions from your city.
          </p>
        </div>
      </section>

      <PageCTA
        title="Shop DLF Auto Sales Today"
        description="Browse inventory, get pre-qualified, or plan your visit from anywhere in our Kansas service area."
        primaryLabel="View Inventory"
        primaryHref={ROUTES.inventory}
        secondaryLabel="Get Pre-Qualified"
        secondaryHref={ROUTES.financingPreQualify}
      />
    </>
  );
}
