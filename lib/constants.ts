export const SITE = {
  name: "DLF Auto Sales LLC",
  tagline: "Used cars in Emporia, KS",
  phone: "(620) 555-0142",
  phoneHref: "tel:+16205550142",
  email: "sales@dlfautos.com",
  address: "1234 Commercial St, Emporia, KS 66801",
  hours: "Mon–Fri 9am–6pm · Sat 9am–4pm · Sun Closed",
  mapsQuery: "Emporia+KS+used+car+dealership",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Inventory", href: "#inventory" },
  { label: "Financing", href: "#financing" },
  { label: "Trade-In", href: "#trade-in" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
