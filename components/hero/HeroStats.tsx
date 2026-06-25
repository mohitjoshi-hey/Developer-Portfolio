const stats = [
  {
    value: "15+",
    label: "Projects",
  },
  {
    value: "3+",
    label: "Hackathons",
  },
  {
    value: "1000+",
    label: "DSA (Goal)",
  },
  {
    value: "∞",
    label: "Keep Learning",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-5">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            backdrop-blur-xl
            transition
            hover:border-violet-500/40
            hover:-translate-y-1
          "
        >
          <h2 className="text-3xl font-bold text-violet-400">
            {item.value}
          </h2>

          <p className="mt-2 text-zinc-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}