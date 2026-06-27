export async function getGitHubData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/github`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("GitHub Error");
  }

  return res.json();
}