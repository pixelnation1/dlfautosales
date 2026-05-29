import { DEFAULT_LOCALE, LOCALE_PREFIX, type Locale } from "./config";

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

/** Path without locale prefix, always starts with / */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) {
    return pathname.slice(3) || "/";
  }
  return pathname || "/";
}

export function prefixPath(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return normalized;
  if (normalized === "/") return "/es";
  return `${LOCALE_PREFIX.es}${normalized}`;
}

/**
 * Switch locale while staying on the matching page when possible.
 * Falls back to home (/ or /es) for pages without a Spanish version.
 */
export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const base = stripLocalePrefix(pathname);

  if (targetLocale === "en") {
    return base;
  }

  const spanishSupported =
    base === "/" ||
    base.startsWith("/inventory") ||
    base === "/financing" ||
    base === "/trade-in" ||
    base === "/about" ||
    base === "/contact" ||
    base === "/why-dlf";

  if (!spanishSupported) {
    return "/es";
  }

  return prefixPath(base, "es");
}

export function getVehicleDetailPath(slug: string, locale: Locale): string {
  return prefixPath(`/inventory/${slug}`, locale);
}
