export const SITE = {
  name: "DLF Auto Sales LLC",
  shortName: "DLF Auto Sales",
  tagline: "Used cars in Emporia, KS",
  phone: "(620) 555-0142",
  phoneHref: "tel:+16205550142",
  email: "sales@dlfautos.com",
  address: "1234 Commercial St, Emporia, KS 66801",
  hours: "Mon–Fri 9am–6pm · Sat 9am–4pm · Sun Closed",
  mapsQuery: "Emporia+KS+used+car+dealership",
  url: "https://www.dlfautos.com",
  /** Replace with your Google Business Profile reviews URL when ready */
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=DLF+Auto+Sales+Emporia+KS",
} as const;

export const ROUTES = {
  home: "/",
  inventory: "/inventory",
  financing: "/financing",
  /** Scroll target on financing page or vehicle detail */
  financingPreQualify: "/financing#pre-qualify",
  tradeIn: "/trade-in",
  about: "/about",
  contact: "/contact",
  areasWeServe: "/areas-we-serve",
  knowledge: "/knowledge",
  /** Legacy alias — redirects to knowledge hub */
  blog: "/blog",
} as const;

/** @see lib/nav.ts */
export { NAV_LINKS, isNavLinkActive } from "@/lib/nav";
export type { NavLink } from "@/lib/nav";
