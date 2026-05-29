import { allVehicles } from "@/lib/data/inventory";
import type { Locale } from "@/lib/i18n/config";
import { VehicleCard } from "./VehicleCard";

type VehicleGridProps = {
  limit?: number;
  locale?: Locale;
};

export function VehicleGrid({ limit, locale = "en" }: VehicleGridProps) {
  const vehicles = limit ? allVehicles.slice(0, limit) : allVehicles;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} locale={locale} />
      ))}
    </div>
  );
}
