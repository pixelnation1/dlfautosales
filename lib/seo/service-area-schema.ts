import { SITE } from "@/lib/constants";
import type { ServiceArea } from "@/lib/data/service-areas";
import { faqPageSchema } from "@/lib/seo/schema";

export function serviceAreaLocalBusinessSchema(area: ServiceArea) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: SITE.name,
    description: area.metaDescription,
    url: `${SITE.url}/${area.slug}`,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1234 Commercial St",
      addressLocality: "Emporia",
      addressRegion: "KS",
      postalCode: "66801",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.4039,
      longitude: -96.1817,
    },
    areaServed: [
      {
        "@type": "City",
        name: area.city,
        containedInPlace: { "@type": "State", name: "Kansas" },
      },
      { "@type": "City", name: "Emporia", containedInPlace: "Kansas" },
    ],
    priceRange: "$$",
  };
}

export function serviceAreaPageSchema(area: ServiceArea) {
  return [serviceAreaLocalBusinessSchema(area), faqPageSchema(area.faqs)];
}
