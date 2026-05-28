import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  "Bad credit & no credit welcome",
  "First-time buyers approved",
  "Fast same-day decisions",
  "Simple online application",
];

export function FinancingSection() {
  return (
    <section id="financing" className="relative overflow-hidden bg-dark py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Financing"
            title="Get Approved — Even With Challenging Credit"
            description="Auto financing in Emporia KS shouldn't be stressful. DLF Auto Sales works with multiple lenders to help you get behind the wheel — whether you're rebuilding credit, buying your first car, or need a fast approval."
            light
          />

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-10">
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-lg font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Looking for a used car dealership near me with real financing
              options? Start your application in minutes — no obligation, no
              pressure.
            </p>

            <Button href="#contact" size="lg" className="mt-8 w-full sm:w-auto">
              Start Financing Application
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
