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
    <div
      className="
      h-full
      flex
      flex-col
      rounded-3xl
      border
      border-white/10
      bg-[#171A21]
      p-5
      transition-all
      duration-300
      hover:border-yellow-500/40
      "
    >
      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-yellow-500/10 p-3">

          <SiLeetcode className="text-2xl text-yellow-400" />

        </div>

        <div className="min-w-0">

          <p className="text-[11px] uppercase tracking-[0.3em] text-yellow-400">
            LeetCode
          </p>

          <h2 className="truncate text-lg font-bold">
            @joshimohit108
          </h2>

        </div>

      </div>

      {/* Problems */}

      <div className="mt-5 rounded-xl bg-[#111318] p-4">

        <div className="flex items-center justify-between">

          <p className="text-sm text-zinc-500">
            Problems Solved
          </p>

          <FaCheckCircle className="text-green-400"/>

        </div>

        <h1 className="mt-2 text-4xl font-black text-yellow-400">
          {data.solvedProblem}
        </h1>

      </div>

      {/* Difficulty */}

      <div className="mt-4 grid grid-cols-3 gap-2">

        <Stat icon={<FaBolt />} title="Easy" value={data.easySolved} color="text-green-400"/>

        <Stat icon={<FaFire />} title="Medium" value={data.mediumSolved} color="text-yellow-400"/>

        <Stat icon={<FaTrophy />} title="Hard" value={data.hardSolved} color="text-red-400"/>

      </div>

      {/* Acceptance */}

      <div className="mt-4 rounded-xl bg-[#111318] p-4">

        <div className="flex items-center justify-between">

          <span className="text-sm text-zinc-500">
            Acceptance Rate
          </span>

          <FaTrophy className="text-yellow-400"/>

        </div>

        <p className="mt-2 text-xl font-bold">
          {data.acceptanceRate ?? "--"}%
        </p>

      </div>

      <div className="mt-auto pt-5">

        <Link
          href="https://leetcode.com/u/joshimohit108/"
          target="_blank"
          className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-yellow-500/30
          py-3
          transition
          hover:bg-yellow-500/10
          "
        >
          Visit Profile

          <FaArrowRight/>

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
}:{
  icon:React.ReactNode;
  title:string;
  value:number;
  color:string;
}){

  return(

    <div className="rounded-xl bg-[#111318] p-3">

      <div className={`flex items-center gap-1 ${color}`}>

        {icon}

        <span className="text-[10px] uppercase tracking-wider">

          {title}

        </span>

      </div>

      <p className="mt-2 text-lg font-bold">

        {value}

      </p>

    </div>

  );
}