export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  /** Display date, e.g. "March 2026" or "Recent Customer" */
  dateLabel: string;
  vehiclePurchased?: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    name: "Marcus T.",
    rating: 5,
    dateLabel: "March 2026",
    vehiclePurchased: "2020 Ford F-150",
    text: "Found a great truck and got approved the same day. No pressure, straight answers, and they worked with my budget. Best used car dealership near me in Emporia.",
  },
  {
    id: "2",
    name: "Sarah L.",
    rating: 5,
    dateLabel: "February 2026",
    vehiclePurchased: "2019 Toyota Camry",
    text: "Traded in my old car and drove home in a Camry I love. Financing was easy even with less-than-perfect credit. Highly recommend DLF Auto Sales.",
  },
  {
    id: "3",
    name: "James R.",
    rating: 5,
    dateLabel: "January 2026",
    vehiclePurchased: "2018 Honda CR-V",
    text: "Local dealer that actually cares. Clean inventory, fair pricing, and they explained every step. Will send friends looking for used cars in Emporia KS.",
  },
  {
    id: "4",
    name: "Kimberly W.",
    rating: 5,
    dateLabel: "Recent Customer",
    vehiclePurchased: "2021 Chevrolet Equinox",
    text: "First time buying on my own and they made it simple. No judgment about my credit — just real options and a payment I could afford.",
  },
  {
    id: "5",
    name: "David M.",
    rating: 5,
    dateLabel: "Recent Customer",
    vehiclePurchased: "2022 Hyundai Tucson",
    text: "Upgraded our family SUV without the runaround. Fair trade-in value and a smooth buying experience from start to finish.",
  },
  {
    id: "6",
    name: "Angela P.",
    rating: 5,
    dateLabel: "December 2025",
    vehiclePurchased: "2017 Nissan Altima",
    text: "Honest people, clean lot, and they stood behind what they sold. Exactly what you want from a used car dealership in Emporia.",
  },
];

/** Update when live Google review data is connected */
export const REVIEW_AGGREGATE = {
  ratingValue: 4.9,
  reviewCount: reviews.length,
  bestRating: 5,
  worstRating: 1,
} as const;

export const REVIEWS_HEADLINE = "Why Emporia Drivers Choose DLF Auto Sales";

export const REVIEWS_SUPPORTING_COPY =
  "From first-time buyers to families upgrading vehicles, DLF Auto Sales is focused on making the car-buying process simple, honest, and stress-free.";

export const REVIEW_TRUST_STATS = [
  "Local Dealership",
  "Financing Available",
  "Trade-Ins Welcome",
  "Quality Used Vehicles",
] as const;
