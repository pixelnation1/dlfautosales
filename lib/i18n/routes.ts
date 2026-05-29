import type { Locale } from "./config";
import { prefixPath } from "./paths";

export function routesFor(locale: Locale) {
  return {
    home: prefixPath("/", locale),
    inventory: prefixPath("/inventory", locale),
    financing: prefixPath("/financing", locale),
    financingPreQualify:
      locale === "es"
        ? "/es/financing#pre-qualify"
        : "/financing#pre-qualify",
    tradeIn: prefixPath("/trade-in", locale),
    about: prefixPath("/about", locale),
    contact: prefixPath("/contact", locale),
    whyDlf: prefixPath("/why-dlf", locale),
    findMyCar: locale === "es" ? "/es" : "/find-my-car",
    knowledge: locale === "es" ? "/es" : "/knowledge",
  };
}
