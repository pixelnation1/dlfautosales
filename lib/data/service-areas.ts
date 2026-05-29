import type { FAQItem } from "@/lib/data/faqs";

export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  h1: string;
  heroEyebrow: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  distanceNote: string;
  introTitle: string;
  introParagraphs: string[];
  inventoryTitle: string;
  inventoryDescription: string;
  financingTitle: string;
  financingParagraphs: string[];
  tradeInTitle: string;
  tradeInParagraph: string;
  faqTitle: string;
  faqDescription: string;
  faqs: FAQItem[];
  mapQuery: string;
  nearbyTowns?: string[];
};

export const SERVICE_AREA_SLUGS = [
  "used-cars-emporia-ks",
  "used-cars-wichita-ks",
  "used-cars-topeka-ks",
  "used-cars-olpe-ks",
  "used-cars-burlingame-ks",
  "used-cars-lyndon-ks",
  "used-cars-cottonwood-falls-ks",
] as const;

export type ServiceAreaSlug = (typeof SERVICE_AREA_SLUGS)[number];

export const serviceAreas: ServiceArea[] = [
  {
    slug: "used-cars-emporia-ks",
    city: "Emporia",
    state: "Kansas",
    h1: "Used Cars in Emporia, KS",
    heroEyebrow: "Serving Emporia · Lyon County",
    heroSubtitle:
      "DLF Auto Sales is your hometown used car dealership in Emporia, KS — quality used cars, trucks, and SUVs with financing for every credit situation.",
    metaTitle: "Used Cars in Emporia, KS | DLF Auto Sales",
    metaDescription:
      "Shop used cars in Emporia KS at DLF Auto Sales. Used trucks, SUVs, auto financing in Emporia KS, and trade-ins welcome. Your local used car dealership.",
    ogDescription:
      "Emporia's trusted source for used cars, trucks, SUVs, and auto financing. Visit DLF Auto Sales on Commercial St today.",
    distanceNote: "Located in Emporia — visit our lot today",
    introTitle: "Your Local Used Car Dealership in Emporia",
    introParagraphs: [
      "When you search for used cars in Emporia KS, you want a dealer who knows the community — not a corporate chain reading scripts. DLF Auto Sales is built for Lyon County drivers who need reliable transportation, honest pricing, and financing that works in the real world.",
      "Whether you need a fuel-efficient commuter, a family SUV, or a work-ready truck, our hand-picked inventory is priced transparently and ready to finance. We welcome trade-ins, serve first-time buyers, and help customers with bad credit or no credit explore real options.",
      "As a used car dealership near Emporia KS, we focus on a stress-free process: clear answers, test drives, and payments you can plan around. Stop by our Emporia lot or browse inventory online to get started.",
    ],
    inventoryTitle: "Used Cars, Trucks & SUVs in Emporia",
    inventoryDescription:
      "Browse quality used vehicles on our Emporia lot — sedans, SUVs, and pickups updated weekly.",
    financingTitle: "Auto Financing in Emporia, KS",
    financingParagraphs: [
      "Auto financing in Emporia KS should not feel like a maze. At DLF Auto Sales, we work with multiple lenders to help Emporia residents get approved — including buyers rebuilding credit or buying their first vehicle.",
      "Get pre-qualified online, call our team, or visit the lot. We explain terms clearly so you know your payment before you sign.",
    ],
    tradeInTitle: "Trade In Your Vehicle in Emporia",
    tradeInParagraph:
      "Upgrade without the hassle. Trade in your vehicle near Emporia KS at DLF Auto Sales and apply your trade-in value toward your next used car, truck, or SUV on our lot.",
    faqTitle: "Emporia Buyer FAQs",
    faqDescription: "Common questions from Emporia and Lyon County drivers.",
    faqs: [
      {
        question: "Where is DLF Auto Sales located in Emporia?",
        answer:
          "DLF Auto Sales is located at 1234 Commercial St, Emporia, KS 66801. We welcome walk-ins, test drives, and financing consultations during our posted business hours.",
      },
      {
        question: "Do you offer auto financing in Emporia for bad credit?",
        answer:
          "Yes. We help Emporia buyers with good credit, fair credit, bad credit, no credit, and rebuilding credit. Submit a pre-qualification form or call us to discuss your situation.",
      },
      {
        question: "Can I trade in my car at DLF Auto Sales in Emporia?",
        answer:
          "Trade-ins are welcome. Bring your vehicle to our Emporia lot for an appraisal and we will apply the value toward your next purchase when you buy from us.",
      },
      {
        question: "What used trucks and SUVs do you have in Emporia?",
        answer:
          "Our inventory rotates regularly with used trucks and SUVs suited for Kansas roads, weather, and work needs. View current vehicles online or call to confirm availability.",
      },
    ],
    mapQuery: "Emporia+KS+66801",
    nearbyTowns: ["Americus", "Hartford", "Olpe", "Burlington"],
  },
  {
    slug: "used-cars-wichita-ks",
    city: "Wichita",
    state: "Kansas",
    h1: "Used Cars Near Wichita, KS",
    heroEyebrow: "Serving Wichita & South-Central Kansas",
    heroSubtitle:
      "Wichita drivers choose DLF Auto Sales in Emporia for hand-picked used cars, competitive pricing, and financing options that go beyond the big-city lots.",
    metaTitle: "Used Cars Near Wichita, KS | DLF Auto Sales",
    metaDescription:
      "Looking for used cars near Wichita KS? DLF Auto Sales in Emporia offers used trucks, SUVs, auto financing, and trade-ins for Wichita-area buyers.",
    ogDescription:
      "Wichita-area shoppers: quality used vehicles, financing, and trade-ins at DLF Auto Sales in Emporia, KS.",
    distanceNote: "Convenient drive from the Wichita metro — worth the trip for honest deals",
    introTitle: "Why Wichita Drivers Shop DLF in Emporia",
    introParagraphs: [
      "Searching for used cars near Wichita KS can mean crowded lots, high-pressure sales, and limited financing flexibility. Many south-central Kansas buyers prefer driving to Emporia for a calmer experience and a dealer focused on straight answers.",
      "DLF Auto Sales stocks used cars, used trucks, and used SUVs selected for value — not volume. Wichita-area customers visit us for transparent pricing, trade-in options, and auto financing near Wichita that includes bad credit and first-time buyer programs.",
      "If you want a used car dealership near Wichita KS without the metro stress, plan a trip to our Emporia lot. Browse inventory online first, then schedule a test drive when you find the right fit.",
    ],
    inventoryTitle: "Used Vehicles for Wichita-Area Buyers",
    inventoryDescription:
      "Sedans, SUVs, and trucks ready for the drive home to Wichita — priced for real-world budgets.",
    financingTitle: "Auto Financing for Wichita-Area Customers",
    financingParagraphs: [
      "You do not have to finance at a Wichita mega-dealer to get competitive options. DLF Auto Sales offers auto financing near Wichita through multiple lenders, with same-day decisions on many applications.",
      "Whether you commute on Kellogg or need a family SUV, we help you structure a payment that fits — even if your credit history is still a work in progress.",
    ],
    tradeInTitle: "Trade In Your Vehicle Near Wichita",
    tradeInParagraph:
      "Driving from Wichita with a trade? We appraise trade-ins from nearby cities and apply fair value toward your next vehicle — making it easier to trade in your vehicle near Wichita without extra runaround.",
    faqTitle: "Wichita-Area Buyer FAQs",
    faqDescription: "Answers for customers traveling from Wichita and surrounding communities.",
    faqs: [
      {
        question: "Do you serve customers from Wichita?",
        answer:
          "Yes. DLF Auto Sales regularly helps buyers from Wichita and the surrounding metro. Many customers find the drive to Emporia worthwhile for selection, pricing, and a no-pressure experience.",
      },
      {
        question: "Can I finance a vehicle if I live in Wichita?",
        answer:
          "Absolutely. Your residence in Wichita does not prevent financing through DLF Auto Sales. We work with lenders who serve south-central Kansas buyers, including those with challenging credit.",
      },
      {
        question: "Do you accept trade-ins from Wichita?",
        answer:
          "We accept trade-ins from Wichita and nearby areas. Bring your vehicle for appraisal when you visit our Emporia dealership.",
      },
      {
        question: "How far is DLF Auto Sales from Wichita?",
        answer:
          "Our Emporia lot is a straightforward drive from Wichita — plan roughly 1–1.5 hours depending on your starting point. Call ahead and we can have a vehicle ready for your visit.",
      },
    ],
    mapQuery: "Emporia+KS+DLF+Auto+Sales",
    nearbyTowns: ["Andover", "Derby", "Augusta", "El Dorado"],
  },
  {
    slug: "used-cars-topeka-ks",
    city: "Topeka",
    state: "Kansas",
    h1: "Auto Financing Near Topeka, KS",
    heroEyebrow: "Serving Topeka & Northeast Kansas",
    heroSubtitle:
      "Topeka buyers count on DLF Auto Sales for used cars, flexible auto financing, and trade-in value — just a short drive to our Emporia dealership.",
    metaTitle: "Used Cars & Auto Financing Near Topeka, KS",
    metaDescription:
      "Used cars near Topeka KS and auto financing in Topeka at DLF Auto Sales Emporia. Used trucks, SUVs, trade-ins welcome for Topeka-area drivers.",
    ogDescription:
      "Topeka-area drivers: explore used cars and financing at DLF Auto Sales in Emporia, Kansas.",
    distanceNote: "Easy drive from Topeka — visit our Emporia dealership",
    introTitle: "Used Cars & Financing for Topeka Drivers",
    introParagraphs: [
      "Topeka drivers searching for used cars in Topeka KS often discover better selection and more personal service a short drive away in Emporia. DLF Auto Sales specializes in used cars, used trucks, and used SUVs with financing built for real-life budgets.",
      "If you need auto financing in Topeka but want options beyond a single lender or high-pressure pitch, our team shops multiple financing partners to improve your approval odds. Bad credit, no credit, and first-time buyers are welcome.",
      "As a used car dealership near Topeka KS, we make the process simple: review inventory online, get pre-qualified, visit our lot, and drive home with clarity on price and payment. Trade in your vehicle near Topeka and put equity toward your upgrade.",
    ],
    inventoryTitle: "Inventory for Topeka-Area Shoppers",
    inventoryDescription:
      "Quality used cars and SUVs for Topeka commuters, families, and first-time buyers.",
    financingTitle: "Auto Financing Near Topeka, KS",
    financingParagraphs: [
      "Auto financing near Topeka does not have to start and end at the capital city limits. DLF Auto Sales helps Topeka residents secure financing with clear terms and realistic payments.",
      "Start with our online pre-qualification form, then visit Emporia to pick your vehicle. Our staff explains each step so you leave confident — not confused.",
    ],
    tradeInTitle: "Trade-Ins from the Topeka Area",
    tradeInParagraph:
      "Bring your trade from Topeka or surrounding towns. We provide fair trade-in evaluations and apply value directly toward your next used car, truck, or SUV.",
    faqTitle: "Topeka Buyer FAQs",
    faqDescription: "Local questions from Topeka and northeast Kansas customers.",
    faqs: [
      {
        question: "Can I finance a vehicle if I live in Topeka?",
        answer:
          "Yes. Topeka residents can finance through DLF Auto Sales. We submit applications to multiple lenders and work to find a structure that fits your budget and credit profile.",
      },
      {
        question: "Do you serve customers from Topeka?",
        answer:
          "We serve Topeka and northeast Kansas buyers regularly. Many customers prefer our Emporia location for a focused, local-dealer experience.",
      },
      {
        question: "Do you accept trade-ins from nearby cities like Topeka?",
        answer:
          "Trade-ins from Topeka and nearby communities are welcome. Schedule a visit or call ahead so we can appraise your vehicle efficiently.",
      },
      {
        question: "What types of used SUVs and trucks are available?",
        answer:
          "Our lot includes used SUVs and used trucks suited for Kansas highways and family needs. Inventory changes often — check online or call for the latest arrivals.",
      },
    ],
    mapQuery: "Emporia+KS+DLF+Auto+Sales",
    nearbyTowns: ["Lawrence", "Manhattan", "Carbondale", "Silver Lake"],
  },
  {
    slug: "used-cars-olpe-ks",
    city: "Olpe",
    state: "Kansas",
    h1: "Used Cars Near Olpe, KS",
    heroEyebrow: "Serving Olpe & Lyon County",
    heroSubtitle:
      "Olpe and Lyon County neighbors shop DLF Auto Sales in nearby Emporia for dependable used vehicles, honest deals, and financing that fits rural Kansas life.",
    metaTitle: "Used Cars Near Olpe, KS | DLF Auto Sales",
    metaDescription:
      "Used cars near Olpe KS at DLF Auto Sales Emporia. Used trucks, SUVs, auto financing near Olpe, and trade-ins for Lyon County drivers.",
    ogDescription:
      "Olpe-area drivers: shop used cars, financing, and trade-ins at DLF Auto Sales in Emporia.",
    distanceNote: "Just minutes from Olpe — your Emporia used car dealer",
    introTitle: "Used Cars for Olpe & Lyon County",
    introParagraphs: [
      "Drivers in Olpe searching for used cars in Olpe KS often head to Emporia for better selection and a dealer who understands small-town needs. DLF Auto Sales is a short drive from Olpe with used cars, used trucks, and used SUVs ready for country roads and daily commutes.",
      "We offer auto financing near Olpe for buyers who need flexibility — including credit challenges and first-time purchases. Our team keeps the process straightforward: no corporate layers, just clear communication.",
      "Trade in your vehicle near Olpe and upgrade with confidence. As a used car dealership near Olpe KS, we treat Lyon County neighbors like neighbors, not account numbers.",
    ],
    inventoryTitle: "Vehicles for Olpe Drivers",
    inventoryDescription:
      "Reliable sedans, SUVs, and trucks for Olpe families, commuters, and farm routes.",
    financingTitle: "Financing for Olpe-Area Buyers",
    financingParagraphs: [
      "Auto financing in Olpe-area communities should be accessible. DLF Auto Sales works with multiple lenders so Olpe buyers can explore approvals without driving to a big city.",
      "Call or submit a pre-qualification form before you visit — we will be ready to help when you arrive in Emporia.",
    ],
    tradeInTitle: "Trade-Ins Near Olpe",
    tradeInParagraph:
      "Trading up from Olpe? We welcome trade-ins from Olpe and surrounding Lyon County towns with fair appraisals and fast answers.",
    faqTitle: "Olpe Area FAQs",
    faqDescription: "Questions from Olpe and nearby Lyon County customers.",
    faqs: [
      {
        question: "How far is DLF Auto Sales from Olpe?",
        answer:
          "Our Emporia dealership is a quick drive from Olpe — many customers visit the same day they start shopping online.",
      },
      {
        question: "Do you serve customers from Olpe?",
        answer:
          "Yes. Olpe and Lyon County are core communities we serve. You get the same financing and trade-in options as Emporia residents.",
      },
      {
        question: "Can I finance a truck for work if I live near Olpe?",
        answer:
          "We finance used trucks for Olpe-area buyers regularly, including work trucks and daily drivers. Apply online or call to discuss your budget.",
      },
      {
        question: "Do you accept trade-ins from nearby cities?",
        answer:
          "We accept trade-ins from Olpe, Emporia, and surrounding towns. Bring your title and vehicle for appraisal.",
      },
    ],
    mapQuery: "Emporia+KS+DLF+Auto+Sales",
    nearbyTowns: ["Emporia", "Americus", "Hartford"],
  },
  {
    slug: "used-cars-burlingame-ks",
    city: "Burlingame",
    state: "Kansas",
    h1: "Used Cars Near Burlingame, KS",
    heroEyebrow: "Serving Burlingame & Osage County",
    heroSubtitle:
      "Burlingame drivers visit DLF Auto Sales in Emporia for used cars, trucks, and SUVs — plus financing and trade-ins without the big-city pressure.",
    metaTitle: "Used Cars Near Burlingame, KS | DLF Auto Sales",
    metaDescription:
      "Shop used cars near Burlingame KS at DLF Auto Sales. Used SUVs, trucks, auto financing near Burlingame, trade-ins for Osage County buyers.",
    ogDescription:
      "Burlingame-area shoppers: used cars and financing at DLF Auto Sales in Emporia, KS.",
    distanceNote: "Short drive from Burlingame to our Emporia lot",
    introTitle: "Burlingame’s Emporia Used Car Connection",
    introParagraphs: [
      "For used cars in Burlingame KS, many Osage County buyers choose DLF Auto Sales in Emporia for selection and service they can trust. We stock vehicles suited to Kansas driving — from efficient sedans to capable used trucks and SUVs.",
      "Auto financing near Burlingame is available through DLF with options for varied credit situations. We explain payments upfront and help you compare terms before you commit.",
      "Looking for a used car dealership near Burlingame KS? Skip the pressure and drive to Emporia. Trade in your vehicle near Burlingame and put value toward a newer, dependable ride.",
    ],
    inventoryTitle: "Inventory for Burlingame Buyers",
    inventoryDescription:
      "Hand-picked used vehicles for Burlingame families and commuters — ready to finance.",
    financingTitle: "Auto Financing Near Burlingame",
    financingParagraphs: [
      "DLF Auto Sales provides auto financing near Burlingame through trusted lender partners. Whether you are rebuilding credit or buying your first car, we focus on solutions — not excuses.",
      "Pre-qualify online, then visit our Emporia dealership to choose your vehicle and finalize details.",
    ],
    tradeInTitle: "Trade-Ins from Burlingame",
    tradeInParagraph:
      "We accept trade-ins from Burlingame and Osage County. Get a fair number and apply it toward your next used car, truck, or SUV on our lot.",
    faqTitle: "Burlingame Area FAQs",
    faqDescription: "Helpful answers for Burlingame and Osage County shoppers.",
    faqs: [
      {
        question: "Do you serve customers from Burlingame?",
        answer:
          "Yes. Burlingame and Osage County are part of our regular service area. Many customers shop with us in Emporia for better selection than local classifieds alone.",
      },
      {
        question: "Can I finance a vehicle if I live in Burlingame?",
        answer:
          "Burlingame residents can finance at DLF Auto Sales. We submit applications to multiple lenders to maximize approval options.",
      },
      {
        question: "Do you accept trade-ins from nearby cities?",
        answer:
          "Trade-ins from Burlingame and nearby towns are welcome. Contact us before you drive in so we can prepare for your appraisal.",
      },
      {
        question: "What used SUVs are good for Kansas winters?",
        answer:
          "We often stock AWD and FWD used SUVs popular with Kansas buyers. Ask our team what is on the lot when you visit from Burlingame.",
      },
    ],
    mapQuery: "Emporia+KS+DLF+Auto+Sales",
    nearbyTowns: ["Lyndon", "Osage City", "Carbondale"],
  },
  {
    slug: "used-cars-lyndon-ks",
    city: "Lyndon",
    state: "Kansas",
    h1: "Used Cars Near Lyndon, KS",
    heroEyebrow: "Serving Lyndon & Osage County",
    heroSubtitle:
      "Lyndon drivers rely on DLF Auto Sales in Emporia for quality used vehicles, rural-friendly financing, and trade-in value on every deal.",
    metaTitle: "Used Cars Near Lyndon, KS | DLF Auto Sales",
    metaDescription:
      "Used cars near Lyndon KS at DLF Auto Sales Emporia. Used trucks, SUVs, auto financing in Lyndon area, trade-ins for Osage County.",
    ogDescription:
      "Lyndon KS drivers: shop used cars, financing, and trade-ins at DLF Auto Sales in Emporia.",
    distanceNote: "Emporia dealership — a quick trip from Lyndon",
    introTitle: "Used Cars for Lyndon & Osage County",
    introParagraphs: [
      "Shoppers looking for used cars in Lyndon KS benefit from DLF Auto Sales’ Emporia location — close enough for a same-day visit, with inventory you will not always find through private sellers alone.",
      "We help Lyndon-area buyers with used cars, used trucks, and used SUVs, plus auto financing near Lyndon designed for real budgets. Bad credit and first-time buyers receive the same honest attention as everyone else.",
      "Trade in your vehicle near Lyndon and simplify your upgrade. As a used car dealership near Lyndon KS, DLF focuses on clarity: you will know the price, the payment, and what happens next.",
    ],
    inventoryTitle: "Vehicles for Lyndon Drivers",
    inventoryDescription:
      "Dependable used inventory for Lyndon commutes, family needs, and work trucks.",
    financingTitle: "Financing for Lyndon-Area Buyers",
    financingParagraphs: [
      "Auto financing in the Lyndon area should not require a trip to Kansas City. DLF Auto Sales offers local expertise and lender relationships that serve Osage County buyers.",
      "Start online with pre-qualification, then visit Emporia to finalize your deal with a team that picks up the phone.",
    ],
    tradeInTitle: "Trade-Ins Near Lyndon",
    tradeInParagraph:
      "Trading from Lyndon? We provide straightforward trade-in appraisals and help you apply equity toward your next vehicle purchase at DLF.",
    faqTitle: "Lyndon Area FAQs",
    faqDescription: "Frequently asked questions from Lyndon and Osage County.",
    faqs: [
      {
        question: "Do you serve customers from Lyndon?",
        answer:
          "Yes. Lyndon is within our core Kansas service area. We welcome Osage County buyers at our Emporia dealership.",
      },
      {
        question: "Can I finance a vehicle if I live in Lyndon?",
        answer:
          "Lyndon residents can apply for financing through DLF Auto Sales. We work with multiple lenders and explain your options clearly.",
      },
      {
        question: "Do you accept trade-ins from nearby cities?",
        answer:
          "We accept trade-ins from Lyndon, Burlingame, Osage City, and other nearby communities.",
      },
      {
        question: "Are used trucks available for rural use?",
        answer:
          "We regularly stock used trucks suitable for work and rural driving. Check our inventory online or call for current availability before visiting from Lyndon.",
      },
    ],
    mapQuery: "Emporia+KS+DLF+Auto+Sales",
    nearbyTowns: ["Burlingame", "Osage City", "Overbrook"],
  },
  {
    slug: "used-cars-cottonwood-falls-ks",
    city: "Cottonwood Falls",
    state: "Kansas",
    h1: "Used Cars Near Cottonwood Falls, KS",
    heroEyebrow: "Serving Cottonwood Falls & the Flint Hills",
    heroSubtitle:
      "Flint Hills drivers from Cottonwood Falls choose DLF Auto Sales in Emporia for used cars, financing, and trade-ins rooted in Kansas values.",
    metaTitle: "Used Cars Near Cottonwood Falls, KS",
    metaDescription:
      "Used cars near Cottonwood Falls KS at DLF Auto Sales. Used trucks, SUVs, auto financing, trade-ins for Chase County and Flint Hills drivers.",
    ogDescription:
      "Cottonwood Falls & Flint Hills: used cars and financing at DLF Auto Sales in Emporia, KS.",
    distanceNote: "Flint Hills friendly — visit our Emporia dealership",
    introTitle: "Flint Hills Drivers Choose DLF in Emporia",
    introParagraphs: [
      "Cottonwood Falls sits in the heart of the Flint Hills, where dependable transportation matters. For used cars in Cottonwood Falls KS, DLF Auto Sales in Emporia offers a practical alternative to limited local listings — with inspected vehicles and financing support.",
      "We stock used cars, used trucks, and used SUVs that handle Kansas highways and gravel roads. Auto financing near Cottonwood Falls includes options for buyers with credit challenges, seasonal income, or first-time purchase needs.",
      "Trade in your vehicle near Cottonwood Falls and upgrade without crossing state lines. As a used car dealership near Cottonwood Falls KS, we welcome Chase County buyers who want a straight deal and a team that answers the phone.",
    ],
    inventoryTitle: "Inventory for Cottonwood Falls Buyers",
    inventoryDescription:
      "SUVs, trucks, and sedans for Flint Hills commutes — priced for rural Kansas budgets.",
    financingTitle: "Financing for Cottonwood Falls & Chase County",
    financingParagraphs: [
      "DLF Auto Sales provides auto financing near Cottonwood Falls with lenders who understand diverse income situations. We focus on payments you can sustain year-round.",
      "Pre-qualify from home in Chase County, then make one trip to Emporia to choose your vehicle and complete paperwork.",
    ],
    tradeInTitle: "Trade-Ins from the Flint Hills",
    tradeInParagraph:
      "Trading in from Cottonwood Falls or surrounding Chase County? We appraise fairly and apply trade value toward your next used car, truck, or SUV.",
    faqTitle: "Cottonwood Falls FAQs",
    faqDescription: "Questions from Cottonwood Falls and Flint Hills customers.",
    faqs: [
      {
        question: "Do you serve customers from Cottonwood Falls?",
        answer:
          "Yes. Cottonwood Falls and Chase County are part of our Flint Hills service area. Many customers visit our Emporia lot for better selection and financing support.",
      },
      {
        question: "Can I finance a vehicle if I live in Cottonwood Falls?",
        answer:
          "Chase County residents can finance through DLF Auto Sales. We submit to multiple lenders and discuss options based on your credit and budget.",
      },
      {
        question: "Do you accept trade-ins from nearby cities?",
        answer:
          "We welcome trade-ins from Cottonwood Falls, Strong City, Elmdale, and other Flint Hills communities.",
      },
      {
        question: "What is the drive to DLF Auto Sales from Cottonwood Falls?",
        answer:
          "The drive to our Emporia dealership is reasonable for a same-day shopping trip. Call ahead and we can prepare vehicles you want to see.",
      },
    ],
    mapQuery: "Emporia+KS+DLF+Auto+Sales",
    nearbyTowns: ["Strong City", "Chase County", "Council Grove"],
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

export function isServiceAreaSlug(slug: string): slug is ServiceAreaSlug {
  return (SERVICE_AREA_SLUGS as readonly string[]).includes(slug);
}

export function getServiceAreaPath(slug: ServiceAreaSlug): string {
  return `/${slug}`;
}
