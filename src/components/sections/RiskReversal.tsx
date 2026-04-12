import FadeIn from "@/components/ui/FadeIn";

export default function RiskReversal() {
  return (
    <section className="py-[clamp(3rem,8vw,6rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-3xl p-10 lg:p-16 text-center">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-7 h-7 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>

          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
            Vores garanti
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold tracking-heading text-gray-900 leading-snug">
            Finder vi ikke en konkret AI-mulighed der kan spare jer tid —
            koster mødet ingenting.
          </h2>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Ingen risiko, ingen skjulte omkostninger, ingen forpligtelser.
          </p>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
