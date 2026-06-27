const USERNAME = "joshimohit108";

export async function getLeetCodeData() {
  const res = await fetch(
    `https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch LeetCode");
  }

  return res.json();
}