import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { getVehicleName, getVehiclePrimaryImage, type Vehicle } from "@/lib/data/inventory";

export function buildVehicleMetadata(vehicle: Vehicle): Metadata {
  const name = getVehicleName(vehicle);
  const title = `${name} for Sale in Emporia, KS`;
  const description = `Shop this ${name} at DLF Auto Sales in Emporia, KS. View price, mileage, features, financing options, and contact us today.`;
  const url = `${SITE.url}/inventory/${vehicle.slug}`;
  const image = getVehiclePrimaryImage(vehicle);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.shortName}`,
      description,
      url,
      siteName: SITE.shortName,
      locale: "en_US",
      type: "website",
      images: [{ url: image, alt: name }],
    },
  };
}
