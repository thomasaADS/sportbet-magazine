"use client";

import { useState, useEffect } from "react";

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  minute: string;
  league: string;
  status: "live" | "finished" | "upcoming";
  date?: string;
}

interface LeagueGroup {
  league: string;
  matches: Match[];
}

const demoMatches: Match[] = [
  // Israeli Premier League
  { id: 1, homeTeam: "מכבי תל אביב", awayTeam: "הפועל באר שבע", homeScore: 2, awayScore: 0, minute: "67'", league: "ליגת העל", status: "live" },
  { id: 2, homeTeam: "מכבי חיפה", awayTeam: "הפועל תל אביב", homeScore: 1, awayScore: 1, minute: "45+2'", league: "ליגת העל", status: "live" },
  { id: 3, homeTeam: "בית\"ר ירושלים", awayTeam: "בני סכנין", homeScore: null, awayScore: null, minute: "20:30", league: "ליגת העל", status: "upcoming" },
  // Champions League
  { id: 4, homeTeam: "ריאל מדריד", awayTeam: "באיירן מינכן", homeScore: 1, awayScore: 1, minute: "52'", league: "ליגת האלופות", status: "live" },
  { id: 5, homeTeam: "מנצ'סטר סיטי", awayTeam: "פריז סן ז'רמן", homeScore: 3, awayScore: 2, minute: "FT", league: "ליגת האלופות", status: "finished" },
  { id: 6, homeTeam: "ברצלונה", awayTeam: "אינטר מילאן", homeScore: null, awayScore: null, minute: "21:45", league: "ליגת האלופות", status: "upcoming" },
  // Premier League
  { id: 7, homeTeam: "ארסנל", awayTeam: "מנצ'סטר סיטי", homeScore: null, awayScore: null, minute: "20:45", league: "פרמייר ליג", status: "upcoming" },
  { id: 8, homeTeam: "ליברפול", awayTeam: "צ'לסי", homeScore: 2, awayScore: 1, minute: "FT", league: "פרמייר ליג", status: "finished" },
  { id: 9, homeTeam: "טוטנהאם", awayTeam: "ניוקאסל", homeScore: 0, awayScore: 1, minute: "33'", league: "פרמייר ליג", status: "live" },
  // NBA
  { id: 10, homeTeam: "לוס אנג'לס לייקרס", awayTeam: "בוסטון סלטיקס", homeScore: 98, awayScore: 102, minute: "Q4 5:23", league: "NBA", status: "live" },
  { id: 11, homeTeam: "גולדן סטייט ווריורס", awayTeam: "פיניקס סאנס", homeScore: null, awayScore: null, minute: "03:00", league: "NBA", status: "upcoming" },
  { id: 12, homeTeam: "מילווקי באקס", awayTeam: "דנבר נאגטס", homeScore: 115, awayScore: 108, minute: "FT", league: "NBA", status: "finished" },
  // La Liga
  { id: 13, homeTeam: "ברצלונה", awayTeam: "אתלטיקו מדריד", homeScore: 3, awayScore: 1, minute: "FT", league: "לה ליגה", status: "finished" },
  { id: 14, homeTeam: "ריאל סוסיאדד", awayTeam: "סביליה", homeScore: null, awayScore: null, minute: "22:00", league: "לה ליגה", status: "upcoming" },
];

function groupByLeague(matches: Match[]): LeagueGroup[] {
  const groups: Record<string, Match[]> = {};
  for (const match of matches) {
    if (!groups[match.league]) groups[match.league] = [];
    groups[match.league].push(match);
  }
  return Object.entries(groups).map(([league, matches]) => ({ league, matches }));
}

export default function LiveScoresBoard() {
  const [matches, setMatches] = useState<Match[]>(demoMatches);
  const [filter, setFilter] = useState<"all" | "live" | "finished" | "upcoming">("all");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchScores() {
      try {
        const res = await fetch("/api/scores");
        if (res.ok) {
          const data = await res.json();
          if (data.matches && data.matches.length > 0) {
            setMatches(data.matches);
          }
        }
      } catch {
        // Use demo data
      }
      setIsLoading(false);
    }

    setIsLoading(true);
    fetchScores();
    const interval = setInterval(fetchScores, 30000);
    return () => clearInterval(interval);
  }, []);

  const filteredMatches = filter === "all"
    ? matches
    : matches.filter((m) => m.status === filter);

  const leagueGroups = groupByLeague(filteredMatches);

  const filterButtons = [
    { key: "all", label: "הכל" },
    { key: "live", label: "LIVE" },
    { key: "upcoming", label: "עתידיים" },
    { key: "finished", label: "הסתיימו" },
  ] as const;

  return (
    <div>
      {/* Filters */}
      <div className="flex justify-center gap-2 mb-8">
        {filterButtons.map((btn) => (
          <button
            key={btn.key}
            onClick={() => setFilter(btn.key)}
            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
              filter === btn.key
                ? "text-black"
                : "bg-card-bg border border-card-border text-text-muted hover:border-accent"
            }`}
            style={
              filter === btn.key
                ? { background: "linear-gradient(135deg, #f59e0b, #d97706)" }
                : {}
            }
          >
            {btn.key === "live" && <span className="live-indicator">{btn.label}</span>}
            {btn.key !== "live" && btn.label}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="text-center py-20 text-text-muted">טוען תוצאות...</div>
      ) : (
        <div className="space-y-6">
          {leagueGroups.map((group) => (
            <div key={group.league} className="rounded-xl bg-card-bg border border-card-border overflow-hidden">
              <div className="px-5 py-3 border-b border-card-border flex items-center gap-2">
                <span className="text-accent font-bold">●</span>
                <h3 className="font-bold">{group.league}</h3>
                <span className="text-xs text-text-muted">
                  ({group.matches.length} משחקים)
                </span>
              </div>
              <div className="divide-y divide-card-border">
                {group.matches.map((match) => (
                  <div
                    key={match.id}
                    className="px-5 py-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      {/* Home Team */}
                      <div className="flex-1 text-left">
                        <span className="font-bold">{match.homeTeam}</span>
                      </div>

                      {/* Score / Time */}
                      <div className="flex items-center gap-3 px-4 min-w-[120px] justify-center">
                        {match.status === "upcoming" ? (
                          <span className="text-accent font-bold">
                            {match.minute}
                          </span>
                        ) : (
                          <>
                            <span className="text-2xl font-black">
                              {match.homeScore}
                            </span>
                            <span className="text-text-muted">-</span>
                            <span className="text-2xl font-black">
                              {match.awayScore}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Away Team */}
                      <div className="flex-1 text-right">
                        <span className="font-bold">{match.awayTeam}</span>
                      </div>

                      {/* Status */}
                      <div className="mr-4 min-w-[60px] text-center">
                        {match.status === "live" && (
                          <span className="live-indicator text-xs text-accent-red font-bold">
                            {match.minute}
                          </span>
                        )}
                        {match.status === "finished" && (
                          <span className="text-xs text-text-muted font-bold">
                            סיום
                          </span>
                        )}
                        {match.status === "upcoming" && (
                          <span className="text-xs text-accent-blue font-bold">
                            טרם החל
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Data Source Notice */}
      <div className="mt-8 text-center">
        <p className="text-xs text-text-muted">
          התוצאות מתעדכנות כל 30 שניות | מקור נתונים: API-Football
        </p>
      </div>
    </div>
  );
}
