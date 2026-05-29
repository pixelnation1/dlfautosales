import type { Review } from "@/lib/data/reviews";
import { StarRating } from "./StarRating";

type ReviewCardProps = {
  review: Review;
  className?: string;
};

export function ReviewCard({ review, className = "" }: ReviewCardProps) {
  return (
    <article
      className={`flex h-full min-w-[280px] flex-col rounded-2xl border border-border-gray bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-lg sm:min-w-0 ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <StarRating rating={review.rating} size="md" />
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
          {review.rating}.0
        </span>
      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text-dark/85">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <footer className="mt-6 border-t border-border-gray pt-4">
        <p className="font-semibold text-dark">{review.name}</p>
        {review.vehiclePurchased && (
          <p className="mt-0.5 text-xs font-medium text-primary">
            Purchased: {review.vehiclePurchased}
          </p>
        )}
        <p className="mt-1 text-xs text-text-dark/50">{review.dateLabel}</p>
      </footer>
    </article>
  );
}
