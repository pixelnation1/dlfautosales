import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { AboutFinalCTA } from "@/components/about/AboutPageContent";
import { SpanishSupportSection } from "@/components/home/SpanishSupportSection";
import { buildLocalizedMetadataBase } from "@/lib/i18n/alternates";
import { routesFor } from "@/lib/i18n/routes";
import { Button } from "@/components/ui/Button";

const routes = routesFor("es");

export const metadata: Metadata = buildLocalizedMetadataBase(
  "Sobre DLF Auto Sales | Concesionario en Emporia, KS",
  "Conozca DLF Auto Sales, concesionario local de autos usados en Emporia KS. Carlos y su equipo — financiamiento, entrega de vehículo y atención en español.",
  "/about",
  "es",
  ["concesionario local Emporia", "DLF Auto Sales Carlos"]
);

export default function SpanishAboutPage() {
  return (
    <>
      <PageHero
        h1="Sobre DLF Auto Sales"
        subtitle="Conozca a Carlos y al equipo — concesionario de autos usados en Emporia enfocado en precios accesibles, financiamiento y trato respetuoso."
        eyebrow="Nosotros"
        primaryCta={{ label: "Ver inventario", href: routes.inventory }}
        secondaryCta={{ label: "Contáctenos", href: routes.contact }}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold uppercase text-dark">
            Su vecino en Emporia
          </h2>
          <p className="mt-4 leading-relaxed text-text-dark/75">
            DLF Auto Sales no es un lote corporativo — es un concesionario de la
            comunidad donde cada cliente recibe respuestas claras, precios justos y
            apoyo antes y después de la compra.
          </p>
          <p className="mt-4 leading-relaxed text-text-dark/75">
            Carlos y el equipo conocen las necesidades de los conductores en Kansas:
            vehículos confiables, financiamiento flexible y entrega de su vehículo
            actual cuando le conviene.
          </p>
          <Button href={routes.whyDlf} size="md" className="mt-8">
            ¿Por qué elegir DLF?
          </Button>
        </div>
      </section>

      <SpanishSupportSection locale="es" />
      <ReviewsSection background="light-gray" />
      <AboutFinalCTA locale="es" />
    </>
  );
}
