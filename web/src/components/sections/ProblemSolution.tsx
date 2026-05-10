import FadeIn from "@/components/ui/FadeIn";

export default function ProblemSolution() {
  return (
    <section className="py-[clamp(4rem,10vw,7rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-heading text-gray-900 leading-[1.1]">
              Fra manuelt arbejde til AI på autopilot
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Se forskellen AI gør for en typisk dansk virksomhed med 10 ansatte.
            </p>
          </div>
        </FadeIn>

        {/* Before / After comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* BEFORE */}
          <FadeIn delay={100}>
            <div className="relative rounded-2xl border border-gray-200 p-8 lg:p-10 h-full">
              <div className="absolute top-0 left-8 -translate-y-1/2">
                <span className="bg-white px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold border border-gray-200 rounded-full">
                  Uden AI
                </span>
              </div>
              <div className="space-y-6 mt-2">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">8 timer om ugen pr. medarbejder</p>
                    <p className="text-sm text-gray-500 mt-0.5">brugt på manuelle, gentagne opgaver</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Fejl der koster jer kunder</p>
                    <p className="text-sm text-gray-500 mt-0.5">glemte opfølgninger, langsomme svar, copy-paste fejl</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">~17.000 kr/måned i skjulte omkostninger</p>
                    <p className="text-sm text-gray-500 mt-0.5">dyre medarbejdertimer brugt på ting AI kan klare</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* AFTER */}
          <FadeIn delay={250}>
            <div className="relative rounded-2xl border-2 border-primary/20 bg-primary/[0.02] p-8 lg:p-10 h-full">
              <div className="absolute top-0 left-8 -translate-y-1/2">
                <span className="bg-primary px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white font-semibold rounded-full">
                  Med AI
                </span>
              </div>
              <div className="space-y-6 mt-2">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">8 timer frigjort om ugen</p>
                    <p className="text-sm text-gray-500 mt-0.5">til arbejde der faktisk skaber værdi</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Færre fejl, gladere kunder</p>
                    <p className="text-sm text-gray-500 mt-0.5">AI svarer på sekunder, 24/7, uden at glemme noget</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">~200.000 kr/år sparet</p>
                    <p className="text-sm text-gray-500 mt-0.5">de fleste kunder ser ROI inden 60 dage</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Money translation */}
        <FadeIn delay={350}>
          <p className="text-center text-xs text-gray-400 mt-6">
            Beregnet ud fra gennemsnitlig dansk medarbejderkostnad på 350 kr/time
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
