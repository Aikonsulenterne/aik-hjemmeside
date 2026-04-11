import Link from "next/link";

export default function CaseHighlight() {
  return (
    <section className="bg-gray-50 py-[clamp(3rem,8vw,6rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-gray-400 text-sm">Casebillede</span>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              Kundecase
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-heading text-gray-900 mb-4">
              Wunderwear sparede 15 timer om ugen med AI
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Wunderwear brugte manuelt timer på at besvare kundehenvendelser og
              kategorisere ordrer. Vi byggede en AI-løsning der automatiserede
              begge dele — og resultaterne kom med det samme.
            </p>

            <div className="flex gap-8 mb-6">
              <div>
                <p className="text-3xl font-bold text-primary tracking-heading">
                  15 timer
                </p>
                <p className="text-sm text-gray-400">sparet per uge</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary tracking-heading">
                  60 dage
                </p>
                <p className="text-sm text-gray-400">til fuld implementering</p>
              </div>
            </div>

            <blockquote className="italic text-gray-500 border-l-4 border-primary pl-6 mb-6">
              &ldquo;Vi troede ikke det kunne gå så hurtigt. AI Konsulenterne
              forstod vores behov fra dag ét.&rdquo;
            </blockquote>

            <Link
              href="/cases"
              className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              Se alle cases
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
        </div>
      </div>
    </section>
  );
}
