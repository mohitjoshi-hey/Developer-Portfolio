"use client";

import HeroText from "./HeroText";
import HeroBoySvg from "./HeroBoySvg";

export default function Hero() {
  return (
    <section id="home" className="w-full bg-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <HeroText />
          </div>

          {/* Right Boy Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroBoySvg />
          </div>
        </div>
      </div>
    </section>
  );
}