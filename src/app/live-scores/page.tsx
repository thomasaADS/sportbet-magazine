import type { Metadata } from "next";
import LiveScoresBoard from "@/components/LiveScoresBoard";

export const metadata: Metadata = {
  title: "תוצאות ספורט לייב - BetZone IL | תוצאות בזמן אמת",
  description:
    "תוצאות ספורט בזמן אמת - כדורגל, כדורסל, טניס ועוד. ליגת העל, פרמייר ליג, ליגת האלופות, NBA ועוד.",
  keywords: [
    "תוצאות ספורט",
    "תוצאות לייב",
    "לוח תוצאות",
    "ליגת העל",
    "פרמייר ליג",
    "NBA",
    "ליגת האלופות",
  ],
};

export default function LiveScoresPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-3">
          <span className="gradient-text">תוצאות ספורט לייב</span>
        </h1>
        <p className="text-text-muted">
          תוצאות בזמן אמת מליגות מובילות בישראל ובעולם
        </p>
      </div>
      <LiveScoresBoard />
    </div>
  );
}
