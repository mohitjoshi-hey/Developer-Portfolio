import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">

      <div
        className="
        relative
        h-[500px]
        w-[380px]
        overflow-hidden
        rounded-3xl
        border
        border-zinc-700
        bg-zinc-900
        "
      >
        <Image
          src="/images/profile.jpg"
          alt="Mohit Joshi"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}