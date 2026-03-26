import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PhoneButton from "@/components/PhoneButton";
import { LanguageProvider } from "@/lib/LanguageContext";

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
  metadataBase: new URL("https://penelope-tahiti.vercel.app"),
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
  alternates: {
    canonical: "https://penelope-tahiti.vercel.app",
    languages: { "fr": "https://penelope-tahiti.vercel.app", "en": "https://penelope-tahiti.vercel.app" },
  },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          "name": "Boutique Pénélope",
          "address": { "@type": "PostalAddress", "streetAddress": "Rue Lagarde", "addressLocality": "Papeete", "postalCode": "98713", "addressCountry": "PF" },
          "telephone": "+68940429387",
          "openingHours": ["Mo-Fr 08:30-17:00", "Sa 08:30-14:00"],
          "url": "https://penelope-tahiti.vercel.app",
          "description": "Boutique de lingerie fine, maillots de bain et prêt-à-porter à Papeete depuis 41 ans. Aubade, Lise Charmel, Huit.",
          "foundingDate": "1985",
          "priceRange": "$$",
          "geo": { "@type": "GeoCoordinates", "latitude": -17.535, "longitude": -149.567 },
          "sameAs": ["https://www.facebook.com/penelopetahitiboutique/"]
        })}} />
        <LanguageProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <PhoneButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
