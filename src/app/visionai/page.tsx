import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "VisionAI — AI Konsulenterne",
  description:
    "VisionAI giver din virksomhed AI-drevet indsigt på tværs af jeres systemer. Ét dashboard, fuld overblik.",
};

const features = [
  {
    title: "Ét samlet overblik",
    description:
      "VisionAI samler data fra jeres CRM, ERP, e-commerce og andre systemer i ét intelligent dashboard.",
  },
  {
    title: "AI-drevne anbefalinger",
    description:
      "Få automatiske forslag til handlinger baseret på mønstre i jeres data — før problemer opstår.",
  },
  {
    title: "Naturligt sprog",
    description:
      "Stil spørgsmål til jeres data på almindeligt dansk. Ingen SQL, ingen teknisk viden krævet.",
  },
  {
    title: "Realtidsindsigt",
    description:
      "Se hvad der sker i jeres virksomhed lige nu. Ikke rapporter fra i går — indsigt fra i dag.",
  },
];

export default function VisionAI() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              VisionAI
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-heading text-gray-900 leading-[1.05]">
              Se jeres virksomhed med nye øjne
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 mt-6 leading-relaxed">
              VisionAI giver jer AI-drevet indsigt på tværs af alle jeres
              systemer. Stil spørgsmål på almindeligt dansk — få svar med det
              samme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button variant="primary" size="lg" href="/kontakt">
                Få en demo
              </Button>
              <Button variant="secondary" size="lg" href="/cases">
                Se VisionAI i praksis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product preview placeholder */}
      <section className="bg-gray-50 py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-200 rounded-2xl aspect-video max-w-4xl mx-auto flex items-center justify-center">
            <span className="text-gray-400 text-sm">
              VisionAI dashboard preview
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center mb-12">
            Hvad kan VisionAI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold tracking-heading mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-heading">
              Klar til at se jeres data i et nyt lys?
            </h2>
            <p className="text-white/60 mt-4 leading-relaxed">
              Book en gratis demo og se hvordan VisionAI kan give jer overblik
              over jeres virksomhed.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/kontakt">
                Book en demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
