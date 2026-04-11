import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om os — AI Konsulenterne",
  description:
    "Mød teamet bag AI Konsulenterne. Vi er passionerede om at gøre AI tilgængeligt for danske virksomheder.",
};

export default function OmOs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Om os</h1>
      <p className="mt-4 text-xl text-black/60">
        Teamet bag AI Konsulenterne
      </p>
    </main>
  );
}
