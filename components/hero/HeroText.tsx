import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import TypingText from "../ui/TypingText";

export default function HeroText() {
  return (
    <div>
      <span className="rounded-full border border-violet-500/30 px-4 py-2 text-sm text-violet-400">
        Computer Science Student
      </span>

      <h1 className="mt-8 text-6xl font-bold leading-tight">
        Building
        <br />
        <span className="text-violet-400">
          <TypingText />
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg text-zinc-400">
        Computer Science student at IIIT Una exploring Full Stack Development,
        Artificial Intelligence, Blockchain and Systems Programming.
      </p>

      <HeroButtons />
      <HeroStats />
    </div>
  );
}
