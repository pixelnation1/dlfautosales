import { Hero } from "@/components/home/Hero";
import { FeaturedInventoryPreview } from "@/components/home/FeaturedInventoryPreview";
import { FinancingPreview } from "@/components/home/FinancingPreview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { TradeInPreview } from "@/components/home/TradeInPreview";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { PageCTA } from "@/components/shared/PageCTA";
import { CitiesWeServe } from "@/components/home/CitiesWeServe";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { VehicleFinderPreview } from "@/components/home/VehicleFinderPreview";
import { SpanishSupportSection } from "@/components/home/SpanishSupportSection";
import { WhyDlfPreview } from "@/components/home/WhyDlfPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <SpanishSupportSection locale="en" />
      <FeaturedInventoryPreview />
      <VehicleFinderPreview />
      <FeaturedArticles />
      <FinancingPreview />
      <WhyChoose />
      <TradeInPreview />
      <WhyDlfPreview />
      <ReviewsSection background="dark" />
      <CitiesWeServe />
      <PageCTA />
    </>
  );
}
