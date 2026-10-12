import Link from "next/link";
import {
  FaCodeBranch,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaRocket,
} from "react-icons/fa";
import { SiApache } from "react-icons/si";

export default function OpenSourceCard() {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm transition hover:border-violet-500 dark:border-white/10 dark:bg-[#131722] dark:hover:border-violet-400">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
          <SiApache size={32} />
        </div>

        <div>
          <p className="text-xs uppercase font-bold tracking-[0.25em] text-violet-600 dark:text-violet-400">
            Open Source Milestone
          </p>
          <h4 className="mt-0.5 text-2xl font-bold text-zinc-900 dark:text-white">
            Apache Software Foundation
          </h4>
        </div>
      </div>

      <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        Actively collaborating on open-source repositories within the Apache ecosystem. Submitting pull requests reviewed, refined, and merged by project maintainers according to industry standards.
      </p>

      {/* Two Cards */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Apache Card */}
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/5 dark:bg-[#111318]">
          <div className="grid grid-cols-3 gap-2.5">
            <Stat icon={<FaCheckCircle />} title="Merged PRs" value="5+" />
            <Stat icon={<FaCodeBranch />} title="Apache" value="Infra" />
            <Stat icon={<SiApache />} title="Status" value="Active" />
          </div>

          <Link
            href="https://github.com/apache/infrastructure"
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/5 px-5 py-2.5 text-xs font-semibold text-violet-600 transition hover:bg-violet-600 hover:text-white dark:text-violet-400"
          >
            <span>View Apache Repositories</span>
            <FaExternalLinkAlt size={11} />
          </Link>
        </div>

        {/* Future Card */}
        <div className="flex flex-col justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6 dark:border-white/10 dark:bg-[#111318]/50">
          <div className="flex items-center gap-3">
            <FaRocket className="text-xl text-violet-600 dark:text-violet-400" />
            <h5 className="text-lg font-bold text-zinc-900 dark:text-white">
              Expanding Contributions
            </h5>
          </div>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            My open-source engineering journey is expanding with contributions to Go and C++ libraries, developer tooling, and distributed systems.
          </p>

          <span className="mt-4 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            Stay Tuned 🚀
          </span>
        </div>
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
  value: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200/60 bg-white p-3.5 text-center shadow-xs dark:border-white/5 dark:bg-[#171A21]">
      <div className="flex items-center justify-center gap-1.5 text-violet-600 dark:text-violet-400">
        <span className="text-xs">{icon}</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {title}
        </span>
      </div>
      <p className="mt-1 text-base font-bold text-zinc-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}