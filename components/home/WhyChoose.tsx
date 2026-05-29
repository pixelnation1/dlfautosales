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
    <section id="about" className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="The DLF Difference"
            title="A Better Way to Buy Used"
            description="We're not the biggest lot in Kansas — and that's the point. DLF Auto Sales gives you the attention, honesty, and financing support you deserve."
          />

          <div className="mt-10 space-y-4 lg:mt-0">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="flex gap-4 rounded-xl border border-border-gray p-5 transition-shadow hover:shadow-md"
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
            <Button href="#contact" size="md" className="mt-2 w-full sm:w-auto">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
