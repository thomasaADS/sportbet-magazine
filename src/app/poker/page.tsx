import type { Metadata } from "next";
import PokerContent from "@/components/PokerContent";

export const metadata: Metadata = {
  title: "פוקר וקזינו | הזירה - טורנירים, שחקנים וחדשות",
  description: "חדשות פוקר וקזינו - WSOP, טורנירים, שחקנים מובילים, בלוקצ'יין ועוד. מידע וסקירות.",
};

export default function PokerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <hr className="rule-thick mb-4" />
      <h1 className="headline-hero mb-2">פוקר וקזינו</h1>
      <p className="text-ink-muted text-sm mb-2 max-w-xl">
        טורנירים, שחקנים מובילים, חדשות קזינו ובלוקצ'יין
      </p>
      <hr className="rule-thin mb-8" />
      <PokerContent />
    </div>
  );
}
