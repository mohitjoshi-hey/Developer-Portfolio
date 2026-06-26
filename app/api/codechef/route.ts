import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

const USERNAME = "m_joshi_1510";

export async function GET() {
  try {
    const response = await fetch(
      `https://www.codechef.com/users/${USERNAME}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch CodeChef profile");
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Current Rating
    const rating = $(".rating-number")
      .first()
      .text()
      .trim();

    // Stars (★, ★★, ★★★...)
    const stars = $(".rating-star")
      .first()
      .text()
      .trim();

    // Highest Rating
    const highestText = $(".rating-header")
      .find("small")
      .text();

    const highestRating =
      highestText.match(/\d+/)?.[0] ?? rating;

    // Global & Country Rank
    const ranks = $(".rating-ranks strong");

    const globalRank =
      $(ranks[0]).text().trim() || "--";

    const countryRank =
      $(ranks[1]).text().trim() || "--";

    // Contest count
    const participation =
      $(".contest-participated-count")
        .text()
        .match(/\d+/)?.[0] ?? "--";

    return NextResponse.json({
      username: USERNAME,
      rating,
      stars,
      highestRating,
      globalRank,
      countryRank,
      participation,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch CodeChef profile",
      },
      {
        status: 500,
      }
    );

  }
}