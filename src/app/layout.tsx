import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BottomBar from "@/components/BottomBar";
import PopupPhone from "@/components/PopupPhone";
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
      <body>
        <Header />
        <main className="pt-16 lg:pt-20 pb-14 lg:pb-12">{children}</main>
        <Footer />
        <BottomBar />
        <PopupPhone />
      </body>
    </html>
  );
}
