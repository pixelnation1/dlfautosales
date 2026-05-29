import { SITE, ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const trustBadges = [
  "Financing Available",
  "Trade-Ins Welcome",
  "Locally Owned",
  "Quality Vehicles",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pb-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary/25 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0)_0%,rgba(5,7,13,0.9)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-primary/50 bg-primary/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Emporia&apos;s Used Car Dealer
              </span>
              <span className="hidden text-sm text-white/50 sm:inline">
                {SITE.address}
              </span>
            </div>

            <h1 className="font-display text-[2.25rem] font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Used Cars in Emporia, KS
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              DLF Auto Sales is your local used car dealership in Emporia KS —
              hand-picked cars, trucks, and SUVs with fast auto financing and a
              no-pressure buying experience.{" "}
              <strong className="font-semibold text-white">
                Drive home today.
              </strong>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={ROUTES.inventory} size="lg" className="w-full sm:w-auto">
                View Inventory
              </Button>
              <Button
                href={ROUTES.financing}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Approved
              </Button>
            </div>

            <a
              href={SITE.phoneHref}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-primary sm:text-base"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              Call {SITE.phone}
            </a>
          </div>

          <div className="mt-10 lg:col-span-4 lg:mt-0">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                This Week at DLF
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Same-day financing decisions",
                  "Trade-ins accepted on the spot",
                  "New arrivals added weekly",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button href={ROUTES.financingPreQualify} size="sm" className="mt-5 w-full">
                Check Your Approval
              </Button>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {trustBadges.map((label) => (
            <li
              key={label}
              className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-white sm:text-sm"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
