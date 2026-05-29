"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";
import { getFooterLinks } from "@/lib/nav";
import { getLocaleFromPathname } from "@/lib/i18n/paths";

const financingKeywordsEn = [
  "Bad credit auto loans Emporia KS",
  "No credit car financing",
  "First-time buyer financing",
  "In-house financing Emporia",
  "Quick approval used cars",
];

const financingKeywordsEs = [
  "Financiamiento con mal crédito Emporia KS",
  "Financiamiento sin crédito",
  "Primer auto financiado",
  "Financiamiento en Emporia",
  "Aprobación rápida autos usados",
];

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const links = getFooterLinks(locale);
  const financingKeywords =
    locale === "es" ? financingKeywordsEs : financingKeywordsEn;

  const tagline =
    locale === "es"
      ? "Carros usados en Emporia, KS"
      : SITE.tagline;

  const blurb =
    locale === "es"
      ? "Su concesionario local de autos usados — vehículos de calidad, precios honestos y financiamiento de autos en Emporia KS para personas reales."
      : "Your local used car dealership near me — quality vehicles, honest pricing, and auto financing in Emporia KS that works for real people.";

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-display text-2xl font-bold uppercase tracking-tight">
              {SITE.name}
            </p>
            <p className="mt-2 text-sm text-white/70">{tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{blurb}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {locale === "es" ? "Enlaces" : "Quick Links"}
            </h3>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {locale === "es" ? "Contacto" : "Contact"}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a href={SITE.phoneHref} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.address}</li>
              <li>{SITE.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {locale === "es" ? "Financiamiento" : "Financing"}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {financingKeywords.map((kw) => (
                <li key={kw}>{kw}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE.name}.{" "}
            {locale === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
          <p>
            {locale === "es"
              ? "Carros usados en Emporia, KS · DLF Auto Sales"
              : "Used cars in Emporia, KS · DLF Auto Sales"}
          </p>
        </div>
      </div>
    </footer>
  );
}
