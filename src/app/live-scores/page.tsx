import type { Metadata } from "next";
import LiveScoresBoard from "@/components/LiveScoresBoard";

export const metadata: Metadata = {
  title: "תוצאות ספורט לייב | הזירה",
  description: "תוצאות ספורט בזמן אמת - כדורגל, כדורסל, טניס ועוד. ליגת העל, פרמייר ליג, ליגת האלופות, NBA.",
};

export default function LiveScoresPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <hr className="rule-thick mb-4" />
      <div className="flex items-center gap-3 mb-2">
        <h1 className="headline-hero">תוצאות</h1>
        <span className="flex items-center text-sm font-bold text-red">
          <span className="live-dot" /> LIVE
        </span>
      </div>
      <p className="text-ink-muted text-sm mb-2">
        תוצאות בזמן אמת מליגות מובילות בישראל ובעולם
      </p>
      <hr className="rule-thin mb-6" />
      <LiveScoresBoard />
    </div>
  );
}
