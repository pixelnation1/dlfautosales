import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactInfo } from "@/components/shared/ContactInfo";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildLocalizedMetadataBase } from "@/lib/i18n/alternates";
import { routesFor } from "@/lib/i18n/routes";

const routes = routesFor("es");

export const metadata: Metadata = buildLocalizedMetadataBase(
  "Contacto | DLF Auto Sales en Emporia, KS",
  "Contacte a DLF Auto Sales en Emporia, KS. Preguntas sobre carros usados, financiamiento de autos y entrega de su vehículo. Atención en español.",
  "/contact",
  "es",
  ["contacto concesionario Emporia", "DLF Auto Sales teléfono"]
);

export default function SpanishContactPage() {
  return (
    <>
      <PageHero
        h1="Contacto — DLF Auto Sales en Emporia, KS"
        subtitle="¿Preguntas sobre carros usados, financiamiento o entrega de su vehículo? Escríbanos o llame — respondemos rápido y con respeto."
        eyebrow="Contacto"
        primaryCta={{ label: "Ver inventario", href: routes.inventory }}
        secondaryCta={{ label: "Solicitar aprobación", href: routes.financing }}
      />
      <section className="bg-light-gray py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-sm text-text-dark/60">
            Hablamos español — puede escribirnos en español con confianza.
          </p>
          <div className="grid gap-10 lg:grid-cols-2">
            <ContactInfo />
            <div className="rounded-xl border border-border-gray bg-white p-6 sm:p-8">
              <ContactForm title="Envíenos un mensaje" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
