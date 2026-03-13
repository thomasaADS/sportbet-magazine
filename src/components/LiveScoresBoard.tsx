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
}

const demoMatches: Match[] = [
  { id: 1, homeTeam: "מכבי תל אביב", awayTeam: "הפועל באר שבע", homeScore: 2, awayScore: 0, minute: "67'", league: "ליגת העל", status: "live" },
  { id: 2, homeTeam: "מכבי חיפה", awayTeam: "הפועל תל אביב", homeScore: 1, awayScore: 1, minute: "45'", league: "ליגת העל", status: "live" },
  { id: 3, homeTeam: "בית\"ר ירושלים", awayTeam: "בני סכנין", homeScore: null, awayScore: null, minute: "20:30", league: "ליגת העל", status: "upcoming" },
  { id: 4, homeTeam: "ריאל מדריד", awayTeam: "באיירן מינכן", homeScore: 1, awayScore: 1, minute: "52'", league: "ליגת האלופות", status: "live" },
  { id: 5, homeTeam: "מנצ'סטר סיטי", awayTeam: "פריז סן ז'רמן", homeScore: 3, awayScore: 2, minute: "FT", league: "ליגת האלופות", status: "finished" },
  { id: 6, homeTeam: "ברצלונה", awayTeam: "אינטר מילאן", homeScore: null, awayScore: null, minute: "21:45", league: "ליגת האלופות", status: "upcoming" },
  { id: 7, homeTeam: "ארסנל", awayTeam: "מנצ'סטר סיטי", homeScore: null, awayScore: null, minute: "20:45", league: "פרמייר ליג", status: "upcoming" },
  { id: 8, homeTeam: "ליברפול", awayTeam: "צ'לסי", homeScore: 2, awayScore: 1, minute: "FT", league: "פרמייר ליג", status: "finished" },
  { id: 9, homeTeam: "טוטנהאם", awayTeam: "ניוקאסל", homeScore: 0, awayScore: 1, minute: "33'", league: "פרמייר ליג", status: "live" },
  { id: 10, homeTeam: "לייקרס", awayTeam: "סלטיקס", homeScore: 98, awayScore: 102, minute: "Q4 5:23", league: "NBA", status: "live" },
  { id: 11, homeTeam: "ווריורס", awayTeam: "סאנס", homeScore: null, awayScore: null, minute: "03:00", league: "NBA", status: "upcoming" },
  { id: 12, homeTeam: "באקס", awayTeam: "נאגטס", homeScore: 115, awayScore: 108, minute: "FT", league: "NBA", status: "finished" },
];

function groupByLeague(matches: Match[]) {
  const groups: Record<string, Match[]> = {};
  for (const m of matches) {
    if (!groups[m.league]) groups[m.league] = [];
    groups[m.league].push(m);
  }
  return Object.entries(groups).map(([league, matches]) => ({ league, matches }));
}

export default function LiveScoresBoard() {
  const [matches, setMatches] = useState(demoMatches);
  const [filter, setFilter] = useState<"all" | "live" | "finished" | "upcoming">("all");

  useEffect(() => {
    async function fetchScores() {
      try {
        const res = await fetch("/api/scores");
        if (res.ok) {
          const data = await res.json();
          if (data.matches?.length > 0) setMatches(data.matches);
        }
      } catch { /* demo data */ }
    }
    fetchScores();
    const interval = setInterval(fetchScores, 30000);
    return () => clearInterval(interval);
  }, []);

  const filtered = filter === "all" ? matches : matches.filter((m) => m.status === filter);
  const groups = groupByLeague(filtered);

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {([["all", "הכל"], ["live", "LIVE"], ["upcoming", "עתידיים"], ["finished", "הסתיימו"]] as const).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 text-xs font-bold border rounded-sm transition-colors ${
              filter === key
                ? "bg-ink text-bg-paper border-ink"
                : "bg-bg-paper border-border text-ink-muted hover:border-ink"
            }`}
          >
            {key === "live" && <span className={`live-dot ${filter !== key ? "opacity-50" : ""}`} />}
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {groups.map((group) => (
          <div key={group.league} className="bg-bg-paper border border-border rounded-sm overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-bg-section">
              <h3 className="section-title">{group.league}</h3>
            </div>
            <div>
              {group.matches.map((match, i) => (
                <div
                  key={match.id}
                  className={`px-5 py-4 flex items-center ${i < group.matches.length - 1 ? "border-b border-border-light" : ""} hover:bg-bg-warm transition-colors`}
                >
                  {/* Home */}
                  <div className="flex-1 text-left">
                    <span className="font-bold text-sm">{match.homeTeam}</span>
                  </div>

                  {/* Score */}
                  <div className="min-w-[100px] text-center">
                    {match.status === "upcoming" ? (
                      <span className="font-bold text-blue text-sm">{match.minute}</span>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span className={`text-xl font-black ${match.status === "live" ? "text-red" : ""}`}>
                          {match.homeScore}
                        </span>
                        <span className="text-ink-faint text-sm">:</span>
                        <span className={`text-xl font-black ${match.status === "live" ? "text-red" : ""}`}>
                          {match.awayScore}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Away */}
                  <div className="flex-1 text-right">
                    <span className="font-bold text-sm">{match.awayTeam}</span>
                  </div>

                  {/* Status */}
                  <div className="mr-4 min-w-[60px] text-center">
                    {match.status === "live" && (
                      <span className="text-[11px] text-red font-bold flex items-center justify-center">
                        <span className="live-dot" />{match.minute}
                      </span>
                    )}
                    {match.status === "finished" && (
                      <span className="text-[10px] text-ink-faint font-bold">סיום</span>
                    )}
                    {match.status === "upcoming" && (
                      <span className="text-[10px] text-blue font-bold">טרם החל</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-[10px] text-ink-faint">מתעדכן כל 30 שניות • מקור: API-Football</p>
      </div>
    </div>
  );
}
