import FadeIn from "@/components/ui/FadeIn";

export default function RiskReversal() {
  return (
    <section className="py-[clamp(2rem,6vw,4rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="bg-gray-900 rounded-3xl p-10 lg:p-16 xl:p-20 text-center relative overflow-hidden">
            {/* Subtle gradient accent */}
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-6">
                Vores garanti
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-heading text-white leading-[1.15]">
                Finder vi ikke en konkret AI-mulighed der kan spare jer tid —
                koster mødet ingenting.
              </h2>

              <p className="text-white/50 mt-5 leading-relaxed">
                Ingen risiko, ingen skjulte omkostninger, ingen forpligtelser.
              </p>

              <div className="flex items-center justify-center gap-8 mt-10">
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Gratis 45 min
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Ingen forberedelse
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Vi tager det hele
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
