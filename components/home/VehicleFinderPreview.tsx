import { ROUTES } from "@/lib/constants";
import { VEHICLE_FINDER_TRUST_POINTS } from "@/lib/vehicle-finder/constants";
import { Button } from "@/components/ui/Button";

export function VehicleFinderPreview() {
  return (
    <section className="relative overflow-hidden bg-dark py-14 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(225,6,19,0.2)_0%,transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Vehicle Finder
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
              Tell Us What You&apos;re Looking For
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Don&apos;t see the right vehicle? Let our team help you find it.
              Share your budget, payment goal, and preferences — we&apos;ll reach
              out when we have a match.
            </p>
            <Button href={ROUTES.findMyCar} size="lg" className="mt-8">
              Start My Search
            </Button>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {VEHICLE_FINDER_TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="text-sm font-semibold text-white">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
