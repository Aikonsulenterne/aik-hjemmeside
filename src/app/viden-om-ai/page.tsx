import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viden om AI — AI Konsulenterne",
  description:
    "Artikler og indsigter om AI til danske virksomheder. Lær hvordan AI kan bruges i praksis.",
};

export default function VidenOmAI() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Viden om AI</h1>
      <p className="mt-4 text-xl text-black/60">
        Artikler og indsigter om AI i praksis
      </p>
    </main>
  );
}
