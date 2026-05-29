import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { routesFor } from "@/lib/i18n/routes";
import { Button } from "@/components/ui/Button";

const copy = {
  en: {
    badge: "Se Habla Español",
    title: "We Speak Spanish",
    body: "Our team can help customers in English and Spanish with vehicle questions, financing options, and trade-ins.",
    cta: "Contact Us",
  },
  es: {
    badge: "Hablamos Español",
    title: "Atención en español",
    body: "Nuestro equipo puede ayudarle en español con preguntas sobre vehículos, opciones de financiamiento y entrega de su vehículo.",
    cta: "Contáctenos",
  },
} as const;

type SpanishSupportSectionProps = {
  locale?: Locale;
};

export function SpanishSupportSection({ locale = "en" }: SpanishSupportSectionProps) {
  const t = copy[locale];
  const routes = routesFor(locale);

  return (
    <section className="border-y border-primary/20 bg-primary/5 py-12 sm:py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {t.badge}
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase text-dark sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-dark/75 sm:text-lg">
            {t.body}
          </p>
        </div>
        <Button href={routes.contact} size="lg" className="shrink-0">
          {t.cta}
        </Button>
      </div>
    </section>
  );
}
