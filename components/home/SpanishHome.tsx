import { SITE } from "@/lib/constants";
import { routesFor } from "@/lib/i18n/routes";
import { Button } from "@/components/ui/Button";
import { VehicleGrid } from "@/components/inventory/VehicleGrid";
import { SpanishSupportSection } from "@/components/home/SpanishSupportSection";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { PageCTA } from "@/components/shared/PageCTA";
import Link from "next/link";

export function SpanishHome() {
  const routes = routesFor("es");

  return (
    <>
      <section className="relative overflow-hidden bg-dark pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,6,19,0.25)_0%,transparent_55%)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Concesionario en Emporia
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Carros usados en Emporia, KS
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            DLF Auto Sales es su concesionario local de autos usados en Emporia —
            carros, camionetas y SUVs seleccionados con financiamiento accesible y
            una experiencia de compra sin presión.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={routes.inventory} size="lg">Ver inventario</Button>
            <Button href={routes.financing} variant="outline" size="lg">
              Solicitar aprobación
            </Button>
          </div>
          <a href={SITE.phoneHref} className="mt-6 inline-block text-sm font-semibold text-white/70 hover:text-primary">
            Llame al {SITE.phone} →
          </a>
        </div>
      </section>

      <SpanishSupportSection locale="es" />

      <section className="bg-light-gray py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Inventario
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase text-dark">
                Destacados en nuestro lote
              </h2>
              <p className="mt-3 text-text-dark/70">
                Vehículos usados de calidad cerca de Emporia — inspeccionados y listos para financiar.
              </p>
            </div>
            <Button href={routes.inventory} variant="secondary">Ver todo el inventario</Button>
          </div>
          <div className="mt-12">
            <VehicleGrid limit={3} locale="es" />
          </div>
          <p className="mt-8 text-center">
            <Link href={routes.inventory} className="text-sm font-bold uppercase tracking-wide text-primary hover:underline">
              Ver inventario completo →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-y border-border-gray bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold uppercase text-dark">¿Por qué DLF?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-dark/70">
            Concesionario local, financiamiento, entrega de su vehículo y atención en español.
          </p>
          <Button href={routes.whyDlf} className="mt-6">Conozca DLF Auto Sales</Button>
        </div>
      </section>

      <ReviewsSection background="dark" />

      <PageCTA
        eyebrow="DLF Auto Sales"
        title="Su próximo vehículo le espera"
        description="Vea el inventario, solicite aprobación o visítenos en Emporia."
        primaryLabel="Ver inventario"
        primaryHref={routes.inventory}
        secondaryLabel="Solicitar aprobación"
        secondaryHref={routes.financingPreQualify}
      />
    </>
  );
}
