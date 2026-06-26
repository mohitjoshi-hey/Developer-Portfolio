export async function getCodeChefData() {
  const res = await fetch(
    "http://localhost:3000/api/codechef",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch CodeChef");
  }

  return res.json();
}