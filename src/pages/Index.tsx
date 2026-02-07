import Navbar from "@/components/landing/Navbar";
import NewHero from "@/components/landing/NewHero";
import WhatIsSection from "@/components/landing/WhatIsSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import EntryPathsSection from "@/components/landing/EntryPathsSection";
import TrustSection from "@/components/landing/TrustSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <NewHero />
      <WhatIsSection />
      <ProblemsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <EntryPathsSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
