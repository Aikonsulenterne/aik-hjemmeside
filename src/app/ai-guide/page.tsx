import type { Metadata } from "next";
import GuideForm from "@/components/ui/GuideForm";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Gratis AI-guide til din virksomhed",
  description:
    "Download vores gratis guide og forstå præcis hvordan AI kan bruges i din virksomhed. Konkret viden uden buzzwords.",
  openGraph: {
    title: "Gratis AI-guide — AI Konsulenterne",
    description:
      "Hvad kan AI egentlig? + Sådan kommer din virksomhed i gang. Download gratis.",
  },
};

export default function AIGuide() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <FadeIn>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
                  Gratis AI-guide
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-heading text-gray-900 leading-[1.05]">
                  Hvad kan AI egentlig? + Sådan kommer din virksomhed i gang
                </h1>
                <p className="text-lg text-gray-500 mt-6 leading-relaxed">
                  Download vores gratis guide og forstå præcis hvordan AI kan
                  bruges i en virksomhed som din. Ingen buzzwords, ingen
                  tech-jargon — kun konkret viden du kan handle på.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "Hvad AI faktisk kan (og ikke kan) i dag",
                    "5 konkrete AI-muligheder for danske SMV'er",
                    "Trin-for-trin: Sådan kommer I i gang",
                    "De mest almindelige fejl — og hvordan I undgår dem",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={200}>
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <GuideForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
