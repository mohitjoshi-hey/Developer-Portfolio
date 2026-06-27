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
      hover:border-orange-500/40
      "
    >

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-orange-500/10 p-3">

          <SiCodechef className="text-2xl text-orange-400"/>

        </div>

        <div className="min-w-0">

          <p className="text-[11px] uppercase tracking-[0.3em] text-orange-400">

            CodeChef

          </p>

          <h2 className="truncate text-lg font-bold">

            @{data.username}

          </h2>

        </div>

      </div>

      {/* Rating */}

      <div className="mt-5 rounded-xl bg-[#111318] p-4">

        <p className="text-sm text-zinc-500">

          Current Rating

        </p>

        <h1 className="mt-2 text-4xl font-black text-orange-400">

          {data.rating}

        </h1>

        <p className="mt-2 text-sm text-zinc-400">

          Highest • {data.highestRating}

        </p>

      </div>

      {/* Stats */}

      <div className="mt-4 grid grid-cols-2 gap-2">

        <Stat icon={<FaGlobeAsia/>} title="Global" value={data.globalRank}/>

        <Stat icon={<FaFlag/>} title="Country" value={data.countryRank}/>

        <Stat icon={<FaTrophy/>} title="Contests" value={data.participation}/>

        <Stat icon={<FaStar/>} title="Stars" value={data.stars}/>

      </div>

      <div className="mt-auto pt-5">

        <Link
          href={`https://www.codechef.com/users/${data.username}`}
          target="_blank"
          className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-orange-500/30
          py-3
          transition
          hover:bg-orange-500/10
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
}:{
  icon:React.ReactNode;
  title:string;
  value:string|number;
}){

  return(

    <div className="rounded-xl bg-[#111318] p-3">

      <div className="flex items-center gap-1 text-orange-400">

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