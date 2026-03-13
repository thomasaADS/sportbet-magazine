"use client";

import { useState, useEffect } from "react";

interface OddsEvent {
  id: number;
  homeTeam: string;
  awayTeam: string;
  league: string;
  sport: string;
  time: string;
  bookmakers: { name: string; homeOdds: number; drawOdds: number; awayOdds: number }[];
}

const demoOddsEvents: OddsEvent[] = [
  {
    id: 1, homeTeam: "ריאל מדריד", awayTeam: "באיירן מינכן", league: "ליגת האלופות", sport: "כדורגל", time: "21:45 היום",
    bookmakers: [
      { name: "Bet365", homeOdds: 2.10, drawOdds: 3.40, awayOdds: 3.20 },
      { name: "Pinnacle", homeOdds: 2.15, drawOdds: 3.50, awayOdds: 3.10 },
      { name: "Winner", homeOdds: 2.00, drawOdds: 3.20, awayOdds: 3.00 },
      { name: "1xBet", homeOdds: 2.12, drawOdds: 3.45, awayOdds: 3.25 },
    ],
  },
  {
    id: 2, homeTeam: "ארסנל", awayTeam: "מנצ'סטר סיטי", league: "פרמייר ליג", sport: "כדורגל", time: "20:45 היום",
    bookmakers: [
      { name: "Bet365", homeOdds: 2.50, drawOdds: 3.30, awayOdds: 2.70 },
      { name: "Pinnacle", homeOdds: 2.55, drawOdds: 3.35, awayOdds: 2.65 },
      { name: "Winner", homeOdds: 2.40, drawOdds: 3.10, awayOdds: 2.60 },
      { name: "Stake", homeOdds: 2.52, drawOdds: 3.32, awayOdds: 2.68 },
    ],
  },
  {
    id: 3, homeTeam: "מכבי תל אביב", awayTeam: "הפועל באר שבע", league: "ליגת העל", sport: "כדורגל", time: "20:00 היום",
    bookmakers: [
      { name: "Winner", homeOdds: 1.65, drawOdds: 3.80, awayOdds: 4.50 },
      { name: "Pinnacle", homeOdds: 1.72, drawOdds: 3.90, awayOdds: 4.80 },
      { name: "Bet365", homeOdds: 1.70, drawOdds: 3.75, awayOdds: 4.60 },
    ],
  },
  {
    id: 4, homeTeam: "לייקרס", awayTeam: "סלטיקס", league: "NBA", sport: "כדורסל", time: "03:00 מחר",
    bookmakers: [
      { name: "Bet365", homeOdds: 1.85, drawOdds: 0, awayOdds: 1.95 },
      { name: "Pinnacle", homeOdds: 1.88, drawOdds: 0, awayOdds: 1.92 },
      { name: "Stake", homeOdds: 1.86, drawOdds: 0, awayOdds: 1.94 },
    ],
  },
  {
    id: 5, homeTeam: "ג'וקוביץ'", awayTeam: "סינר", league: "ATP Masters", sport: "טניס", time: "18:00 מחר",
    bookmakers: [
      { name: "Bet365", homeOdds: 2.20, drawOdds: 0, awayOdds: 1.65 },
      { name: "Pinnacle", homeOdds: 2.25, drawOdds: 0, awayOdds: 1.62 },
      { name: "1xBet", homeOdds: 2.18, drawOdds: 0, awayOdds: 1.68 },
    ],
  },
];

function getBest(bookmakers: OddsEvent["bookmakers"]) {
  return {
    home: Math.max(...bookmakers.map((b) => b.homeOdds)),
    draw: Math.max(...bookmakers.filter((b) => b.drawOdds > 0).map((b) => b.drawOdds), 0),
    away: Math.max(...bookmakers.map((b) => b.awayOdds)),
  };
}

export default function OddsBoard() {
  const [events, setEvents] = useState(demoOddsEvents);

  useEffect(() => {
    async function fetchOdds() {
      try {
        const res = await fetch("/api/odds");
        if (res.ok) {
          const data = await res.json();
          if (data.events?.length > 0) setEvents(data.events);
        }
      } catch { /* demo data */ }
    }
    fetchOdds();
  }, []);

  return (
    <div className="space-y-6">
      {events.map((event) => {
        const best = getBest(event.bookmakers);
        const hasDraw = best.draw > 0;
        return (
          <div key={event.id} className="bg-bg-paper border border-border rounded-sm overflow-hidden">
            {/* Header */}
            <div className="px-5 py-3 border-b border-border bg-bg-section flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="category-tag">{event.sport}</span>
                <span className="text-[10px] text-ink-faint">|</span>
                <span className="text-sm font-bold">{event.league}</span>
              </div>
              <span className="text-xs text-ink-muted">{event.time}</span>
            </div>

            {/* Match */}
            <div className="px-5 py-4 border-b border-border-light text-center">
              <span className="text-lg font-bold">{event.homeTeam}</span>
              <span className="text-ink-faint mx-4 text-sm">vs</span>
              <span className="text-lg font-bold">{event.awayTeam}</span>
            </div>

            {/* Best odds row */}
            <div className="px-5 py-3 border-b border-border-light bg-bg-warm">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-[10px] text-ink-muted mb-1">1</div>
                  <div className="text-lg font-black text-green">{best.home.toFixed(2)}</div>
                </div>
                {hasDraw && (
                  <div className="text-center">
                    <div className="text-[10px] text-ink-muted mb-1">X</div>
                    <div className="text-lg font-black text-green">{best.draw.toFixed(2)}</div>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-[10px] text-ink-muted mb-1">2</div>
                  <div className="text-lg font-black text-green">{best.away.toFixed(2)}</div>
                </div>
              </div>
              <div className="text-center mt-1">
                <span className="text-[10px] text-ink-faint">האודס הטובים ביותר</span>
              </div>
            </div>

            {/* Bookmakers */}
            {event.bookmakers.map((bm, i) => (
              <div
                key={i}
                className={`px-5 py-3 flex items-center justify-between hover:bg-bg-section transition-colors ${
                  i < event.bookmakers.length - 1 ? "border-b border-border-light" : ""
                }`}
              >
                <span className="font-bold text-sm min-w-[80px]">{bm.name}</span>
                <div className="flex items-center gap-8">
                  <span className={`text-sm font-bold min-w-[45px] text-center ${bm.homeOdds === best.home ? "text-green font-black" : "text-ink-light"}`}>
                    {bm.homeOdds.toFixed(2)}
                  </span>
                  {hasDraw && (
                    <span className={`text-sm font-bold min-w-[45px] text-center ${bm.drawOdds === best.draw ? "text-green font-black" : "text-ink-light"}`}>
                      {bm.drawOdds.toFixed(2)}
                    </span>
                  )}
                  <span className={`text-sm font-bold min-w-[45px] text-center ${bm.awayOdds === best.away ? "text-green font-black" : "text-ink-light"}`}>
                    {bm.awayOdds.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      })}

      <p className="text-[10px] text-ink-faint text-center mt-4">
        אודס לידיעה בלבד • מתעדכן באופן שוטף • מקור: The Odds API
      </p>
    </div>
  );
}
