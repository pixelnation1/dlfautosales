import Image from "next/image";
import Link from "next/link";
import {
  formatPrice,
  getVehicleName,
  getVehiclePrimaryImage,
  type Vehicle,
} from "@/lib/data/inventory";
import type { Locale } from "@/lib/i18n/config";
import { getVehicleDetailPath } from "@/lib/i18n/paths";
import { routesFor } from "@/lib/i18n/routes";
import { formatMileageLocalized, getUiLabels } from "@/lib/i18n/ui";

type VehicleCardProps = {
  vehicle: Vehicle;
  locale?: Locale;
};

export function VehicleCard({ vehicle, locale = "en" }: VehicleCardProps) {
  const title = getVehicleName(vehicle);
  const detailHref = getVehicleDetailPath(vehicle.slug, locale);
  const routes = routesFor(locale);
  const ui = getUiLabels(locale);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-gray bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl">
      <Link
        href={detailHref}
        className="relative block aspect-[16/10] overflow-hidden bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        aria-label={`${ui.viewDetails}: ${title}`}
      >
        <Image
          src={getVehiclePrimaryImage(vehicle)}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
        <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {ui.onLot}
        </span>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-display text-lg font-bold uppercase leading-tight text-white sm:text-xl">
            {title}
          </p>
          <p className="mt-0.5 text-xs font-medium text-white/80">
            {formatMileageLocalized(vehicle.mileage, locale)}
          </p>
        </div>
      </Link>

      <div className="relative z-10 flex flex-1 flex-col p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-dark/50">
              {ui.ourPrice}
            </p>
            <p className="text-2xl font-bold text-dark">
              {formatPrice(vehicle.price)}
            </p>
          </div>
          <div className="rounded-lg bg-primary/10 px-3 py-2 text-right">
            <p className="text-[10px] font-bold uppercase tracking-wide text-primary">
              {ui.estPayment}
            </p>
            <p className="text-lg font-bold text-primary">
              ${vehicle.paymentEstimate}
              <span className="text-xs font-semibold">{ui.perMonth}</span>
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border-gray pt-4">
          <Link
            href={detailHref}
            className="flex items-center justify-center gap-1.5 rounded-lg bg-primary py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-primary-hover"
          >
            {ui.viewDetails}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={routes.financing}
            className="flex items-center justify-center rounded-lg border border-border-gray py-3 text-xs font-semibold uppercase tracking-wide text-text-dark transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary"
          >
            {ui.financing}
          </Link>
        </div>
      </div>
    </article>
  );
}
