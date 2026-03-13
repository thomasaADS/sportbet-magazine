"use client";

import { useState } from "react";
import { pollData } from "@/lib/schedule-data";

export default function PollWidget() {
  const [voted, setVoted] = useState<number | null>(null);
  const total = pollData.options.reduce((sum, o) => sum + o.votes, 0);

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <span className="section-flag-outline">סקר</span>
        <hr className="rule-thin flex-1" />
      </div>

      <div className="bg-bg-paper border border-border rounded-sm p-4">
        <h3 className="headline-small mb-4">{pollData.question}</h3>

        <div className="space-y-2">
          {pollData.options.map((option, i) => {
            const pct = Math.round((option.votes / total) * 100);
            return (
              <button
                key={i}
                onClick={() => setVoted(i)}
                disabled={voted !== null}
                className={`w-full text-right relative overflow-hidden rounded-sm border transition-all ${
                  voted === i
                    ? "border-red bg-red/5"
                    : voted !== null
                    ? "border-border-light"
                    : "border-border hover:border-ink cursor-pointer"
                }`}
              >
                {/* Progress bar */}
                {voted !== null && (
                  <div
                    className="absolute inset-y-0 right-0 bg-bg-section transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                )}
                <div className="relative flex items-center justify-between px-3 py-2.5">
                  <span className="text-xs font-bold">{option.text}</span>
                  {voted !== null && (
                    <span className="text-xs font-black text-ink-muted">{pct}%</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-3 text-[10px] text-ink-faint text-center">
          {pollData.totalVotes.toLocaleString()} הצבעות
        </div>
      </div>
    </div>
  );
}
