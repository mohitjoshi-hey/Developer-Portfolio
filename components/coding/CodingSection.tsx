import DashboardHeader from "./DashboardHeader";
import DeveloperDashboard from "./DeveloperDashboard";
import OpenSourceCard from "./OpenSourceCard";

export default function CodingSection() {
  return (
    <section id="coding" className="mx-auto max-w-7xl px-8 py-2">
      <DashboardHeader />

      <DeveloperDashboard />
      <h2 className="mt-14 text-5xl font-bold">Open Source Contributions</h2>

      <p className="mt-4 max-w-2xl text-zinc-400">
        Contributions to real-world open-source projects through the Apache
        Software Foundation.
      </p>

      <OpenSourceCard />
    </section>
  );
}
