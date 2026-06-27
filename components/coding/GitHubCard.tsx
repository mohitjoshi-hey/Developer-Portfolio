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
    <div
      className="
      rounded-3xl
      border
      h-[500px]
      border-white/10
      bg-[#171A21]
      p-5
      transition-all
      duration-300
      hover:border-violet-500/40
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <Image
            src={profile.avatar_url}
            alt={profile.name ?? profile.login}
            width={52}
            height={52}
            className="rounded-full border border-white/10"
          />

          <div>

            <div className="flex items-center gap-2">

              <FaGithub className="text-lg" />

              <h2 className="text-lg font-bold leading-none">
                {profile.name ?? profile.login}
              </h2>

            </div>

            <p className="mt-1 text-xs text-violet-400">
              @{profile.login}
            </p>

          </div>

        </div>

        <Link
          href={`https://github.com/${profile.login}`}
          target="_blank"
          className="
          rounded-xl
          border
          border-white/10
          p-3
          transition
          hover:border-violet-500
          hover:bg-violet-500/10
          "
        >
          <FaGithub className="text-lg" />
        </Link>

      </div>

      {/* Bio */}

      <p className="mt-3 line-clamp-2 text-sm leading-5 text-zinc-400">
        {profile.bio}
      </p>

      {/* Stats */}

      <div className="mt-5 grid grid-cols-3 gap-2">

        <Stat title="Repos" value={profile.public_repos} />

        <Stat title="Followers" value={profile.followers} />

        <Stat title="Following" value={profile.following} />

      </div>

      {/* Latest Repositories */}

      <div className="mt-6">

        <div className="mb-2 flex items-center justify-between">

          <h3 className="text-base font-semibold">
            Latest Repositories
          </h3>

          <span className="text-[11px] text-zinc-500">
            Updated Recently
          </span>

        </div>

        <div className="space-y-1.5">

          {repos.slice(0, 3).map((repo) => (

            <Link
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              className="
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-white/10
              px-4
              py-2.5
              transition
              hover:border-violet-500
              hover:bg-white/5
              "
            >

              <div>

                <h4 className="truncate text-sm font-semibold">
                  {repo.name}
                </h4>

                <div className="mt-1 flex items-center gap-3 text-[11px] text-zinc-500">

                  <span>
                    {repo.language ?? "Unknown"}
                  </span>

                  <span>
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </span>

                </div>

              </div>

              <div className="flex items-center gap-3 text-sm">

                <span className="flex items-center gap-1 text-yellow-400">

                  <FaStar />

                  {repo.stargazers_count}

                </span>

                <span className="flex items-center gap-1 text-zinc-500">

                  <FaCodeBranch />

                  {repo.forks_count}

                </span>

              </div>

            </Link>

          ))}

        </div>

        <Link
          href={`https://github.com/${profile.login}?tab=repositories`}
          target="_blank"
          className="
          mt-3
          inline-flex
          items-center
          gap-2
          text-sm
          text-violet-400
          transition
          hover:text-violet-300
          "
        >
          View All Repositories
          <FaArrowRight className="text-xs" />
        </Link>

      </div>

    </div>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-xl bg-[#111318] py-3 text-center">

      <p className="text-lg font-bold text-violet-400">
        {value}
      </p>

      <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-500">
        {title}
      </p>

    </div>
  );
}