import type { Metadata } from "next";
import { SpanishHome } from "@/components/home/SpanishHome";
import { buildLocalizedMetadataBase } from "@/lib/i18n/alternates";

export const metadata: Metadata = buildLocalizedMetadataBase(
  "Carros usados en Emporia, KS | DLF Auto Sales",
  "DLF Auto Sales — concesionario de autos usados en Emporia, KS. Carros, camionetas y SUVs con financiamiento de autos en Emporia KS y compra de autos usados en Kansas.",
  "/",
  "es",
  [
    "carros usados en Emporia KS",
    "financiamiento de autos en Emporia KS",
    "concesionario de autos usados en Emporia KS",
    "compra de autos usados en Kansas",
  ]
);

export default function SpanishHomePage() {
  return <SpanishHome />;
}
