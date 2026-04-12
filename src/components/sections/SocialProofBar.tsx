const clients = [
  "Lavazza",
  "INDKOM",
  "Fregat",
  "Wunderwear",
  "Mæglerakademiet",
  "CETC",
  "Stretchfit",
  "J.M Band",
];

export default function SocialProofBar() {
  return (
    <section className="border-t border-b border-gray-200 bg-gray-50 py-8 lg:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold text-center mb-6">
          Virksomheder vi har hjulpet
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-lg font-bold text-gray-300 select-none mx-8 lg:mx-12 shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
