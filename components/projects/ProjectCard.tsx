"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  status: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  terminalTitle: string;
  terminal: string[];
}

export default function ProjectCard({
  title,
  status,
  description,
  tech,
  github,
  demo,
  terminalTitle,
  terminal,
}: ProjectCardProps) {
  return (
    <div
      className="
      group
      rounded-2xl
      border
      border-white/10
      bg-[#171A21]
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-violet-500/50
      hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
      "
    >
      {/* Terminal */}
      <div className="mb-5 overflow-hidden rounded-xl border border-white/10 bg-[#111318]">

        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <span className="font-mono text-xs text-zinc-500">
            {terminalTitle}
          </span>

        </div>

        {/* Terminal Body */}
        <div className="space-y-1 p-4 font-mono text-sm">
          {terminal.map((line, index) => (
            <p
              key={index}
              className={
                index === terminal.length - 1
                  ? "text-green-400"
                  : "text-zinc-400"
              }
            >
              {line}
            </p>
          ))}
        </div>

      </div>

      {/* Status */}
      <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-medium text-yellow-400">
        {status}
      </span>

      {/* Title */}
      <h2 className="mt-4 text-2xl font-bold">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      {/* Tech */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="
            rounded-lg
            bg-[#22252D]
            px-3
            py-1.5
            text-xs
            font-medium
            text-cyan-300
            transition
            group-hover:bg-violet-500/20
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">

        <a
          href={github}
          className="
          flex
          items-center
          gap-2
          rounded-lg
          border
          border-white/10
          px-4
          py-2
          text-sm
          transition
          hover:border-violet-500
          "
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href={demo}
          className="
          flex
          items-center
          gap-2
          rounded-lg
          bg-violet-600
          px-4
          py-2
          text-sm
          transition
          hover:bg-violet-500
          "
        >
          <FaExternalLinkAlt />
          Demo
        </a>

      </div>
    </div>
  );
}