"use client";

import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-8 py-24 lg:grid-cols-2">

        <HeroText />

        <HeroImage />
        {/* <HeroButtons /> */}

        {/* <HeroStats /> */}
      </div>
    </section>
  );
}