import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import TypingText from "../ui/TypingText";

export default function HeroText() {
  return (
    <div>
      <p className="mt-13 text-2xl font-medium text-white">
  Hey, I'm <span className="font-bold text-white-400">Mohit.</span>
</p>
      

      <h1 className="mt-2 min-h-[320px] text-6xl font-bold leading-tight">
        Building
        <br />
        <span className="text-violet-400">
          <TypingText />
        </span>
      </h1>

      <p className="mt-2 max-w-xl text-lg text-zinc-400">
        Computer Science student at IIIT Una exploring Full Stack Development,
        DSA, Open Source Contribution.
      </p>

      <HeroButtons />
      <HeroStats />
    </div>
  );
}
