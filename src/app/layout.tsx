import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BottomBar from "@/components/BottomBar";
import PopupPhone from "@/components/PopupPhone";
import Analytics from "@/components/Analytics";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Konsulenterne — Skræddersyede AI-løsninger til din virksomhed",
    template: "%s — AI Konsulenterne",
  },
  description:
    "AI Konsulenterne bygger skræddersyede AI-løsninger til danske SMV'er. Book en gratis AI-afklaring og spar tid på manuelle processer.",
  metadataBase: new URL("https://ai-konsulenterne.dk"),
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://ai-konsulenterne.dk",
    siteName: "AI Konsulenterne",
    title: "AI Konsulenterne — Skræddersyede AI-løsninger til din virksomhed",
    description:
      "Vi bygger skræddersyede AI-løsninger til danske SMV'er. Spar tid på manuelle processer — book en gratis AI-afklaring.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Konsulenterne — Skræddersyede AI-løsninger",
    description:
      "Vi bygger skræddersyede AI-løsninger til danske SMV'er. Book en gratis AI-afklaring.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${raleway.variable} antialiased`}>
      <head>
        <Analytics />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Spring til indhold
        </a>
        <Header />
        <main id="main-content" className="pt-16 lg:pt-20 pb-14 lg:pb-12">{children}</main>
        <Footer />
        <BottomBar />
        <ScrollToTop />
        <PopupPhone />
      </body>
    </html>
  );
}
