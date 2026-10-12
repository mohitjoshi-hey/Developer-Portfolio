"use client";

import { useState } from "react";
import { FaBars, FaXmark, FaDownload } from "react-icons/fa6";
import ResumeModal from "../hero/ResumeModal";

const navLinks = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          {/* Modern Engineering Monogram: <MJ /> */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-black font-mono text-xs font-black text-white transition-colors duration-200 group-hover:bg-zinc-800">
              &lt;MJ/&gt;
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-black leading-none">
                Mohit Joshi
              </span>
              <span className="text-[10px] font-mono font-semibold text-zinc-500 leading-tight">
                portfolio.dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with enhanced, high-contrast hover feedback */}
          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative rounded-sm px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition-all duration-200 hover:bg-black hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Resume Button matching Figma */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="flex items-center gap-2 rounded-sm bg-black px-5 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-md active:scale-95"
            >
              <span>Resume</span>
              <FaDownload size={11} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-black bg-white text-black md:hidden"
          >
            {mobileMenuOpen ? <FaXmark size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-zinc-200 bg-white px-6 py-6 md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-black hover:text-zinc-600"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeModalOpen(true);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-black py-3 text-sm font-bold text-white"
                >
                  <span>Resume</span>
                  <FaDownload size={12} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <ResumeModal
        open={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}