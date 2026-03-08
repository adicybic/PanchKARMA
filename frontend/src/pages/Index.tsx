import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TherapyCards from "@/components/landing/TherapyCards";
import PatientJourney from "@/components/landing/PatientJourney";
import DoctorDiscovery from "@/components/landing/DoctorDiscovery";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TherapyCards />
      <div id="journey">
        <PatientJourney />
      </div>
      <DoctorDiscovery />
      <Footer />
    </div>
  );
};

export default Index;
