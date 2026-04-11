import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cases — AI Konsulenterne",
  description:
    "Se hvordan vi har hjulpet danske virksomheder med AI-løsninger. Konkrete resultater fra virkelige kunder.",
};

const cases = [
  {
    company: "Wunderwear",
    category: "E-commerce / Kundeservice",
    challenge:
      "Brugte manuelt timer på at besvare kundehenvendelser og kategorisere ordrer.",
    solution:
      "AI-agent der automatisk besvarer kundehenvendelser og kategoriserer ordrer baseret på indhold og prioritet.",
    results: ["15 timer sparet per uge", "60 dage til fuld implementering"],
    quote:
      "Vi troede ikke det kunne gå så hurtigt. AI Konsulenterne forstod vores behov fra dag ét.",
  },
  {
    company: "Lavazza",
    category: "Intern AI / Procesoptimering",
    challenge:
      "Tidskrævende manuelle rapporteringsprocesser der tog fokus fra strategisk arbejde.",
    solution:
      "Automatiseret rapporteringssystem med AI-drevet databehandling og indsigter.",
    results: [
      "Halveret rapporteringstid",
      "Bedre datakvalitet",
    ],
    quote: null,
  },
  {
    company: "INDKOM",
    category: "Vidensbase / AI-agent",
    challenge:
      "Medarbejdere brugte lang tid på at finde information spredt over mange systemer.",
    solution:
      "AI-drevet vidensbase der samler og tilgængeliggør information på tværs af organisationen.",
    results: [
      "Hurtigere onboarding",
      "Mindre tid brugt på søgning",
    ],
    quote: null,
  },
  {
    company: "J.M Band",
    category: "Data & Indsigt",
    challenge:
      "Manglende overblik over data spredt på tværs af CRM, Shopify og diverse systemer.",
    solution:
      "AI-agent der giver indsigt på tværs af alle systemer via ét samlet interface.",
    results: [
      "Fuldt dataoverblik",
      "Bedre beslutningsgrundlag",
    ],
    quote: null,
  },
];

export default function Cases() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-heading text-gray-900 leading-[1.05]">
              Konkrete resultater fra vores kunder
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 mt-6 leading-relaxed">
              Vi lader resultaterne tale for sig selv. Her er et udvalg af
              virksomheder vi har hjulpet med AI.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {cases.map((c) => (
              <div
                key={c.company}
                className="bg-gray-50 rounded-2xl p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                      {c.category}
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold tracking-heading text-gray-900 mb-4">
                      {c.company}
                    </h2>
                    <div className="space-y-4 text-gray-500 leading-relaxed">
                      <p>
                        <span className="font-semibold text-gray-900">
                          Udfordring:{" "}
                        </span>
                        {c.challenge}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">
                          Løsning:{" "}
                        </span>
                        {c.solution}
                      </p>
                    </div>
                    {c.quote && (
                      <blockquote className="italic text-gray-500 border-l-4 border-primary pl-6 mt-6">
                        &ldquo;{c.quote}&rdquo;
                      </blockquote>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                      Resultater
                    </p>
                    {c.results.map((result) => (
                      <div
                        key={result}
                        className="bg-white rounded-xl p-4 shadow-sm"
                      >
                        <p className="text-lg font-bold text-primary tracking-heading">
                          {result}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900">
              Klar til at blive den næste case?
            </h2>
            <p className="text-lg text-gray-500 mt-4 leading-relaxed">
              Book en gratis AI-afklaring og find ud af hvad AI kan gøre for
              jeres virksomhed.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/kontakt">
                Book gratis AI-afklaring
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
