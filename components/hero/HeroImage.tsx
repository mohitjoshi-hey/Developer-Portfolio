import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        {/* Glow */}

        <div
          className="
          absolute
          inset-0
          scale-110
          rounded-[40px]
          bg-violet-600/25
          blur-3xl
          "
        />

        {/* Fixed Tilted Frame */}

        <div
          className="
            relative
            -translate-x-27
            -translate-y-33
            rotate-[6deg]
            "
          >
          <div
            className="
            rounded-[34px]
            border
            border-violet-500/30
            bg-[#171A21]/80
            p-3
            backdrop-blur-xl
            shadow-[0_0_80px_rgba(139,92,246,.25)]
            "
          >
            <div
              className="
              relative
              h-[420px]
              w-[350px]
              overflow-hidden
              rounded-[26px]
              "
            >
              <Image
                src="/images/profile.jpg"
                alt="Mohit Joshi"
                fill
                priority
                sizes="420px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
