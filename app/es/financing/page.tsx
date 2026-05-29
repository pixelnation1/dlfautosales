import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FinancingPreQualificationForm } from "@/components/forms/FinancingPreQualificationForm";
import { PageCTA } from "@/components/shared/PageCTA";
import { buildLocalizedMetadataBase } from "@/lib/i18n/alternates";
import { routesFor } from "@/lib/i18n/routes";

const routes = routesFor("es");

export const metadata: Metadata = buildLocalizedMetadataBase(
  "Financiamiento de autos en Emporia, KS",
  "Solicite financiamiento de autos en Emporia KS en DLF Auto Sales. Mal crédito, sin crédito y primer comprador — respuestas rápidas y pagos flexibles.",
  "/financing",
  "es",
  ["financiamiento de autos en Emporia KS", "crédito malo auto usado Emporia"]
);

export default function SpanishFinancingPage() {
  return (
    <>
      <PageHero
        h1="Financiamiento de autos en Emporia, KS"
        subtitle="En DLF Auto Sales el financiamiento es claro — buen crédito, mal crédito o sin historial. Aplique en línea o llame a nuestro equipo local."
        eyebrow="Financiamiento"
        primaryCta={{ label: "Solicitar aprobación", href: "#pre-qualify" }}
        secondaryCta={{ label: "Ver inventario", href: routes.inventory }}
      />
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-dark">
                Financiamiento sin juicio
              </h2>
              <p className="mt-4 text-text-dark/75">
                Trabajamos con compradores de distintas situaciones de crédito para
                ayudarle a conseguir un pago que pueda manejar — con comunicación
                clara en cada paso.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-text-dark/80">
                {[
                  "Mal crédito y sin crédito",
                  "Primer comprador",
                  "Decisiones el mismo día en muchos casos",
                  "Pagos flexibles",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-primary">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <FinancingPreQualificationForm variant="full" source="financing-page" />
          </div>
        </div>
      </section>
      <PageCTA
        primaryLabel="Ver inventario"
        primaryHref={routes.inventory}
        secondaryLabel="Contáctenos"
        secondaryHref={routes.contact}
      />
    </>
  );
}
