import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export default function VehicleNotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-dark px-4 pt-24 text-center sm:pt-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,6,19,0.15)_0%,transparent_65%)]"
        aria-hidden
      />
      <div className="relative max-w-lg">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Inventory
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase text-white sm:text-5xl">
          Vehicle Not Found
        </h1>
        <p className="mt-4 text-lg text-white/70">
          This vehicle may have sold or the link is incorrect. Browse our current
          used cars, trucks, and SUVs in Emporia, KS.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href={ROUTES.inventory} size="lg">
            View Inventory
          </Button>
          <Button href={ROUTES.contact} variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
        <p className="mt-8 text-sm text-white/50">
          <Link href={ROUTES.home} className="hover:text-primary">
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
