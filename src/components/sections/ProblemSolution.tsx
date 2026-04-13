import FadeIn from "@/components/ui/FadeIn";

export default function ProblemSolution() {
  return (
    <section className="py-[clamp(4rem,10vw,7rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: problem → solution text */}
          <FadeIn>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 leading-[1.1]">
                Bruger din virksomhed stadig timer på manuelle processer?
              </h2>
              <p className="text-gray-500 mt-5 leading-relaxed">
                De fleste danske virksomheder ved, at AI kan gøre en forskel — men
                ikke hvor de skal starte. Det forstår vi.
              </p>
              <div className="w-12 h-0.5 bg-primary my-6" />
              <p className="text-gray-900 font-semibold text-lg">
                Der er en bedre måde.
              </p>
              <p className="text-gray-500 mt-2 leading-relaxed">
                Vi finder præcis de processer i jeres virksomhed hvor AI
                giver mest værdi — og bygger løsningen for jer.
              </p>
            </div>
          </FadeIn>

          {/* Right: stats as big visual blocks */}
          <div className="space-y-4">
            <FadeIn delay={100}>
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <div className="flex items-baseline gap-3">
                  <p className="text-5xl lg:text-6xl font-bold text-primary tracking-heading">
                    20-30%
                  </p>
                </div>
                <p className="text-gray-500 mt-2">
                  lavere omkostninger med AI-automatisering
                </p>
                <p className="text-xs text-gray-300 mt-1">McKinsey, 2024</p>
              </div>
            </FadeIn>
            <FadeIn delay={250}>
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <div className="flex items-baseline gap-3">
                  <p className="text-5xl lg:text-6xl font-bold text-primary tracking-heading">
                    40%
                  </p>
                </div>
                <p className="text-gray-500 mt-2">
                  hurtigere opgaveløsning med AI-værktøjer
                </p>
                <p className="text-xs text-gray-300 mt-1">MIT, 2023</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
