import { Button } from "@/components/ui/Button";

const trustBadges = [
  { label: "Financing Available", icon: "✓" },
  { label: "Trade-Ins Welcome", icon: "✓" },
  { label: "Local Dealer", icon: "✓" },
  { label: "Quality Vehicles", icon: "✓" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-dark pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(225,6,19,0.08)_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            Emporia, Kansas · Used Car Dealer
          </p>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Reliable Used Cars in{" "}
            <span className="text-primary">Emporia, KS</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Quality vehicles, easy financing, and a local dealership that treats
            people right. Shop used cars in Emporia KS with confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#inventory" size="lg">
              View Inventory
            </Button>
            <Button href="#financing" variant="outline" size="lg">
              Get Approved
            </Button>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {trustBadges.map((badge) => (
            <li
              key={badge.label}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                aria-hidden
              >
                {badge.icon}
              </span>
              <span className="text-sm font-semibold text-white">
                {badge.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
