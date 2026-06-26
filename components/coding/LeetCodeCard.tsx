import { codingProfiles } from "./codingData";
import CodingCard from "./CodingCard";

export default function LeetCodeCard() {

  const profile = codingProfiles.find(
    (p) => p.platform === "LeetCode"
  )!;

  return <CodingCard {...profile} />;
}