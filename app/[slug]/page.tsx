import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getServiceAreaBySlug,
  isServiceAreaSlug,
  SERVICE_AREA_SLUGS,
} from "@/lib/data/service-areas";
import { buildServiceAreaMetadata } from "@/lib/seo/service-area-metadata";
import { serviceAreaPageSchema } from "@/lib/seo/service-area-schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { ServiceAreaPage } from "@/components/service-area/ServiceAreaPage";

type ServiceAreaRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_AREA_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceAreaRouteProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceAreaSlug(slug)) return { title: "Not Found" };
  const area = getServiceAreaBySlug(slug);
  if (!area) return { title: "Not Found" };
  return buildServiceAreaMetadata(area);
}

export default async function ServiceAreaRoutePage({
  params,
}: ServiceAreaRouteProps) {
  const { slug } = await params;

  if (!isServiceAreaSlug(slug)) {
    notFound();
  }

  const area = getServiceAreaBySlug(slug);
  if (!area) {
    notFound();
  }

  return (
    <>
      <JsonLd data={serviceAreaPageSchema(area)} />
      <ServiceAreaPage area={area} />
    </>
  );
}
