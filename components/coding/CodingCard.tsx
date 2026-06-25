"use client";

import { SiCodechef, SiLeetcode, SiGithub } from "react-icons/si";

interface CodingCardProps {
  platform: string;
  icon: React.ReactNode;
  rating: string;
  current: string;
  highest: string;
  solved: string;
  link: string;
  color: string;
}

export default function CodingCard({
  platform,
  icon,
  rating,
  current,
  highest,
  solved,
  link,
  color,
}: CodingCardProps) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-[#171A21]
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-violet-500/40
      "
    >
      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${color} text-3xl text-white shadow-lg`}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold">{platform}</h3>

      <p className="mt-6 text-4xl font-bold text-violet-400">{rating}</p>

      <div className="mt-6 space-y-2 text-zinc-400">
        <p>Current : {current}</p>
        <p>Highest : {highest}</p>
        <p>{solved}</p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-cyan-400 transition hover:text-cyan-300"
      >
        View Profile →
      </a>
    </div>
  );
}
