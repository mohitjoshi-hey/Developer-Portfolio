import { getLeetCodeData } from "@/lib/leetcode";
import { SiLeetcode } from "react-icons/si";
import {
  FaCheckCircle,
  FaBolt,
  FaFire,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

export default async function LeetCodeCard() {
  const data = await getLeetCodeData();

  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-yellow-500 dark:border-white/10 dark:bg-[#131722] dark:hover:border-yellow-400">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500">
            <SiLeetcode size={24} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-yellow-600 dark:text-yellow-400">
              LeetCode
            </p>
            <h3 className="truncate text-base font-bold text-zinc-900 dark:text-white">
              @joshimohit108
            </h3>
          </div>
        </div>

        {/* Problems Solved */}
        <div className="mt-5 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 dark:border-white/5 dark:bg-[#111318]">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              Problems Solved
            </p>
            <FaCheckCircle className="text-emerald-500" size={14} />
          </div>
          <h4 className="mt-1 text-3xl font-black text-zinc-900 dark:text-white">
            {data.solvedProblem}
          </h4>
        </div>

        {/* Difficulty Breakdown */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <Stat
            icon={<FaBolt />}
            title="Easy"
            value={data.easySolved}
            color="text-emerald-500"
          />
          <Stat
            icon={<FaFire />}
            title="Med"
            value={data.mediumSolved}
            color="text-amber-500"
          />
          <Stat
            icon={<FaTrophy />}
            title="Hard"
            value={data.hardSolved}
            color="text-rose-500"
          />
        </div>

        {/* Acceptance Rate */}
        <div className="mt-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3 dark:border-white/5 dark:bg-[#111318]">
          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <span>Acceptance Rate</span>
            <span className="font-bold text-zinc-900 dark:text-white">
              {data.acceptanceRate ?? "--"}%
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-zinc-100 dark:border-white/5">
        <Link
          href="https://leetcode.com/u/joshimohit108/"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-xl border border-yellow-500/30 bg-yellow-500/5 py-2.5 text-xs font-semibold text-yellow-600 transition hover:bg-yellow-500 hover:text-white dark:text-yellow-400"
        >
          <span>View LeetCode Profile</span>
          <FaArrowRight size={10} />
        </Link>
      </div>
    </div>
  );
}

function Stat({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-2.5 text-center dark:border-white/5 dark:bg-[#111318]">
      <div className={`flex items-center justify-center gap-1 ${color}`}>
        <span className="text-xs">{icon}</span>
        <span className="text-[10px] font-semibold">{title}</span>
      </div>
      <p className="mt-1 text-sm font-bold text-zinc-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}