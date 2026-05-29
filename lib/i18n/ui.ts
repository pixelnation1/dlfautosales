import type { Locale } from "./config";

export type UiLabels = {
  price: string;
  mileage: string;
  financing: string;
  tradeIn: string;
  contact: string;
  viewDetails: string;
  getApproved: string;
  inventory: string;
  ourPrice: string;
  estPayment: string;
  onLot: string;
  perMonth: string;
  viewInventory: string;
  contactUs: string;
  getPreApproved: string;
  readMore: string;
  home: string;
  about: string;
  whyDlf: string;
  vehicleFinder: string;
  tips: string;
  callNow: string;
  startMySearch: string;
};

const UI_EN: UiLabels = {
  price: "Price",
  mileage: "Mileage",
  financing: "Financing",
  tradeIn: "Trade-In",
  contact: "Contact",
  viewDetails: "View Details",
  getApproved: "Get Approved",
  inventory: "Inventory",
  ourPrice: "Our Price",
  estPayment: "Est. Payment",
  onLot: "On Lot",
  perMonth: "/mo",
  viewInventory: "View Inventory",
  contactUs: "Contact Us",
  getPreApproved: "Get Pre-Qualified",
  readMore: "Read More",
  home: "Home",
  about: "About",
  whyDlf: "Why DLF",
  vehicleFinder: "Vehicle Finder",
  tips: "Tips",
  callNow: "Call Now",
  startMySearch: "Start My Search",
};

const UI_ES: UiLabels = {
  price: "Precio",
  mileage: "Millas",
  financing: "Financiamiento",
  tradeIn: "Entrega tu vehículo",
  contact: "Contacto",
  viewDetails: "Ver detalles",
  getApproved: "Solicitar aprobación",
  inventory: "Inventario",
  ourPrice: "Nuestro precio",
  estPayment: "Pago est.",
  onLot: "En el lote",
  perMonth: "/mes",
  viewInventory: "Ver inventario",
  contactUs: "Contáctenos",
  getPreApproved: "Solicitar aprobación",
  readMore: "Leer más",
  home: "Inicio",
  about: "Nosotros",
  whyDlf: "Por qué DLF",
  vehicleFinder: "Buscar vehículo",
  tips: "Consejos",
  callNow: "Llamar",
  startMySearch: "Iniciar búsqueda",
};

export function getUiLabels(locale: Locale): UiLabels {
  return locale === "es" ? UI_ES : UI_EN;
}

export function formatMileageLocalized(miles: number, locale: Locale): string {
  const formatted = new Intl.NumberFormat(locale === "es" ? "es-US" : "en-US").format(
    miles
  );
  return locale === "es" ? `${formatted} millas` : `${formatted} mi`;
}
