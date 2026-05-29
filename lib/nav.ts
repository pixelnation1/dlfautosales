import type { Locale } from "@/lib/i18n/config";
import { routesFor } from "@/lib/i18n/routes";
import { getUiLabels } from "@/lib/i18n/ui";

export type NavLink = {
  label: string;
  href: string;
  shortLabel?: string;
};

export function getNavLinks(locale: Locale): readonly NavLink[] {
  const r = routesFor(locale);
  const ui = getUiLabels(locale);

  return [
    { label: ui.home, href: r.home },
    { label: ui.inventory, href: r.inventory },
    {
      label: locale === "es" ? ui.vehicleFinder : "Vehicle Finder",
      shortLabel: locale === "es" ? "Buscar" : "Find Car",
      href: r.findMyCar,
    },
    { label: ui.financing, href: r.financing },
    {
      label: ui.tradeIn,
      shortLabel: locale === "es" ? "Entrega" : undefined,
      href: r.tradeIn,
    },
    {
      label: locale === "es" ? "Consejos de compra" : "Car Buying Tips",
      shortLabel: ui.tips,
      href: r.knowledge,
    },
    { label: ui.about, href: r.about },
    { label: ui.contact, href: r.contact },
  ];
}

/** Footer includes Why DLF (not in desktop header to save space) */
export function getFooterLinks(locale: Locale): readonly NavLink[] {
  const ui = getUiLabels(locale);
  return [
    ...getNavLinks(locale),
    { label: ui.whyDlf, href: routesFor(locale).whyDlf },
  ];
}

export function getMobileNavLinks(locale: Locale): readonly NavLink[] {
  const ui = getUiLabels(locale);
  return [...getNavLinks(locale), { label: ui.whyDlf, href: routesFor(locale).whyDlf }];
}

/** @deprecated Use getNavLinks('en') */
export const NAV_LINKS = getNavLinks("en");

export function isNavLinkActive(pathname: string, href: string): boolean {
  if (href === "/" || href === "/es") {
    return pathname === "/" || pathname === "/es";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
