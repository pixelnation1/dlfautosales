"use client";

import { useRef, useState } from "react";
import type { Review } from "@/lib/data/reviews";
import { ReviewCard } from "./ReviewCard";

type ReviewsCarouselProps = {
  reviews: Review[];
};

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToIndex(index: number) {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIndex(index);
  }

  function handleScroll() {
    const container = scrollRef.current;
    if (!container || container.children.length === 0) return;
    const cardWidth = (container.children[0] as HTMLElement).offsetWidth + 16;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, reviews.length - 1));
  }

  return (
    <div className="md:hidden">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide"
        aria-label="Customer reviews carousel"
      >
        {reviews.map((review) => (
          <div key={review.id} className="w-[85vw] max-w-sm shrink-0 snap-start">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {reviews.map((review, index) => (
          <button
            key={review.id}
            type="button"
            aria-label={`Go to review ${index + 1}`}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex
                ? "w-6 bg-primary"
                : "w-2 bg-border-gray hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
