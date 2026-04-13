import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function FinalCTA() {
  return (
    <section className="py-[clamp(4rem,10vw,7rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-heading text-gray-900 leading-[1.1]">
              Klar til at spare tid med AI?
            </h2>
            <p className="text-gray-500 mt-5 leading-relaxed">
              45 minutters uforpligtende snak med Alexander. Ingen forberedelse,
              ingen risiko — kun konkret viden om hvad AI kan gøre for jer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button variant="primary" href="/kontakt">
                Book gratis AI-afklaring
              </Button>
              <a
                href="tel:+4525547074"
                className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                Eller ring: +45 25 54 70 74
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
