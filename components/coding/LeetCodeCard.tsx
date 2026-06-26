import { getLeetCodeData } from "@/lib/leetcode";

export default async function LeetCodeCard() {
  const data = await getLeetCodeData();

  return (
    <div className="rounded-3xl border border-white/10 bg-[#171A21] p-6">

      <h2 className="text-2xl font-bold">
        LeetCode
      </h2>

      <p className="mt-2 text-zinc-400">
        @{data.user}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <Stat
          title="Solved"
          value={data.problemsSolved}
        />

        <Stat
          title="Rank"
          value={data.rank}
        />

      </div>

    </div>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
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