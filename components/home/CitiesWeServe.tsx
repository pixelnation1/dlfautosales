import Link from "next/link";
import {
  serviceAreas,
  getServiceAreaPath,
  type ServiceAreaSlug,
} from "@/lib/data/service-areas";
import { Button } from "@/components/ui/Button";

export function CitiesWeServe() {
  return (
    <section className="border-t border-border-gray bg-dark py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Service Areas
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
            Cities We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            DLF Auto Sales serves Emporia and communities across Kansas with used
            cars, trucks, SUVs, financing, and trade-ins. Find your local page below.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <li key={area.slug}>
              <Link
                href={getServiceAreaPath(area.slug as ServiceAreaSlug)}
                className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                {area.city}, KS
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button href="/areas-we-serve" variant="outline" size="lg">
            View All Service Areas
          </Button>
        </div>
      </div>
    </section>
  );
}
