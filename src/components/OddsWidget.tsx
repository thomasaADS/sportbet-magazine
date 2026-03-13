"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface OddsItem {
  id: number;
  homeTeam: string;
  awayTeam: string;
  league: string;
  homeOdds: number;
  drawOdds: number;
  awayOdds: number;
  time: string;
}

const demoOdds: OddsItem[] = [
  {
    id: 1,
    homeTeam: "ריאל מדריד",
    awayTeam: "באיירן מינכן",
    league: "UCL",
    homeOdds: 2.1,
    drawOdds: 3.4,
    awayOdds: 3.2,
    time: "21:45",
  },
  {
    id: 2,
    homeTeam: "ארסנל",
    awayTeam: "מנצ'סטר סיטי",
    league: "EPL",
    homeOdds: 2.5,
    drawOdds: 3.3,
    awayOdds: 2.7,
    time: "20:45",
  },
  {
    id: 3,
    homeTeam: "לייקרס",
    awayTeam: "סלטיקס",
    league: "NBA",
    homeOdds: 1.85,
    drawOdds: 0,
    awayOdds: 1.95,
    time: "03:00",
  },
];

export default function OddsWidget() {
  const [odds, setOdds] = useState<OddsItem[]>(demoOdds);

  useEffect(() => {
    async function fetchOdds() {
      try {
        const res = await fetch("/api/odds");
        if (res.ok) {
          const data = await res.json();
          if (data.odds && data.odds.length > 0) {
            setOdds(data.odds);
          }
        }
      } catch {
        // Use demo data
      }
    }
    fetchOdds();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">
          <span className="gradient-text">אודס היום</span>
        </h3>
        <Link href="/odds" className="text-xs text-accent hover:underline">
          הכל ←
        </Link>
      </div>

      <div className="space-y-3">
        {odds.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-lg bg-card-bg border border-card-border"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-accent">
                {item.league}
              </span>
              <span className="text-[10px] text-text-muted">{item.time}</span>
            </div>
            <div className="text-xs font-medium mb-2">
              {item.homeTeam} vs {item.awayTeam}
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="text-center py-1.5 rounded bg-white/5 hover:bg-accent/20 cursor-pointer transition-all">
                <div className="text-[10px] text-text-muted">1</div>
                <div className="text-xs font-bold text-accent">
                  {item.homeOdds.toFixed(2)}
                </div>
              </div>
              {item.drawOdds > 0 && (
                <div className="text-center py-1.5 rounded bg-white/5 hover:bg-accent/20 cursor-pointer transition-all">
                  <div className="text-[10px] text-text-muted">X</div>
                  <div className="text-xs font-bold text-accent">
                    {item.drawOdds.toFixed(2)}
                  </div>
                </div>
              )}
              <div className="text-center py-1.5 rounded bg-white/5 hover:bg-accent/20 cursor-pointer transition-all">
                <div className="text-[10px] text-text-muted">2</div>
                <div className="text-xs font-bold text-accent">
                  {item.awayOdds.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
