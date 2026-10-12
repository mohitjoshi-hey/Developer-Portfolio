import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import CodingSection from "@/components/coding/CodingSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-black antialiased">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Hero Section (White) */}
      <Hero />

      {/* 3. My Skills Section (White) */}
      <SkillsSection />

      {/* 4. My Experience Section (Black) */}
      <ExperienceSection />

      {/* 5. About Me Section (White) */}
      <AboutSection />

      {/* 6. My Projects Section (Black) */}
      <ProjectsSection />

      {/* 7. Developer Dashboard (White - Formatted natively in the template's 3-card style) */}
      <CodingSection />

      {/* 8. Contact Me / Let's talk Section (White) */}
      <ContactSection />

      {/* 10. Footer (Black) */}
      <Footer />
    </main>
  );
}