export async function getLeetCodeData() {
  const res = await fetch(
    "http://localhost:3000/api/leetcode",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch LeetCode");
  }

  return res.json();
}