import { renderOgImage } from "@/lib/og-template";

export const alt = "VisionAI — AI-drevet Business Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return renderOgImage({
    tag: "Produkt",
    title: "VisionAI",
    subtitle:
      "AI-drevet business intelligence på tværs af jeres CRM, ERP og webshop.",
    variant: "dark",
  });
}
