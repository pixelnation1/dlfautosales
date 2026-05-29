import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { VehicleGrid } from "@/components/inventory/VehicleGrid";
import { PageCTA } from "@/components/shared/PageCTA";
import { buildLocalizedMetadataBase } from "@/lib/i18n/alternates";
import { routesFor } from "@/lib/i18n/routes";

const routes = routesFor("es");

export const metadata: Metadata = buildLocalizedMetadataBase(
  "Carros, camionetas y SUVs usados en Emporia, KS",
  "Vea carros usados, camionetas y SUVs en venta en DLF Auto Sales, Emporia KS. Inventario seleccionado, precios claros y financiamiento disponible.",
  "/inventory",
  "es",
  ["carros usados en Emporia KS", "camionetas usadas Emporia", "SUVs usados Kansas"]
);

export default function SpanishInventoryPage() {
  return (
    <>
      <PageHero
        h1="Carros, camionetas y SUVs usados en Emporia, KS"
        subtitle="Explore nuestro inventario de vehículos usados en DLF Auto Sales — concesionario de autos usados en Emporia KS con precios transparentes y financiamiento en cada unidad."
        eyebrow="Inventario"
        primaryCta={{ label: "Solicitar aprobación", href: routes.financingPreQualify }}
        secondaryCta={{ label: "Contáctenos", href: routes.contact }}
      />
      <section className="bg-light-gray py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-lg text-text-dark/80">
            ¿Busca carros usados en Emporia KS o una camioneta confiable? Nuestro
            inventario se actualiza con sedanes, SUVs y pickups para conductores de
            Emporia y comunidades cercanas en Kansas.
          </p>
          <div className="mt-12">
            <VehicleGrid locale="es" />
          </div>
        </div>
      </section>
      <PageCTA
        primaryLabel="Ver financiamiento"
        primaryHref={routes.financing}
        secondaryLabel="Contáctenos"
        secondaryHref={routes.contact}
      />
    </>
  );
}
