export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  /** Display label under reviewer name */
  dateLabel?: string;
  vehiclePurchased?: string;
};

/** Verified customer reviews for DLF Auto Sales */
export const reviews: Review[] = [
  {
    id: "manny",
    name: "Manny",
    rating: 5,
    dateLabel: "Verified Customer",
    text: "I went over the summer because he had a car we were interested in. The guy I spoke with was very kind and let me look at the car and test drive it. He is a newer business but will go out of his way to help you out. He can even secure financing for your purchase and is also willing to negotiate and help you get into a vehicle.",
  },
  {
    id: "mariana-cerda",
    name: "Mariana Cerda",
    rating: 5,
    dateLabel: "Verified Customer",
    text: "Great business and staff. People are very kind and understanding. There is a great variety of reliable vehicles to choose from. Carlos and his team are always willing to help anyone out. They also speak Spanish.",
  },
  {
    id: "lucas-chituck",
    name: "Lucas Chituck",
    rating: 5,
    dateLabel: "Verified Customer",
    vehiclePurchased: "Jeep Liberty",
    text: "Bought a Jeep Liberty from Carlos. He met my expectations completely. The vehicle was spotless, ran and drove well, and the price was well below average. Carlos was incredibly kind and always quick to communicate. I would absolutely recommend DLF Auto Sales for a used car in Emporia.",
  },
  {
    id: "nayeli-escobar",
    name: "Nayeli Escobar",
    rating: 5,
    dateLabel: "Verified Customer",
    text: "Went to visit because I was thinking of buying a new car and they were really nice and welcoming. Would recommend them if you're looking for an affordable vehicle.",
  },
  {
    id: "valentina-fuentes",
    name: "Valentina Fuentes",
    rating: 5,
    dateLabel: "Verified Customer",
    text: "Great people to work with. Very easy to negotiate and they adjust to your needs. Owners are very kind and friendly. I would definitely recommend them.",
  },
];

export const REVIEW_AGGREGATE = {
  ratingValue: 5,
  reviewCount: 5,
  bestRating: 5,
  worstRating: 1,
} as const;

export const REVIEW_TRUST_BADGE = "5-Star Local Dealership Reviews";

export const REVIEWS_HEADLINE = "Real Reviews From Emporia Drivers";

export const REVIEWS_SUPPORTING_COPY =
  "Carlos and the DLF Auto Sales team earn trust one customer at a time — honest help, financing options, fair prices, and a welcoming experience for every shopper.";

export const REVIEW_TRUST_STATS = [
  { value: "5.0", label: "Average Rating" },
  { value: "5", label: "Verified Reviews" },
  { value: "100%", label: "5-Star Ratings" },
  { value: "Local", label: "Emporia, KS" },
] as const;

export function getReviewerInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}
