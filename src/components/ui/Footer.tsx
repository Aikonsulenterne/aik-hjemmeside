import Link from "next/link";

const navLinks = [
  { label: "Skræddersyede AI", href: "/skraeddersyede-ai" },
  { label: "Workshop", href: "/workshop" },
  { label: "VisionAI", href: "/visionai" },
  { label: "Cases", href: "/cases" },
  { label: "Viden om AI", href: "/viden-om-ai" },
  { label: "Om os", href: "/om-os" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Gratis AI-guide", href: "/ai-guide" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold tracking-heading">
              AI Konsulenterne
            </p>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Vi bygger skræddersyede AI-løsninger til danske virksomheder.
            </p>
            <p className="mt-4 text-xs text-gray-400">CVR: 45569241</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
              Sider
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-black transition-colors hover-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
              Kontakt
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-gray-500">
              <a
                href="tel:+4525547074"
                className="hover:text-black transition-colors"
              >
                +45 25 54 70 74
              </a>
              <a
                href="mailto:kontakt@ai-konsulenterne.dk"
                className="hover:text-black transition-colors"
              >
                kontakt@ai-konsulenterne.dk
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
              Følg os
            </p>
            <a
              href="https://www.linkedin.com/company/ai-konsulenterne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} AI Konsulenterne. Alle rettigheder
            forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
}
