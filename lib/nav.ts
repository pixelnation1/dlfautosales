import { ROUTES } from "@/lib/constants";

export type NavLink = {
  label: string;
  href: string;
  /** Shorter label for desktop header when space is tight */
  shortLabel?: string;
};

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: ROUTES.home },
  { label: "Inventory", href: ROUTES.inventory },
  { label: "Financing", href: ROUTES.financing },
  { label: "Trade-In", href: ROUTES.tradeIn },
  { label: "Car Buying Tips", shortLabel: "Tips", href: ROUTES.knowledge },
  { label: "About", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
];

export function isNavLinkActive(pathname: string, href: string): boolean {
  if (href === ROUTES.home) {
    return pathname === ROUTES.home;
  }
  if (href === ROUTES.knowledge) {
    return (
      pathname === ROUTES.knowledge ||
      pathname.startsWith(`${ROUTES.knowledge}/`)
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
