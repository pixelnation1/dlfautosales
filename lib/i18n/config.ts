export const LOCALES = ["en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_PREFIX: Record<Locale, string> = {
  en: "",
  es: "/es",
};

/** Paths that have a Spanish version */
export const LOCALIZED_PATHS = [
  "/",
  "/inventory",
  "/financing",
  "/trade-in",
  "/about",
  "/contact",
  "/why-dlf",
] as const;
