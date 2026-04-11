import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Konsulenterne — Skræddersyede AI-løsninger til din virksomhed",
  description:
    "AI Konsulenterne bygger skræddersyede AI-løsninger til danske SMV'er. Book en gratis AI-afklaring og spar tid på manuelle processer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${raleway.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
