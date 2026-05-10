const clients = [
  { name: "Lavazza", category: "HR" },
  { name: "INDKOM", category: "B2B" },
  { name: "Fregat", category: "B2B" },
  { name: "Wunderwear", category: "Webshop" },
  { name: "Mæglerakademiet", category: "Uddannelse" },
  { name: "CETC", category: "B2B" },
  { name: "Stretchfit", category: "Webshop" },
  { name: "J.M Band", category: "Retail" },
];

export default function SocialProofBar() {
  return (
    <section className="border-y border-gray-100 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <p className="flex-shrink-0 text-xs uppercase tracking-[0.15em] text-gray-400 font-semibold whitespace-nowrap">
            Virksomheder vi har hjulpet
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 lg:gap-x-8 gap-y-3">
            {clients.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <span className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
                  {c.name}
                </span>
                <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full font-semibold tracking-wide uppercase">
                  {c.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
