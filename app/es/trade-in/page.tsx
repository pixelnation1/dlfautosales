import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { buildLocalizedMetadataBase } from "@/lib/i18n/alternates";
import { routesFor } from "@/lib/i18n/routes";
import { Button } from "@/components/ui/Button";

const routes = routesFor("es");

export const metadata: Metadata = buildLocalizedMetadataBase(
  "Entrega su vehículo en Emporia, KS",
  "Entregue su vehículo en DLF Auto Sales, Emporia KS. Valuación justa hacia su próximo carro, camioneta o SUV usado.",
  "/trade-in",
  "es",
  ["entrega de vehículo Emporia KS", "trade in auto usado Emporia"]
);

export default function SpanishTradeInPage() {
  return (
    <>
      <PageHero
        h1="Entrega su vehículo en Emporia, KS"
        subtitle="Actualice su vehículo en DLF Auto Sales. Valuación justa hacia su próximo auto usado — rápido y claro desde su concesionario local."
        eyebrow="Entrega de vehículo"
        primaryCta={{ label: "Solicitar valuación", href: routes.contact }}
        secondaryCta={{ label: "Ver inventario", href: routes.inventory }}
      />
      <section className="bg-light-gray py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold uppercase text-dark">
            Proceso simple y justo
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-text-dark/75">
            Traiga su carro, camioneta o SUV actual. Evaluamos condición y mercado
            para ofrecerle un valor claro que puede aplicar a su próxima compra en
            el lote.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={routes.contact} size="lg">Contáctenos</Button>
            <Button href={routes.financingPreQualify} variant="secondary" size="lg">
              Solicitar aprobación
            </Button>
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
