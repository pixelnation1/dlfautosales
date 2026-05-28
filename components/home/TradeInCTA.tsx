import { Button } from "@/components/ui/Button";

export function TradeInCTA() {
  return (
    <section
      id="trade-in"
      className="border-y border-border-gray bg-light-gray py-14 sm:py-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-dark sm:text-4xl">
            Have a Vehicle to Trade?
          </h2>
          <p className="mt-3 text-lg text-text-dark/70">
            Get a fair trade-in value toward your next ride. Contact DLF Auto Sales
            today — we&apos;ll appraise your vehicle and help you upgrade with
            confidence.
          </p>
        </div>
        <Button href="#contact" size="lg" className="shrink-0">
          Get Trade-In Value
        </Button>
      </div>
    </section>
  );
}
