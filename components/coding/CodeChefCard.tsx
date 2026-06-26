import { getCodeChefData } from "@/lib/codechef";

export default async function CodeChefCard() {
  const data = await getCodeChefData();

  return (
    <div className="rounded-3xl border border-white/10 bg-[#171A21] p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-orange-400">
            CodeChef
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            @{data.username}
          </h2>

        </div>

        <span className="text-4xl">
          {data.stars}
        </span>

      </div>

      <div className="mt-8">

        <p className="text-zinc-500">
          Current Rating
        </p>

        <h1 className="mt-2 text-6xl font-black text-orange-400">
          {data.rating}
        </h1>

        <p className="mt-2 text-zinc-400">
          Highest Rating : {data.highestRating}
        </p>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-xl bg-[#111318] p-4">

          <p className="text-sm text-zinc-500">
            Global Rank
          </p>

          <p className="mt-2 text-2xl font-bold">
            {data.globalRank}
          </p>

        </div>

        <div className="rounded-xl bg-[#111318] p-4">

          <p className="text-sm text-zinc-500">
            Country Rank
          </p>

          <p className="mt-2 text-2xl font-bold">
            {data.countryRank}
          </p>

        </div>

      </div>

      <div className="mt-6 rounded-xl bg-[#111318] p-4">

        <p className="text-sm text-zinc-500">
          Contests Participated
        </p>

        <p className="mt-2 text-2xl font-bold">
          {data.participation}
        </p>

      </div>

    </div>
  );
}