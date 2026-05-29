import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function TradeInPreview() {
  return (
    <section className="border-y border-border-gray bg-white py-14 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Trade-In
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-dark sm:text-4xl">
            Trade In Your Vehicle in Emporia
          </h2>
          <p className="mt-3 text-lg text-text-dark/70">
            Get a fair trade-in value toward your next used car, truck, or SUV.
            DLF makes it easy to upgrade without the hassle.
          </p>
        </div>
        <Button href={ROUTES.tradeIn} size="lg" className="shrink-0">
          Get Trade-In Value
        </Button>
      </div>
    </section>
  );
}
