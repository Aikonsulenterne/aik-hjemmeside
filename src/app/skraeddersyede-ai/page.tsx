import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skræddersyede AI-løsninger — AI Konsulenterne",
  description:
    "Vi bygger AI-løsninger der passer præcis til din virksomheds behov. Ingen standardløsninger — kun skræddersyet AI.",
};

export default function SkraeddersyedeAI() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Skræddersyede AI-løsninger</h1>
      <p className="mt-4 text-xl text-black/60">
        AI der passer præcis til din virksomhed
      </p>
    </main>
  );
}
