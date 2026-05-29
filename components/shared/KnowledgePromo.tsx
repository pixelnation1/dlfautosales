import Link from "next/link";
import { ROUTES } from "@/lib/constants";

type KnowledgePromoProps = {
  title?: string;
  description?: string;
};

export function KnowledgePromo({
  title = "Car Buying Tips",
  description = "Read free guides on financing, trade-ins, credit, and shopping for used cars in Kansas — written by your local Emporia dealership.",
}: KnowledgePromoProps) {
  return (
    <aside className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
        Knowledge Center
      </p>
      <h3 className="mt-2 font-display text-xl font-bold uppercase text-dark sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-dark/75 sm:text-base">
        {description}
      </p>
      <Link
        href={ROUTES.knowledge}
        className="mt-5 inline-flex text-sm font-bold uppercase tracking-wide text-primary hover:underline"
      >
        Browse car buying tips →
      </Link>
    </aside>
  );
}
