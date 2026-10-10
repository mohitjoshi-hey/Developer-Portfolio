import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaArrowRight,
} from "react-icons/fa";
import { getGitHubData } from "@/lib/github";

export default async function GitHubCard() {
  const { profile, repos } = await getGitHubData();

  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-500 dark:border-white/10 dark:bg-[#131722] dark:hover:border-violet-400">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={profile.avatar_url}
              alt={profile.name ?? profile.login}
              width={52}
              height={52}
              className="rounded-full border border-zinc-200 dark:border-white/10"
            />
            <div>
              <div className="flex items-center gap-2">
                <FaGithub className="text-lg text-zinc-900 dark:text-white" />
                <h3 className="text-lg font-bold leading-none text-zinc-900 dark:text-white">
                  {profile.name ?? profile.login}
                </h3>
              </div>
              <p className="mt-1 text-xs font-semibold text-violet-600 dark:text-violet-400">
                @{profile.login}
              </p>
            </div>
          </div>

          <Link
            href={`https://github.com/${profile.login}`}
            target="_blank"
            aria-label="View GitHub Profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white"
          >
            <FaGithub size={18} />
          </Link>
        </div>

        {/* Bio */}
        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {profile.bio || "Computer Science student at IIIT Una. Open source enthusiast & developer."}
        </p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          <Stat title="Repos" value={profile.public_repos} />
          <Stat title="Followers" value={profile.followers} />
          <Stat title="Following" value={profile.following} />
        </div>

        {/* Latest Repositories */}
        <div className="mt-6">
          <div className="mb-2.5 flex items-center justify-between">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
              Recent Repositories
            </h4>
            <span className="text-[11px] text-zinc-400">Updated Recently</span>
          </div>

          <div className="space-y-2">
            {repos.slice(0, 3).map((repo: any) => (
              <Link
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 transition hover:border-violet-500 hover:bg-violet-50/40 dark:border-white/5 dark:bg-[#111318] dark:hover:border-violet-400 dark:hover:bg-white/5"
              >
                <div className="min-w-0 pr-2">
                  <h5 className="truncate text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                    {repo.name}
                  </h5>
                  <div className="mt-0.5 flex items-center gap-3 text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span>{repo.language ?? "General"}</span>
                    <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs shrink-0">
                  <span className="flex items-center gap-1 text-amber-500">
                    <FaStar size={12} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <FaCodeBranch size={11} />
                    {repo.forks_count}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-white/5">
        <Link
          href={`https://github.com/${profile.login}?tab=repositories`}
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 transition hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
        >
          <span>View All Repositories on GitHub</span>
          <FaArrowRight size={10} />
        </Link>
      </div>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-xl border border-zinc-100 bg-zinc-50 py-3 text-center dark:border-white/5 dark:bg-[#111318]">
      <p className="text-xl font-bold text-violet-600 dark:text-violet-400">
        {value}
      </p>
      <p className="mt-0.5 text-[10px] uppercase font-semibold tracking-wider text-zinc-500 dark:text-zinc-400">
        {title}
      </p>
    </div>
  );
}