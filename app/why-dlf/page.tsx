import type { Metadata } from "next";
import { WhyDlfPageContent } from "@/components/why-dlf/WhyDlfPageContent";
import { buildLocalizedMetadataBase } from "@/lib/i18n/alternates";

export const metadata: Metadata = buildLocalizedMetadataBase(
  "Why Buy From DLF Auto Sales | Used Car Dealership in Emporia, KS",
  "See why drivers choose DLF Auto Sales in Emporia, KS for affordable used cars, financing help, trade-ins, Spanish-speaking support, and respectful customer service.",
  "/why-dlf",
  "en",
  [
    "why buy from DLF Auto Sales",
    "local used car dealer Emporia",
    "trusted dealership Kansas",
  ]
);

export default function WhyDlfPage() {
  return <WhyDlfPageContent locale="en" />;
}
