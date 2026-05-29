"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalizedPath } from "@/lib/i18n/paths";
import { getLocaleFromPathname } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";

export function LanguageToggle() {
  const pathname = usePathname();
  const current = getLocaleFromPathname(pathname);

  return (
    <div
      className="flex items-center rounded-md border border-white/20 bg-white/5 p-0.5 text-xs font-bold uppercase tracking-wide"
      role="group"
      aria-label="Language"
    >
      <LangLink locale="en" current={current} pathname={pathname} label="EN" />
      <LangLink locale="es" current={current} pathname={pathname} label="ES" />
    </div>
  );
}

function LangLink({
  locale,
  current,
  pathname,
  label,
}: {
  locale: Locale;
  current: Locale;
  pathname: string;
  label: string;
}) {
  const href = getLocalizedPath(pathname, locale);
  const active = current === locale;

  return (
    <Link
      href={href}
      className={`rounded px-2.5 py-1.5 transition-colors ${
        active
          ? "bg-primary text-white"
          : "text-white/70 hover:bg-white/10 hover:text-white"
      }`}
      aria-current={active ? "true" : undefined}
      lang={locale}
    >
      {label}
    </Link>
  );
}
