import { allVehicles } from "@/lib/data/inventory";
import { VehicleCard } from "./VehicleCard";

type VehicleGridProps = {
  limit?: number;
};

export function VehicleGrid({ limit }: VehicleGridProps) {
  const vehicles = limit ? allVehicles.slice(0, limit) : allVehicles;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
