import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,6,19,0.2)_0%,transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Ready to Drive?
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
          Your Next Vehicle Is Waiting at DLF
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
          Browse our lot, get pre-approved in minutes, or call now — we&apos;ll
          help you find the right used car and the right payment.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button href="#inventory" size="lg">
            View Inventory
          </Button>
          <Button href="#financing" size="lg" variant="outline">
            Get Approved Today
          </Button>
        </div>

        <p className="mt-8 text-sm text-white/60">
          Or call us now at{" "}
          <a
            href={SITE.phoneHref}
            className="font-bold text-white hover:text-primary transition-colors"
          >
            {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
