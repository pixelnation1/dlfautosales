import { LocaleHtmlLang } from "@/components/i18n/LocaleHtmlLang";

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LocaleHtmlLang locale="es" />
      {children}
    </>
  );
}
