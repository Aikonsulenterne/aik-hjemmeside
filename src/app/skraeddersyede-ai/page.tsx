import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Skræddersyede AI-løsninger",
  description:
    "Vi bygger AI-løsninger der passer præcis til din virksomheds behov. Ingen standardløsninger — kun skræddersyet AI.",
};

const benefits = [
  {
    title: "Bygget til jeres virksomhed",
    description:
      "Vi analyserer jeres arbejdsgange og bygger AI der passer præcis til jeres behov — ikke en one-size-fits-all løsning.",
  },
  {
    title: "Integration med jeres systemer",
    description:
      "Vi integrerer AI direkte i de systemer I allerede bruger. CRM, ERP, e-commerce, kundeservice — vi binder det hele sammen.",
  },
  {
    title: "Ingen IT-afdeling krævet",
    description:
      "Vi tager os af alt det tekniske. I skal ikke have en IT-afdeling eller teknisk viden for at komme i gang.",
  },
  {
    title: "Målbare resultater fra dag 1",
    description:
      "Vi definerer klare KPI'er fra start, så I kan se præcis hvad AI gør for jeres bundlinje.",
  },
];

const process = [
  {
    step: 1,
    title: "Afklaring",
    description:
      "Vi starter med en gratis 45-minutters samtale om jeres virksomhed, udfordringer og muligheder med AI.",
  },
  {
    step: 2,
    title: "Analyse & forslag",
    description:
      "Vi dykker ned i jeres arbejdsgange og præsenterer et konkret forslag med forventet ROI og tidsplan.",
  },
  {
    step: 3,
    title: "Udvikling",
    description:
      "Vi bygger løsningen i tæt samarbejde med jer. I får løbende opdateringer og kan teste undervejs.",
  },
  {
    step: 4,
    title: "Lancering & support",
    description:
      "Vi implementerer løsningen i jeres hverdag og sikrer at alt kører. Vi står klar med support bagefter.",
  },
];

export default function SkraeddersyedeAI() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              Skræddersyede løsninger
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-heading text-gray-900 leading-[1.05]">
              AI der passer præcis til jeres virksomhed
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 mt-6 leading-relaxed">
              Vi bygger ikke standardløsninger. Vi bygger AI der løser jeres
              specifikke udfordringer — og som integrerer med de systemer I
              allerede bruger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button variant="primary" size="lg" href="/kontakt">
                Book gratis AI-afklaring
              </Button>
              <Button variant="secondary" size="lg" href="/cases">
                Se eksempler
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center mb-12">
            Hvad gør vores løsninger anderledes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold tracking-heading mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center mb-12">
            Fra idé til løsning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold tracking-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
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
              Klar til at automatisere?
            </h2>
            <p className="text-lg text-gray-500 mt-4 leading-relaxed">
              Book en gratis 45-minutters AI-afklaring. Vi finder ud af præcis
              hvor AI kan spare jer tid — uden forpligtelser.
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
