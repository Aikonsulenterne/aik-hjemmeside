import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function FinalCTA() {
  return (
    <section className="py-[clamp(4rem,10vw,8rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-heading text-gray-900 leading-[1.1]">
            Klar til at spare tid med AI?
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 mt-6 leading-relaxed">
            Book en gratis 45-minutters AI-afklaring. Ingen forpligtelse, ingen
            forberedelse — vi tager det hele.
          </p>
          <div className="mt-10">
            <Button variant="primary" size="lg" href="/kontakt">
              Book gratis AI-afklaring
            </Button>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
