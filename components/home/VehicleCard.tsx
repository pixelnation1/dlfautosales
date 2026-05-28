import Image from "next/image";
import Link from "next/link";
import {
  formatMileage,
  formatPrice,
  type Vehicle,
} from "@/lib/data/inventory";
import { Button } from "@/components/ui/Button";

type VehicleCardProps = {
  vehicle: Vehicle;
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const title = `${vehicle.year} ${vehicle.make} ${vehicle.model}${
    vehicle.trim ? ` ${vehicle.trim}` : ""
  }`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border-gray bg-white shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-light-gray">
        <Image
          src={vehicle.image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3 rounded bg-dark/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Featured
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold uppercase leading-tight text-dark">
          {title}
        </h3>
        <p className="mt-1 text-sm text-text-dark/60">
          {formatMileage(vehicle.mileage)}
        </p>

        <div className="mt-4 flex items-end justify-between gap-2 border-t border-border-gray pt-4">
          <div>
            <p className="text-2xl font-bold text-dark">
              {formatPrice(vehicle.price)}
            </p>
            <p className="text-sm text-text-dark/60">
              Est.{" "}
              <span className="font-semibold text-primary">
                ${vehicle.paymentEstimate}/mo
              </span>
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button
            href="#contact"
            size="sm"
            className="flex-1 text-center"
          >
            View Details
          </Button>
          <Link
            href="#financing"
            className="inline-flex flex-1 items-center justify-center rounded-md border border-border-gray px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-text-dark transition-colors hover:border-primary hover:text-primary"
          >
            Ask About Financing
          </Link>
        </div>
      </div>
    </article>
  );
}
