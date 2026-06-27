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
    <div
      className="
      mt-10
      rounded-3xl
      border
      border-white/10
      bg-[#171A21]
      p-6
      transition
      hover:border-violet-500/40
      "
    >
      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-violet-500/10 p-4">

          <SiApache className="text-4xl text-violet-500" />

        </div>

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-violet-400">
            Open Source
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            Apache Infrastructure
          </h2>

        </div>

      </div>

      <p className="mt-5 text-zinc-400">
        Contributed to Apache Infrastructure by submitting pull requests
        that were reviewed and successfully merged by Apache maintainers.
      </p>

      {/* Two Cards */}

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        {/* Apache Card */}

        <div className="rounded-2xl border border-white/10 bg-[#111318] p-6">

          <div className="grid grid-cols-3 gap-3">

            <Stat
              icon={<FaCheckCircle />}
              title="Merged PRs"
              value="5+"
            />

            <Stat
              icon={<FaCodeBranch />}
              title="Apache"
              value="Infra"
            />

            <Stat
              icon={<SiApache />}
              title="Status"
              value="Active"
            />

          </div>

          <Link
            href="https://github.com/apache/infrastructure"
            target="_blank"
            className="
            mt-6
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-violet-500/30
            px-5
            py-3
            transition
            hover:bg-violet-500/10
            "
          >
            View Repository

            <FaExternalLinkAlt className="text-xs" />

          </Link>

        </div>

        {/* Future Card */}

        <div
          className="
          flex
          flex-col
          justify-center
          rounded-2xl
          border
          border-dashed
          border-white/10
          bg-[#111318]
          p-6
          "
        >

          <div className="flex items-center gap-3">

            <FaRocket className="text-2xl text-violet-400" />

            <h3 className="text-2xl font-bold">
              Many More to Come...
            </h3>

          </div>

          <p className="mt-5 leading-7 text-zinc-400">
            My open-source journey has just begun.
            I'm continuously contributing to meaningful
            projects and looking forward to collaborating
            with more organizations across the open-source ecosystem.
          </p>

          <span className="mt-6 text-lg font-medium text-violet-400">
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
    <div className="rounded-xl bg-[#171A21] p-4">

      <div className="flex items-center gap-2 text-violet-400">

        {icon}

        <span className="text-xs uppercase tracking-wide">
          {title}
        </span>

      </div>

      <p className="mt-3 text-xl font-bold">
        {value}
      </p>

    </div>
  );
}