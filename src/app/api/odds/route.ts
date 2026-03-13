import { NextResponse } from "next/server";

// The Odds API integration
// Free tier: 500 credits/month at https://the-odds-api.com
// Sign up to get your API key
const ODDS_API_KEY = process.env.ODDS_API_KEY || "";

export async function GET() {
  if (!ODDS_API_KEY) {
    return NextResponse.json({
      source: "demo",
      odds: [
        { id: 1, homeTeam: "ריאל מדריד", awayTeam: "באיירן מינכן", league: "UCL", homeOdds: 2.10, drawOdds: 3.40, awayOdds: 3.20, time: "21:45" },
        { id: 2, homeTeam: "ארסנל", awayTeam: "מנצ'סטר סיטי", league: "EPL", homeOdds: 2.50, drawOdds: 3.30, awayOdds: 2.70, time: "20:45" },
        { id: 3, homeTeam: "לייקרס", awayTeam: "סלטיקס", league: "NBA", homeOdds: 1.85, drawOdds: 0, awayOdds: 1.95, time: "03:00" },
      ],
    });
  }

  try {
    const res = await fetch(
      `https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=${ODDS_API_KEY}&regions=eu&markets=h2h&oddsFormat=decimal`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) throw new Error("Odds API request failed");

    const data = await res.json();

    interface OddsBookmaker {
      key: string;
      title: string;
      markets: {
        key: string;
        outcomes: { name: string; price: number }[];
      }[];
    }

    interface OddsEvent {
      id: string;
      home_team: string;
      away_team: string;
      sport_title: string;
      commence_time: string;
      bookmakers: OddsBookmaker[];
    }

    const odds = data.map((event: OddsEvent) => {
      const bookmaker = event.bookmakers?.[0];
      const market = bookmaker?.markets?.find(
        (m: OddsBookmaker["markets"][0]) => m.key === "h2h"
      );
      const outcomes = market?.outcomes || [];

      return {
        id: event.id,
        homeTeam: event.home_team,
        awayTeam: event.away_team,
        league: event.sport_title,
        homeOdds:
          outcomes.find((o: { name: string }) => o.name === event.home_team)
            ?.price || 0,
        drawOdds:
          outcomes.find((o: { name: string }) => o.name === "Draw")?.price || 0,
        awayOdds:
          outcomes.find((o: { name: string }) => o.name === event.away_team)
            ?.price || 0,
        time: new Date(event.commence_time).toLocaleTimeString("he-IL", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    });

    return NextResponse.json({ source: "the-odds-api", odds });
  } catch {
    return NextResponse.json({ source: "demo", odds: [] });
  }
}
