import Link from "next/link";
import { ROUTES, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const whyChooseItems = [
  {
    title: "Kind, No-Pressure Help",
    text: "Customers describe Carlos as kind, welcoming, and willing to go out of his way — whether you are ready to buy today or still comparing options.",
    proof: "Manny & Nayeli Escobar",
  },
  {
    title: "Quick to Communicate",
    text: "When you have questions about a vehicle, financing, or next steps, you get clear answers without the runaround.",
    proof: "Lucas Chituck",
  },
  {
    title: "Help Getting Into a Vehicle",
    text: "From test drives to financing, DLF focuses on real solutions — including helping you secure financing and find a vehicle that fits your budget.",
    proof: "Manny",
  },
  {
    title: "Willing to Negotiate",
    text: "Fair, straightforward deals matter here. Customers appreciate how easy it is to work through pricing and find terms that fit.",
    proof: "Valentina Fuentes",
  },
  {
    title: "Reliable, Affordable Inventory",
    text: "Shoppers find a strong variety of dependable used vehicles at prices that make sense for local budgets.",
    proof: "Mariana Cerda & Nayeli Escobar",
  },
  {
    title: "Local Emporia Dealership",
    text: "DLF is built for this community — not a corporate mega-lot. You deal with people who know Kansas drivers and stand behind the experience.",
    proof: "Lucas Chituck",
  },
] as const;

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <h2
      className={`mt-2 font-display text-2xl font-bold uppercase text-dark sm:text-3xl lg:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function AboutPageContent() {
  return (
    <>
      {/* A Local Dealership Built Around People */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionEyebrow>Emporia, Kansas</SectionEyebrow>
              <SectionTitle>A Local Dealership Built Around People</SectionTitle>
              <p className="mt-5 text-lg leading-relaxed text-text-dark/75">
                DLF Auto Sales is a locally owned used car dealership in Emporia,
                KS — built on relationships, not pressure. Customers come here for
                dependable vehicles, affordable pricing, and a team that actually
                listens.
              </p>
              <p className="mt-4 leading-relaxed text-text-dark/75">
                Whether you need your first car, an upgrade for the family, or a
                work truck that fits the budget, you will get straight answers and
                help finding the right match on the lot — with financing and
                trade-in options when you need them.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={ROUTES.inventory} size="md">
                  View Inventory
                </Button>
                <Button href={ROUTES.contact} variant="secondary" size="md">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-border-gray bg-light-gray p-8 sm:p-10">
              <p className="font-display text-lg font-bold uppercase text-dark">
                What shoppers tell us
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Welcoming, kind staff",
                  "Reliable variety of vehicles",
                  "Affordable pricing",
                  "Financing help available",
                  "Easy to negotiate",
                  "Spanish-speaking support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-text-dark/85"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-text-dark/55">
                Based on verified customer reviews at DLF Auto Sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Carlos */}
      <section className="border-y border-border-gray bg-dark py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-5xl font-extrabold text-primary lg:mx-0">
                C
              </div>
            </div>
            <div className="lg:col-span-8">
              <SectionEyebrow>Meet the Owner</SectionEyebrow>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Meet Carlos
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80">
                Carlos runs DLF Auto Sales with a hands-on approach — the same one
                customers describe in their reviews: kind, quick to communicate, and
                focused on helping you get into the right vehicle.
              </p>
              <p className="mt-4 leading-relaxed text-white/70">
                He will walk you through the lot, set up a test drive, explain
                financing options, and work with you on pricing without the pressure
                you might expect at a big chain store. DLF is a growing local
                business, and Carlos takes pride in earning trust one customer at a
                time.
              </p>
              <blockquote className="mt-6 border-l-4 border-primary pl-5 text-white/90">
                <p className="text-base italic leading-relaxed">
                  &ldquo;Carlos was incredibly kind and always quick to communicate.
                  I would absolutely recommend DLF Auto Sales for a used car in
                  Emporia.&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold text-primary">
                  — Lucas Chituck, verified customer
                </footer>
              </blockquote>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={ROUTES.contact} size="md">
                  Talk to Carlos
                </Button>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/80 px-8 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-dark"
                >
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Choose DLF */}
      <section className="bg-light-gray py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Proof From Real Reviews</SectionEyebrow>
            <SectionTitle>Why Customers Choose DLF</SectionTitle>
            <p className="mt-4 text-lg leading-relaxed text-text-dark/70">
              These are the reasons Emporia drivers keep recommending DLF Auto
              Sales — in their own words.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-border-gray bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-lg font-bold uppercase text-dark">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-dark/75">
                  {item.text}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.proof}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Help Without Judgment */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <p className="text-sm font-semibold text-dark">
                  Customers mention financing help directly:
                </p>
                <blockquote className="mt-4 text-base leading-relaxed text-text-dark/80">
                  &ldquo;He can even secure financing for your purchase and is also
                  willing to negotiate and help you get into a vehicle.&rdquo;
                </blockquote>
                <p className="mt-3 text-sm font-semibold text-primary">— Manny</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionEyebrow>Financing</SectionEyebrow>
              <SectionTitle>Financing Help Without Judgment</SectionTitle>
              <p className="mt-5 leading-relaxed text-text-dark/75">
                Not everyone walks in with perfect credit — and that should not
                stop you from getting a dependable vehicle. DLF Auto Sales works
                with buyers who need flexible options, clear explanations, and a
                team that treats your situation with respect.
              </p>
              <p className="mt-4 leading-relaxed text-text-dark/75">
                Get pre-qualified, ask questions about payments and terms, and
                shop inventory knowing financing support is part of the process —
                not an afterthought.
              </p>
              <Button href={ROUTES.financingPreQualify} size="lg" className="mt-8">
                Get Approved
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* English & Spanish Support */}
      <section className="border-t border-border-gray bg-dark py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Serving Our Community</SectionEyebrow>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase text-white sm:text-3xl lg:text-4xl">
              English &amp; Spanish Support
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              DLF Auto Sales welcomes English- and Spanish-speaking customers.
              Carlos and the team make it easier for more families in Emporia and
              nearby communities to shop, ask questions, and feel comfortable
              through every step.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <blockquote className="text-base leading-relaxed text-white/85">
              &ldquo;Carlos and his team are always willing to help anyone out. They
              also speak Spanish.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-primary">
              — Mariana Cerda, verified customer
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={ROUTES.contact} size="lg">
              Contact Us
            </Button>
            <Button href={ROUTES.inventory} variant="outline" size="lg">
              View Inventory
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,6,19,0.22)_0%,transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Ready When You Are
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
          Visit DLF Auto Sales in Emporia
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
          Browse inventory online, get approved for financing, or reach out to
          Carlos and the team — we are here to help you find the right used
          vehicle at the right price.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button href={ROUTES.inventory} size="lg" className="w-full sm:w-auto">
            View Inventory
          </Button>
          <Button
            href={ROUTES.financingPreQualify}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            Get Approved
          </Button>
          <Link
            href={ROUTES.contact}
            className="inline-flex w-full items-center justify-center rounded-md border-2 border-white/30 bg-white/10 px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/20 sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
        <p className="mt-8 text-sm text-white/55">
          {SITE.address} ·{" "}
          <a href={SITE.phoneHref} className="font-semibold text-white hover:text-primary">
            {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
