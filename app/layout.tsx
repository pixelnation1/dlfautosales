import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadProvider } from "@/components/leads/LeadProvider";
import { StickyLeadSystem } from "@/components/leads/StickyLeadSystem";
import { JsonLd } from "@/components/shared/JsonLd";
import { autoDealerSchema } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = pageMetadata.home;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white pb-[calc(4.25rem+env(safe-area-inset-bottom))] text-text-dark antialiased lg:pb-0">
        <JsonLd data={autoDealerSchema()} />
        <LeadProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyLeadSystem />
        </LeadProvider>
      </body>
    </html>
  );
}
