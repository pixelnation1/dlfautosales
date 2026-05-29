import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

const localKeywords = [
  "used cars Emporia KS",
  "used car dealership Emporia KS",
  "auto financing Emporia KS",
  "Emporia Kansas used cars",
];

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title,
    description,
    keywords: [...localKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.shortName}`,
      description,
      url,
      siteName: SITE.shortName,
      locale: "en_US",
      type: "website",
    },
  };
}

export const pageMetadata = {
  home: buildPageMetadata({
    title: "Used Cars in Emporia, KS",
    description:
      "DLF Auto Sales — your trusted used car dealership in Emporia KS. Quality used cars, trucks, and SUVs with easy auto financing. Serving Emporia and nearby Kansas communities.",
    path: "/",
    keywords: ["used trucks SUVs Emporia", "used car dealership near me"],
  }),
  inventory: buildPageMetadata({
    title: "Used Cars, Trucks & SUVs for Sale in Emporia, KS",
    description:
      "Browse used cars, trucks, and SUVs for sale at DLF Auto Sales in Emporia, KS. Hand-picked inventory, transparent pricing, and financing available on every vehicle.",
    path: "/inventory",
    keywords: [
      "used trucks Emporia KS",
      "used SUVs near Emporia",
      "cars for sale Emporia Kansas",
    ],
  }),
  financing: buildPageMetadata({
    title: "Auto Financing in Emporia, KS",
    description:
      "Get approved for auto financing in Emporia KS at DLF Auto Sales. Bad credit, no credit, and first-time buyers welcome. Fast applications and flexible payments.",
    path: "/financing",
    keywords: [
      "bad credit car loans Emporia",
      "no credit financing Emporia KS",
    ],
  }),
  findMyCar: buildPageMetadata({
    title: "Find My Car | Vehicle Finder in Emporia, KS",
    description:
      "Tell DLF Auto Sales what used car, truck, or SUV you want. Share your budget, monthly payment, and must-haves — our Emporia team will help you find the right vehicle.",
    path: "/find-my-car",
    keywords: [
      "find used car Emporia KS",
      "vehicle finder dealership",
      "help me find a car Kansas",
    ],
  }),
  tradeIn: buildPageMetadata({
    title: "Trade In Your Vehicle in Emporia, KS",
    description:
      "Trade in your vehicle at DLF Auto Sales in Emporia, KS. Fair trade-in values toward your next used car, truck, or SUV. Fast appraisals and easy upgrades.",
    path: "/trade-in",
    keywords: ["trade in vehicle Emporia KS", "sell trade car Emporia"],
  }),
  about: buildPageMetadata({
    title: "About DLF Auto Sales",
    description:
      "Learn about DLF Auto Sales — a locally owned used car dealership in Emporia, KS committed to honest deals, quality vehicles, and customer-first service.",
    path: "/about",
    keywords: [
      "Carlos DLF Auto Sales",
      "local car dealer Emporia",
      "Spanish speaking car dealer Emporia KS",
    ],
  }),
  contact: buildPageMetadata({
    title: "Contact DLF Auto Sales in Emporia, KS",
    description:
      "Contact DLF Auto Sales in Emporia, KS. Call, visit our lot, or send a message about used cars, financing, and trade-ins. Serving Emporia and nearby Kansas areas.",
    path: "/contact",
    keywords: ["DLF Auto Sales phone", "car dealer Emporia hours"],
  }),
} as const;
