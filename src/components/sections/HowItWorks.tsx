import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Book gratis afklaring",
    description:
      "45 minutters uforpligtende samtale. I skal ikke forberede noget.",
  },
  {
    number: "02",
    title: "Vi finder AI-muligheder",
    description:
      "Vi analyserer jeres arbejdsgange og identificerer hvor AI sparer mest tid.",
  },
  {
    number: "03",
    title: "I sparer tid fra dag 1",
    description:
      "Vi bygger og implementerer løsningen. I mærker forskellen med det samme.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-[clamp(4rem,10vw,7rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold text-center mb-3">
            Sådan virker det
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center leading-[1.1]">
            Tre trin til AI i jeres hverdag
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-14">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 150}>
              <div>
                <p className="text-5xl font-bold text-gray-200 tracking-heading mb-4">
                  {step.number}
                </p>
                <h3 className="text-lg font-bold tracking-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
