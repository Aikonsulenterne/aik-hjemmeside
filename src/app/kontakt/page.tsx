import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — AI Konsulenterne",
  description:
    "Kontakt AI Konsulenterne. Ring til Alexander på +45 25547074 eller book en gratis AI-afklaring.",
};

export default function Kontakt() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Kontakt os</h1>
      <p className="mt-4 text-xl text-black/60">
        Vi er klar til at hjælpe din virksomhed med AI
      </p>
    </main>
  );
}
