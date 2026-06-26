import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { getGitHubData } from "@/lib/github";

export default async function GitHubCard() {

  const { profile, repos } = await getGitHubData();

  return (

    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-[#171A21]
      p-6
      transition
      hover:border-violet-500/40
      "
    >

      <div className="flex items-center gap-4">

        <Image
          src={profile.avatar_url}
          alt={profile.name ?? profile.login}
          width={80}
          height={80}
          className="rounded-full"
        />

        <div>

          <div className="flex items-center gap-2">

            <FaGithub className="text-2xl"/>

            <h2 className="text-2xl font-bold">
              {profile.name ?? profile.login}
            </h2>

          </div>

          <p className="text-zinc-400">
            @{profile.login}
          </p>

        </div>

      </div>

      <p className="mt-6 text-zinc-400">

        {profile.bio}

      </p>

      <div className="mt-8 grid grid-cols-3 gap-4">

        <Stat
          title="Repos"
          value={profile.public_repos}
        />

        <Stat
          title="Followers"
          value={profile.followers}
        />

        <Stat
          title="Following"
          value={profile.following}
        />

      </div>

      <div className="mt-8">

        <h3 className="mb-4 text-lg font-semibold">
          Latest Repositories
        </h3>

        <div className="space-y-3">

          {repos.map((repo)=>(

            <Link

              key={repo.id}

              href={repo.html_url}

              target="_blank"

              className="
              block
              rounded-xl
              border
              border-white/10
              p-4
              transition
              hover:border-violet-500
              "

            >

              <div className="flex justify-between">

                <h4 className="font-semibold">

                  {repo.name}

                </h4>

                <span className="text-yellow-400">

                  ⭐ {repo.stargazers_count}

                </span>

              </div>

              <p className="mt-2 text-sm text-zinc-400">

                {repo.description ?? "No description"}

              </p>

              <div className="mt-3 flex justify-between text-xs text-zinc-500">

                <span>

                  {repo.language ?? "Unknown"}

                </span>

                <span>

                  {new Date(repo.updated_at).toLocaleDateString()}

                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </div>

  );

}

function Stat({

  title,

  value,

}:{

  title:string;

  value:number;

}){

  return(

    <div className="rounded-xl bg-[#111318] p-4 text-center">

      <p className="text-2xl font-bold">

        {value}

      </p>

      <p className="mt-2 text-sm text-zinc-500">

        {title}

      </p>

    </div>

  );

}