"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLaptopCode, FaUser } from "react-icons/fa";

export default function BoyCoderIllustration() {
  const [viewMode, setViewMode] = useState<"illustration" | "photo">("illustration");

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* View Switcher Pill */}
      <div className="mb-4 inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white/80 p-1 text-xs font-medium shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/80">
        <button
          onClick={() => setViewMode("illustration")}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-all ${
            viewMode === "illustration"
              ? "bg-violet-600 text-white shadow-sm"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          <FaLaptopCode size={13} />
          Illustration
        </button>
        <button
          onClick={() => setViewMode("photo")}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-all ${
            viewMode === "photo"
              ? "bg-violet-600 text-white shadow-sm"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          <FaUser size={12} />
          Real Photo
        </button>
      </div>

      {/* Main Illustration or Photo Container */}
      <div className="relative w-full max-w-[460px] select-none">
        {/* Glow ambient background */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-violet-500/20 via-blue-500/10 to-cyan-500/20 blur-2xl dark:from-violet-600/30 dark:via-purple-600/10 dark:to-blue-500/20" />

        {viewMode === "photo" ? (
          /* Real Photo Card */
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-4 shadow-xl transition-all duration-300 dark:border-white/10 dark:bg-[#131722]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
              <Image
                src="/images/profile.jpg"
                alt="Mohit Joshi"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 460px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-2">
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">Mohit Joshi</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">IIIT Una • CSE Sophomore</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Available to collaborate
              </span>
            </div>
          </div>
        ) : (
          /* Figma-style Boy Coder Vector Line Art */
          <div className="relative rounded-3xl border border-zinc-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#131722]/90">
            {/* Window header */}
            <div className="mb-3 flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                mohit@iiit-una:~
              </span>
              <span className="rounded bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-violet-600 dark:text-violet-400">
                ACTIVE
              </span>
            </div>

            {/* SVG Illustration of Boy at Desk */}
            <div className="relative flex items-center justify-center p-2">
              <svg
                viewBox="0 0 520 460"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-sm"
              >
                {/* Background Line Architecture */}
                <circle
                  cx="260"
                  cy="210"
                  r="160"
                  className="stroke-zinc-200/80 dark:stroke-white/5"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <circle
                  cx="260"
                  cy="210"
                  r="190"
                  className="stroke-zinc-100 dark:stroke-white/[0.03]"
                  strokeWidth="1.5"
                />

                {/* Desk Lamp Light Beam */}
                <path
                  d="M100 80 L60 300 L160 300 Z"
                  className="fill-amber-400/[0.04] dark:fill-amber-300/[0.02]"
                />
                {/* Desk Lamp */}
                <path
                  d="M95 190 Q90 120 120 85"
                  className="stroke-zinc-700 dark:stroke-zinc-400"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M120 85 L100 70 L140 70 Z"
                  className="fill-zinc-800 dark:fill-zinc-300 stroke-zinc-900 dark:stroke-zinc-200"
                  strokeWidth="2"
                />
                <circle
                  cx="95"
                  cy="195"
                  r="8"
                  className="fill-zinc-400 dark:fill-zinc-600"
                />

                {/* Desk Surface */}
                <rect
                  x="40"
                  y="300"
                  width="440"
                  height="12"
                  rx="6"
                  className="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-800 dark:stroke-zinc-400"
                  strokeWidth="2"
                />
                {/* Desk Legs */}
                <path
                  d="M80 312 L70 420"
                  className="stroke-zinc-800 dark:stroke-zinc-500"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M440 312 L450 420"
                  className="stroke-zinc-800 dark:stroke-zinc-500"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Coffee Mug on Desk */}
                <rect
                  x="120"
                  y="262"
                  width="22"
                  height="36"
                  rx="4"
                  className="fill-zinc-100 dark:fill-zinc-700 stroke-zinc-900 dark:stroke-zinc-200"
                  strokeWidth="2"
                />
                <path
                  d="M142 272 Q152 278 142 288"
                  className="stroke-zinc-900 dark:stroke-zinc-200"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Coffee Steam */}
                <path
                  d="M127 252 Q130 244 126 236"
                  className="stroke-violet-400/80 dark:stroke-violet-300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M135 254 Q139 246 135 238"
                  className="stroke-violet-400/80 dark:stroke-violet-300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Potted Plant */}
                <path
                  d="M400 270 L404 298 H426 L430 270 Z"
                  className="fill-zinc-200 dark:fill-zinc-700 stroke-zinc-900 dark:stroke-zinc-200"
                  strokeWidth="2"
                />
                <path
                  d="M415 270 Q410 245 422 235 Q426 250 415 270"
                  className="fill-emerald-500/80 stroke-zinc-900 dark:stroke-zinc-200"
                  strokeWidth="1.5"
                />
                <path
                  d="M415 270 Q425 250 412 242"
                  className="fill-emerald-400/80 stroke-zinc-900 dark:stroke-zinc-200"
                  strokeWidth="1.5"
                />

                {/* BOY CODER */}
                {/* Office Chair Backrest */}
                <rect
                  x="215"
                  y="150"
                  width="90"
                  height="140"
                  rx="24"
                  className="fill-zinc-200/90 dark:fill-zinc-800/80 stroke-zinc-800 dark:stroke-zinc-600"
                  strokeWidth="2"
                />
                {/* Chair Stand */}
                <path
                  d="M260 290 L260 380"
                  className="stroke-zinc-700 dark:stroke-zinc-500"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Boy Body / Hoodie */}
                <path
                  d="M210 280 Q215 195 260 195 Q305 195 310 280 Z"
                  className="fill-zinc-900 dark:fill-zinc-950 stroke-zinc-900 dark:stroke-zinc-100"
                  strokeWidth="2.5"
                />
                {/* Hoodie details / Collar */}
                <path
                  d="M245 196 Q260 215 275 196"
                  className="stroke-zinc-100 dark:stroke-zinc-400"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M255 210 L255 240"
                  className="stroke-zinc-100 dark:stroke-zinc-400"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M265 210 L265 236"
                  className="stroke-zinc-100 dark:stroke-zinc-400"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                {/* Boy Head */}
                {/* Neck */}
                <rect
                  x="250"
                  y="180"
                  width="20"
                  height="22"
                  className="fill-amber-100 dark:fill-zinc-300 stroke-zinc-900 dark:stroke-zinc-100"
                  strokeWidth="2"
                />
                {/* Face */}
                <ellipse
                  cx="260"
                  cy="155"
                  rx="24"
                  ry="28"
                  className="fill-amber-100 dark:fill-zinc-200 stroke-zinc-900 dark:stroke-zinc-100"
                  strokeWidth="2.5"
                />
                {/* Hair - Stylish Coder Cut */}
                <path
                  d="M236 150 Q234 125 258 123 Q280 120 286 142 Q288 152 284 158 Q278 140 262 140 Q248 140 240 152 Z"
                  className="fill-zinc-950 dark:fill-zinc-900 stroke-zinc-950 dark:stroke-zinc-100"
                  strokeWidth="2"
                />
                {/* Ear */}
                <ellipse
                  cx="237"
                  cy="158"
                  rx="4"
                  ry="6"
                  className="fill-amber-200 dark:fill-zinc-300 stroke-zinc-900 dark:stroke-zinc-100"
                  strokeWidth="1.5"
                />
                {/* Glasses / Modern frames */}
                <rect
                  x="245"
                  y="150"
                  width="13"
                  height="9"
                  rx="2"
                  className="stroke-zinc-900 dark:stroke-zinc-900 fill-white/80"
                  strokeWidth="1.5"
                />
                <rect
                  x="263"
                  y="150"
                  width="13"
                  height="9"
                  rx="2"
                  className="stroke-zinc-900 dark:stroke-zinc-900 fill-white/80"
                  strokeWidth="1.5"
                />
                <path
                  d="M258 154 L263 154"
                  className="stroke-zinc-900 dark:stroke-zinc-900"
                  strokeWidth="1.5"
                />
                {/* Smile */}
                <path
                  d="M256 168 Q261 172 266 168"
                  className="stroke-zinc-900 dark:stroke-zinc-800"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Arms Typing on Laptop */}
                {/* Left Arm */}
                <path
                  d="M225 230 Q240 265 260 272"
                  className="stroke-zinc-900 dark:stroke-zinc-100 fill-zinc-900 dark:fill-zinc-950"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Right Arm */}
                <path
                  d="M295 230 Q280 265 265 272"
                  className="stroke-zinc-900 dark:stroke-zinc-100 fill-zinc-900 dark:fill-zinc-950"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Sleek Laptop */}
                {/* Laptop Base */}
                <rect
                  x="215"
                  y="272"
                  width="90"
                  height="8"
                  rx="3"
                  className="fill-zinc-300 dark:fill-zinc-700 stroke-zinc-900 dark:stroke-zinc-200"
                  strokeWidth="2"
                />
                {/* Laptop Screen (opened facing user/coder) */}
                <polygon
                  points="225,272 295,272 305,210 235,210"
                  className="fill-violet-100 dark:fill-zinc-800 stroke-zinc-900 dark:stroke-zinc-200"
                  strokeWidth="2"
                />
                {/* Screen Glow / Code lines on laptop back or screen */}
                <polygon
                  points="232,268 288,268 298,216 242,216"
                  className="fill-violet-600/10 dark:fill-violet-500/20"
                />
                {/* Stylized code brackets on back of laptop */}
                <path
                  d="M258 238 L252 243 L258 248"
                  className="stroke-violet-600 dark:stroke-violet-400"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M272 238 L278 243 L272 248"
                  className="stroke-violet-600 dark:stroke-violet-400"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M267 236 L263 250"
                  className="stroke-violet-600 dark:stroke-violet-400"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Floating Tech Chips around the illustration */}
            <div className="absolute -top-3 -right-3 flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-violet-600 shadow-md dark:border-white/10 dark:bg-zinc-800 dark:text-violet-400">
              <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
              C++ & Go
            </div>

            <div className="absolute top-1/3 -left-4 flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-cyan-600 shadow-md dark:border-white/10 dark:bg-zinc-800 dark:text-cyan-400">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              DSA & Problem Solving
            </div>

            <div className="absolute -bottom-3 right-6 flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-600 shadow-md dark:border-white/10 dark:bg-zinc-800 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Full Stack & IoT
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
