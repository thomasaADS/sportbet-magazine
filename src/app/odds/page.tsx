import type { Metadata } from "next";
import OddsBoard from "@/components/OddsBoard";

export const metadata: Metadata = {
  title: "אודס הימורי ספורט | BetZone IL - השוואת אודס",
  description: "השוואת אודס מסוכנים מובילים. מצאו את האודס הטובים ביותר לכדורגל, כדורסל, טניס ועוד.",
};

export default function OddsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <hr className="rule-thick mb-4" />
      <h1 className="headline-hero mb-2">השוואת אודס</h1>
      <p className="text-ink-muted text-sm mb-2 max-w-xl">
        השוואת אודס מסוכנים שונים - מידע בלבד, לצורך סקירה וניתוח
      </p>
      <hr className="rule-thin mb-6" />
      <OddsBoard />
    </div>
  );
}
