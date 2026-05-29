import { SectionHeading } from "@/components/ui/SectionHeading";

const trustPillars = [
  {
    title: "Locally Owned",
    description:
      "DLF Auto Sales is rooted in Emporia — not a corporate chain. Real people, real accountability, right here in Kansas.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
  },
  {
    title: "Trade-Ins Welcome",
    description:
      "Bring your current vehicle — we'll work toward a fair trade-in value and put it toward your next ride.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    ),
  },
  {
    title: "Easy Approvals",
    description:
      "Bad credit, no credit, or first-time buyer? Our financing team fights to get you approved fast.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Quality Used Vehicles",
    description:
      "Every car on our lot is hand-selected for reliability and value — inspected and ready to drive.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 13l4 4L19 7"
      />
    ),
  },
  {
    title: "Serving Emporia & Beyond",
    description:
      "Proud to serve Emporia, Lyon County, and nearby communities including Burlington, Ottawa, and Council Grove.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
    ),
  },
];

const serviceAreas = [
  "Emporia",
  "Burlington",
  "Ottawa",
  "Council Grove",
  "Lyon County",
  "Flint Hills",
];

export function TrustSection() {
  return (
    <section className="bg-dark py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Drivers Choose DLF"
          title="Built for Emporia. Built for You."
          description="A premium used car experience without the pressure — local ownership, honest deals, and financing that actually works."
          light
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary/40 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  {pillar.icon}
                </svg>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Proudly Serving
          </p>
          <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="text-sm font-semibold text-white/90"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
