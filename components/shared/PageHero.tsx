import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  h1: string;
  subtitle: string;
  eyebrow?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  h1,
  subtitle,
  eyebrow,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-dark pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0)_0%,rgba(5,7,13,0.85)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {h1}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {subtitle}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryCta && (
              <Button href={primaryCta.href} size="lg" className="w-full sm:w-auto">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
