import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VehicleDetailContent } from "@/components/inventory/VehicleDetailContent";
import { getVehicleBySlug, allVehicles, getVehicleName } from "@/lib/data/inventory";
import { buildLocalizedMetadataBase } from "@/lib/i18n/alternates";
type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allVehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return {};

  const title = `${getVehicleName(vehicle)} en venta | Emporia, KS`;
  return buildLocalizedMetadataBase(
    title,
    `${getVehicleName(vehicle)} en venta en DLF Auto Sales, Emporia KS. Vea fotos, precio y solicite información.`,
    `/inventory/${slug}`,
    "es"
  );
}

export default async function SpanishVehicleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  return <VehicleDetailContent vehicle={vehicle} />;
}
