import { Hero } from "@/components/home/Hero";
import { FeaturedInventory } from "@/components/home/FeaturedInventory";
import { FinancingSection } from "@/components/home/FinancingSection";
import { WhyChoose } from "@/components/home/WhyChoose";
import { TradeInCTA } from "@/components/home/TradeInCTA";
import { Reviews } from "@/components/home/Reviews";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedInventory />
      <FinancingSection />
      <WhyChoose />
      <TradeInCTA />
      <Reviews />
      <Contact />
    </>
  );
}
