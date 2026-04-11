"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function AIGuide() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: Integration med ActiveCampaign
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
                Gratis AI-guide
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-heading text-gray-900 leading-[1.05]">
                Hvad kan AI egentlig? + Sådan kommer din virksomhed i gang
              </h1>
              <p className="text-lg text-gray-500 mt-6 leading-relaxed">
                Download vores gratis guide og forstå præcis hvordan AI kan
                bruges i en virksomhed som din. Ingen buzzwords, ingen
                tech-jargon — kun konkret viden du kan handle på.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Hvad AI faktisk kan (og ikke kan) i 2024",
                  "5 konkrete AI-muligheder for danske SMV'er",
                  "Trin-for-trin: Sådan kommer I i gang",
                  "De mest almindelige fejl — og hvordan I undgår dem",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-7 h-7 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold tracking-heading mb-2">
                    Tak for din tilmelding!
                  </h2>
                  <p className="text-gray-500">
                    Tjek din indbakke — guiden er på vej.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold tracking-heading mb-2">
                    Hent guiden gratis
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    Indtast din arbejdsmail og få guiden direkte i indbakken.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      required
                      placeholder="Din arbejdsmail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-200 rounded-full px-6 py-3.5 text-black placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-semibold rounded-full px-8 py-3.5 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                    >
                      Download guiden
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      Vi sender kun guiden — ingen spam.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
