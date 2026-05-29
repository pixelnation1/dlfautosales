import { getReviewerInitials, type Review } from "@/lib/data/reviews";
import { StarRating } from "./StarRating";

type ReviewCardProps = {
  review: Review;
  className?: string;
};

/** Google-inspired review card with avatar, stars, and quote */
export function ReviewCard({ review, className = "" }: ReviewCardProps) {
  const initials = getReviewerInitials(review.name);

  return (
    <article
      className={`flex h-full min-w-[300px] flex-col rounded-2xl border border-border-gray bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl sm:min-w-0 sm:p-6 ${className}`}
    >
      <header className="flex items-start gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dark font-display text-sm font-bold text-white"
          aria-hidden
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-semibold text-dark">{review.name}</p>
            <span className="inline-flex items-center gap-1 rounded-md bg-light-gray px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-text-dark/55">
              <GoogleMark />
              Review
            </span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <StarRating rating={review.rating} size="sm" />
            <span className="text-xs font-bold text-primary">{review.rating}.0</span>
          </div>
        </div>
      </header>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text-dark/85">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <footer className="mt-5 border-t border-border-gray pt-4">
        {review.vehiclePurchased && (
          <p className="text-xs font-semibold text-primary">
            Purchased: {review.vehiclePurchased}
          </p>
        )}
        {review.dateLabel && (
          <p className="mt-1 flex items-center gap-1.5 text-xs text-text-dark/50">
            <span
              className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary"
              aria-hidden
            >
              ✓
            </span>
            {review.dateLabel}
          </p>
        )}
      </footer>
    </article>
  );
}

function GoogleMark() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
