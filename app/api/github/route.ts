import { NextResponse } from "next/server";

const USERNAME = "mohitjoshi-hey";

export async function GET() {
  try {

    const [profileRes, repoRes] = await Promise.all([

      fetch(`https://api.github.com/users/${USERNAME}`),

      fetch(
        `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=3`
      ),

    ]);

    const profile = await profileRes.json();

    const repos = await repoRes.json();

    return NextResponse.json({
      profile,
      repos,
    });

  } catch {

    return NextResponse.json(
      {
        error: "GitHub API Error",
      },
      {
        status: 500,
      }
    );

  }
}