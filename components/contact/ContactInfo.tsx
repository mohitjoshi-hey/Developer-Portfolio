"use client";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <InfoCard
        icon={<FaEnvelope />}
        title="Email"
        value="yourmail@gmail.com"
      />

      <InfoCard
        icon={<FaGithub />}
        title="GitHub"
        value="github.com/yourusername"
      />

      <InfoCard
        icon={<FaLinkedin />}
        title="LinkedIn"
        value="linkedin.com/in/yourusername"
      />

      <InfoCard
        icon={<FaMapMarkerAlt />}
        title="Location"
        value="India"
      />

    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#171A21] p-6">

      <div className="mb-3 text-2xl text-violet-400">
        {icon}
      </div>

      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-zinc-400">
        {value}
      </p>

    </div>
  );
}