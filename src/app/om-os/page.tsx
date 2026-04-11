import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Om os — AI Konsulenterne",
  description:
    "Mød teamet bag AI Konsulenterne. Vi er passionerede om at gøre AI tilgængeligt for danske virksomheder.",
};

const values = [
  {
    title: "Nede på jorden",
    description:
      "Vi taler dansk — ikke tech-jargon. AI skal være tilgængeligt, ikke kompliceret.",
  },
  {
    title: "Resultater først",
    description:
      "Vi måler succes på jeres resultater, ikke på hvor fancy teknologien er.",
  },
  {
    title: "Ærlighed",
    description:
      "Hvis AI ikke er den rette løsning, siger vi det. Vi sælger ikke noget I ikke har brug for.",
  },
  {
    title: "Langsigtet samarbejde",
    description:
      "Vi bygger relationer, ikke bare løsninger. Vi er her når I har brug for os — også efter lancering.",
  },
];

export default function OmOs() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              Om os
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-heading text-gray-900 leading-[1.05]">
              Vi gør AI tilgængeligt for danske virksomheder
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 mt-6 leading-relaxed">
              AI Konsulenterne er et dansk AI-konsulenthus der hjælper SMV&apos;er
              med at spare tid og penge med skræddersyede AI-løsninger. Vi
              tror på at AI skal være nede på jorden — ikke raketvidenskab.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center mb-12">
            Teamet bag
          </h2>
          <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Foto</span>
              </div>
              <h3 className="text-xl font-bold tracking-heading">Alexander</h3>
              <p className="text-primary font-semibold text-sm mt-1">
                Founder & AI Konsulent
              </p>
              <p className="text-gray-500 mt-4 leading-relaxed text-sm">
                Alexander grundlagde AI Konsulenterne med en mission: at gøre AI
                tilgængeligt for alle danske virksomheder — uanset størrelse
                eller teknisk niveau.
              </p>
              <a
                href="tel:+4525547074"
                className="inline-block mt-4 text-sm text-primary font-semibold hover:underline"
              >
                +45 25 54 70 74
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center mb-12">
            Vores værdier
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-lg font-bold tracking-heading mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
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
              Lad os tage en snak
            </h2>
            <p className="text-lg text-gray-500 mt-4 leading-relaxed">
              Vi er altid klar til en uforpligtende samtale om jeres
              virksomhed og muligheder med AI.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/kontakt">
                Kontakt os
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
