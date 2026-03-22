import { NextResponse } from "next/server";

// The Odds API integration
// Free tier: 500 credits/month at https://the-odds-api.com
// Sign up to get your API key
const ODDS_API_KEY = process.env.ODDS_API_KEY || "";

// Multiple sports for broader coverage
const SPORT_KEYS = [
  { key: "soccer_epl", sport: "כדורגל", league: "פרמייר ליג" },
  { key: "soccer_spain_la_liga", sport: "כדורגל", league: "לה ליגה" },
  { key: "soccer_uefa_champs_league", sport: "כדורגל", league: "ליגת האלופות" },
  { key: "basketball_nba", sport: "כדורסל", league: "NBA" },
];

export async function GET() {
  if (!ODDS_API_KEY) {
    return NextResponse.json({ source: "demo", events: [] });
  }

  try {
    interface OddsBookmaker {
      key: string;
      title: string;
      markets: {
        key: string;
        outcomes: { name: string; price: number }[];
      }[];
    }

    interface OddsApiEvent {
      id: string;
      home_team: string;
      away_team: string;
      sport_title: string;
      commence_time: string;
      bookmakers: OddsBookmaker[];
    }

    const allEvents = [];

    for (const sportCfg of SPORT_KEYS) {
      try {
        const res = await fetch(
          `https://api.the-odds-api.com/v4/sports/${sportCfg.key}/odds/?apiKey=${ODDS_API_KEY}&regions=eu&markets=h2h&oddsFormat=decimal`,
          { next: { revalidate: 300 } }
        );
        if (!res.ok) continue;

        const data: OddsApiEvent[] = await res.json();

        for (const event of data) {
          const bookmakers = event.bookmakers
            .map((bm) => {
              const market = bm.markets.find((m) => m.key === "h2h");
              if (!market) return null;
              const outcomes = market.outcomes;
              return {
                name: bm.title,
                homeOdds: outcomes.find((o) => o.name === event.home_team)?.price || 0,
                drawOdds: outcomes.find((o) => o.name === "Draw")?.price || 0,
                awayOdds: outcomes.find((o) => o.name === event.away_team)?.price || 0,
              };
            })
            .filter((bm): bm is NonNullable<typeof bm> => bm !== null)
            .slice(0, 5);

          if (bookmakers.length === 0) continue;

          allEvents.push({
            id: event.id,
            homeTeam: event.home_team,
            awayTeam: event.away_team,
            league: sportCfg.league,
            sport: sportCfg.sport,
            time: new Date(event.commence_time).toLocaleTimeString("he-IL", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            bookmakers,
          });
        }
      } catch {
        // Skip failed sport, continue with others
      }
    }

    return NextResponse.json({ source: "the-odds-api", events: allEvents });
  } catch {
    return NextResponse.json({ source: "demo", events: [] });
  }
}
