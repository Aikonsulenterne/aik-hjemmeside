import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "VisionAI",
  description:
    "VisionAI giver din virksomhed AI-drevet indsigt på tværs af jeres systemer. Ét dashboard, fuld overblik.",
};

const features = [
  {
    title: "Ét samlet overblik",
    description:
      "VisionAI samler data fra jeres CRM, ERP, e-commerce og andre systemer i ét intelligent dashboard.",
    iconPath: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z",
  },
  {
    title: "AI-drevne anbefalinger",
    description:
      "Få automatiske forslag til handlinger baseret på mønstre i jeres data — før problemer opstår.",
    iconPath: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
  {
    title: "Naturligt sprog",
    description:
      "Stil spørgsmål til jeres data på almindeligt dansk. Ingen SQL, ingen teknisk viden krævet.",
    iconPath: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
  },
  {
    title: "Realtidsindsigt",
    description:
      "Se hvad der sker i jeres virksomhed lige nu. Ikke rapporter fra i går — indsigt fra i dag.",
    iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
];

export default function VisionAI() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>

      {/* Product preview placeholder */}
      <section className="bg-gray-50 py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gray-200 rounded-2xl aspect-video max-w-4xl mx-auto flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-gray-300 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
                <span className="text-gray-400 text-sm">
                  VisionAI dashboard preview
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Natural language example */}
      <section className="py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold text-center mb-4">
                Prøv det selv
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center mb-10">
                Stil spørgsmål på dansk
              </h2>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-400 mb-1">Du spørger:</p>
                    <p className="font-semibold">
                      &ldquo;Hvilke kunder har vi ikke kontaktet i over 30 dage?&rdquo;
                    </p>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <p className="text-sm text-primary mb-1">VisionAI svarer:</p>
                    <p className="text-gray-700">
                      Jeg har fundet 12 kunder der ikke er kontaktet i over 30 dage.
                      3 af dem har åbne tilbud. Skal jeg oprette opfølgningsopgaver?
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center mb-12">
              Hvad kan VisionAI?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={feature.iconPath}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold tracking-heading mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>
    </>
  );
}
