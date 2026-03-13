"use client";

import { weeklySchedule } from "@/lib/schedule-data";

export default function ScheduleWidget() {
  const groupedByDay: Record<string, typeof weeklySchedule> = {};
  for (const event of weeklySchedule) {
    if (!groupedByDay[event.day]) groupedByDay[event.day] = [];
    groupedByDay[event.day].push(event);
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <span className="section-flag">לוח שידורים</span>
        <hr className="rule-thin flex-1" />
      </div>

      <div className="bg-bg-paper border border-border rounded-sm overflow-hidden">
        {Object.entries(groupedByDay).map(([day, events], groupIndex) => (
          <div key={day}>
            <div className="px-3 py-2 bg-bg-section border-b border-border">
              <span className="text-[11px] font-black uppercase tracking-wider text-ink-light">{day}</span>
            </div>
            {events.map((event, i) => (
              <div
                key={event.id}
                className={`px-3 py-2.5 flex items-center gap-3 text-xs ${
                  i < events.length - 1 || groupIndex < Object.keys(groupedByDay).length - 1
                    ? "border-b border-border-light"
                    : ""
                } ${event.highlight ? "bg-red/[0.03]" : ""} hover:bg-bg-warm transition-colors`}
              >
                <span className="font-black text-ink-light w-10 text-center">{event.time}</span>
                <div className="flex-1 min-w-0">
                  <span className="font-bold">{event.homeTeam}</span>
                  <span className="text-ink-faint mx-1.5">vs</span>
                  <span className="font-bold">{event.awayTeam}</span>
                </div>
                <span className="text-[10px] text-ink-muted hidden sm:block">{event.league}</span>
                {event.channel && (
                  <span className="text-[9px] font-bold text-blue bg-blue/10 px-1.5 py-0.5 rounded-sm hidden md:block">
                    {event.channel}
                  </span>
                )}
                {event.highlight && (
                  <span className="text-[9px] font-black text-red">HOT</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
