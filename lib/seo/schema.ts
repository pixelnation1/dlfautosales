import { SITE } from "@/lib/constants";
import { getVehicleName, type Vehicle } from "@/lib/data/inventory";
import type { FAQItem } from "@/lib/data/faqs";

export function autoDealerSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: SITE.name,
    image: `${SITE.url}/logo.svg`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Emporia", containedInPlace: "Kansas" },
      { "@type": "City", name: "Burlington", containedInPlace: "Kansas" },
      { "@type": "City", name: "Ottawa", containedInPlace: "Kansas" },
      { "@type": "City", name: "Council Grove", containedInPlace: "Kansas" },
    ],
  };
}

export function faqPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function vehicleSchema(vehicle: Vehicle) {
  const name = getVehicleName(vehicle);

  return {
    "@context": "https://schema.org",
    "@type": "Car",
    name,
    brand: { "@type": "Brand", name: vehicle.make },
    model: vehicle.model,
    vehicleModelDate: String(vehicle.year),
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: vehicle.mileage,
      unitCode: "SMI",
    },
    image: vehicle.image,
    offers: {
      "@type": "Offer",
      price: vehicle.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "AutoDealer",
        name: SITE.name,
      },
    },
  };
}

export function vehicleListSchema(vehicles: Vehicle[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Used Vehicles at DLF Auto Sales",
    numberOfItems: vehicles.length,
    itemListElement: vehicles.map((vehicle, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Car",
        name: getVehicleName(vehicle),
        url: `${SITE.url}/inventory#vehicle-${vehicle.id}`,
        offers: {
          "@type": "Offer",
          price: vehicle.price,
          priceCurrency: "USD",
        },
      },
    })),
  };
}
