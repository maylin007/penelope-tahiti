import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const collections = [
  {
    title: "Lingerie",
    description: "Aubade, Lise Charmel, Huit — des collections d'exception.",
    image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/630415402_1412471920578153_566468503625723847_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vpHsEM8kVKkQ7kNvwGNS_D_&_nc_oc=Adr5zllqz-ex-G8OTaKq7KsO8mqlQ_Yo7qKHMbevVt1HaN2n29KBOopX9ccFQn8pi1g&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=bXJpr-sL_xas-p1njzS7pQ&_nc_ss=7a32e&oh=00_Afy2ZUDOwtJpb3ZDTSUO-RaNNFo3gpLP-0ZrF_dGpHQm3w&oe=69C8F61E",
    href: "/collections#lingerie",
  },
  {
    title: "Prêt-à-porter",
    description: "Robes, ensembles, kimonos — l'élégance au quotidien.",
    image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/631139081_1416909750134370_7824805208288576683_n.jpg?stp=dst-jpg_p843x403_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Wa6zpjk9pdUQ7kNvwHtnihd&_nc_oc=AdrFt6RzN6kyvuucW51xsTHcCNa3ZwKiSBgpMF6AVJcglFBeXb-228yL0DdUhtiXgho&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=5kEG1NCr76gJWHnPH8fKhA&_nc_ss=7a32e&oh=00_AfwrNKLfZnajy-yQ9dRxfZLLJkVygKJNL66FYIAeVu_wNg&oe=69C8F173",
    href: "/collections#pret-a-porter",
  },
  {
    title: "Accessoires",
    description: "Sacs, bijoux, accessoires — les détails qui font la différence.",
    image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/644506903_1431644368660908_1013149928262118661_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=T_9TfTPqFSQQ7kNvwElNT5M&_nc_oc=AdpKiU0UX7YzPdZWhXEtXmf30PJQt5q-_GsSlIQu2hFaAlsIPo_OwIfKI3kjaY3Vxmw&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=6ZWCdOOBYDXEEHzjtT9mxA&_nc_ss=7a32e&oh=00_AfwAFZPrVHSQQ9ou2HajoiIg6MI-8-tHUFz3o1WkSTgO8A&oe=69C8DDCE",
    href: "/collections#accessoires",
  },
  {
    title: "Lingerie Invisible",
    description: "Magic Bodyfashion — maintien invisible, effet naturel.",
    image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/646561728_1432834178541927_1357319315213211448_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=dhugReP7mgcQ7kNvwEp48m5&_nc_oc=AdoaZqdmLYVGjg0p2iKDax6Q1bBRvtZ-3tjJI_qDWHoudYVquT7zki2lQHwUUsZ0A64&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=XrNVCINf5_jZyx6ldl3GLg&_nc_ss=7a32e&oh=00_Afy9QZ8bF2w03IkO7jEGlKjd9I3vl31j7FUDXtD2Gcx5Ew&oe=69C8E828",
    href: "/collections#lingerie-invisible",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1333590976/photo/cosmetic-cream-background-design.jpg?s=612x612&w=0&k=20&c=sWhFBIbHFyks6Tv2OHw08nQzG_pal3Oiu53PcT_Mcnc=')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/50 mb-8">
              Papeete, Tahiti — Depuis 41 ans
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-light text-white leading-[1.1] mb-8">
              L&apos;élégance
              <br />
              <span className="text-brand-light">se vit au quotidien</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light">
              Lingerie fine, maillots de bain et prêt-à-porter.
              Les plus belles marques françaises au coeur de Papeete.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/collections" className="bg-brand text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-brand-dark">
                Voir les collections
              </Link>
              <Link href="/la-boutique" className="border border-white/30 text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-white/10">
                Notre histoire
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Collections grid */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Nos collections</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark">Raffinement et sensualité</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {collections.map((col, i) => (
              <AnimatedSection key={col.title} delay={i * 0.1}>
                <Link href={col.href} className="group block relative overflow-hidden aspect-[4/3]">
                  <img src={col.image} alt={col.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-white font-light mb-2">{col.title}</h3>
                    <p className="text-white/60 text-sm font-light">{col.description}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-28 px-6 bg-light">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Nos marques</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-light text-dark mb-16">L&apos;excellence française</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-16">
              {["Aubade", "Lise Charmel", "Huit", "Magic Bodyfashion"].map((brand) => (
                <span key={brand} className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-light text-muted/40 hover:text-dark transition-colors duration-500">{brand}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature split */}
      <section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-square lg:aspect-auto">
            <img src="https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/635134276_1421326866359325_9017447100309529412_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=OP62qQ_F9fEQ7kNvwGtpwgs&_nc_oc=AdpKfiu0fX4vrUVqMwCUuYqWGY6iEEWm9iV4K9thaTNpLf3vuXx0nB5dCNF1ksOZlpE&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=ZrMlbKnIvow6Ud5YCI_qdg&_nc_ss=7a32e&oh=00_AfxqAjvf_rD8IQb7yjTZkbhN1eAvHBBqP_l1vMtg0uOAjw&oe=69C8F5F6" alt="Collection lingerie Pénélope" className="w-full h-full object-cover" />
          </div>
          <AnimatedSection className="flex items-center px-8 lg:px-20 py-20">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Notre philosophie</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-light text-dark mb-8 leading-tight">La lingerie comme<br />une seconde peau</h2>
              <p className="text-muted leading-relaxed mb-6 text-[15px]">Depuis 41 ans, la Boutique Pénélope sélectionne les plus belles collections de lingerie française. Chaque pièce est choisie pour sa qualité, son élégance et sa capacité à sublimer la féminité.</p>
              <p className="text-muted leading-relaxed mb-10 text-[15px]">De la dentelle délicate aux coupes contemporaines, nous proposons une lingerie qui se vit au quotidien — raffinée, confortable, et résolument féminine.</p>
              <Link href="/collections" className="inline-block border border-dark text-dark px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-dark hover:text-white">Découvrir les collections</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-light text-muted italic leading-relaxed mb-6">&ldquo;La lingerie parfaite ne se voit pas, mais elle change tout.&rdquo;</p>
            <div className="w-8 h-px bg-brand mx-auto mb-4" />
            <p className="text-[13px] tracking-wide uppercase text-muted">Boutique Pénélope</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
