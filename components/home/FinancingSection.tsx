import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  "Bad credit & no credit — we still fight for your approval",
  "First-time buyers welcome",
  "Same-day decisions on most applications",
  "Multiple lenders — more options for you",
  "Low down payment programs available",
];

const stats = [
  { value: "Fast", label: "Application process" },
  { value: "Local", label: "Emporia-based team" },
  { value: "Flexible", label: "Payment options" },
];

export function FinancingSection() {
  return (
    <section id="financing" className="relative overflow-hidden bg-dark py-14 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Financing"
              title="Auto Financing in Emporia — Built for Real Life"
              description="Your credit history doesn't define your options. DLF Auto Sales partners with trusted lenders to deliver auto financing in Emporia KS that works — whether you're rebuilding, starting out, or need a fast yes."
              light
            />

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-4 text-center"
                >
                  <p className="font-display text-xl font-bold uppercase text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase leading-tight tracking-wide text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-white/10 to-white/5 p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              What You Get
            </p>
            <ul className="mt-5 space-y-3.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-base font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Searching for a used car dealership near me with financing that
              actually delivers? Start below — no obligation, no runaround.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg" className="w-full sm:flex-1">
                Start Application
              </Button>
              <a
                href={SITE.phoneHref}
                className="inline-flex w-full items-center justify-center rounded-md border border-white/30 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10 sm:flex-1"
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
