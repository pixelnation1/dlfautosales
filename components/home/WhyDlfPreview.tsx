import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function WhyDlfPreview() {
  return (
    <section className="border-b border-border-gray bg-white py-12 sm:py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why DLF</p>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase text-dark sm:text-3xl">
            Why Buy From a Local Emporia Dealer?
          </h2>
          <p className="mt-3 text-text-dark/70">
            Financing help, trade-ins, Spanish-speaking support, and reviews that mention
            Carlos by name — see why drivers choose DLF Auto Sales.
          </p>
        </div>
        <Button href={ROUTES.whyDlf} size="lg" className="shrink-0">
          Why Buy From DLF
        </Button>
      </div>
    </section>
  );
}
