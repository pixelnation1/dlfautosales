import { featuredVehicles } from "@/lib/data/inventory";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { VehicleCard } from "./VehicleCard";

export function FeaturedInventory() {
  return (
    <section id="inventory" className="bg-light-gray py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Inventory"
            title="Featured Vehicles"
            description="Hand-picked used cars in Emporia KS — each one inspected and ready for the road. More inventory arriving weekly."
          />
          <Button href="#contact" variant="secondary" className="shrink-0 self-start sm:self-auto">
            View All Inventory
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-text-dark/60">
          Sample inventory for preview — connect your DMS or inventory feed when
          ready. Prices and availability subject to change.
        </p>
      </div>
    </section>
  );
}
