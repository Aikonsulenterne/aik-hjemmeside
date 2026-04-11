import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases — AI Konsulenterne",
  description:
    "Se hvordan vi har hjulpet danske virksomheder med AI-løsninger. Konkrete resultater fra virkelige kunder.",
};

export default function Cases() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Cases</h1>
      <p className="mt-4 text-xl text-black/60">
        Konkrete resultater fra vores kunder
      </p>
    </main>
  );
}
