import { NextResponse } from "next/server";

const USERNAME = "joshimohit108";

export async function GET() {
  try {
    const res = await fetch(
      `https://cp-rating-api.vercel.app/leetcode/${USERNAME}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch LeetCode");
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "LeetCode API Error" },
      { status: 500 }
    );
  }
}