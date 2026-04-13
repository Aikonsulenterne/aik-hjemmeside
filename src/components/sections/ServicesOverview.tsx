import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    title: "Skræddersyede AI-løsninger",
    description:
      "Vi bygger AI der passer præcis til jeres virksomhed. Ingen standardløsninger — kun det I har brug for.",
    href: "/skraeddersyede-ai",
    stat: "20-30%",
    statLabel: "lavere omkostninger",
  },
  {
    title: "AI Workshop",
    description:
      "Hands-on workshop hvor jeres team lærer at bruge AI i hverdagen. Konkrete værktøjer, ikke teori.",
    href: "/workshop",
    stat: "40%",
    statLabel: "hurtigere opgaveløsning",
  },
  {
    title: "VisionAI",
    description:
      "Vores AI-produkt der giver jer overblik og indsigt på tværs af jeres systemer.",
    href: "/visionai",
    stat: "1",
    statLabel: "samlet overblik",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-[clamp(4rem,10vw,7rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold text-center mb-3">
            Hvad vi tilbyder
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center leading-[1.1]">
            Tre veje til AI i jeres virksomhed
          </h2>
        </FadeIn>

        <div className="mt-14 lg:mt-16 space-y-6">
          {services.map((service, i) => (
            <FadeIn key={service.href} delay={i * 100}>
              <Link href={service.href} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center border border-gray-100 rounded-2xl p-6 lg:p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  {/* Stat */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <p className="text-4xl lg:text-5xl font-bold text-primary tracking-heading">
                      {service.stat}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {service.statLabel}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block lg:col-span-1">
                    <div className="w-px h-16 bg-gray-100 mx-auto" />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7">
                    <h3 className="text-xl font-bold tracking-heading mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
