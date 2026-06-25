"use client";

import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-white/10">

      <div className="mx-auto flex max-w-7xl flex-col items-center px-8 py-14">

        {/* Quote */}

        <p className="max-w-2xl text-center text-lg leading-8 text-zinc-400">
          Thanks for visiting my portfolio.
          <br />
          I'm always learning, building and exploring new ideas.
          <span className="text-violet-400">
            {" "}Let's create something meaningful together.
          </span>
        </p>

        {/* Social Links */}

        <div className="mt-8 flex items-center gap-8 text-2xl">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:-translate-y-1 hover:text-violet-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:-translate-y-1 hover:text-violet-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="/resume.pdf"
            className="transition duration-300 hover:-translate-y-1 hover:text-violet-400"
          >
            <FaFileAlt />
          </a>

        </div>

        {/* Divider */}

        <div className="my-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom */}

        <div className="text-center">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Mohit Joshi
          </p>

          <p className="mt-2 text-sm text-zinc-600">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}