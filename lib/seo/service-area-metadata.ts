import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import type { ServiceArea } from "@/lib/data/service-areas";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function buildServiceAreaMetadata(area: ServiceArea): Metadata {
  const keywords = [
    `used cars in ${area.city}`,
    `used trucks in ${area.city}`,
    `used SUVs in ${area.city}`,
    `auto financing in ${area.city}`,
    `used car dealership near ${area.city}`,
    `trade in your vehicle near ${area.city}`,
    `used cars ${area.city} KS`,
  ];

  return buildPageMetadata({
    title: area.metaTitle.replace(` | ${SITE.shortName}`, ""),
    description: area.metaDescription,
    path: `/${area.slug}`,
    keywords,
  });
}

export const areasWeServeMetadata = buildPageMetadata({
  title: "Areas We Serve | Kansas Used Car Dealer",
  description:
    "DLF Auto Sales serves Emporia, Wichita, Topeka, Olpe, Burlingame, Lyndon, Cottonwood Falls, and surrounding Kansas communities with used cars, financing, and trade-ins.",
  path: "/areas-we-serve",
  keywords: [
    "Kansas used car dealer",
    "used cars Lyon County",
    "Flint Hills used cars",
    "DLF Auto Sales service area",
  ],
});
