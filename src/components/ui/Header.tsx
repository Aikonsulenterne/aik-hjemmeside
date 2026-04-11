"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

const navLinks = [
  { label: "Ydelser", href: "/skraeddersyede-ai" },
  { label: "Cases", href: "/cases" },
  { label: "Viden om AI", href: "/viden-om-ai" },
  { label: "Om os", href: "/om-os" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link
          href="/"
          className="text-xl font-bold tracking-heading text-black"
        >
          AI Konsulenterne
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-black/60 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" size="sm" href="/kontakt">
            Book møde
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-black/70 hover:text-black py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="primary"
              href="/kontakt"
              className="mt-2 w-full text-center"
            >
              Book møde
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
