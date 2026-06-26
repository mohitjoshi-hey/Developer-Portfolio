export async function getGitHubData() {

  const res = await fetch(
    "http://localhost:3000/api/github",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("GitHub Error");
  }

  return res.json();

}