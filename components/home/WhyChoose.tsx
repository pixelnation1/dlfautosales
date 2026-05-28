import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Local Dealership",
    description:
      "Family-owned and rooted in Emporia. When you buy from DLF, you're supporting your community — not a corporate lot.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
    ),
  },
  {
    title: "No-Pressure Buying",
    description:
      "Take your time, ask questions, and drive away only when you're ready. We earn trust — we don't push sales.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Hand-Picked Inventory",
    description:
      "Every vehicle on our lot is selected for reliability and value — quality used cars in Emporia KS you can count on.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    ),
  },
  {
    title: "Trade-Ins Welcome",
    description:
      "Upgrade without the hassle. We'll give you a fair trade-in value toward your next vehicle.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    ),
  },
  {
    title: "Customer-First Experience",
    description:
      "From financing to follow-up, we're here for you after the sale. That's how a real used car dealership near me should operate.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
];

export function WhyChoose() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why DLF"
          title="Why Choose DLF Auto Sales"
          description="Premium service without the premium attitude. We're the Emporia used car dealer built for everyday drivers."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`rounded-xl border border-border-gray p-6 transition-shadow hover:shadow-lg ${
                i === reasons.length - 1 && reasons.length % 3 !== 0
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  {reason.icon}
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold uppercase text-dark">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dark/70">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
