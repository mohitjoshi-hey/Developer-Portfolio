"use client";

import Link from "next/link";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaArrowRight,
  FaCheckCircle,
  FaBolt,
  FaFire,
  FaTrophy,
  FaGlobeAsia,
  FaFlag,
  FaRocket,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiApache } from "react-icons/si";

export default function CodingSection() {
  return (
    <section id="dashboard" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title matching Figma template */}
        <h2 className="text-center text-4xl sm:text-5xl font-normal text-black tracking-tight">
          Developer <span className="font-extrabold">Dashboard</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base text-zinc-600">
          Live telemetry and competitive ratings across GitHub, LeetCode, and CodeChef.
        </p>

        {/* 3 Cards Side-by-Side matching the Figma 3-Card structure (Left: White, Center: Inverted Black, Right: White) */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* CARD 1: GitHub (White Card, Black Border) */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-black bg-white p-7 text-black transition-transform duration-200 hover:-translate-y-1">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-black text-white">
                    <FaGithub size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-none text-black">
                      Mohit Joshi
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-zinc-600">
                      @mohitjoshi-hey
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="mt-5 text-xs sm:text-sm leading-relaxed text-zinc-600">
                I am a second-year CSE student at Indian Institute of Information Technology Una, Himachal Pradesh.
              </p>

              {/* Stats Bar */}
              <div className="mt-5 grid grid-cols-3 gap-2 border-y border-zinc-200 py-3 text-center">
                <div>
                  <p className="text-lg font-black text-black">9</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Repos</p>
                </div>
                <div>
                  <p className="text-lg font-black text-black">11</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Followers</p>
                </div>
                <div>
                  <p className="text-lg font-black text-black">14</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Following</p>
                </div>
              </div>

              {/* Recent Repos */}
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2.5">
                  Recent Repositories
                </p>
                <div className="space-y-2">
                  <a
                    href="https://github.com/mohitjoshi-hey/typeAssist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-sm border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-black hover:border-black transition"
                  >
                    <span className="truncate">typeAssist</span>
                    <span className="text-[10px] text-zinc-500 font-mono">C++</span>
                  </a>
                  <a
                    href="https://github.com/mohitjoshi-hey/CForces"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-sm border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-black hover:border-black transition"
                  >
                    <span className="truncate">CForces</span>
                    <span className="text-[10px] text-zinc-500 font-mono">C++</span>
                  </a>
                  <a
                    href="https://github.com/mohitjoshi-hey/go-game-score"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-sm border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-black hover:border-black transition"
                  >
                    <span className="truncate">go-game-score</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Go</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200">
              <Link
                href="https://github.com/mohitjoshi-hey?tab=repositories"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-sm border-2 border-black bg-black py-2.5 text-xs font-bold text-white transition hover:bg-zinc-800"
              >
                <span>View All Repositories on GitHub</span>
                <FaArrowRight size={10} />
              </Link>
            </div>
          </div>

          {/* CARD 2: LeetCode (INVERTED SOLID BLACK CARD, matching center card in Figma template!) */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-black bg-black p-7 text-white shadow-xl transition-transform duration-200 hover:-translate-y-1">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-white text-black">
                    <SiLeetcode size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-none text-white">
                      LeetCode
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-amber-400">
                      @joshimohit108
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Solved Metric */}
              <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/80 p-4">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Problems Solved</span>
                  <FaCheckCircle className="text-emerald-400" size={14} />
                </div>
                <p className="mt-1 text-4xl font-black text-white">
                  131
                </p>
              </div>

              {/* Difficulty Breakdown */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2.5 text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-400">
                    <FaBolt size={10} />
                    <span className="text-[10px] font-bold">Easy</span>
                  </div>
                  <p className="mt-1 text-base font-bold text-white">57</p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2.5 text-center">
                  <div className="flex items-center justify-center gap-1 text-amber-400">
                    <FaFire size={10} />
                    <span className="text-[10px] font-bold">Med</span>
                  </div>
                  <p className="mt-1 text-base font-bold text-white">72</p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2.5 text-center">
                  <div className="flex items-center justify-center gap-1 text-red-400">
                    <FaTrophy size={10} />
                    <span className="text-[10px] font-bold">Hard</span>
                  </div>
                  <p className="mt-1 text-base font-bold text-white">2</p>
                </div>
              </div>

              {/* Acceptance Rate */}
              <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 flex items-center justify-between text-xs text-zinc-400">
                <span>Acceptance Rate</span>
                <span className="font-bold text-white">--%</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800">
              <Link
                href="https://leetcode.com/u/joshimohit108/"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-sm border-2 border-white bg-white py-2.5 text-xs font-bold text-black transition hover:bg-zinc-200"
              >
                <span>View LeetCode Profile</span>
                <FaArrowRight size={10} />
              </Link>
            </div>
          </div>

          {/* CARD 3: CodeChef (White Card, Black Border) */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-black bg-white p-7 text-black transition-transform duration-200 hover:-translate-y-1">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-black text-white">
                    <SiCodechef size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-none text-black">
                      CodeChef
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-zinc-600">
                      @m_joshi_1510
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating Card */}
              <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="flex items-center justify-between text-xs text-zinc-500 font-semibold">
                  <span>Current Rating</span>
                  <span className="text-amber-600 font-bold">★★ 2 Star</span>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <p className="text-4xl font-black text-black">1349</p>
                  <span className="text-xs text-zinc-500">Peak • 1349</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    <FaGlobeAsia size={12} />
                    <span className="text-[10px] font-bold uppercase">Global Rank</span>
                  </div>
                  <p className="mt-1 font-bold text-black text-sm">55,111</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    <FaFlag size={12} />
                    <span className="text-[10px] font-bold uppercase">Country Rank</span>
                  </div>
                  <p className="mt-1 font-bold text-black text-sm">52,492</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    <FaTrophy size={12} />
                    <span className="text-[10px] font-bold uppercase">Contests</span>
                  </div>
                  <p className="mt-1 font-bold text-black text-sm">14</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    <FaStar size={12} />
                    <span className="text-[10px] font-bold uppercase">Stars</span>
                  </div>
                  <p className="mt-1 font-bold text-black text-sm">★ ★</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200">
              <Link
                href="https://www.codechef.com/users/m_joshi_1510"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-sm border-2 border-black bg-black py-2.5 text-xs font-bold text-white transition hover:bg-zinc-800"
              >
                <span>View CodeChef Profile</span>
                <FaArrowRight size={10} />
              </Link>
            </div>
          </div>
        </div>

        {/* Open Source Milestone Banner (Crafted natively in the template style) */}
        <div className="mt-16 rounded-2xl border-2 border-black bg-zinc-50 p-8 sm:p-10 text-black">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-black text-white">
                  <SiApache size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-500">
                    Open Source Contributions
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-black">
                    Apache Software Foundation
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                Actively contributing to production-grade repositories under the Apache Software Foundation. Merged 5 pull requests (#274, #286, #288, #289, #294) resolving frontend navigation, HTML consistency, and technical documentation across Apache infrastructure.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded-sm border border-black bg-black px-3 py-1 text-xs font-bold text-white">
                  5 Merged PRs (#274, #286, #288, #289, #294)
                </span>
                <span className="rounded-sm border border-zinc-300 bg-white px-3 py-1 text-xs font-bold text-black">
                  Apache Infrastructure
                </span>
                <span className="rounded-sm border border-emerald-600 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  Status: Active
                </span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/apache/infrastructure"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-black bg-black px-6 py-3 text-xs font-bold text-white transition hover:bg-zinc-800"
              >
                <span>View Apache Repositories</span>
                <FaExternalLinkAlt size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
