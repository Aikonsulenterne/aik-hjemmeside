import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Viden om AI",
  description:
    "Artikler og indsigter om AI til danske virksomheder. Lær hvordan AI kan bruges i praksis.",
};

const articles = [
  {
    title: "Hvad er AI — og hvad kan det gøre for din virksomhed?",
    excerpt:
      "En nede-på-jorden introduktion til AI for danske virksomhedsejere. Ingen tech-jargon, kun konkret viden.",
    category: "Grundlæggende",
    readTime: "5 min",
  },
  {
    title: "5 tegn på at din virksomhed er klar til AI",
    excerpt:
      "Ikke alle virksomheder er klar til AI. Her er de 5 tegn der viser at I er klar til at tage næste skridt.",
    category: "Strategi",
    readTime: "4 min",
  },
  {
    title: "AI i kundeservice: Sådan sparer I tid uden at miste kvalitet",
    excerpt:
      "Kundeservice er et af de områder hvor AI giver hurtigst ROI. Her er hvordan I kommer i gang.",
    category: "Use cases",
    readTime: "6 min",
  },
];

export default function VidenOmAI() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-heading text-gray-900 leading-[1.05]">
              Viden om AI
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 mt-6 leading-relaxed">
              Artikler og indsigter om AI til danske virksomheder. Konkret
              viden I kan bruge — ingen buzzwords.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.title}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold tracking-heading mb-3 leading-snug">
                  {article.title}
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {article.excerpt}
                </p>
                <p className="text-primary font-semibold text-sm mt-4">
                  Kommer snart
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-gray-900 text-white py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-heading">
              Vil du have det hele samlet?
            </h2>
            <p className="text-white/60 mt-4 leading-relaxed">
              Download vores gratis AI-guide og få en komplet introduktion til
              AI for danske virksomheder.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/ai-guide">
                Hent gratis AI-guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
