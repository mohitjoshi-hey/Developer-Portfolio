import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import CodingSection from "@/components/coding/CodingSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import AboutSection from "@/components/about/AboutSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden text-white">

            {/* Base Background */}
      <div className="fixed inset-0 -z-50 bg-[#0B0F19]" />

      {/* Background Grid */}
      <div
        className="
        fixed
        inset-0
        -z-40
        opacity-[0.03]
        pointer-events-none
        [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
        [background-size:60px_60px]
        "
      />

      {/* Purple Glow */}
      <div
        className="
        fixed
        -right-40
        top-20
        -z-30
        h-[700px]
        w-[700px]
        rounded-full
        bg-violet-600/20
        blur-[170px]
        "
      />

      {/* Blue Glow */}
      <div
        className="
        fixed
        -left-40
        bottom-0
        -z-30
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-500/15
        blur-[170px]
        "
      />

      {/* MJ Background */}
      <h1
        className="
        fixed
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        pointer-events-none
        select-none
        -z-20
        text-[20rem]
        font-black
        uppercase
        tracking-tight
        text-transparent
        opacity-60
        [text-stroke:2px_rgba(139,92,246,.15)]
        [-webkit-text-stroke:2px_rgba(139,92,246,.15)]
        "
      >
        MJ
      </h1>

      {/* Website */}

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