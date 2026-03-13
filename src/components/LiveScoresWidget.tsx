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
  { id: 1, homeTeam: "מכבי ת\"א", awayTeam: "הפועל ב\"ש", homeScore: 2, awayScore: 0, minute: "67'", league: "ליגת העל", status: "live" },
  { id: 2, homeTeam: "ריאל מדריד", awayTeam: "באיירן מינכן", homeScore: 1, awayScore: 1, minute: "45'", league: "UCL", status: "live" },
  { id: 3, homeTeam: "ארסנל", awayTeam: "מנצ'סטר סיטי", homeScore: 0, awayScore: 0, minute: "20:45", league: "EPL", status: "upcoming" },
  { id: 4, homeTeam: "ברצלונה", awayTeam: "אתלטיקו", homeScore: 3, awayScore: 1, minute: "FT", league: "La Liga", status: "finished" },
];

export default function LiveScoresWidget() {
  const [matches, setMatches] = useState<Match[]>(demoMatches);

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
    const interval = setInterval(fetchScores, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="section-flag">
          <span className="live-dot" />
          תוצאות
        </span>
        <hr className="rule-thin flex-1" />
        <Link href="/live-scores" className="text-[10px] font-bold text-red hover:underline">
          הכל ←
        </Link>
      </div>

      <div className="bg-bg-paper border border-border rounded-sm overflow-hidden">
        {matches.slice(0, 4).map((match, i) => (
          <div
            key={match.id}
            className={`px-4 py-3 ${i < 3 ? "border-b border-border-light" : ""} hover:bg-bg-section transition-colors`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-ink-muted">{match.league}</span>
              {match.status === "live" && (
                <span className="flex items-center text-[10px] font-bold text-red">
                  <span className="live-dot" />
                  {match.minute}
                </span>
              )}
              {match.status === "finished" && (
                <span className="text-[10px] text-ink-faint font-bold">סיום</span>
              )}
              {match.status === "upcoming" && (
                <span className="text-[10px] text-blue font-bold">{match.minute}</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-xs font-bold">{match.homeTeam}</div>
                <div className="text-xs font-bold">{match.awayTeam}</div>
              </div>
              {match.status !== "upcoming" && (
                <div className="text-left mr-4">
                  <div className={`text-sm font-black ${match.status === "live" ? "text-red" : ""}`}>{match.homeScore}</div>
                  <div className={`text-sm font-black ${match.status === "live" ? "text-red" : ""}`}>{match.awayScore}</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
