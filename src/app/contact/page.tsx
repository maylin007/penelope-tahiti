import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { HoursTable } from "@/components/OpenStatus";

export const metadata: Metadata = {
  title: "Contact",
  description: "Boutique Pénélope — Rue Lagarde, Papeete. Téléphone : 40 42 93 87. Ouvert du lundi au samedi.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Nous trouver</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-6">Contactez-nous</h1>
            <p className="text-muted text-base max-w-xl mx-auto font-light">Passez nous voir en boutique ou contactez-nous par téléphone.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedSection>
                <div className="space-y-10">
                  <div>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Téléphone</p>
                    <a href="tel:+68940429387" className="font-[family-name:var(--font-display)] text-3xl text-dark hover:text-brand transition-colors">40 42 93 87</a>
                  </div>

                  <div className="border-t border-divider pt-10">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Email</p>
                    <a href="mailto:penelopedomtom@gmail.com" className="text-dark text-[15px] hover:text-brand transition-colors">penelopedomtom@gmail.com</a>
                  </div>

                  <div className="border-t border-divider pt-10">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Adresse</p>
                    <p className="text-dark text-[15px]">Rue Lagarde</p>
                    <p className="text-dark text-[15px]">Papeete 98713, Tahiti</p>
                    <p className="text-muted text-sm mt-2">Centre-ville de Papeete</p>
                  </div>

                  <div className="border-t border-divider pt-10">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">Horaires d&apos;ouverture</p>
                    <HoursTable />
                  </div>

                  <div className="border-t border-divider pt-10 space-y-3">
                    <a href="https://m.me/penelopetahitiboutique" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-3 transition-colors duration-300">
                      <span className="w-10 h-10 border border-dark/20 flex items-center justify-center transition-all duration-300 group-hover:border-brand group-hover:bg-brand/5">
                        <svg className="w-4 h-4 text-muted group-hover:text-brand transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
                      </span>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-muted">Messenger</p>
                        <p className="text-dark text-[15px] group-hover:text-brand transition-colors">Envoyer un message</p>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/penelopetahitiboutique/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-3 transition-colors duration-300">
                      <span className="w-10 h-10 border border-dark/20 flex items-center justify-center transition-all duration-300 group-hover:border-brand group-hover:bg-brand/5">
                        <svg className="w-4 h-4 text-muted group-hover:text-brand transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </span>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-muted">Facebook</p>
                        <p className="text-dark text-[15px] group-hover:text-brand transition-colors">Boutique Penelope Tahiti</p>
                      </div>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2}>
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[500px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7!2d-149.567!3d-17.535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMyJzA2LjAiUyAxNDnCsDM0JzAxLjIiVw!5e0!3m2!1sfr!2spf!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Boutique Pénélope — Papeete"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
