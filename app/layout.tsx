import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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

export const metadata: Metadata = {
  title: {
    default: "DLF Auto Sales | Used Cars in Emporia, KS",
    template: "%s | DLF Auto Sales",
  },
  description:
    "DLF Auto Sales LLC — quality used cars in Emporia, KS. Easy auto financing in Emporia KS, trade-ins welcome. Your trusted used car dealership near me.",
  keywords: [
    "used cars Emporia KS",
    "auto financing Emporia KS",
    "used car dealership near me",
    "DLF Auto Sales",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-text-dark antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
