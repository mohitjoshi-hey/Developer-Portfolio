export default function DashboardHeader() {
  return (
    <div className="mb-12">
      <p className="text-xs uppercase tracking-[0.3em] font-semibold text-violet-600 dark:text-violet-400">
        Competitive Programming &amp; Activity
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white">
        Developer Dashboard
      </h2>
      <p className="mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
        Live telemetry and competitive ratings across GitHub, LeetCode, and CodeChef.
      </p>
    </div>
  );
}