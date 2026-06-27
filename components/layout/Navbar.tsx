"use client";

import ThemeToggle from "./ThemeToggle";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const links = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Coding", href: "#coding" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">

      <div
        className="
        mx-auto
        mt-5
        flex
        max-w-7xl
        items-center
        justify-between
        rounded-full
        border
        border-white/10
        bg-black/40
        px-8
        py-4
        backdrop-blur-2xl
        shadow-lg
        "
      >

        {/* Logo */}

        <a
          href="#home"
          className="
          text-2xl
          font-bold
          tracking-wider
          text-violet-400
          transition
          hover:text-violet-300
          "
        >
          MJ
        </a>

        {/* Navigation */}

        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="
              relative
              text-sm
              font-medium
              text-zinc-400
              transition
              hover:text-white
              after:absolute
              after:-bottom-1
              after:left-0
              after:h-[2px]
              after:w-0
              after:bg-violet-400
              after:transition-all
              hover:after:w-full
              "
            >
              {link.name}
            </a>

          ))}

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <ThemeToggle />

          <a
            href="https://github.com/mohitjoshi-hey"
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-full
            p-2
            text-zinc-400
            transition
            hover:bg-white/10
            hover:text-white
            "
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/mohit-joshi-a1376b36a"
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-full
            p-2
            text-zinc-400
            transition
            hover:bg-blue-500/10
            hover:text-blue-400
            "
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://x.com/MohitJoshi45342"
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-full
            p-2
            text-zinc-400
            transition
            hover:bg-white/10
            hover:text-white
            "
          >
            <FaXTwitter size={18} />
          </a>

        </div>

      </div>

    </nav>
  );
}