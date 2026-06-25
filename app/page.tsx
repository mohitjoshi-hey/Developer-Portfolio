import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import CodingSection from "@/components/coding/CodingSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import AboutSection from "@/components/about/AboutSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#0F1117] text-white">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <CodingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}