import FadeIn from "@/components/ui/FadeIn";

export default function ProblemSolution() {
  return (
    <section className="py-[clamp(3rem,8vw,6rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-heading text-gray-900 leading-[1.1]">
              Bruger din virksomhed stadig timer på manuelle processer?
            </h2>
            <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
              De fleste danske virksomheder ved, at AI kan gøre en forskel — men
              ikke hvor de skal starte. Det forstår vi.
            </p>
          </FadeIn>

          <div className="w-16 h-1 bg-primary mx-auto my-10 rounded-full" />

          <FadeIn>
            <h3 className="text-2xl lg:text-3xl font-bold tracking-heading text-gray-900 mb-8">
              Der er en bedre måde
            </h3>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <FadeIn delay={100}>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <p className="text-5xl lg:text-6xl font-bold text-primary tracking-heading">
                20-30%
              </p>
              <p className="text-base text-gray-500 mt-3">
                lavere omkostninger med AI-automatisering
              </p>
              <p className="text-xs text-gray-400 mt-2">McKinsey, 2024</p>
            </div>
          </FadeIn>
          <FadeIn delay={250}>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <p className="text-5xl lg:text-6xl font-bold text-primary tracking-heading">
                40%
              </p>
              <p className="text-base text-gray-500 mt-3">
                hurtigere opgaveløsning med AI-værktøjer
              </p>
              <p className="text-xs text-gray-400 mt-2">MIT, 2023</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
