import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="pt-[clamp(5rem,14vw,10rem)] pb-[clamp(4rem,10vw,7rem)] relative overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-heading text-gray-900 leading-[1.05]">
              AI der løser virkelige problemer for din virksomhed
            </h1>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-5 lg:mt-6 max-w-xl mx-auto leading-relaxed">
              Spar 1 dag om ugen på manuelle processer — inden 60 dage. Uden
              IT-afdeling, uden risiko.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 lg:mt-10">
              <Button variant="primary" href="/kontakt">
                Book gratis AI-afklaring
              </Button>
              <Button variant="secondary" href="/cases">
                Se vores cases
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
