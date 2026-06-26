import { codingProfiles } from "./codingData";
import CodingCard from "./CodingCard";

export default function CodeChefCard() {

  const profile = codingProfiles.find(
    (p) => p.platform === "CodeChef"
  )!;

  return <CodingCard {...profile} />;
}