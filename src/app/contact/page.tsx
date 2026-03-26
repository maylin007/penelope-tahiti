import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Boutique Pénélope — Rue Lagarde, Papeete. Téléphone : 40 42 93 87. Ouvert du lundi au samedi.",
};

export default function ContactPage() {
  return <ContactContent />;
}
