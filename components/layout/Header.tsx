"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getMobileNavLinks, getNavLinks, isNavLinkActive } from "@/lib/nav";
import { getLocaleFromPathname } from "@/lib/i18n/paths";
import { routesFor } from "@/lib/i18n/routes";
import { getUiLabels } from "@/lib/i18n/ui";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const routes = routesFor(locale);
  const ui = getUiLabels(locale);
  const navLinks = getNavLinks(locale);
  const mobileLinks = getMobileNavLinks(locale);
  const homeHref = routes.home;

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-dark/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-dark/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <Link href={homeHref} className="relative z-50 flex shrink-0 items-center">
          <Image
            src="/logo.svg"
            alt="DLF Auto Sales"
            width={160}
            height={36}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-0.5 xl:gap-1 lg:flex"
          aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}
        >
          {navLinks.map((link) => {
            const isActive = isNavLinkActive(pathname, link.href);
            const displayLabel = link.shortLabel ?? link.label;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-2 py-2 text-sm font-medium transition-colors xl:px-2.5 ${
                  isActive
                    ? "bg-primary/20 text-white"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {displayLabel}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 shrink-0 lg:flex">
          <LanguageToggle />
          <Button href={routes.financing} size="sm">
            {ui.getApproved}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-white"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-6 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-white transition-transform ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-transform ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-dark transition-opacity lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-2 px-6"
          aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"}
        >
          {mobileLinks.map((link) => {
            const isActive = isNavLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-xl font-bold uppercase tracking-wide transition-colors sm:text-2xl ${
                  isActive ? "text-primary" : "text-white hover:text-primary"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href={routes.financing} size="lg" className="mt-6 w-full max-w-xs">
            {ui.getApproved}
          </Button>
        </nav>
      </div>
    </header>
  );
}
