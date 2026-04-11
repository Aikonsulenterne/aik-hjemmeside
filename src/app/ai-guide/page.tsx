import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratis AI-guide — AI Konsulenterne",
  description:
    "Download vores gratis guide: Hvad kan AI egentlig? + Sådan kommer din virksomhed i gang.",
};

export default function AIGuide() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Gratis AI-guide</h1>
      <p className="mt-4 text-xl text-black/60">
        Hvad kan AI egentlig? + Sådan kommer din virksomhed i gang
      </p>
    </main>
  );
}
