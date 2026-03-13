import { trendingTopics } from "@/lib/schedule-data";

export default function TrendingWidget() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <span className="section-flag">טרנדינג</span>
        <hr className="rule-thin flex-1" />
      </div>

      <div className="bg-bg-paper border border-border rounded-sm overflow-hidden">
        {trendingTopics.map((item, i) => (
          <div
            key={i}
            className={`px-4 py-3 flex items-center gap-3 hover:bg-bg-warm transition-colors cursor-pointer ${
              i < trendingTopics.length - 1 ? "border-b border-border-light" : ""
            }`}
          >
            <span className="text-lg font-black font-editorial text-ink-faint w-6 text-center">
              {i + 1}
            </span>
            <div className="flex-1">
              <div className="text-sm font-bold">{item.topic}</div>
              <div className="text-[10px] text-ink-muted">{item.count}</div>
            </div>
            {i < 3 && (
              <span className="text-[9px] font-black text-red bg-red/10 px-1.5 py-0.5 rounded-sm">
                HOT
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
