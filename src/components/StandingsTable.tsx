"use client";

import { useState } from "react";
import { ligaatHaalStandings, premierLeagueStandings, TeamStanding } from "@/lib/standings-data";

const leagues = [
  { id: "ligaat-haal", label: "ליגת העל", data: ligaatHaalStandings },
  { id: "premier-league", label: "פרמייר ליג", data: premierLeagueStandings },
];

function FormBadge({ result }: { result: "W" | "D" | "L" }) {
  const colors = { W: "bg-green text-white", D: "bg-gold text-white", L: "bg-red text-white" };
  const labels = { W: "נ", D: "ת", L: "ה" };
  return (
    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-black ${colors[result]}`}>
      {labels[result]}
    </span>
  );
}

export default function StandingsTable() {
  const [activeLeague, setActiveLeague] = useState(0);
  const standings: TeamStanding[] = leagues[activeLeague].data;

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <span className="section-flag">טבלה</span>
        <hr className="rule-thin flex-1" />
      </div>

      {/* League tabs */}
      <div className="flex gap-1 mb-3">
        {leagues.map((league, i) => (
          <button
            key={league.id}
            onClick={() => setActiveLeague(i)}
            className={`px-3 py-1.5 text-[11px] font-bold border rounded-sm transition-colors ${
              activeLeague === i
                ? "bg-ink text-bg-paper border-ink"
                : "border-border text-ink-muted hover:border-ink"
            }`}
          >
            {league.label}
          </button>
        ))}
      </div>

      <div className="bg-bg-paper border border-border rounded-sm overflow-hidden">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-bg-section border-b border-border">
              <th className="px-2 py-2 text-right font-bold text-ink-muted w-6">#</th>
              <th className="px-2 py-2 text-right font-bold text-ink-muted">קבוצה</th>
              <th className="px-2 py-2 text-center font-bold text-ink-muted w-7">מש</th>
              <th className="px-2 py-2 text-center font-bold text-ink-muted w-7">נק</th>
              <th className="px-2 py-2 text-center font-bold text-ink-muted w-8 hidden sm:table-cell">הפ</th>
              <th className="px-2 py-2 text-right font-bold text-ink-muted hidden md:table-cell">פורמה</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, i) => (
              <tr
                key={team.position}
                className={`border-b border-border-light hover:bg-bg-warm transition-colors ${
                  i < 4 ? "" : i >= standings.length - 2 ? "" : ""
                }`}
              >
                <td className="px-2 py-2 text-center">
                  <span className={`font-black text-xs ${
                    team.position <= 2 ? "text-green" :
                    team.position <= 4 ? "text-blue" :
                    team.position >= standings.length - 1 ? "text-red" : "text-ink-muted"
                  }`}>
                    {team.position}
                  </span>
                </td>
                <td className="px-2 py-2 font-bold text-xs">{team.team}</td>
                <td className="px-2 py-2 text-center text-ink-muted">{team.played}</td>
                <td className="px-2 py-2 text-center font-black">{team.points}</td>
                <td className="px-2 py-2 text-center text-ink-muted hidden sm:table-cell">{team.goalDiff > 0 ? `+${team.goalDiff}` : team.goalDiff}</td>
                <td className="px-2 py-2 hidden md:table-cell">
                  <div className="flex gap-0.5">
                    {team.form.map((f, j) => (
                      <FormBadge key={j} result={f} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
