import type { Metadata } from "next";
import BoutiqueContent from "@/components/BoutiqueContent";

export const metadata: Metadata = {
  title: "La Boutique",
  description: "Depuis 41 ans, la Boutique Pénélope propose les plus belles marques de lingerie française à Papeete, Tahiti.",
};

export default function LaBoutiquePage() {
  return <BoutiqueContent />;
}
