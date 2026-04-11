import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "AI Workshop — AI Konsulenterne",
  description:
    "Hands-on AI workshop for din virksomhed. Lær hvordan AI kan effektivisere jeres hverdag — med konkrete værktøjer I kan bruge med det samme.",
};

const includes = [
  {
    title: "Hands-on træning",
    description:
      "Ikke slides og teori — jeres team arbejder med rigtige AI-værktøjer og jeres egne opgaver.",
  },
  {
    title: "Tilpasset jeres branche",
    description:
      "Vi skræddersyr indholdet til jeres virksomhed, så alt er relevant og kan bruges med det samme.",
  },
  {
    title: "Konkrete takeaways",
    description:
      "Alle deltagere går hjem med en personlig AI-handlingsplan og adgang til de værktøjer vi gennemgår.",
  },
];

const formats = [
  {
    title: "Halv dag (3 timer)",
    description:
      "Intensiv introduktion til AI-værktøjer. Perfekt til teams der vil i gang hurtigt.",
    suited: "Velegnet til: Teams på 5-15 personer",
  },
  {
    title: "Hel dag (6 timer)",
    description:
      "Dybdegående workshop med hands-on øvelser, case-arbejde og individuel AI-handlingsplan.",
    suited: "Velegnet til: Afdelinger og ledergrupper",
  },
  {
    title: "Forløb (3 sessioner)",
    description:
      "Tre workshops over 3 uger. Vi følger op på implementering og sikrer at AI bliver en del af hverdagen.",
    suited: "Velegnet til: Organisationer der vil have varig forandring",
  },
];

export default function Workshop() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              AI Workshop
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-heading text-gray-900 leading-[1.05]">
              Giv jeres team superkræfter med AI
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 mt-6 leading-relaxed">
              Hands-on workshop hvor jeres team lærer at bruge AI i hverdagen.
              Konkrete værktøjer — ikke teori og buzzwords.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button variant="primary" size="lg" href="/kontakt">
                Book en workshop
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-gray-50 py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center mb-12">
            Hvad indeholder workshoppen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {includes.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold tracking-heading mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center mb-12">
            Vælg det format der passer jer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format) => (
              <div
                key={format.title}
                className="border-2 border-gray-200 rounded-2xl p-8 hover:border-primary transition-colors"
              >
                <h3 className="text-xl font-bold tracking-heading mb-3">
                  {format.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  {format.description}
                </p>
                <p className="text-sm text-primary font-semibold">
                  {format.suited}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900">
              Klar til at løfte jeres team?
            </h2>
            <p className="text-lg text-gray-500 mt-4 leading-relaxed">
              Kontakt os for en uforpligtende snak om hvilken workshop der
              passer til jeres virksomhed.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/kontakt">
                Book en workshop
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
