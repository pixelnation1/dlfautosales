import type { Metadata } from "next";
import { WhyDlfPageContent } from "@/components/why-dlf/WhyDlfPageContent";
import { buildLocalizedMetadataBase } from "@/lib/i18n/alternates";

export const metadata: Metadata = buildLocalizedMetadataBase(
  "¿Por qué comprar en DLF Auto Sales? | Emporia, KS",
  "Descubra por qué conductores eligen DLF Auto Sales en Emporia, KS: autos usados a buen precio, financiamiento, entrega de vehículo y atención en español.",
  "/why-dlf",
  "es",
  [
    "por qué comprar en DLF Auto Sales",
    "concesionario de autos usados en Emporia KS",
    "compra de autos usados en Kansas",
  ]
);

export default function SpanishWhyDlfPage() {
  return <WhyDlfPageContent locale="es" />;
}
