"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  minute: string;
  league: string;
  status: "live" | "finished" | "upcoming";
}

const demoMatches: Match[] = [
  {
    id: 1,
    homeTeam: "מכבי ת\"א",
    awayTeam: "הפועל ב\"ש",
    homeScore: 2,
    awayScore: 0,
    minute: "67'",
    league: "ליגת העל",
    status: "live",
  },
  {
    id: 2,
    homeTeam: "ריאל מדריד",
    awayTeam: "באיירן מינכן",
    homeScore: 1,
    awayScore: 1,
    minute: "45+2'",
    league: "ליגת האלופות",
    status: "live",
  },
  {
    id: 3,
    homeTeam: "ארסנל",
    awayTeam: "מנצ'סטר סיטי",
    homeScore: 0,
    awayScore: 0,
    minute: "20:45",
    league: "פרמייר ליג",
    status: "upcoming",
  },
  {
    id: 4,
    homeTeam: "ברצלונה",
    awayTeam: "אתלטיקו",
    homeScore: 3,
    awayScore: 1,
    minute: "FT",
    league: "לה ליגה",
    status: "finished",
  },
];

export default function LiveScoresWidget() {
  const [matches, setMatches] = useState<Match[]>(demoMatches);
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
    const interval = setInterval(fetchScores, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">
          <span className="gradient-text">תוצאות לייב</span>
        </h3>
        <Link href="/live-scores" className="text-xs text-accent hover:underline">
          הכל ←
        </Link>
      </div>

      <div className="space-y-2">
        {isLoading ? (
          <div className="p-8 text-center text-text-muted text-sm">טוען...</div>
        ) : (
          matches.slice(0, 4).map((match) => (
            <div
              key={match.id}
              className="p-3 rounded-lg bg-card-bg border border-card-border hover:border-accent/30 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-text-muted">{match.league}</span>
                {match.status === "live" && (
                  <span className="live-indicator text-[10px] text-accent-red font-bold">
                    LIVE
                  </span>
                )}
                {match.status === "finished" && (
                  <span className="text-[10px] text-text-muted">סיום</span>
                )}
                {match.status === "upcoming" && (
                  <span className="text-[10px] text-accent">{match.minute}</span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-xs font-medium">{match.homeTeam}</div>
                  <div className="text-xs font-medium">{match.awayTeam}</div>
                </div>
                {match.status !== "upcoming" && (
                  <div className="text-left mr-4">
                    <div className="text-xs font-bold">{match.homeScore}</div>
                    <div className="text-xs font-bold">{match.awayScore}</div>
                  </div>
                )}
                {match.status === "live" && (
                  <div className="text-xs text-accent-red font-bold mr-2">
                    {match.minute}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
