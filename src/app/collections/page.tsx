import type { Metadata } from "next";
import CollectionsContent from "@/components/CollectionsContent";

export const metadata: Metadata = {
  title: "Collections",
  description: "Découvrez nos collections : lingerie fine Aubade et Lise Charmel, maillots de bain, prêt-à-porter et accessoires. Boutique Pénélope, Papeete.",
};

export default function CollectionsPage() {
  return <CollectionsContent />;
}
