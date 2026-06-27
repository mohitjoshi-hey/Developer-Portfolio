import GitHubCard from "./GitHubCard";
import LeetCodeCard from "./LeetCodeCard";
import CodeChefCard from "./CodeChefCard";

export default function DeveloperDashboard() {
  return (
    <div className="grid gap-6">

      {/* Top Row */}

      <div className="grid gap-6 xl:grid-cols-5">

        {/* GitHub */}

        <div className="xl:col-span-3">
          <GitHubCard />
        </div>

        {/* LeetCode */}

        <div>
          <LeetCodeCard />
        </div>

        {/* CodeChef */}

        <div>
          <CodeChefCard />
        </div>

      </div>

    </div>
  );
}