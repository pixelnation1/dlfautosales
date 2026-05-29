import { SITE } from "@/lib/constants";
import {
  REVIEW_AGGREGATE,
  reviews,
  type Review,
} from "@/lib/data/reviews";

function reviewToSchema(review: Review) {
  return {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: REVIEW_AGGREGATE.bestRating,
      worstRating: REVIEW_AGGREGATE.worstRating,
    },
    reviewBody: review.text,
    ...(review.vehiclePurchased && {
      itemReviewed: {
        "@type": "Car",
        name: review.vehiclePurchased,
      },
    }),
  };
}

/** Aggregate + individual reviews for DLF Auto Sales */
export function dealershipReviewsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: SITE.name,
    url: SITE.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEW_AGGREGATE.ratingValue,
      reviewCount: REVIEW_AGGREGATE.reviewCount,
      bestRating: REVIEW_AGGREGATE.bestRating,
      worstRating: REVIEW_AGGREGATE.worstRating,
    },
    review: reviews.map(reviewToSchema),
  };
}
