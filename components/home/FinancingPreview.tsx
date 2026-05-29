import { ROUTES, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  "Bad credit & no credit welcome",
  "First-time buyers approved",
  "Same-day decisions",
  "Multiple lender options",
];

export function FinancingPreview() {
  return (
    <section className="relative overflow-hidden bg-dark py-14 sm:py-20">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Financing"
            title="Auto Financing in Emporia, KS"
            description="Get approved at a used car dealership in Emporia KS that works with your situation — not against it."
            light
          />
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white" aria-hidden>
                    ✓
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={ROUTES.financing} size="md" className="flex-1">
                Learn About Financing
              </Button>
              <a
                href={SITE.phoneHref}
                className="inline-flex flex-1 items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
              >
                Call to Apply
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
