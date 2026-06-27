"use client";

import ProfileCard from "./ProfileCard";
import MissionCard from "./MissionCard";

export default function AboutSection() {
  return (
    <section
  id="about"
  className="mx-auto max-w-7xl px-8 pt-28 pb-0"
>
      <div className="mb-12">

        <p className="font-mono text-sm uppercase tracking-[0.35em] text-violet-400">
          PERSONNEL DOSSIER
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          About Me
        </h2>

      </div>

      <div className="grid gap-8 lg:grid-cols-[350px_1fr]">

        <ProfileCard />

        <MissionCard />

      </div>

    </section>
  );
}