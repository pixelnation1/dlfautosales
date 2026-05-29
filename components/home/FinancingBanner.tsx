import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

type FinancingBannerProps = {
  variant?: "full" | "compact";
};

export function FinancingBanner({ variant = "full" }: FinancingBannerProps) {
  if (variant === "compact") {
    return (
      <div className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-white sm:text-left sm:text-base">
            <span className="font-display uppercase tracking-wide">
              Drive today —
            </span>{" "}
            bad credit, no credit &amp; first-time buyers welcome.
          </p>
          <Link
            href={ROUTES.financingPreQualify}
            className="shrink-0 rounded-md bg-dark px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-dark/90"
          >
            Apply Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-primary" aria-label="Financing promotion">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.15)_0%,transparent_50%,rgba(5,7,13,0.15)_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              Auto Financing · Emporia, KS
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
              Get Behind the Wheel — Apply in Minutes
            </h2>
            <p className="mt-2 text-sm text-white/90 sm:text-base">
              Same-day approvals available. We work with multiple lenders so more
              Emporia drivers get approved.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href={ROUTES.financingPreQualify}
              size="lg"
              className="w-full bg-dark text-white shadow-none hover:bg-[#0a0d14] sm:w-auto"
            >
              Start Application
            </Button>
            <Link
              href={ROUTES.contact}
              className="inline-flex w-full items-center justify-center rounded-md border-2 border-white px-8 py-4 text-center text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-primary sm:w-auto"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
