import Link from "next/link";
import {
  formatMileage,
  formatPrice,
  getSimilarVehicles,
  getVehicleName,
  type Vehicle,
} from "@/lib/data/inventory";
import { ROUTES, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { VehicleGallery } from "./VehicleGallery";
import { VehicleCard } from "./VehicleCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { AskAboutVehicleButton } from "@/components/leads/AskAboutVehicleButton";
import { PageCTA } from "@/components/shared/PageCTA";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { PaymentCalculator } from "@/components/PaymentCalculator";
import { FinancingPreQualificationForm } from "@/components/forms/FinancingPreQualificationForm";
import { FINANCING_PRE_QUALIFY_HASH } from "@/lib/financing/constants";

type VehicleDetailContentProps = {
  vehicle: Vehicle;
};

export function VehicleDetailContent({ vehicle }: VehicleDetailContentProps) {
  const title = getVehicleName(vehicle);
  const similar = getSimilarVehicles(vehicle);

  const specs = [
    { label: "Year", value: String(vehicle.year) },
    { label: "Make", value: vehicle.make },
    { label: "Model", value: vehicle.model },
    { label: "Trim", value: vehicle.trim },
    { label: "Body Style", value: vehicle.bodyStyle },
    { label: "Mileage", value: formatMileage(vehicle.mileage) },
    { label: "Exterior", value: vehicle.exteriorColor },
    { label: "Interior", value: vehicle.interiorColor },
    { label: "Transmission", value: vehicle.transmission },
    { label: "Drivetrain", value: vehicle.drivetrain },
    { label: "Fuel Type", value: vehicle.fuelType },
    { label: "Stock #", value: vehicle.stockNumber },
    { label: "VIN", value: vehicle.vin },
  ];

  return (
    <>
      <section className="bg-light-gray pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-text-dark/60" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={ROUTES.home} className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={ROUTES.inventory} className="hover:text-primary">
                  Inventory
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-dark">{title}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <VehicleGallery vehicle={vehicle} />
            </div>

            <div className="lg:col-span-2">
              <h1 className="font-display text-2xl font-extrabold uppercase leading-tight text-dark sm:text-3xl">
                {title}
              </h1>
              <p className="mt-1 text-sm font-medium text-text-dark/60">
                {vehicle.bodyStyle} · {formatMileage(vehicle.mileage)}
              </p>

              <div className="mt-6 rounded-xl border border-border-gray bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-text-dark/50">
                  Our Price
                </p>
                <p className="mt-1 text-4xl font-bold text-dark">
                  {formatPrice(vehicle.price)}
                </p>
                <p className="mt-2 text-sm text-text-dark/70">
                  List price before down payment &amp; trade-in
                </p>
              </div>

              <PaymentCalculator
                className="mt-4"
                initialVehiclePrice={vehicle.price}
                vehicleName={title}
                financingHref={FINANCING_PRE_QUALIFY_HASH}
              />

              <div className="mt-4 grid gap-2">
                <AskAboutVehicleButton vehicleName={title} variant="primary" />
                <Button href={FINANCING_PRE_QUALIFY_HASH} size="lg" className="w-full">
                  Get Pre-Qualified
                </Button>
                <Button href={ROUTES.tradeIn} variant="secondary" size="lg" className="w-full">
                  Value Your Trade-In
                </Button>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex w-full items-center justify-center rounded-md border-2 border-dark bg-dark px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-dark/90"
                >
                  Call {SITE.phone}
                </a>
              </div>

              <p className="mt-4 text-center text-xs text-text-dark/50">
                Available at DLF Auto Sales · Emporia, KS
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border-gray bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold uppercase text-dark sm:text-2xl">
            Key Specifications
          </h2>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg border border-border-gray bg-light-gray/50 px-4 py-3"
              >
                <dt className="text-xs font-bold uppercase tracking-wide text-text-dark/50">
                  {spec.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-dark">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-light-gray py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-bold uppercase text-dark sm:text-2xl">
                Features &amp; Equipment
              </h2>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {vehicle.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-text-dark/80"
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 font-display text-xl font-bold uppercase text-dark sm:text-2xl">
                About This Vehicle
              </h2>
              <p className="mt-4 leading-relaxed text-text-dark/75">
                {vehicle.description}
              </p>
            </div>

            <div className="space-y-6">
              <FinancingPreQualificationForm
                variant="compact"
                defaultVehicle={title}
                source="vehicle-detail"
              />
              <div className="rounded-xl border border-border-gray bg-white p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold uppercase text-dark">
                  Inquire About This Vehicle
                </h2>
                <p className="mt-2 text-sm text-text-dark/70">
                  Use the quick form for a fast response, or send a detailed message
                  below.
                </p>
                <div className="mt-4">
                  <AskAboutVehicleButton vehicleName={title} />
                </div>
                <div className="mt-8 border-t border-border-gray pt-8">
                  <ContactForm
                    defaultVehicle={title}
                    title="Request More Info"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="border-t border-border-gray bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-2xl font-bold uppercase text-dark">
                Similar Vehicles
              </h2>
              <Link
                href={ROUTES.inventory}
                className="text-sm font-bold uppercase tracking-wide text-primary hover:underline"
              >
                View all inventory →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((v) => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ReviewsSection background="light-gray" limit={3} />

      <PageCTA
        title={`Ready to Drive This ${vehicle.make}?`}
        description={`Schedule a test drive or get pre-approved for this ${vehicle.year} ${vehicle.make} ${vehicle.model} at DLF Auto Sales in Emporia, KS.`}
        primaryLabel="Get Pre-Approved"
        primaryHref={FINANCING_PRE_QUALIFY_HASH}
        secondaryLabel="Browse More Vehicles"
        secondaryHref={ROUTES.inventory}
      />
    </>
  );
}
