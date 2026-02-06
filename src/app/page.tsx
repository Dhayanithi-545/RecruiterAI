import Hero from "@/components/Hero";
import FlowchartSection from "@/components/FlowchartSection";

import LogoSlider from "@/components/LogoSlider";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ImpactFolder from "@/app/ImpactFolder/layout";
import ImpactDashboard from "@/components/ImpactDashboard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoSlider />
      <FlowchartSection />
      <ImpactFolder>
        <ImpactDashboard />
      </ImpactFolder>
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
