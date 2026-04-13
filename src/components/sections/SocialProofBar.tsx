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
    <section className="border-t border-gray-100 py-10 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold text-center mb-8">
          Virksomheder vi har hjulpet
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 lg:gap-x-14 gap-y-4">
          {clients.map((name) => (
            <span
              key={name}
              className="text-base lg:text-lg font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300 select-none tracking-wide uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
