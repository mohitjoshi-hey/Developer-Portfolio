import GitHubCard from "./GitHubCard";
import LeetCodeCard from "./LeetCodeCard";
import CodeChefCard from "./CodeChefCard";

export default function DeveloperDashboard() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12 items-stretch">
      <div className="md:col-span-2 xl:col-span-6">
        <GitHubCard />
      </div>

      <div className="md:col-span-1 xl:col-span-3">
        <LeetCodeCard />
      </div>

      <div className="md:col-span-1 xl:col-span-3">
        <CodeChefCard />
      </div>
    </div>
  );
}