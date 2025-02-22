import HeroSection from "@/components/hero-section/hero-section";
import DataSection from "@/components/DataSection/DataSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ProductSection from "@/components/ProductSection/ProductSection";
import VisionSection from "@/components/VisionSection/VisionSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import MarqueeSection from "@/components/MarqueeSection/MarqueeSection";
// import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";

export default function LandingPage() {
  return (
    <main className="landing-page">
      <HeroSection />
      <DataSection />
      <MarqueeSection />
      <ProductSection />
      <AboutSection />
      <ContactSection />
      <VisionSection />

      {/* <TestimonialSection /> */}
    </main>
  );
}
