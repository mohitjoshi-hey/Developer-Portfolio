"use client";

import { Target, Rocket, Brain, Code2, Trophy } from "lucide-react";

export default function MissionCard() {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm dark:border-white/10 dark:bg-[#131722]">
      {/* Current Mission */}
      <div>
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400">
            <Target size={20} />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
            Current Mission
          </h3>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          Build production-ready, reliable software while mastering competitive programming,
          backend engineering with Go and C++, and contributing to influential open-source repositories.
        </p>
      </div>

      <div className="my-6 border-t border-zinc-100 dark:border-white/10" />

      {/* Objectives */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400">
            <Rocket size={20} />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
            Core Objectives
          </h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Objective text="Master Advanced DSA & CP" />
          <Objective text="High-Performance Backend in Go" />
          <Objective text="Apache Foundation Contributions" />
          <Objective text="Full Stack Next.js Architecture" />
        </div>
      </div>

      <div className="my-6 border-t border-zinc-100 dark:border-white/10" />

      {/* Learning */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400">
            <Brain size={20} />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
            Currently Exploring
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          <Skill text="Distributed Systems" />
          <Skill text="Go Concurrency" />
          <Skill text="Next.js App Router" />
          <Skill text="C++ STL Optimization" />
          <Skill text="Robotics & Arduino" />
          <Skill text="PostgreSQL & Redis" />
        </div>
      </div>

      <div className="my-6 border-t border-zinc-100 dark:border-white/10" />

      {/* Long Term Goal */}
      <div>
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400">
            <Trophy size={20} />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
            Long-Term Vision
          </h3>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          Create impactful software, innovate at the intersection of systems and products, and continuously evolve into an engineer capable of solving large-scale real-world technological challenges.
        </p>
      </div>
    </div>
  );
}

function Objective({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 text-xs sm:text-sm font-medium text-zinc-800 transition-colors dark:border-white/5 dark:bg-[#111318] dark:text-zinc-200">
      <Code2 size={16} className="text-violet-600 dark:text-violet-400 shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function Skill({ text }: { text: string }) {
  return (
    <span className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 dark:border-white/5 dark:bg-[#111318] dark:text-cyan-300">
      {text}
    </span>
  );
}