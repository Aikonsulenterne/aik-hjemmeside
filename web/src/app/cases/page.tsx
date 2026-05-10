import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SubpageCTA from "@/components/sections/SubpageCTA";
import { getCases, type Case } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "AI Cases Danske Virksomheder | Konkrete Resultater",
  description:
    "Se konkrete AI-cases fra danske virksomheder: Lavazza HR-agent, Wunderwear webshop-automatisering, INDKOM og flere. Resultater I kan måle.",
  alternates: { canonical: "/cases" },
  keywords: [
    "AI cases Danmark",
    "AI implementering eksempler",
    "AI case study",
    "danske AI projekter",
    "Lavazza AI HR",
    "Wunderwear AI",
  ],
  openGraph: {
    title: "AI Cases — Konkrete Resultater fra Danske Virksomheder",
    description:
      "Lavazza, Wunderwear, INDKOM, J.M Band — se hvordan de bruger AI til at spare tid.",
    url: "/cases",
  },
};

const categoryLabels: Record<Case["category"], string> = {
  "intern-ai": "Intern AI",
  webshop: "E-commerce",
  vidensbase: "Vidensbase",
  hr: "HR / Intern AI",
  andet: "AI-løsning",
};

function splitResult(result: string): string[] {
  return result
    .split(/\n+/)
    .map((s) => s.replace(/^[-•*]\s*/, "").trim())
    .filter((s) => s.length > 0)
    .slice(0, 3);
}

export default async function Cases() {
  const allCases = await getCases().catch(() => [] as Case[]);
  const featured = allCases.find((c) => c.featured) ?? allCases[0];
  const rest = allCases.filter((c) => c.id !== featured?.id);

  return (
    <>
      {/* Hero */}
      <section className="pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-heading text-gray-900 leading-[1.05]">
                Konkrete resultater fra vores kunder
              </h1>
              <p className="text-lg lg:text-xl text-gray-500 mt-6 leading-relaxed">
                Vi lader resultaterne tale for sig selv. Her er et udvalg af
                virksomheder vi har hjulpet med AI.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {allCases.length === 0 && (
        <section className="pb-[clamp(3rem,8vw,6rem)]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
              <p className="text-gray-500 leading-relaxed">
                Cases indlæses lige nu. Tjek igen om et øjeblik.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Featured case */}
      {featured && (
        <section className="pb-[clamp(3rem,8vw,6rem)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <Link
                href={`/cases/${featured.slug}`}
                className="group block bg-gray-900 rounded-2xl p-8 lg:p-12 xl:p-16 relative overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all duration-300"
              >
                <div
                  className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2">
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                      {categoryLabels[featured.category]}
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-white mb-4 group-hover:text-primary transition-colors">
                      {featured.customer}
                    </h2>
                    <div className="space-y-4 text-white/60 leading-relaxed">
                      <p>
                        <span className="font-semibold text-white">
                          Udfordring:{" "}
                        </span>
                        {featured.challenge}
                      </p>
                      <p>
                        <span className="font-semibold text-white">
                          Løsning:{" "}
                        </span>
                        {featured.solution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 justify-center">
                    {splitResult(featured.result).map((line) => (
                      <div
                        key={line}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10"
                      >
                        <p className="text-lg lg:text-xl font-bold text-primary tracking-heading">
                          {line}
                        </p>
                      </div>
                    ))}
                    <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold pt-2">
                      Læs hele casen →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Other cases */}
      {rest.length > 0 && (
        <section className="pb-[clamp(3rem,8vw,6rem)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-2xl font-bold tracking-heading text-gray-900 mb-8">
                Flere kundehistorier
              </h2>
            </FadeIn>
            <div className="flex flex-col gap-6">
              {rest.map((c, i) => (
                <FadeIn key={c.id} delay={i * 100}>
                  <Link
                    href={`/cases/${c.slug}`}
                    className="group block bg-gray-50 rounded-2xl p-8 lg:p-10 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-gray-100 transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                          {categoryLabels[c.category]}
                        </p>
                        <h3 className="text-2xl lg:text-3xl font-bold tracking-heading text-gray-900 mb-4 group-hover:text-primary transition-colors">
                          {c.customer}
                        </h3>
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
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                          Resultater
                        </p>
                        {splitResult(c.result).map((line) => (
                          <div
                            key={line}
                            className="bg-white rounded-xl p-4 shadow-sm"
                          >
                            <p className="text-base lg:text-lg font-bold text-primary tracking-heading leading-snug">
                              {line}
                            </p>
                          </div>
                        ))}
                        <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold pt-1">
                          Læs mere →
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <SubpageCTA
        heading="Klar til at blive den næste case?"
        description="Book en gratis AI-afklaring og find ud af hvad AI kan gøre for jeres virksomhed."
      />
    </>
  );
}
