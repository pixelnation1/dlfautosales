import Link from "next/link";
import type { ArticleSection } from "@/lib/knowledge/types";
import { ROUTES } from "@/lib/constants";

type ArticleBodyProps = {
  sections: ArticleSection[];
};

export function ArticleBody({ sections }: ArticleBodyProps) {
  return (
    <div className="prose-dlf space-y-10">
      {sections.map((section) => {
        const Tag = section.level === 3 ? "h3" : "h2";
        return (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <Tag
              className={
                section.level === 3
                  ? "font-display text-xl font-bold uppercase text-dark"
                  : "font-display text-2xl font-bold uppercase text-dark"
              }
            >
              {section.heading}
            </Tag>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-4 text-base leading-relaxed text-text-dark/80"
              >
                {renderParagraphWithLinks(paragraph)}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-text-dark/80">
                {section.bullets.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
      <aside className="rounded-xl border border-primary/20 bg-primary/5 p-6">
        <p className="text-sm font-semibold text-dark">Ready to take the next step?</p>
        <p className="mt-2 text-sm text-text-dark/70">
          Browse our inventory, explore financing, or contact DLF Auto Sales in Emporia.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={ROUTES.inventory}
            className="text-sm font-bold uppercase tracking-wide text-primary hover:underline"
          >
            Inventory →
          </Link>
          <Link
            href={ROUTES.financing}
            className="text-sm font-bold uppercase tracking-wide text-primary hover:underline"
          >
            Financing →
          </Link>
          <Link
            href={ROUTES.tradeIn}
            className="text-sm font-bold uppercase tracking-wide text-primary hover:underline"
          >
            Trade-In →
          </Link>
          <Link
            href={ROUTES.contact}
            className="text-sm font-bold uppercase tracking-wide text-primary hover:underline"
          >
            Contact →
          </Link>
        </div>
      </aside>
    </div>
  );
}

function renderParagraphWithLinks(text: string) {
  const parts = text.split(/(DLF Auto Sales|inventory|financing|trade-in)/gi);
  return parts.map((part, i) => {
    const lower = part.toLowerCase();
    if (lower === "dlf auto sales") {
      return (
        <Link key={i} href={ROUTES.contact} className="font-semibold text-primary hover:underline">
          {part}
        </Link>
      );
    }
    if (lower === "inventory") {
      return (
        <Link key={i} href={ROUTES.inventory} className="font-semibold text-primary hover:underline">
          {part}
        </Link>
      );
    }
    if (lower === "financing") {
      return (
        <Link key={i} href={ROUTES.financing} className="font-semibold text-primary hover:underline">
          {part}
        </Link>
      );
    }
    if (lower === "trade-in") {
      return (
        <Link key={i} href={ROUTES.tradeIn} className="font-semibold text-primary hover:underline">
          {part}
        </Link>
      );
    }
    return part;
  });
}
