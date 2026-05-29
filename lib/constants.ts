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
} as const;

export const ROUTES = {
  home: "/",
  inventory: "/inventory",
  financing: "/financing",
  financingApplication: "/financing#application",
  tradeIn: "/trade-in",
  about: "/about",
  contact: "/contact",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "Inventory", href: ROUTES.inventory },
  { label: "Financing", href: ROUTES.financing },
  { label: "Trade-In", href: ROUTES.tradeIn },
  { label: "About", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
] as const;
