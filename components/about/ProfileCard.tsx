"use client";

import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#171A21] p-6">

      {/* Profile Image */}
      <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-2xl border border-white/10 bg-[#111318]">

        <Image
          src="/images/profile2.jpg"
          alt="Mohit Joshi"
          width={160}
          height={160}
          className="h-full w-full object-cover"
        />

      </div>

      {/* Name */}
      <h2 className="text-center text-2xl font-bold">
        Mohit Joshi
      </h2>

      <p className="mt-2 text-center text-sm text-zinc-400">
        Computer Science Student
      </p>

      <p className="text-center text-sm text-zinc-500">
        IIIT Una
      </p>

      {/* Status */}
      <div className="mt-6 flex items-center justify-center gap-2">

        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

        <span className="text-green-400 font-medium">
          Online
        </span>

      </div>

      {/* Divider */}
      <div className="my-6 border-t border-white/10" />

      {/* Level */}
      <div>

        <div className="flex justify-between text-sm">

          <span className="text-zinc-500">
            LEVEL
          </span>

          <span className="font-semibold">
            Sophomore
          </span>

        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#111318]">

          <div className="h-full w-[18%] rounded-full bg-violet-500" />

        </div>

        <p className="mt-2 text-right text-xs text-zinc-500">
          Progress • 19%
        </p>

      </div>

    </div>
  );
}