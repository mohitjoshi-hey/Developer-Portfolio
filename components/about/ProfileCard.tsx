"use client";

import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#131722]">
      {/* Profile Image */}
      <div className="mx-auto mb-6 h-44 w-44 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-inner dark:border-white/10 dark:bg-[#111318]">
        <Image
          src="/images/profile.jpg"
          alt="Mohit Joshi"
          width={180}
          height={180}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Name */}
      <h3 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
        Mohit Joshi
      </h3>

      <p className="mt-1 text-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
        Computer Science Engineering Student
      </p>

      <p className="text-center text-xs font-semibold text-violet-600 dark:text-violet-400">
        Indian Institute of Information Technology Una
      </p>

      {/* Status */}
      <div className="mt-5 flex items-center justify-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 py-1.5 px-3">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          Open to Opportunities
        </span>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-zinc-100 dark:border-white/10" />

      {/* Level / Year */}
      <div>
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-zinc-500 dark:text-zinc-400">ACADEMIC STANDING</span>
          <span className="text-zinc-900 dark:text-white">Sophomore</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-[#111318]">
          <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
        </div>

        <div className="mt-2 flex justify-between text-[11px] text-zinc-400">
          <span>Degree Progress</span>
          <span>B.Tech CSE</span>
        </div>
      </div>
    </div>
  );
}