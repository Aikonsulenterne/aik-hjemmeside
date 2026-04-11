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
    <section className="border-t border-b border-gray-200 bg-gray-50 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold text-center mb-6">
          Virksomheder vi har hjulpet
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 lg:gap-x-16 gap-y-4">
          {clients.map((name) => (
            <span
              key={name}
              className="text-lg font-bold text-gray-300 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
