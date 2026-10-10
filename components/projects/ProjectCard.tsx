"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "./projectsData";

export default function ProjectCard({
  title,
  status,
  badgeType,
  description,
  tech,
  github,
  live,
  terminalTitle,
  terminal,
}: Project) {
  const badgeClasses =
    badgeType === "award"
      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
      : "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20";

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500 hover:shadow-xl dark:border-white/10 dark:bg-[#131722] dark:hover:border-violet-400">
      <div>
        {/* Terminal Header & Shell */}
        <div className="mb-5 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 text-white shadow-inner dark:border-white/10">
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-zinc-400">{terminalTitle}</span>
          </div>

          <div className="space-y-1.5 p-4 font-mono text-xs sm:text-sm">
            {terminal.map((line, idx) => (
              <p
                key={idx}
                className={
                  idx === terminal.length - 1
                    ? "font-semibold text-emerald-400"
                    : "text-zinc-400"
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Status Badge */}
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${badgeClasses}`}
        >
          {status}
        </span>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors group-hover:border-violet-500/30 dark:border-white/5 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-4 dark:border-white/5">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-800 shadow-sm transition-all hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-violet-400 dark:hover:text-white"
        >
          <FaGithub size={14} />
          <span>Source Code</span>
        </a>

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-violet-700"
          >
            <FaExternalLinkAlt size={12} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}