"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FAQProps = {
  title?: string;
  description?: string;
  items: FAQItem[];
};

export function FAQ({
  title = "Frequently Asked Questions",
  description,
  items,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-light-gray py-14 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={title}
          description={description}
          align="center"
        />

        <div className="mt-10 divide-y divide-border-gray rounded-xl border border-border-gray bg-white">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  id={`faq-trigger-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-light-gray/50 sm:px-6"
                >
                  <span className="font-semibold text-dark">{item.question}</span>
                  <span
                    className={`mt-0.5 shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    ▼
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  hidden={!isOpen}
                  className="px-5 pb-4 sm:px-6"
                >
                  <p className="text-sm leading-relaxed text-text-dark/75">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
