import { featuredVehicles } from "@/lib/data/inventory";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FinancingBanner } from "./FinancingBanner";
import { VehicleCard } from "./VehicleCard";

export function FeaturedInventory() {
  return (
    <section id="inventory" className="bg-light-gray py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Inventory"
            title="Featured on Our Lot"
            description="Quality used cars in Emporia KS — inspected, priced right, and ready to finance. New vehicles arriving weekly."
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <Button href="#contact" size="md" variant="secondary" className="w-full sm:w-auto">
              Request a Vehicle
            </Button>
            <Button href="#financing" size="md" className="w-full sm:w-auto">
              Get Pre-Approved
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-dark/50">
          Prices and monthly estimates are subject to credit approval. Contact us
          for the most current availability.
        </p>
      </div>

      <div className="mt-12">
        <FinancingBanner variant="compact" />
      </div>
    </section>
  );
}
