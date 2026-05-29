import type { KnowledgeArticle } from "../types";

export const buyingGuideArticles: KnowledgeArticle[] = [
  {
    slug: "questions-before-buying-used-vehicle",
    title: "Questions to Ask Before Buying a Used Vehicle",
    excerpt:
      "Protect yourself with the right questions about history, condition, warranty, and pricing before you sign at any Kansas dealership.",
    category: "Buying Guides",
    featuredImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
    featuredImageAlt: "Customer asking questions at dealership",
    author: "DLF Auto Sales Team",
    publishedAt: "2026-02-08",
    readingTimeMinutes: 7,
    metaTitle: "Questions to Ask Before Buying a Used Vehicle",
    metaDescription:
      "Essential questions before buying a used car in Kansas — history, inspections, financing, and dealer transparency. From DLF Auto Sales.",
    featured: true,
    relatedSlugs: [
      "get-approved-used-car-loan",
      "why-buying-local-used-car-kansas",
    ],
    sections: [
      {
        id: "vehicle-history",
        heading: "Vehicle History and Condition",
        bullets: [
          "Has this vehicle been in an accident or had major repairs?",
          "Can I see a history report?",
          "Are service records available?",
          "May I have an independent inspection?",
        ],
        paragraphs: [
          "A transparent used car dealership in Emporia KS answers these directly. Walk away if answers are vague.",
        ],
      },
      {
        id: "pricing",
        heading: "Pricing and Fees",
        bullets: [
          "What is the out-the-door price?",
          "Are there documentation or dealer fees?",
          "Is the price negotiable?",
          "What is included in the sale?",
        ],
        paragraphs: [
          "DLF Auto Sales focuses on clear numbers before you commit.",
        ],
      },
      {
        id: "financing-questions",
        heading: "Financing Questions",
        bullets: [
          "What is my APR and term length?",
          "Is there a prepayment penalty?",
          "What happens if I am approved conditionally?",
          "Can I add a co-signer?",
        ],
        paragraphs: [
          "Review our financing page and pre-qualify before you visit so you shop with realistic expectations.",
        ],
      },
      {
        id: "after-sale",
        heading: "After-Sale Support",
        paragraphs: [
          "Ask what happens if something fails soon after purchase. Understand return policies (if any), warranty options, and who to call for help.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I test drive before buying?",
        answer:
          "Always. Test drive on streets and highway speeds if possible, and listen for unusual noises, check brakes, and verify features work.",
      },
      {
        question: "Is a pre-purchase inspection worth it?",
        answer:
          "For many buyers, yes — an independent mechanic can spot issues that photos and reports miss.",
      },
    ],
  },
  {
    slug: "best-first-cars-teen-drivers",
    title: "Best First Cars for Teen Drivers",
    excerpt:
      "Safety, reliability, insurance cost, and affordability — how Kansas parents choose a first used car for teen drivers.",
    category: "Buying Guides",
    featuredImage:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
    featuredImageAlt: "Small safe car for new driver",
    author: "DLF Auto Sales Team",
    publishedAt: "2025-12-05",
    readingTimeMinutes: 6,
    metaTitle: "Best First Cars for Teen Drivers",
    metaDescription:
      "Best first cars for teen drivers in Kansas — safety, reliability, and budget tips. Shop used cars at DLF Auto Sales Emporia.",
    relatedSlugs: ["best-used-suvs-kansas-families", "questions-before-buying-used-vehicle"],
    sections: [
      {
        id: "priorities",
        heading: "Priorities for a First Car",
        bullets: [
          "Strong safety ratings and modern airbags",
          "Reliable brands with affordable parts",
          "Avoid excessive horsepower for new drivers",
          "Reasonable insurance premiums",
        ],
        paragraphs: [
          "Used sedans and small SUVs from reputable brands often balance safety and cost better than old luxury vehicles with expensive repairs.",
        ],
      },
      {
        id: "models",
        heading: "Types of Vehicles to Consider",
        paragraphs: [
          "Many Emporia families choose used Honda, Toyota, Mazda, or Hyundai models — plus certain Fords and Chevrolets with solid reliability records. Condition matters more than badge alone.",
          "Browse our inventory for sedans and compact SUVs suited to new drivers.",
        ],
      },
      {
        id: "financing-family",
        heading: "Financing for Parents and Students",
        paragraphs: [
          "Parents may co-sign or finance in their name while the teen drives. DLF Auto Sales can explain co-signer options and payments that fit family budgets.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should a teen's first car be new or used?",
        answer:
          "Used is often smarter — lower purchase price, lower insurance in many cases, and less depreciation if minor bumps happen while learning.",
      },
      {
        question: "What mileage is too high for a first car?",
        answer:
          "Well-maintained vehicles with higher mileage can still be excellent values. Focus on maintenance history and inspection results.",
      },
    ],
  },
];
