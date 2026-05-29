import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allVehicles, getVehicleBySlug } from "@/lib/data/inventory";
import { buildVehicleMetadata } from "@/lib/seo/vehicle-metadata";
import { vehicleSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { VehicleDetailContent } from "@/components/inventory/VehicleDetailContent";

type VehiclePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allVehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({
  params,
}: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return { title: "Vehicle Not Found" };
  return buildVehicleMetadata(vehicle);
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <>
      <JsonLd data={vehicleSchema(vehicle)} />
      <VehicleDetailContent vehicle={vehicle} />
    </>
  );
}
