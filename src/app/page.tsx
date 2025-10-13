import AboutPreview from "@/components/modules/home/AboutPreview";
import ContactCTA from "@/components/modules/home/ContactCTA";
// import FeaturedProject from "@/components/modules/home/FeaturedProject";
import HeroSection from "@/components/modules/home/HeroSection";
import Skills from "@/components/modules/home/Skills";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutPreview />
      {/* <FeaturedProject /> */}
      <Skills />
      <ContactCTA />
    </div>
  );
}
