import { NextResponse } from "next/server";

// API-Football integration
// Free tier: 100 requests/day at https://www.api-football.com
// Sign up to get your API key and replace below
const API_FOOTBALL_KEY = process.env.API_FOOTBALL_KEY || "";
const API_FOOTBALL_HOST = "v3.football.api-sports.io";

export async function GET() {
  // If no API key, return demo data
  if (!API_FOOTBALL_KEY) {
    return NextResponse.json({
      source: "demo",
      matches: [
        { id: 1, homeTeam: "מכבי ת\"א", awayTeam: "הפועל ב\"ש", homeScore: 2, awayScore: 0, minute: "67'", league: "ליגת העל", status: "live" },
        { id: 2, homeTeam: "ריאל מדריד", awayTeam: "באיירן מינכן", homeScore: 1, awayScore: 1, minute: "45+2'", league: "ליגת האלופות", status: "live" },
        { id: 3, homeTeam: "ארסנל", awayTeam: "מנצ'סטר סיטי", homeScore: 0, awayScore: 0, minute: "20:45", league: "פרמייר ליג", status: "upcoming" },
        { id: 4, homeTeam: "ברצלונה", awayTeam: "אתלטיקו", homeScore: 3, awayScore: 1, minute: "FT", league: "לה ליגה", status: "finished" },
      ],
    });
  }

  try {
    const res = await fetch(
      `https://${API_FOOTBALL_HOST}/fixtures?live=all`,
      {
        headers: {
          "x-rapidapi-key": API_FOOTBALL_KEY,
          "x-rapidapi-host": API_FOOTBALL_HOST,
        },
        next: { revalidate: 30 },
      }
    );

    if (!res.ok) throw new Error("API request failed");

    const data = await res.json();

    interface FixtureResponse {
      fixture: {
        id: number;
        status: { short: string; elapsed: number | null };
      };
      teams: {
        home: { name: string };
        away: { name: string };
      };
      goals: {
        home: number | null;
        away: number | null;
      };
      league: { name: string };
    }

    const matches = data.response?.map((fixture: FixtureResponse) => ({
      id: fixture.fixture.id,
      homeTeam: fixture.teams.home.name,
      awayTeam: fixture.teams.away.name,
      homeScore: fixture.goals.home ?? 0,
      awayScore: fixture.goals.away ?? 0,
      minute: fixture.fixture.status.elapsed
        ? `${fixture.fixture.status.elapsed}'`
        : fixture.fixture.status.short,
      league: fixture.league.name,
      status:
        fixture.fixture.status.short === "FT"
          ? "finished"
          : fixture.fixture.status.short === "NS"
          ? "upcoming"
          : "live",
    }));

    return NextResponse.json({ source: "api-football", matches });
  } catch {
    return NextResponse.json({ source: "demo", matches: [] });
  }
}
