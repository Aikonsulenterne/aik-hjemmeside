/**
 * AIK SEO baseline — Next.js Metadata + JSON-LD
 *
 * Drop-in metadata-objekt til en ny side. Tilpas title + description per side.
 * For komplet SEO-strategi se SEO-STRATEGI.md i projekt-rooten.
 */

import type { Metadata } from "next";

const SITE_URL = "https://ai-konsulenterne.dk";
const SITE_NAME = "AI Konsulenterne";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

/**
 * Generér metadata for en side.
 * @param title - Sidetitel (uden " — AI Konsulenterne" — det tilføjes)
 * @param description - 1-2 sætninger, max ~155 tegn
 * @param path - Sidens path, fx "/cases/lavazza" (uden trailing slash)
 * @param ogImage - Valgfri custom OG-billede (overstyrer default)
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  const title = `${opts.title} — ${SITE_NAME}`;
  const ogImage = opts.ogImage || DEFAULT_OG_IMAGE;

  return {
    title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "da_DK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: opts.description,
      images: [ogImage],
    },
  };
}

// Brug i page.tsx:
//
// import { pageMetadata } from "@/lib/seo";
//
// export const metadata = pageMetadata({
//   title: "Cases",
//   description: "Se hvordan vi har hjulpet danske SMV'er med skræddersyet AI.",
//   path: "/cases",
// });

/**
 * JSON-LD Organization schema — placeres i root layout.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Konsulenterne",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-full.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+45 25547074",
    email: "kontakt@ai-konsulenterne.dk",
    contactType: "sales",
    areaServed: "DK",
    availableLanguage: ["Danish", "English"],
  },
  sameAs: [
    // Tilføj LinkedIn, Instagram osv.
  ],
};
