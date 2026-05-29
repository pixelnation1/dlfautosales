import {
  REVIEW_AGGREGATE,
  REVIEW_TRUST_BADGE,
  REVIEW_TRUST_STATS,
  REVIEWS_HEADLINE,
  REVIEWS_SUPPORTING_COPY,
  reviews,
  type Review,
} from "@/lib/data/reviews";
import { ROUTES } from "@/lib/constants";
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
  showCtas?: boolean;
};

export function ReviewsSection({
  className = "",
  background = "light-gray",
  limit,
  showTrustStats = true,
  showCtas = true,
}: ReviewsSectionProps) {
  const displayReviews: Review[] = limit ? reviews.slice(0, limit) : reviews;

  const bgClass =
    background === "dark"
      ? "bg-dark text-white"
      : background === "white"
        ? "bg-white"
        : "bg-light-gray";

  const headingClass = background === "dark" ? "text-white" : "text-dark";
  const subClass = background === "dark" ? "text-white/75" : "text-text-dark/70";
  const statCardClass =
    background === "dark"
      ? "border-white/10 bg-white/5"
      : "border-border-gray bg-white";

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-24 lg:py-28 ${bgClass} ${className}`}
      aria-labelledby="reviews-section-heading"
    >
      <JsonLd data={dealershipReviewsSchema()} />

      {background !== "dark" && (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,6,19,0.06)_0%,transparent_55%)]"
          aria-hidden
        />
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border-2 px-5 py-2 ${
              background === "dark"
                ? "border-primary bg-primary/20"
                : "border-primary bg-primary text-white shadow-lg shadow-primary/25"
            }`}
          >
            <StarRating
              rating={REVIEW_AGGREGATE.ratingValue}
              size="sm"
              className={background === "dark" ? "" : "[&_svg]:text-white"}
            />
            <span
              className={`text-sm font-bold uppercase tracking-wide ${
                background === "dark" ? "text-white" : "text-white"
              }`}
            >
              {REVIEW_TRUST_BADGE}
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <p
              className={`font-display text-6xl font-extrabold leading-none sm:text-7xl ${
                background === "dark" ? "text-white" : "text-dark"
              }`}
            >
              {REVIEW_AGGREGATE.ratingValue.toFixed(1)}
            </p>
            <StarRating rating={REVIEW_AGGREGATE.ratingValue} size="lg" />
            <p className={`text-sm font-semibold ${subClass}`}>
              Based on {REVIEW_AGGREGATE.reviewCount} verified customer reviews
            </p>
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Customer Reviews
          </p>
          <h2
            id="reviews-section-heading"
            className={`mt-2 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl ${headingClass}`}
          >
            {REVIEWS_HEADLINE}
          </h2>
          <p className={`mt-4 text-base leading-relaxed sm:text-lg ${subClass}`}>
            {REVIEWS_SUPPORTING_COPY}
          </p>
        </div>

        {showTrustStats && (
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {REVIEW_TRUST_STATS.map((stat) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center rounded-xl border px-4 py-5 text-center shadow-sm ${statCardClass}`}
              >
                <p
                  className={`font-display text-2xl font-extrabold ${
                    background === "dark" ? "text-primary" : "text-primary"
                  }`}
                >
                  {stat.value}
                </p>
                <p
                  className={`mt-1 text-xs font-bold uppercase tracking-wide ${
                    background === "dark" ? "text-white/80" : "text-dark"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-14">
          <ReviewsCarousel reviews={displayReviews} />
          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {displayReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          {limit && reviews.length > limit && (
            <p className={`mt-6 text-center text-sm ${subClass}`}>
              Showing {limit} of {reviews.length} verified reviews
            </p>
          )}
        </div>

        {showCtas && (
          <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button href={ROUTES.inventory} size="lg" className="w-full sm:w-auto">
              View Inventory
            </Button>
            <Button
              href={ROUTES.financingPreQualify}
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Get Approved
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
