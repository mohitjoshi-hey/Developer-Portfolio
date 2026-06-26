import DashboardHeader from "./DashboardHeader";
import DeveloperDashboard from "./DeveloperDashboard";

export default function CodingSection() {
  return (
    <section
      id="coding"
      className="mx-auto max-w-7xl px-8 py-32"
    >

      <DashboardHeader />

      <DeveloperDashboard />

    </section>
  );
}