"use client";

import {
  Target,
  Rocket,
  Brain,
  Code2,
  Trophy,
} from "lucide-react";

export default function MissionCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#171A21] p-8">

      {/* Current Mission */}
      <div>

        <div className="mb-3 flex items-center gap-3">
          <Target className="text-violet-400" size={22} />
          <h3 className="text-2xl font-semibold">
            Current Mission
          </h3>
        </div>

        <p className="leading-7 text-zinc-400">
          Build production-ready software while mastering full-stack
          development, competitive programming and backend engineering.
        </p>

      </div>

      <div className="my-8 border-t border-white/10" />

      {/* Objectives */}
      <div>

        <div className="mb-4 flex items-center gap-3">
          <Rocket className="text-violet-400" size={22} />
          <h3 className="text-2xl font-semibold">
            Current Objectives
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          <Objective text="Become Strong in DSA" />

          <Objective text="Learn Backend with Go" />

        </div>

      </div>

      <div className="my-8 border-t border-white/10" />

      {/* Learning */}
      <div>

        <div className="mb-4 flex items-center gap-3">
          <Brain className="text-violet-400" size={22} />
          <h3 className="text-2xl font-semibold">
            Currently Learning
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">

          <Skill text="Next.js" />

          <Skill text="Go" />

          <Skill text="DSA" />

          <Skill text="Open Source Contribution" />

          <Skill text="System Design" />

        </div>

      </div>

      <div className="my-8 border-t border-white/10" />

      {/* Long Term Goal */}
      <div>

        <div className="mb-3 flex items-center gap-3">
          <Trophy className="text-violet-400" size={22} />
          <h3 className="text-2xl font-semibold">
            Long-Term Vision
          </h3>
        </div>

        <p className="leading-7 text-zinc-400">
          Create impactful technology, contribute to meaningful products,
          and continuously grow into an engineer capable of solving
          large-scale real-world problems.
        </p>

      </div>

    </div>
  );
}

function Objective({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111318] p-4">
      <Code2 size={18} className="text-violet-400" />
      <span>{text}</span>
    </div>
  );
}

function Skill({ text }: { text: string }) {
  return (
    <span className="rounded-lg bg-[#111318] px-4 py-2 text-sm text-cyan-300">
      {text}
    </span>
  );
}