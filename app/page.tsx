import { Hero } from "@/components/home/Hero";
import { FeaturedInventoryPreview } from "@/components/home/FeaturedInventoryPreview";
import { FinancingPreview } from "@/components/home/FinancingPreview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { TradeInPreview } from "@/components/home/TradeInPreview";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { PageCTA } from "@/components/shared/PageCTA";
import { CitiesWeServe } from "@/components/home/CitiesWeServe";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedInventoryPreview />
      <FeaturedArticles />
      <FinancingPreview />
      <WhyChoose />
      <TradeInPreview />
      <ReviewsSection background="dark" />
      <CitiesWeServe />
      <PageCTA />
    </>
  );
}
