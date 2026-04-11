const steps = [
  {
    number: 1,
    title: "Book gratis afklaring",
    description:
      "45 minutters uforpligtende samtale om jeres virksomhed og muligheder med AI. I skal ikke forberede noget.",
  },
  {
    number: 2,
    title: "Vi finder AI-muligheder",
    description:
      "Vi analyserer jeres arbejdsgange og identificerer præcis hvor AI kan spare jer mest tid og penge.",
  },
  {
    number: 3,
    title: "I sparer tid fra dag 1",
    description:
      "Vi bygger og implementerer løsningen. I mærker forskellen med det samme — uden at jeres hverdag forstyrres.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-[clamp(3rem,8vw,6rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-heading text-gray-900 text-center leading-[1.1]">
          Sådan kommer I i gang
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-5 left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-gray-200" />

          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg mx-auto mb-4 relative z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-bold tracking-heading mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
