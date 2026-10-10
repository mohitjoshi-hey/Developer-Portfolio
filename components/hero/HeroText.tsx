"use client";

import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaCode } from "react-icons/fa6";

export default function HeroText() {
  return (
    <div className="flex flex-col justify-center">
      {/* Title block matching Figma typography */}
      <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.18] tracking-tight text-black">
        <span>Hello I'am </span>
        <span className="font-extrabold">Mohit Joshi.</span>
        <br />
        <span className="font-extrabold">Software </span>
        <span className="stroke-heading font-extrabold">Developer</span>
        <br />
        <span>Based In </span>
        <span className="font-extrabold">India.</span>
      </h1>

      {/* Description paragraph */}
      <p className="mt-7 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-600">
        I am a second-year Computer Science Engineering student at Indian Institute of Information Technology Una. Passionate about competitive programming, building robust backend architectures in Go and C++, and contributing to open-source software.
      </p>

      {/* Social Icons row with connecting horizontal line matching Figma */}
      <div className="mt-10 flex items-center gap-3">
        <SocialIcon
          href="https://github.com/mohitjoshi-hey"
          icon={<FaGithub size={18} />}
          label="GitHub"
        />
        <SocialIcon
          href="https://www.linkedin.com/in/mohit-joshi-a1376b36a"
          icon={<FaLinkedin size={18} />}
          label="LinkedIn"
        />
        <SocialIcon
          href="https://x.com/mohitjoshi45342"
          icon={<FaXTwitter size={17} />}
          label="Twitter"
        />
        <SocialIcon
          href="mailto:joshimohit1981@gmail.com"
          icon={<FaEnvelope size={17} />}
          label="Email"
        />
        <SocialIcon
          href="https://www.codechef.com/users/m_joshi_1510"
          icon={<FaCode size={17} />}
          label="CodeChef"
        />

        {/* Horizontal rule extending to the right matching Figma */}
        <div className="hidden sm:block flex-1 h-[2px] bg-black ml-4" />
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-sm border-2 border-black bg-black text-white transition-all duration-200 hover:bg-white hover:text-black shadow-xs"
    >
      {icon}
    </a>
  );
}
