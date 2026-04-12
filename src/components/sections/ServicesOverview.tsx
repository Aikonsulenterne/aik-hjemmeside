import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    title: "Skræddersyede AI-løsninger",
    description:
      "Vi bygger AI der passer præcis til jeres virksomhed. Ingen standardløsninger — kun det I har brug for.",
    href: "/skraeddersyede-ai",
    iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", // bolt
  },
  {
    title: "AI Workshop",
    description:
      "Hands-on workshop hvor jeres team lærer at bruge AI i hverdagen. Konkrete værktøjer, ikke teori.",
    href: "/workshop",
    iconPath: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5", // academic cap
  },
  {
    title: "VisionAI",
    description:
      "Vores AI-produkt der giver jer overblik og indsigt på tværs af jeres systemer.",
    href: "/visionai",
    iconPath: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", // eye
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-gray-50 py-[clamp(3rem,8vw,6rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-heading text-gray-900 text-center leading-[1.1]">
            Vores ydelser
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, i) => (
            <FadeIn key={service.href} delay={i * 150}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold tracking-heading mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
                >
                  Læs mere
                  <svg
                    className="w-4 h-4"
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
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
