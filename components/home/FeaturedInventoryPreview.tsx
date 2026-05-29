import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { VehicleGrid } from "@/components/inventory/VehicleGrid";

export function FeaturedInventoryPreview() {
  return (
    <section className="bg-light-gray py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Inventory"
            title="Featured on Our Lot"
            description="Quality used cars, trucks, and SUVs near Emporia — inspected, priced right, and ready to finance."
          />
          <Button href={ROUTES.inventory} variant="secondary" className="shrink-0 self-start lg:self-auto">
            View All Inventory
          </Button>
        </div>

        <div className="mt-12">
          <VehicleGrid limit={3} />
        </div>

        <p className="mt-8 text-center">
          <Link
            href={ROUTES.inventory}
            className="text-sm font-bold uppercase tracking-wide text-primary hover:underline"
          >
            See full inventory →
          </Link>
        </p>
      </div>
    </section>
  );
}
