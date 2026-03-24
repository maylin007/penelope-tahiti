import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "La Boutique",
  description: "Depuis 41 ans, la Boutique Pénélope propose les plus belles marques de lingerie française à Papeete, Tahiti.",
};

export default function LaBoutiquePage() {
  return (
    <>
      <section className="pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="flex items-center px-6 lg:px-20 py-28">
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">Notre histoire</p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-8 leading-tight">
                41 ans de féminité
                <br />
                et d&apos;élégance
              </h1>
              <p className="text-muted leading-relaxed mb-6 text-[15px]">
                Depuis 1984, la Boutique Pénélope est le rendez-vous incontournable
                des femmes de Papeete qui recherchent l&apos;élégance et le raffinement.
              </p>
              <p className="text-muted leading-relaxed mb-6 text-[15px]">
                Située Rue Lagarde, en plein centre-ville, notre boutique vous
                accueille dans un écrin de douceur où chaque pièce est sélectionnée
                avec passion pour sublimer votre féminité.
              </p>
              <p className="text-muted leading-relaxed text-[15px]">
                Des grandes maisons de lingerie française aux accessoires les
                plus raffinés, nous vous guidons dans vos choix avec
                bienveillance et expertise.
              </p>
            </AnimatedSection>
          </div>
          <div className="aspect-square lg:aspect-auto">
            <img
              src="https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/654759866_1447362560422422_4121313510599101042_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=YXqGXyIALPEQ7kNvwH2rXlb&_nc_oc=AdrGavzLW_7BR68pHbfWdRksRoYp7rCN-3tom9QbmrHkMpag6h19-Fkx8uOu8XQBIgY&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=Kk9fJaALFJMoZBH1IFB7oA&_nc_ss=7a32e&oh=00_AfysAolReaph3NOWee6j4Mr6rokq64KiGxdkp0kwFd95RA&oe=69C8E606"
              alt="Boutique Pénélope — 41 ans"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-28 px-6 bg-light">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Nos partenaires</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-light text-dark">Les marques que nous aimons</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: "Aubade", text: "Maison française de lingerie de luxe. L'art de la séduction depuis 1958." },
              { name: "Lise Charmel", text: "Lingerie haut de gamme lyonnaise. Dentelle, broderie et savoir-faire d'exception." },
              { name: "Huit", text: "Lingerie française contemporaine. Des coupes modernes qui subliment chaque morphologie." },
            ].map((brand, i) => (
              <AnimatedSection key={brand.name} delay={i * 0.15}>
                <div>
                  <div className="w-8 h-px bg-brand mb-6" />
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-light text-dark mb-4">{brand.name}</h3>
                  <p className="text-muted text-[15px] leading-relaxed">{brand.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <AnimatedSection className="flex items-center px-6 lg:px-20 py-28 order-2 lg:order-1">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Notre approche</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-light text-dark mb-8">Un conseil personnalisé</h2>
              <p className="text-muted leading-relaxed mb-6 text-[15px]">
                Chez Pénélope, nous croyons que la lingerie est bien plus qu&apos;un
                sous-vêtement. C&apos;est une seconde peau, un geste de beauté
                quotidien qui permet à chaque femme d&apos;exprimer sa personnalité
                et sa sensualité.
              </p>
              <p className="text-muted leading-relaxed mb-10 text-[15px]">
                Notre équipe vous accueille avec discrétion et bienveillance
                pour vous aider à trouver la pièce parfaite — celle qui vous
                fera vous sentir belle, confiante et féminine.
              </p>
              <Link href="/collections" className="inline-block border border-dark text-dark px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-dark hover:text-white">
                Voir les collections
              </Link>
            </div>
          </AnimatedSection>
          <div className="aspect-square lg:aspect-auto order-1 lg:order-2">
            <img
              src="https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/649242733_1438431841315494_1224294385280800993_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=f5wx4yfZWwIQ7kNvwEuAmHA&_nc_oc=Adq_Wf6g4k51K4LJHYaxfbbeNjZRrxmnvXVQ-u-kcAaYBYqqQ8MbWsQWEs_qWqIOF-A&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=3LPQqYQIM1cegFrL3LjzDg&_nc_ss=7a32e&oh=00_AfzFvEY0h8zsMSz0KnhkHJz5seT1rzfCrpys9u1Z_CLGzg&oe=69C8DA6C"
              alt="Collection lingerie"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
