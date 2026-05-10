/**
 * AIK Next.js Page Template
 *
 * Drop-in starter for en ny side i AIK-projektet (eller et nyt AIK-baseret projekt).
 * Følger brand-konventionerne: hvid baggrund, hero med orange highlight,
 * primary + secondary CTA, FadeIn ved scroll, final CTA i bunden.
 *
 * Tilpas:
 *   - Headline + sub
 *   - Sektion-indhold mellem hero og final CTA
 *   - SEO-metadata (title, description)
 */

import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Sidetitel — AI Konsulenterne",
  description:
    "Kort beskrivelse i 1-2 sætninger. Brug konkrete tal og fjern risiko.",
};

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden">
        <div className="hero-glow" />

        <div className="relative mx-auto max-w-5xl px-6 md:px-8 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-6">
              Eyebrow / kategori
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="tracking-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
              Konkret resultat <br />
              med <span className="text-primary">skræddersyet AI</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
              Sub-headline der kvantificerer løftet. 1-2 sætninger.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button cal size="lg">Book gratis afklaring</Button>
              <Button href="/cases" variant="secondary" size="lg">
                Se cases
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTENT — udskift med sidens egne sektioner */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <FadeIn>
            <h2 className="tracking-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
              Sektion-overskrift
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Brødtekst. Hold afsnit korte — 2-4 sætninger. Tal til kunden i "I/jer".
              Brug konkrete tal hvor muligt.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* RISK REVERSAL */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 md:px-8 text-center">
          <div className="accent-line mx-auto mb-8" />
          <FadeIn>
            <h2 className="tracking-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
              Vores garanti
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Finder vi ikke <strong>en konkret AI-mulighed</strong> der kan spare jer tid
              i mødet — så koster det jer ingenting.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
          <FadeIn>
            <h2 className="tracking-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
              Klar til at se hvad AI kan gøre <br />
              for <span className="text-primary">jeres virksomhed?</span>
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Book en gratis 45-minutters AI-afklaring. Ingen forpligtelse.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <Button cal size="lg">Book gratis afklaring</Button>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="mt-6 text-sm text-gray-400">
              Eller ring direkte til Alexander på{" "}
              <a href="tel:+4525547074" className="text-primary hover-underline">
                +45 25 54 70 74
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
