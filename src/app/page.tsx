import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ServicesOverview from "@/components/sections/ServicesOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import CaseHighlight from "@/components/sections/CaseHighlight";
import RiskReversal from "@/components/sections/RiskReversal";
import LeadMagnet from "@/components/sections/LeadMagnet";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/ui/JsonLd";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Konsulenterne",
  url: "https://ai-konsulenterne.dk",
  description:
    "Dansk AI-konsulenthus der bygger skræddersyede AI-løsninger til SMV'er.",
  telephone: "+4525547074",
  email: "kontakt@ai-konsulenterne.dk",
  address: {
    "@type": "PostalAddress",
    addressCountry: "DK",
  },
  sameAs: ["https://www.linkedin.com/company/ai-konsulenterne"],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI-afklaring",
  description:
    "Gratis 45-minutters AI-afklaring. Vi finder konkrete AI-muligheder der kan spare din virksomhed tid.",
  provider: {
    "@type": "Organization",
    name: "AI Konsulenterne",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "DKK",
    description: "Gratis og uforpligtende",
  },
};

export default function Forside() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <Hero />
      <SocialProofBar />
      <ProblemSolution />
      <ServicesOverview />
      <HowItWorks />
      <CaseHighlight />
      <RiskReversal />
      <LeadMagnet />
      <FinalCTA />
    </>
  );
}
