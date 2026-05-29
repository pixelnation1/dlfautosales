import { Hero } from "@/components/home/Hero";
import { FinancingBanner } from "@/components/home/FinancingBanner";
import { FeaturedInventory } from "@/components/home/FeaturedInventory";
import { TrustSection } from "@/components/home/TrustSection";
import { FinancingSection } from "@/components/home/FinancingSection";
import { WhyChoose } from "@/components/home/WhyChoose";
import { TradeInCTA } from "@/components/home/TradeInCTA";
import { Reviews } from "@/components/home/Reviews";
import { Contact } from "@/components/home/Contact";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FinancingBanner />
      <FeaturedInventory />
      <TrustSection />
      <FinancingSection />
      <WhyChoose />
      <TradeInCTA />
      <FinancingBanner variant="compact" />
      <Reviews />
      <Contact />
      <FinalCTA />
    </>
  );
}
