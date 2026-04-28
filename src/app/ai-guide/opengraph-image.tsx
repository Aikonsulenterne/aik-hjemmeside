import { renderOgImage } from "@/lib/og-template";

export const alt = "Gratis AI-guide til danske virksomheder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return renderOgImage({
    tag: "Gratis guide",
    title: "10 spørgsmål der afslører hvor AI giver mest værdi",
    subtitle:
      "Et konkret værktøj til jeres næste ledermøde. Download gratis.",
    variant: "dark",
  });
}
