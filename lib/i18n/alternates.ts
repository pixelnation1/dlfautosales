import { SITE } from "@/lib/constants";
import type { Locale } from "./config";
import { prefixPath, stripLocalePrefix } from "./paths";

export function buildHreflangAlternates(pathname: string) {
  const base = stripLocalePrefix(pathname);
  const enUrl = `${SITE.url}${base}`;
  const esUrl = `${SITE.url}${prefixPath(base, "es")}`;

  return {
    canonical: enUrl,
    languages: {
      "en-US": enUrl,
      "es-US": esUrl,
      "x-default": enUrl,
    },
  };
}

export function buildLocalizedMetadataBase(
  title: string,
  description: string,
  path: string,
  locale: Locale,
  keywords: string[] = []
) {
  const canonicalPath = locale === "es" ? prefixPath(path, "es") : path;
  const url = `${SITE.url}${canonicalPath}`;

  return {
    title,
    description,
    keywords,
    alternates: buildHreflangAlternates(canonicalPath),
    openGraph: {
      title: `${title} | ${SITE.shortName}`,
      description,
      url,
      siteName: SITE.shortName,
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website" as const,
    },
  };
}
