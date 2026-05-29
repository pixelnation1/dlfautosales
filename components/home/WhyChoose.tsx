import { ROUTES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const reasons = [
  {
    title: "No-Pressure Buying",
    description:
      "Ask every question. Take a test drive. Walk away if it's not right. We earn your business — we don't trap you into a deal.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear numbers upfront. No hidden fees, no bait-and-switch. You know what you're paying before you sign.",
  },
  {
    title: "Financing That Fits",
    description:
      "Our team shops multiple lenders to find a payment that works for your budget — not theirs.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-light-gray py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="The DLF Difference"
            title="Why Choose DLF Auto Sales"
            description="A locally owned used car dealership in Emporia KS — premium service without the premium attitude. Serving Emporia and nearby Kansas communities."
          />

          <div className="mt-10 space-y-4 lg:mt-0">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="flex gap-4 rounded-xl border border-border-gray bg-white p-5 transition-shadow hover:shadow-md"
              >
                <span className="font-display text-3xl font-extrabold leading-none text-primary/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-dark">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-dark/70">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
            <Button href={ROUTES.about} size="md" className="mt-2 w-full sm:w-auto">
              About DLF Auto Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
