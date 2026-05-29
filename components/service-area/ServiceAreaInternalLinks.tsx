import Link from "next/link";
import { ROUTES } from "@/lib/constants";

const links = [
  {
    href: ROUTES.inventory,
    label: "Inventory",
    description: "Browse used cars, trucks & SUVs",
  },
  {
    href: ROUTES.financing,
    label: "Financing",
    description: "Get pre-qualified today",
  },
  {
    href: ROUTES.tradeIn,
    label: "Trade-In",
    description: "Value your trade-in",
  },
  {
    href: ROUTES.contact,
    label: "Contact",
    description: "Call or visit our lot",
  },
];

export function ServiceAreaInternalLinks() {
  return (
    <nav
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      aria-label="Quick links"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group rounded-xl border border-border-gray bg-white p-4 transition-all hover:border-primary/40 hover:shadow-md"
        >
          <p className="font-display text-sm font-bold uppercase text-dark group-hover:text-primary">
            {link.label}
          </p>
          <p className="mt-1 text-xs text-text-dark/60">{link.description}</p>
        </Link>
      ))}
    </nav>
  );
}
