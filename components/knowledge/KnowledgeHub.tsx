"use client";

import { useMemo, useState } from "react";
import { ARTICLE_CATEGORIES } from "@/lib/knowledge/types";
import { allArticles } from "@/lib/knowledge/articles";
import { ArticleCard } from "./ArticleCard";

const categories = ["All", ...ARTICLE_CATEGORIES] as const;

export function KnowledgeHub() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allArticles.filter((article) => {
      const matchesCategory =
        category === "All" || article.category === category;
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="block flex-1 lg:max-w-md">
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-md border border-border-gray bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </label>
        <p className="text-sm text-text-dark/60">
          {filtered.length} article{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <div
        className="mt-6 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter by category"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={category === cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
              category === cat
                ? "bg-primary text-white"
                : "border border-border-gray bg-white text-text-dark hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-text-dark/60">
          No articles match your search. Try another keyword or category.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
