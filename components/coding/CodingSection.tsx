"use client";

import CodingCard from "./CodingCard";
import { codingProfiles } from "./codingData";

export default function CodingSection() {
  return (
    <section
      id="coding"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <div className="mb-16">

        <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
          Coding Profiles
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Competitive Programming
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-400">
          A snapshot of my competitive programming journey,
          coding practice and open-source contributions.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {codingProfiles.map((profile) => (
          <CodingCard
            key={profile.platform}
            {...profile}
          />
        ))}
      </div>
    </section>
  );
}