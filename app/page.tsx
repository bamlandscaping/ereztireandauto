import { HeroSection } from "@/components/hero-section";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroScrollDemo />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
