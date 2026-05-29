import type { FAQItem } from "./faqs";
import type { Locale } from "@/lib/i18n/config";

const en: FAQItem[] = [
  {
    question: "Why should I buy from DLF Auto Sales?",
    answer:
      "DLF Auto Sales is a local Emporia dealership focused on affordable used vehicles, honest communication, and help with financing and trade-ins. Customers consistently mention Carlos and the team for being kind, flexible, and easy to work with.",
  },
  {
    question: "Does DLF Auto Sales help with financing?",
    answer:
      "Yes. DLF helps buyers secure financing and works with different credit situations. Many customers mention financing support and practical help getting into a vehicle.",
  },
  {
    question: "Does DLF Auto Sales accept trade-ins?",
    answer:
      "Yes. Trade-ins are welcome. You can apply your trade-in value toward your next vehicle and discuss options with the team on the lot.",
  },
  {
    question: "Does DLF Auto Sales speak Spanish?",
    answer:
      "Yes. Carlos and the team offer friendly support in English and Spanish for vehicle questions, financing, and trade-ins.",
  },
  {
    question: "Is DLF Auto Sales local to Emporia?",
    answer:
      "Yes. DLF Auto Sales is located in Emporia, KS and serves local drivers and nearby Kansas communities with used cars, trucks, and SUVs.",
  },
];

const es: FAQItem[] = [
  {
    question: "¿Por qué comprar en DLF Auto Sales?",
    answer:
      "DLF Auto Sales es un concesionario local en Emporia enfocado en vehículos usados a buen precio, comunicación clara y ayuda con financiamiento y entrega de su vehículo. Los clientes destacan a Carlos y al equipo por su amabilidad y flexibilidad.",
  },
  {
    question: "¿DLF Auto Sales ayuda con financiamiento?",
    answer:
      "Sí. DLF ayuda a los compradores a conseguir financiamiento y trabaja con diferentes situaciones de crédito. Muchos clientes mencionan apoyo con el financiamiento y ayuda práctica para conseguir un vehículo.",
  },
  {
    question: "¿DLF Auto Sales acepta entrega de vehículos?",
    answer:
      "Sí. Aceptamos su vehículo como parte de pago. Puede aplicar el valor hacia su próximo auto y hablar de las opciones con el equipo en el lote.",
  },
  {
    question: "¿DLF Auto Sales habla español?",
    answer:
      "Sí. Carlos y el equipo ofrecen atención amable en inglés y español para preguntas sobre vehículos, financiamiento y entrega de su vehículo.",
  },
  {
    question: "¿DLF Auto Sales es local de Emporia?",
    answer:
      "Sí. DLF Auto Sales está en Emporia, KS y atiende a conductores locales y comunidades cercanas con carros, camionetas y SUVs usados.",
  },
];

export function getWhyDlfFaqs(locale: Locale): FAQItem[] {
  return locale === "es" ? es : en;
}
