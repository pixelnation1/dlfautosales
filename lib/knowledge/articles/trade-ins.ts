import type { KnowledgeArticle } from "../types";

export const tradeInArticles: KnowledgeArticle[] = [
  {
    slug: "trade-in-vs-selling-yourself",
    title: "Trade-In vs Selling Your Car Yourself",
    excerpt:
      "Should you trade in at a dealership or sell private party? Compare time, taxes, pricing, and hassle for Kansas sellers.",
    category: "Trade-Ins",
    featuredImage:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80",
    featuredImageAlt: "Two cars comparing trade-in options",
    author: "DLF Auto Sales Team",
    publishedAt: "2026-02-01",
    readingTimeMinutes: 6,
    metaTitle: "Trade-In vs Selling Your Car Yourself",
    metaDescription:
      "Trade-in vs private sale in Kansas: pros, cons, tax benefits, and when each option makes sense. Advice from DLF Auto Sales Emporia.",
    relatedSlugs: ["how-vehicle-trade-ins-work", "down-payment-used-car"],
    sections: [
      {
        id: "trade-in-pros",
        heading: "Benefits of Trading In at a Dealership",
        bullets: [
          "One transaction — buy and trade same day",
          "Tax savings in Kansas on trade-in credit (where applicable)",
          "No private buyer meetings or test drives at your home",
          "Payoff handled on financed trades",
        ],
        paragraphs: [
          "Trading in at DLF Auto Sales in Emporia simplifies upgrading: we appraise your vehicle, apply value toward your next used car, and handle paperwork.",
        ],
      },
      {
        id: "private-sale-pros",
        heading: "Benefits of Selling Yourself",
        paragraphs: [
          "Private sales sometimes bring a higher price if you have time to market, negotiate, and wait for the right buyer. You will handle listings, messages, test drives, and payment security yourself.",
        ],
        bullets: [
          "Potential for higher sale price on popular models",
          "You control timing and buyer selection",
          "More effort and liability",
        ],
      },
      {
        id: "when-trade",
        heading: "When a Trade-In Makes More Sense",
        paragraphs: [
          "If you need a replacement vehicle soon, owe money on your current loan, or want a single visit to a used car dealership near Emporia KS, trade-in usually wins on convenience.",
          "Apply trade-in value as down payment to lower your next loan — a strategy our financing team uses daily.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I pay less tax when I trade in?",
        answer:
          "Kansas buyers often receive sales tax credit on trade-in value when purchasing from a dealer. Confirm current rules with our team at purchase time.",
      },
      {
        question: "Can I trade in if I still owe on my loan?",
        answer:
          "Yes in many cases. We work with your payoff amount and structure the deal accordingly.",
      },
    ],
  },
  {
    slug: "how-vehicle-trade-ins-work",
    title: "How Vehicle Trade-Ins Work",
    excerpt:
      "From appraisal to payoff to paperwork — understand each step when you trade your vehicle at a Kansas used car dealer.",
    category: "Trade-Ins",
    featuredImage:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
    featuredImageAlt: "Vehicle inspection for trade-in appraisal",
    author: "DLF Auto Sales Team",
    publishedAt: "2025-11-22",
    readingTimeMinutes: 5,
    metaTitle: "How Vehicle Trade-Ins Work",
    metaDescription:
      "How do vehicle trade-ins work in Kansas? Appraisal, equity, payoff, and applying value toward your next car at DLF Auto Sales.",
    relatedSlugs: ["trade-in-vs-selling-yourself", "down-payment-used-car"],
    sections: [
      {
        id: "appraisal",
        heading: "The Appraisal Process",
        paragraphs: [
          "We inspect mileage, condition, history, and market demand. Honest disclosure of accidents or mechanical issues helps us give an accurate offer — surprises at inspection slow everyone down.",
        ],
      },
      {
        id: "equity",
        heading: "Positive vs Negative Equity",
        paragraphs: [
          "Positive equity means your car is worth more than you owe — that difference acts like cash down on your next purchase. Negative equity means you owe more than the trade value; you may roll the difference into a new loan depending on approval.",
        ],
      },
      {
        id: "paperwork",
        heading: "Titles and Payoffs",
        paragraphs: [
          "Bring your title (or lienholder info), registration, and keys. We coordinate payoff releases with your lender so you can drive your next vehicle without lien complications.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a trade-in appraisal take?",
        answer:
          "Often 30–60 minutes on site, depending on vehicle complexity and payoff verification.",
      },
      {
        question: "Do I need to clean my car before trading in?",
        answer:
          "A reasonable clean helps presentation but is not required for a fair mechanical and market-based appraisal.",
      },
    ],
  },
];
