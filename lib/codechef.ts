export async function getCodeChefData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/codechef`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch CodeChef");
  }

  return res.json();
}