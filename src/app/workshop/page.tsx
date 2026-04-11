import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workshop — AI Konsulenterne",
  description:
    "Hands-on AI workshop for din virksomhed. Lær hvordan AI kan effektivisere jeres hverdag.",
};

export default function Workshop() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">AI Workshop</h1>
      <p className="mt-4 text-xl text-black/60">
        Hands-on AI-træning for dit team
      </p>
    </main>
  );
}
