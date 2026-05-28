"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-dark/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-dark/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="relative z-50 flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
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
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#financing" size="sm">
            Get Approved
          </Button>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
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

      <div
        className={`fixed inset-0 z-40 bg-dark transition-opacity lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-2 px-6"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-2xl font-bold uppercase tracking-wide text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="#financing"
            size="lg"
            className="mt-6 w-full max-w-xs"
            onClick={() => setMenuOpen(false)}
          >
            Get Approved
          </Button>
        </nav>
      </div>
    </header>
  );
}
