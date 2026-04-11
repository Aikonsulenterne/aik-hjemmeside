import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VisionAI — AI Konsulenterne",
  description:
    "VisionAI — vores AI-produkt der giver din virksomhed overblik og indsigt.",
};

export default function VisionAI() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">VisionAI</h1>
      <p className="mt-4 text-xl text-black/60">
        AI-drevet indsigt til din virksomhed
      </p>
    </main>
  );
}
