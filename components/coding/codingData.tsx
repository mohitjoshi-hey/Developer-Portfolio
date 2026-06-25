import { SiCodechef, SiLeetcode, SiGithub } from "react-icons/si";

export const codingProfiles = [
  {
    platform: "CodeChef",
    icon: <SiCodechef />,
    rating: "★★★★",
    current: "1823",
    highest: "1890",
    solved: "326",
    link: "https://www.codechef.com/users/YOUR_USERNAME",
    color: "from-amber-500 to-orange-500",
  },

  {
    platform: "LeetCode",
    icon: <SiLeetcode />,
    rating: "1780",
    current: "250 Solved",
    highest: "Top 18%",
    solved: "Easy • Medium • Hard",
    link: "https://leetcode.com/YOUR_USERNAME",
    color: "from-yellow-500 to-orange-400",
  },

  {
    platform: "GitHub",
    icon: <SiGithub />,
    rating: "15 Repositories",
    current: "120 Contributions",
    highest: "42 Followers",
    solved: "Open Source",
    link: "https://github.com/YOUR_USERNAME",
    color: "from-zinc-700 to-zinc-900",
  },
];