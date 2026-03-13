import type { Metadata } from "next";
import PokerContent from "@/components/PokerContent";

export const metadata: Metadata = {
  title: "פוקר וקזינו - BetZone IL | טורנירים, שחקנים וחדשות",
  description:
    "חדשות פוקר וקזינו - WSOP, טורנירים, שחקנים מובילים, הימורי קזינו, בלוקצ'יין ועוד. מידע על פוקר בישראל ובעולם.",
  keywords: [
    "פוקר",
    "WSOP",
    "קזינו",
    "טורניר פוקר",
    "פוקר ישראל",
    "בלוקצ'יין",
    "הימורי קזינו",
  ],
};

export default function PokerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-3">
          <span className="gradient-text">פוקר וקזינו</span>
        </h1>
        <p className="text-text-muted">
          טורנירים, שחקנים מובילים, חדשות קזינו, בלוקצ'יין והימורים
        </p>
      </div>
      <PokerContent />
    </div>
  );
}
