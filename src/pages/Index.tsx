import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExportSection from "@/components/ExportSection";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import DiasporaSection from "@/components/DiasporaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UrgencySection from "@/components/UrgencySection";
import GroupShipping from "@/components/GroupShipping";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ExportSection />
      <HowItWorks />
      <TrustSection />
      <DiasporaSection />
      <TestimonialsSection />
      <UrgencySection />
      <GroupShipping />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
