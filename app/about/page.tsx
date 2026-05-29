import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { TrustSection } from "@/components/home/TrustSection";
import { pageMetadata } from "@/lib/seo/metadata";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return (
    <>
      <PageHero
        h1="About DLF Auto Sales"
        subtitle="Locally owned and customer-focused — DLF Auto Sales is the used car dealership in Emporia KS where honest deals and quality vehicles come first."
        eyebrow="About Us"
        primaryCta={{ label: "View Inventory", href: ROUTES.inventory }}
        secondaryCta={{ label: "Contact Us", href: ROUTES.contact }}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-dark sm:text-3xl">
                Your Neighbor in Emporia
              </h2>
              <p className="mt-4 leading-relaxed text-text-dark/75">
                DLF Auto Sales LLC isn&apos;t a corporate mega-lot — we&apos;re a
                community-focused dealership built on relationships. Every
                customer gets straight answers, fair pricing, and support before
                and after the sale.
              </p>
              <p className="mt-4 leading-relaxed text-text-dark/75">
                We specialize in quality used cars in Emporia KS, with auto
                financing options for all credit situations and trade-ins welcome
                on every deal. Our team knows the roads, the weather, and the
                budgets that matter to Kansas drivers.
              </p>
              <Button href={ROUTES.financing} size="md" className="mt-8">
                Explore Financing
              </Button>
            </div>
            <div className="rounded-2xl border border-border-gray bg-light-gray p-8">
              <h3 className="font-display text-xl font-bold uppercase text-dark">
                What We Stand For
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Honest, no-pressure sales",
                  "Hand-picked, quality inventory",
                  "Financing for real-world credit",
                  "Fair trade-in values",
                  "Service after you drive away",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-dark/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      <PageCTA
        title="Experience the DLF Difference"
        description="Visit our Emporia lot, browse inventory online, or call today — we're ready to help you find the right vehicle."
        primaryLabel="View Inventory"
        primaryHref={ROUTES.inventory}
        secondaryLabel="Get Approved"
        secondaryHref={ROUTES.financingApplication}
      />
    </>
  );
}
