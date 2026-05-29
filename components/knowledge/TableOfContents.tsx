"use client";

import type { ArticleSection } from "@/lib/knowledge/types";

type TableOfContentsProps = {
  sections: ArticleSection[];
};

export function TableOfContents({ sections }: TableOfContentsProps) {
  const headings = sections.filter((s) => s.level !== 3);

  if (headings.length < 2) return null;

  return (
    <nav
      className="rounded-xl border border-border-gray bg-light-gray/80 p-5"
      aria-label="Table of contents"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
        On This Page
      </p>
      <ol className="mt-3 space-y-2">
        {headings.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-sm font-medium text-text-dark/80 transition-colors hover:text-primary"
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
