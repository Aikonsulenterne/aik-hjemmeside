import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function CaseHighlight() {
  return (
    <section className="py-[clamp(4rem,10vw,7rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Abstract visual instead of empty grey box */}
          <FadeIn>
            <div className="rounded-2xl aspect-[4/3] relative overflow-hidden bg-gray-900">
              {/* Abstract gradient pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-[4rem]" />
              {/* Stats overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-semibold">
                  Resultat
                </p>
                <p className="text-5xl lg:text-6xl font-bold text-white tracking-heading mt-2">
                  15 timer
                </p>
                <p className="text-white/60 text-sm mt-1">
                  sparet per uge med AI-automatisering
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={200}>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4">
                Kundecase — Wunderwear
              </p>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold tracking-heading text-gray-900 leading-[1.1] mb-5">
                Fra 15 timers manuelt arbejde til AI på autopilot
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Wunderwear brugte manuelt timer på at besvare kundehenvendelser og
                kategorisere ordrer. Vi byggede en AI-løsning der automatiserede
                begge dele — og resultaterne kom med det samme.
              </p>

              <div className="flex gap-10 mb-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900 tracking-heading">
                    15 timer
                  </p>
                  <p className="text-sm text-gray-400 mt-0.5">sparet per uge</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 tracking-heading">
                    60 dage
                  </p>
                  <p className="text-sm text-gray-400 mt-0.5">til fuld implementering</p>
                </div>
              </div>

              <blockquote className="text-gray-500 border-l-2 border-primary pl-5 mb-8 italic">
                &ldquo;Vi troede ikke det kunne gå så hurtigt. AI Konsulenterne
                forstod vores behov fra dag ét.&rdquo;
              </blockquote>

              <Link
                href="/cases"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-primary transition-colors group"
              >
                Se alle cases
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </section>
  );
}
