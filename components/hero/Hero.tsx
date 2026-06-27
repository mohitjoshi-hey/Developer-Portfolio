"use client";

import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24"
    >
      <div
        className="
        relative
        z-10
        mx-auto
        grid
        min-h-screen
        max-w-7xl
        grid-cols-1
        items-center
        gap-20
        px-8
        lg:grid-cols-2
        "
      >
        <HeroText />

        <HeroImage />

      </div>
    </section>
  );
}