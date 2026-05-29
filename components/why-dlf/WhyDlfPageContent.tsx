import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { routesFor } from "@/lib/i18n/routes";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ReviewsSection } from "@/components/shared/ReviewsSection";
import { FAQ } from "@/components/shared/FAQ";
import { JsonLd } from "@/components/shared/JsonLd";
import { getWhyDlfFaqs } from "@/lib/data/why-dlf-faqs";
import { faqPageSchema, autoDealerSchema } from "@/lib/seo/schema";

const content = {
  en: {
    heroEyebrow: "Why DLF",
    heroH1: "Why Buy From DLF Auto Sales?",
    heroSub:
      "A local Emporia used car dealership focused on affordable vehicles, financing help, and respectful customer service.",
    trustCards: [
      { title: "Local Emporia dealership", text: "A community-focused lot — not a corporate chain." },
      { title: "Financing help", text: "Support for different credit situations and real-world budgets." },
      { title: "Trade-ins welcome", text: "Apply your trade toward your next vehicle." },
      { title: "Spanish-speaking support", text: "Friendly help in English and Spanish." },
      { title: "Flexible and respectful", text: "Kind communication without high-pressure tactics." },
      { title: "Reliable used vehicles", text: "A variety of dependable cars, trucks, and SUVs." },
    ],
    realPeopleTitle: "We Help Real People Get Into Real Vehicles",
    realPeopleP1:
      "Not everyone walks in with perfect credit or a big down payment — and that is okay. DLF Auto Sales is built for practical, judgment-free help: test drives, honest answers, and options that fit your situation.",
    realPeopleP2:
      "Customers mention Carlos for going out of his way, securing financing, and helping them get into a vehicle that works for their life and budget.",
    moreThanTitle: "More Than Just a Car Lot",
    moreThanP1:
      "DLF is about communication you can trust — quick responses, clear explanations, and willingness to negotiate fairly.",
    moreThanP2:
      "From first visit to follow-up, the goal is simple: help you find a vehicle that fits your needs without making the process stressful.",
    financingTitle: "Financing Options Without the Pressure",
    financingP:
      "Explore pre-qualification, ask questions about payments, and learn what documents you may need — at your pace, with a team that respects your time.",
    financingCta: "Explore Financing",
    tradeTitle: "Trade-Ins Made Simple",
    tradeP:
      "Bring your current vehicle for a fair appraisal and apply the value toward your next ride. Trade-ins can be combined with financing for an easier upgrade.",
    tradeCta: "Learn About Trade-Ins",
    reviewsTitle: "What Customers Say",
    reviewsDesc: "Real reviews mentioning Carlos, financing, reliable vehicles, Spanish support, and fair deals.",
    faqTitle: "Why DLF Questions",
    faqDesc: "Quick answers about buying local in Emporia.",
    finalTitle: "Ready to Visit DLF?",
    finalDesc: "Browse inventory, get approved, or contact Carlos and the team today.",
    viewInventory: "View Inventory",
    getApproved: "Get Approved",
    contactUs: "Contact Us",
    quoteLucas:
      "Carlos was incredibly kind and always quick to communicate. I would absolutely recommend DLF Auto Sales for a used car in Emporia.",
    quoteMariana: "Carlos and his team are always willing to help anyone out. They also speak Spanish.",
    quoteManny:
      "He can even secure financing for your purchase and is also willing to negotiate and help you get into a vehicle.",
  },
  es: {
    heroEyebrow: "Por qué DLF",
    heroH1: "¿Por qué comprar en DLF Auto Sales?",
    heroSub:
      "Un concesionario local de autos usados en Emporia, enfocado en vehículos a buen precio, ayuda con financiamiento y atención respetuosa.",
    trustCards: [
      { title: "Concesionario local en Emporia", text: "Un lote para la comunidad — no una cadena corporativa." },
      { title: "Ayuda con financiamiento", text: "Apoyo para distintas situaciones de crédito y presupuestos reales." },
      { title: "Aceptamos su vehículo", text: "Aplique el valor de su auto hacia su próxima compra." },
      { title: "Atención en español", text: "Ayuda amable en inglés y español." },
      { title: "Flexibles y respetuosos", text: "Comunicación clara sin presión excesiva." },
      { title: "Vehículos usados confiables", text: "Variedad de carros, camionetas y SUVs." },
    ],
    realPeopleTitle: "Ayudamos a personas reales a conseguir un vehículo real",
    realPeopleP1:
      "No todos llegan con crédito perfecto o un enganche grande — y está bien. DLF Auto Sales está hecho para ayudar sin juzgar: pruebas de manejo, respuestas honestas y opciones que se ajusten a su situación.",
    realPeopleP2:
      "Los clientes mencionan a Carlos por su disposición a ayudar, conseguir financiamiento y apoyarles para entrar en un vehículo que funcione para su vida y presupuesto.",
    moreThanTitle: "Más que un lote de autos",
    moreThanP1:
      "DLF se trata de comunicación de confianza — respuestas rápidas, explicaciones claras y disposición a negociar de forma justa.",
    moreThanP2:
      "Desde la primera visita hasta el seguimiento, el objetivo es simple: ayudarle a encontrar un vehículo sin hacer el proceso estresante.",
    financingTitle: "Opciones de financiamiento sin presión",
    financingP:
      "Explore la pre-aprobación, pregunte sobre pagos y sepa qué documentos puede necesitar — a su ritmo, con un equipo que respeta su tiempo.",
    financingCta: "Ver financiamiento",
    tradeTitle: "Entrega de su vehículo, sin complicaciones",
    tradeP:
      "Traiga su vehículo actual para una valuación justa y aplique el valor hacia su próximo auto. Puede combinar entrega y financiamiento para facilitar el cambio.",
    tradeCta: "Sobre entrega de vehículo",
    reviewsTitle: "Lo que dicen los clientes",
    reviewsDesc:
      "Reseñas reales que mencionan a Carlos, financiamiento, vehículos confiables, español y tratos justos.",
    faqTitle: "Preguntas sobre DLF",
    faqDesc: "Respuestas rápidas sobre comprar local en Emporia.",
    finalTitle: "¿Listo para visitar DLF?",
    finalDesc: "Vea el inventario, solicite aprobación o contacte a Carlos y al equipo hoy.",
    viewInventory: "Ver inventario",
    getApproved: "Solicitar aprobación",
    contactUs: "Contáctenos",
    quoteLucas:
      "Carlos fue increíblemente amable y siempre respondió rápido. Recomendaría totalmente DLF Auto Sales para un auto usado en Emporia.",
    quoteMariana: "Carlos y su equipo siempre están dispuestos a ayudar. También hablan español.",
    quoteManny:
      "Puede conseguir financiamiento para su compra y está dispuesto a negociar y ayudarle a conseguir un vehículo.",
  },
} as const;

type WhyDlfPageContentProps = {
  locale: Locale;
};

export function WhyDlfPageContent({ locale }: WhyDlfPageContentProps) {
  const t = content[locale];
  const routes = routesFor(locale);
  const faqs = getWhyDlfFaqs(locale);

  return (
    <>
      <JsonLd data={[autoDealerSchema(), faqPageSchema(faqs)]} />

      <section className="relative overflow-hidden bg-dark pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,6,19,0.2)_0%,transparent_55%)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{t.heroEyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            {t.heroH1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">{t.heroSub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={routes.inventory} size="lg">{t.viewInventory}</Button>
            <Button href={routes.contact} variant="outline" size="lg">{t.contactUs}</Button>
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.trustCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-border-gray bg-white p-6 shadow-sm">
                <h2 className="font-display text-lg font-bold uppercase text-dark">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-dark/70">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold uppercase text-dark sm:text-3xl">{t.realPeopleTitle}</h2>
          <p className="mt-4 leading-relaxed text-text-dark/75">{t.realPeopleP1}</p>
          <p className="mt-4 leading-relaxed text-text-dark/75">{t.realPeopleP2}</p>
          <blockquote className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-sm italic text-text-dark/80">
            &ldquo;{t.quoteManny}&rdquo;
            <footer className="mt-2 text-xs font-semibold not-italic text-primary">— Manny</footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-dark py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-white sm:text-3xl">{t.moreThanTitle}</h2>
              <p className="mt-4 text-white/75">{t.moreThanP1}</p>
              <p className="mt-4 text-white/70">{t.moreThanP2}</p>
            </div>
            <div className="space-y-4">
              <blockquote className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-white/85">
                &ldquo;{t.quoteLucas}&rdquo;
                <footer className="mt-2 text-primary">— Lucas Chituck</footer>
              </blockquote>
              <blockquote className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-white/85">
                &ldquo;{t.quoteMariana}&rdquo;
                <footer className="mt-2 text-primary">— Mariana Cerda</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border-gray bg-light-gray py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-dark">{t.financingTitle}</h2>
              <p className="mt-4 text-text-dark/75">{t.financingP}</p>
              <Button href={routes.financing} className="mt-6">{t.financingCta}</Button>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-dark">{t.tradeTitle}</h2>
              <p className="mt-4 text-text-dark/75">{t.tradeP}</p>
              <Button href={routes.tradeIn} variant="secondary" className="mt-6">{t.tradeCta}</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t.reviewsTitle}</p>
        <p className="mx-auto mt-2 max-w-2xl px-4 text-text-dark/70">{t.reviewsDesc}</p>
      </div>

      <ReviewsSection background="light-gray" showCtas={false} />

      <FAQ title={t.faqTitle} description={t.faqDesc} items={faqs} />

      <section className="relative overflow-hidden bg-dark py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,6,19,0.2)_0%,transparent_70%)]" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">{t.finalTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">{t.finalDesc}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href={routes.inventory} size="lg">{t.viewInventory}</Button>
            <Button href={routes.financingPreQualify} size="lg" variant="outline">{t.getApproved}</Button>
            <Link href={routes.contact} className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10">
              {t.contactUs}
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/55">
            {SITE.address} ·{" "}
            <a href={SITE.phoneHref} className="font-semibold text-white hover:text-primary">{SITE.phone}</a>
          </p>
        </div>
      </section>
    </>
  );
}
