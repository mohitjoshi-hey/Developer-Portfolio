import { getCodeChefData } from "@/lib/codechef";
import { SiCodechef } from "react-icons/si";
import {
  FaStar,
  FaGlobeAsia,
  FaFlag,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

export default async function CodeChefCard() {
  const data = await getCodeChefData();

  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-orange-500 dark:border-white/10 dark:bg-[#131722] dark:hover:border-orange-400">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
            <SiCodechef size={24} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-orange-500">
              CodeChef
            </p>
            <h3 className="truncate text-base font-bold text-zinc-900 dark:text-white">
              @{data.username}
            </h3>
          </div>
        </div>

        {/* Rating */}
        <div className="mt-5 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 dark:border-white/5 dark:bg-[#111318]">
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            Current Rating
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <h4 className="text-3xl font-black text-orange-500">
              {data.rating}
            </h4>
            <span className="text-xs font-semibold text-amber-500">
              ★ {data.stars} Star
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Peak Rating • {data.highestRating}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Stat icon={<FaGlobeAsia />} title="Global Rank" value={data.globalRank} />
          <Stat icon={<FaFlag />} title="Country Rank" value={data.countryRank} />
          <Stat icon={<FaTrophy />} title="Contests" value={data.participation} />
          <Stat icon={<FaStar />} title="Stars" value={data.stars} />
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-zinc-100 dark:border-white/5">
        <Link
          href={`https://www.codechef.com/users/${data.username}`}
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/5 py-2.5 text-xs font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white dark:text-orange-400"
        >
          <span>View CodeChef Profile</span>
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
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 dark:border-white/5 dark:bg-[#111318]">
      <div className="flex items-center gap-1.5 text-orange-500">
        <span className="text-xs">{icon}</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {title}
        </span>
      </div>
      <p className="mt-1.5 text-sm font-bold text-zinc-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}