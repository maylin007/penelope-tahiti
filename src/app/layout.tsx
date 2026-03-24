import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PhoneButton from "@/components/PhoneButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Boutique Pénélope — Papeete, Tahiti",
    template: "%s — Boutique Pénélope",
  },
  description:
    "Boutique de lingerie fine, maillots de bain et prêt-à-porter à Papeete depuis 41 ans. Aubade, Lise Charmel, Huit. Rue Lagarde, Papeete.",
  keywords: [
    "lingerie Papeete",
    "maillot de bain Tahiti",
    "boutique mode Papeete",
    "Aubade Tahiti",
    "Lise Charmel Papeete",
    "Penelope Tahiti",
  ],
  openGraph: {
    title: "Boutique Pénélope — Papeete, Tahiti",
    description: "Lingerie fine, maillots de bain et prêt-à-porter depuis 41 ans à Papeete.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <PhoneButton />
      </body>
    </html>
  );
}
