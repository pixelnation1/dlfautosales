export type Review = {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  /** Replace with Google review source when integrated */
  source?: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    name: "Marcus T.",
    rating: 5,
    date: "March 2026",
    text: "Found a great truck and got approved the same day. No pressure, straight answers, and they worked with my budget. Best used car dealership near me in Emporia.",
    source: "Google Review (placeholder)",
  },
  {
    id: "2",
    name: "Sarah L.",
    rating: 5,
    date: "February 2026",
    text: "Traded in my old car and drove home in a Camry I love. Financing was easy even with less-than-perfect credit. Highly recommend DLF Auto Sales.",
    source: "Google Review (placeholder)",
  },
  {
    id: "3",
    name: "James R.",
    rating: 5,
    date: "January 2026",
    text: "Local dealer that actually cares. Clean inventory, fair pricing, and they explained every step. Will send friends looking for used cars in Emporia KS.",
    source: "Google Review (placeholder)",
  },
];
