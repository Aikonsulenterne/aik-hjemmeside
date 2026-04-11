import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,6rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-heading text-gray-900 leading-[1.05]">
            AI der løser virkelige problemer for din virksomhed
          </h1>
          <p className="text-lg lg:text-xl xl:text-2xl text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
            Spar 1 dag om ugen på manuelle processer — inden 60 dage. Uden
            IT-afdeling, uden risiko.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button variant="primary" size="lg" href="/kontakt">
              Book gratis AI-afklaring
            </Button>
            <Button variant="secondary" size="lg" href="/cases">
              Se vores cases
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
