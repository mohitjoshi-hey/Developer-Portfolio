export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <button
        className="
        rounded-xl
        bg-violet-600
        px-7
        py-3
        font-semibold
        transition
        hover:bg-violet-500
        "
      >
        View Projects
      </button>

      <button
        className="
        rounded-xl
        border
        border-zinc-700
        px-7
        py-3
        transition
        hover:border-violet-500
        "
      >
        Download Resume
      </button>

    </div>
  );
}