import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import WhoIsForSection from "@/components/landing/WhoIsForSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import EntryPathsSection from "@/components/landing/EntryPathsSection";
import WhyChooseSection from "@/components/landing/WhyChooseSection";
import TrustSection from "@/components/landing/TrustSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <WhoIsForSection />
      <ProblemsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <EntryPathsSection />
      <WhyChooseSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
