import { Hero } from "@/components/home/Hero";
import { FeaturedInventoryPreview } from "@/components/home/FeaturedInventoryPreview";
import { FinancingPreview } from "@/components/home/FinancingPreview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { TradeInPreview } from "@/components/home/TradeInPreview";
import { Reviews } from "@/components/home/Reviews";
import { PageCTA } from "@/components/shared/PageCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedInventoryPreview />
      <FinancingPreview />
      <WhyChoose />
      <TradeInPreview />
      <Reviews />
      <PageCTA />
    </>
  );
}
