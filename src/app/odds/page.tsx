import type { Metadata } from "next";
import OddsBoard from "@/components/OddsBoard";

export const metadata: Metadata = {
  title: "אודס הימורי ספורט - BetZone IL | השוואת אודס",
  description:
    "השוואת אודס הימורי ספורט מסוכנים מובילים. מצאו את האודס הטובים ביותר לכדורגל, כדורסל, טניס ועוד.",
  keywords: [
    "אודס",
    "אודס הימורים",
    "השוואת אודס",
    "הימורי ספורט",
    "odds",
    "כדורגל",
    "כדורסל",
  ],
};

export default function OddsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-3">
          <span className="gradient-text">אודס הימורי ספורט</span>
        </h1>
        <p className="text-text-muted">
          השוואת אודס מסוכנים מובילים - מצאו את הערך הטוב ביותר
        </p>
      </div>
      <OddsBoard />
    </div>
  );
}
