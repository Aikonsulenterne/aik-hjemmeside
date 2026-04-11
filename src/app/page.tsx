import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ServicesOverview from "@/components/sections/ServicesOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import CaseHighlight from "@/components/sections/CaseHighlight";
import RiskReversal from "@/components/sections/RiskReversal";
import LeadMagnet from "@/components/sections/LeadMagnet";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Forside() {
  return (
    <>
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
