import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import FeaturesSection from "@/components/FeaturesSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <FeaturesSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
