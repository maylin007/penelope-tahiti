import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Collections",
  description: "Découvrez nos collections : lingerie fine Aubade et Lise Charmel, maillots de bain, prêt-à-porter et accessoires. Boutique Pénélope, Papeete.",
};

interface CollectionItem {
  image: string;
  alt: string;
}

interface Collection {
  id: string;
  title: string;
  description: string;
  items: CollectionItem[];
}

const collections: Collection[] = [
  {
    id: "lingerie",
    title: "Lingerie",
    description: "Des pièces d'exception signées Aubade, Lise Charmel et Huit. Dentelle fine, satin délicat, coupes sublimantes.",
    items: [
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/649170193_1438431901315488_4295636187387604039_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=OMeWytfRbHAQ7kNvwGIFvhe&_nc_oc=Adq3W5ilRGbRY0YhpjvezU7ec21DsFNe9mO2EzUECHJJjefD2RNo2q2nI3_H2uopNHQ&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=y4SYDndjWzuadulzQjGhTA&_nc_ss=7a32e&oh=00_AfxxT5w1XuUhABRknyEfVwYn6HanqBMinQ7mIENfzu_APQ&oe=69C8DF96", alt: "Ensemble champagne Aubade" },
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/649861504_1438431871315491_7027604958346934162_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MOCQkWlpjDgQ7kNvwFnweOR&_nc_oc=AdroAGgNXeqBax_Slgzi7kaCQxGfInZ1dDP73-7nYfFLy_RzI3BnN91zrxPaztzMzH4&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=BviSGROJ0RLYDRoYfeAGxw&_nc_ss=7a32e&oh=00_Afy0XxNpcwGtitZhYCXrwg_U_2i5C4AXIE-JP46jgUi3yg&oe=69C8EEA9", alt: "Lingerie dentelle fine" },
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/630415402_1412471920578153_566468503625723847_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vpHsEM8kVKkQ7kNvwGNS_D_&_nc_oc=Adr5zllqz-ex-G8OTaKq7KsO8mqlQ_Yo7qKHMbevVt1HaN2n29KBOopX9ccFQn8pi1g&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=bXJpr-sL_xas-p1njzS7pQ&_nc_ss=7a32e&oh=00_Afy2ZUDOwtJpb3ZDTSUO-RaNNFo3gpLP-0ZrF_dGpHQm3w&oe=69C8F61E", alt: "Dentelle et transparence" },
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/627838519_1412471943911484_3121742957080493889_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=hqVKpxFOGDAQ7kNvwGCSG6t&_nc_oc=AdqeOjGgP6N6ZpM_H2LfV6Y7_TkXFX1eMbk8t9Tx3M4XmSPtFJAgt6XSIYi8tFNls6U&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=bXJpr-sL_xas-p1njzS7pQ&_nc_ss=7a32e&oh=00_AfyQ42ezHZGf9aZ4yf2NRzIsONeMLnQCaSD7OigUS0FYgQ&oe=69C8FC62", alt: "Lingerie raffinée" },
    ],
  },
  {
    id: "pret-a-porter",
    title: "Prêt-à-porter",
    description: "Robes chinoises, kimonos satinés, ensembles élégants — des pièces d'exception pour chaque occasion.",
    items: [
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/631139081_1416909750134370_7824805208288576683_n.jpg?stp=dst-jpg_p843x403_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Wa6zpjk9pdUQ7kNvwHtnihd&_nc_oc=AdrFt6RzN6kyvuucW51xsTHcCNa3ZwKiSBgpMF6AVJcglFBeXb-228yL0DdUhtiXgho&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=5kEG1NCr76gJWHnPH8fKhA&_nc_ss=7a32e&oh=00_AfwrNKLfZnajy-yQ9dRxfZLLJkVygKJNL66FYIAeVu_wNg&oe=69C8F173", alt: "Robe chinoise satin" },
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/632830288_1416909766801035_4925702060876448209_n.jpg?stp=dst-jpg_p843x403_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=T8_p5aJLchsQ7kNvwE3OWP8&_nc_oc=Adp9t9m8S9wOTazxN-98MJjNtUDoA3agg-aDtwu23ZaRSG4zXy3yZajd24yMteDiPLw&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=5kEG1NCr76gJWHnPH8fKhA&_nc_ss=7a32e&oh=00_AfwyzN-bgnFLu98sJY71BVY-33BRHn3a1D6YSca3pOXYoQ&oe=69C8E112", alt: "Kimono et robe" },
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/635134276_1421326866359325_9017447100309529412_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=OP62qQ_F9fEQ7kNvwGtpwgs&_nc_oc=AdpKfiu0fX4vrUVqMwCUuYqWGY6iEEWm9iV4K9thaTNpLf3vuXx0nB5dCNF1ksOZlpE&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=ZrMlbKnIvow6Ud5YCI_qdg&_nc_ss=7a32e&oh=00_AfxqAjvf_rD8IQb7yjTZkbhN1eAvHBBqP_l1vMtg0uOAjw&oe=69C8F5F6", alt: "Parure fuchsia kimono" },
    ],
  },
  {
    id: "accessoires",
    title: "Accessoires",
    description: "Sacs tressés, bijoux, accessoires intimes — les finitions parfaites d'un look réussi.",
    items: [
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/644506903_1431644368660908_1013149928262118661_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=T_9TfTPqFSQQ7kNvwElNT5M&_nc_oc=AdpKiU0UX7YzPdZWhXEtXmf30PJQt5q-_GsSlIQu2hFaAlsIPo_OwIfKI3kjaY3Vxmw&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=6ZWCdOOBYDXEEHzjtT9mxA&_nc_ss=7a32e&oh=00_AfwAFZPrVHSQQ9ou2HajoiIg6MI-8-tHUFz3o1WkSTgO8A&oe=69C8DDCE", alt: "Sac tressé noir" },
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/644338466_1431644421994236_103847481934639738_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=X7jySbYNPawQ7kNvwHGOU7G&_nc_oc=AdpIeZCPtbdz6fC1oygqJIq2avkt8bDZfM1vGXluo5WoGbstkvhA7CCX99ARLUohZgs&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=qu-hZ6fFWNcoisunxw4Nqw&_nc_ss=7a32e&oh=00_AfzY_WdE1ANMFd50obujtLeQd7FCcIIdk48ATEEtjA7Hmg&oe=69C8E330", alt: "Sac tressé blanc" },
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/645131677_1431644415327570_6694345087757378976_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=P9dIRo_OnzYQ7kNvwFmOya7&_nc_oc=AdpnAerAklb7l-5gU8MV2_eiGCYGRy0q5lfdn2FG73Cp6_ZSfnVGQlzJiLz-B48BOoA&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=LdLluOkM8zknVlVBWCh3YQ&_nc_ss=7a32e&oh=00_AfwypM59X1EMXWKJ_UATFdB1M0SaUUo-w7kc5xEvOZPdbw&oe=69C8E33D", alt: "Accessoire mode" },
    ],
  },
  {
    id: "maillots",
    title: "Maillots de bain",
    description: "Des coupes étudiées pour sublimer chaque silhouette sur les plus belles plages de Polynésie.",
    items: [
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/646561728_1432834178541927_1357319315213211448_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=dhugReP7mgcQ7kNvwEp48m5&_nc_oc=AdoaZqdmLYVGjg0p2iKDax6Q1bBRvtZ-3tjJI_qDWHoudYVquT7zki2lQHwUUsZ0A64&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=XrNVCINf5_jZyx6ldl3GLg&_nc_ss=7a32e&oh=00_Afy9QZ8bF2w03IkO7jEGlKjd9I3vl31j7FUDXtD2Gcx5Ew&oe=69C8E828", alt: "Magic Bodyfashion" },
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/644474462_1432834168541928_5038808232109591186_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_ydo5bEjXwoQ7kNvwHN62TT&_nc_oc=AdqpWZEFySRYj9p8Ep1gk1BHsGSe0YAymYVbFAkKM5pp-qh5W_pbpZAcxffvfMOK_8k&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=5QTjiYSaVdUisbGqzC7xsw&_nc_ss=7a32e&oh=00_AfwvHRKGQr1g3-RbvJM7tt5YSFNROAXhE7JtfY6J7oT3YA&oe=69C8E69E", alt: "Maillots collection" },
      { image: "https://scontent.fppt1-1.fna.fbcdn.net/v/t39.30808-6/645206239_1432834231875255_6334690387828395469_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=5JF543EF8d4Q7kNvwEgXrZd&_nc_oc=AdoazeRDPMePcRflQjjdutgeIvplbMkRT2q92pIFWjR9PE_QZpzypGswWLWBC6xyHPw&_nc_zt=23&_nc_ht=scontent.fppt1-1.fna&_nc_gid=TS-7lu4kA-gw6auA1sn2-Q&_nc_ss=7a32e&oh=00_AfzzPI7gZa4CFWQMHqDNQ0WjxZkCeUGTCoenbhediUkirQ&oe=69C8FFAF", alt: "Collection maillots" },
    ],
  },
];

export default function CollectionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Nos collections</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-6">Raffinement et sensualité</h1>
            <p className="text-muted text-base max-w-xl mx-auto font-light leading-relaxed">Aubade, Lise Charmel, Huit — les plus belles marques françaises sélectionnées avec soin depuis 41 ans.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-divider py-3 px-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-6 justify-start md:justify-center">
          {collections.map((col) => (
            <a key={col.id} href={`#${col.id}`} className="flex-shrink-0 text-[12px] tracking-wider uppercase text-muted hover:text-brand transition-colors whitespace-nowrap py-1">{col.title}</a>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {collections.map((collection, index) => (
          <section key={collection.id} id={collection.id} className={`scroll-mt-40 py-20 ${index < collections.length - 1 ? "border-b border-divider" : ""}`}>
            <AnimatedSection>
              <div className="mb-12">
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-3">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-light text-dark mb-4">{collection.title}</h2>
                <p className="text-muted text-[15px] max-w-2xl leading-relaxed">{collection.description}</p>
              </div>
            </AnimatedSection>

            <div className={`grid gap-1 ${collection.items.length === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 md:grid-cols-3"}`}>
              {collection.items.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="overflow-hidden aspect-[3/4]">
                    <img src={item.image} alt={item.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted text-sm">Disponible en boutique — Contactez-nous pour les tailles et disponibilités</p>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
