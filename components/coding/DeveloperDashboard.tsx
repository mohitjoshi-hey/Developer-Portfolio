import GitHubCard from "./GitHubCard";
import LeetCodeCard from "./LeetCodeCard";
import CodeChefCard from "./CodeChefCard";

export default function DeveloperDashboard() {
  return (
    <div className="grid gap-8">

      <GitHubCard />

      <div className="grid gap-8 md:grid-cols-2">

        <LeetCodeCard />

        <CodeChefCard />

      </div>

    </div>
  );
}