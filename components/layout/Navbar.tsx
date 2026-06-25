"use client";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const links = [
  { name: "#home", href: "#home" },
  { name: "#projects", href: "#projects" },
  { name: "#about", href: "#about" },
  { name: "#contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-8 py-4 backdrop-blur-xl">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wider text-purple-400">
          MJ
        </h1>

        {/* Navigation */}
        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-xl text-zinc-400">
          <FaGithub className="cursor-pointer transition hover:text-white" />
          <FaLinkedin className="cursor-pointer transition hover:text-blue-400" />
          <FaXTwitter className="cursor-pointer transition hover:text-white" />
        </div>

      </div>
    </nav>
  );
}