import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { VehicleFinderForm } from "@/components/forms/VehicleFinderForm";
import { VEHICLE_FINDER_TRUST_POINTS } from "@/lib/vehicle-finder/constants";
import { pageMetadata } from "@/lib/seo/metadata";
import { ROUTES, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata.findMyCar;

export default function FindMyCarPage() {
  return (
    <>
      <PageHero
        h1="Tell Us What You're Looking For"
        subtitle="Don't see the right vehicle? Let our team help you find it."
        eyebrow="Vehicle Finder"
        primaryCta={{ label: "Browse Inventory", href: ROUTES.inventory }}
        secondaryCta={{ label: "Get Approved", href: ROUTES.financingPreQualify }}
      />

      <section className="bg-light-gray py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-border-gray bg-white p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Why use Vehicle Finder?
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-dark/75">
                    Inventory changes often. Tell us your budget, payment goal, and
                    must-haves — Carlos and the DLF team will reach out when we have
                    a match or can source something close.
                  </p>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                  <p className="font-display text-lg font-bold uppercase text-dark">
                    Shop with confidence
                  </p>
                  <ul className="mt-4 space-y-3">
                    {VEHICLE_FINDER_TRUST_POINTS.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm font-medium text-text-dark/85"
                      >
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white"
                          aria-hidden
                        >
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border-gray bg-dark p-6 text-white">
                  <p className="text-sm text-white/70">Prefer to talk now?</p>
                  <a
                    href={SITE.phoneHref}
                    className="mt-2 block font-display text-xl font-bold text-primary hover:underline"
                  >
                    {SITE.phone}
                  </a>
                  <Button href={ROUTES.contact} variant="outline" size="sm" className="mt-4 w-full">
                    Contact Us
                  </Button>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <VehicleFinderForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
