import Link from "next/link";
import {
  REVIEW_AGGREGATE,
  REVIEW_TRUST_STATS,
  REVIEWS_HEADLINE,
  REVIEWS_SUPPORTING_COPY,
  reviews,
  type Review,
} from "@/lib/data/reviews";
import { SITE, ROUTES } from "@/lib/constants";
import { dealershipReviewsSchema } from "@/lib/seo/reviews-schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { StarRating } from "@/components/shared/StarRating";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { ReviewsCarousel } from "@/components/shared/ReviewsCarousel";
import { Button } from "@/components/ui/Button";

type ReviewsSectionProps = {
  className?: string;
  background?: "white" | "light-gray" | "dark";
  /** Limit cards shown (e.g. on vehicle detail) */
  limit?: number;
  showTrustStats?: boolean;
};

export function ReviewsSection({
  className = "",
  background = "light-gray",
  limit,
  showTrustStats = true,
}: ReviewsSectionProps) {
  const displayReviews: Review[] = limit ? reviews.slice(0, limit) : reviews;
  const reviewsCtaHref = SITE.googleReviewsUrl || ROUTES.contact;

  const bgClass =
    background === "dark"
      ? "bg-dark text-white"
      : background === "white"
        ? "bg-white"
        : "bg-light-gray";

  const headingClass = background === "dark" ? "text-white" : "text-dark";
  const subClass = background === "dark" ? "text-white/75" : "text-text-dark/70";

  return (
    <section
      className={`py-14 sm:py-20 lg:py-24 ${bgClass} ${className}`}
      aria-labelledby="reviews-section-heading"
    >
      <JsonLd data={dealershipReviewsSchema()} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showTrustStats && (
          <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {REVIEW_TRUST_STATS.map((stat) => (
              <div
                key={stat}
                className={`flex flex-col items-center rounded-xl border px-4 py-4 text-center ${
                  background === "dark"
                    ? "border-white/10 bg-white/5"
                    : "border-border-gray bg-white"
                }`}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                  aria-hidden
                >
                  ✓
                </span>
                <p
                  className={`mt-2 text-xs font-bold uppercase tracking-wide ${
                    background === "dark" ? "text-white" : "text-dark"
                  }`}
                >
                  {stat}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 ${
              background === "dark"
                ? "border-primary/40 bg-primary/15"
                : "border-primary/30 bg-primary/10"
            }`}
          >
            <StarRating rating={5} size="sm" />
            <span className="text-sm font-bold text-primary">
              {REVIEW_AGGREGATE.ratingValue} · {REVIEW_AGGREGATE.reviewCount} Reviews
            </span>
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Customer Reviews
          </p>
          <h2
            id="reviews-section-heading"
            className={`mt-2 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl ${headingClass}`}
          >
            {REVIEWS_HEADLINE}
          </h2>
          <p className={`mt-4 text-base leading-relaxed sm:text-lg ${subClass}`}>
            {REVIEWS_SUPPORTING_COPY}
          </p>
        </div>

        <div className="mt-12">
          <ReviewsCarousel reviews={displayReviews} />
          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {displayReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            href={reviewsCtaHref}
            size="lg"
            className="w-full sm:w-auto"
          >
            Read More Reviews
          </Button>
          <Link
            href={ROUTES.contact}
            className={`text-sm font-semibold uppercase tracking-wide hover:text-primary ${
              background === "dark" ? "text-white/70" : "text-text-dark/60"
            }`}
          >
            Share your experience →
          </Link>
        </div>
      </div>
    </section>
  );
}
