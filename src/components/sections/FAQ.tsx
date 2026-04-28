"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    q: "Vi har ikke en IT-afdeling — kan vi stadig få AI?",
    a: "Ja. Vi tager det hele: opsætning, integration, drift og support. I behøver ingen IT-kompetencer internt. Vi fungerer som jeres eksterne AI-afdeling.",
  },
  {
    q: "Hvilke platforme bruger I?",
    a: "Vi er platformsuafhængige. Afhængigt af opgaven bruger vi OpenAI, Anthropic, Azure OpenAI, Microsoft Copilot, Google Vertex AI, eller custom open-source modeller. Vi anbefaler det der passer jeres behov, budget og datakrav — ikke det vi tjener mest på.",
  },
  {
    q: "Hvordan sikrer I at medarbejderne faktisk bruger løsningen?",
    a: "Adoption er en del af leverancen. Vi laver onboarding-sessioner, træning tilpasset hver rolle, og løbende support de første 30-60 dage. Vi måler faktisk brug — ikke bare at løsningen er live.",
  },
  {
    q: "Er det GDPR-sikkert?",
    a: "Ja. Alle vores løsninger bygges med GDPR fra dag 1. Vi håndterer databehandleraftaler, vælger hosting i EU når det kræves, og sikrer at jeres data aldrig bruges til at træne offentlige modeller. Se f.eks. vores HR-agent hos Lavazza.",
  },
  {
    q: "Hvad koster det?",
    a: "Afhænger af omfang. Små workshops starter ved 25.000 kr, skræddersyede løsninger typisk 50.000-250.000 kr. Vi giver altid et fast tilbud før vi går i gang — ingen overraskelser. Første afklaringsmøde er altid gratis.",
  },
  {
    q: "Kan vi ikke bare bruge ChatGPT?",
    a: "Ja — til simple opgaver. Men ChatGPT kender ikke jeres data, systemer eller processer. Skræddersyet AI integrerer med jeres CRM, ERP, webshop og vidensbase — og arbejder automatisk uden at en medarbejder sidder og prompter. Det er forskellen på et værktøj og en medarbejder.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-[clamp(4rem,10vw,7rem)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold text-center mb-3">
            Spørgsmål vi ofte får
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-heading text-gray-900 text-center leading-[1.1]">
            De vigtigste spørgsmål — besvaret
          </h2>
        </FadeIn>

        <div className="mt-12 lg:mt-14 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={i} delay={i * 60}>
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base lg:text-lg font-bold tracking-heading text-gray-900 leading-tight">
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      <svg className="w-3.5 h-3.5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={400}>
          <p className="text-center mt-10 text-sm text-gray-500">
            Har du andre spørgsmål?{" "}
            <a href="tel:+4525547074" className="text-primary font-semibold hover-underline">
              Ring til Alexander på +45 25 54 70 74
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
