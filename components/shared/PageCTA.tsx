import { SITE, ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

type PageCTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageCTA({
  eyebrow = "Ready to Drive?",
  title = "Your Next Vehicle Is Waiting at DLF",
  description = "Browse our lot, get pre-approved in minutes, or call now — we'll help you find the right used car and the right payment.",
  primaryLabel = "View Inventory",
  primaryHref = ROUTES.inventory,
  secondaryLabel = "Get Approved Today",
  secondaryHref = ROUTES.financingApplication,
}: PageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-dark py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,6,19,0.2)_0%,transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">{description}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button href={primaryHref} size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} size="lg" variant="outline">
            {secondaryLabel}
          </Button>
        </div>

        <p className="mt-8 text-sm text-white/60">
          Or call us at{" "}
          <a
            href={SITE.phoneHref}
            className="font-bold text-white transition-colors hover:text-primary"
          >
            {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
