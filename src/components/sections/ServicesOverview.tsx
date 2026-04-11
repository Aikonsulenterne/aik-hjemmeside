import Link from "next/link";

const services = [
  {
    icon: "⚡",
    title: "Skræddersyede AI-løsninger",
    description:
      "Vi bygger AI der passer præcis til jeres virksomhed. Ingen standardløsninger — kun det I har brug for.",
    href: "/skraeddersyede-ai",
  },
  {
    icon: "🎯",
    title: "AI Workshop",
    description:
      "Hands-on workshop hvor jeres team lærer at bruge AI i hverdagen. Konkrete værktøjer, ikke teori.",
    href: "/workshop",
  },
  {
    icon: "👁",
    title: "VisionAI",
    description:
      "Vores AI-produkt der giver jer overblik og indsigt på tværs af jeres systemer.",
    href: "/visionai",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-gray-50 py-[clamp(3rem,8vw,6rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-heading text-gray-900 text-center leading-[1.1]">
          Vores ydelser
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.href}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl mb-6">
                {service.icon}
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
          ))}
        </div>
      </div>
    </section>
  );
}
