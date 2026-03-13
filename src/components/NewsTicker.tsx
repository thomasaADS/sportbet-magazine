"use client";

const tickerItems = [
  "ליגת האלופות: ריאל מדריד vs באיירן מינכן - 21:45 הערב",
  "ליגת העל: מכבי ת\"א הביסה את הפועל ב\"ש 3-0",
  "NBA: הלייקרס ניצחו את הסלטיקס 112-108",
  "פרמייר ליג: ארסנל מובילה עם 68 נקודות",
  "פוקר: טורניר WSOP אירופה יתחיל בשבוע הבא",
  "הימורים: bet365 מציעה בונוס הצטרפות מוגדל",
  "ליגה ספרדית: ברצלונה vs אתלטיקו מדריד - מחר 22:00",
  "UFC 320: כרטיס מלא פורסם - קרבות ענק בדרך",
];

export default function NewsTicker() {
  return (
    <div className="bg-card-bg border-b border-card-border overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4 py-1.5 font-bold text-xs text-black" style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}>
          <span className="live-indicator">LIVE</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-scroll whitespace-nowrap py-1.5 text-xs text-text-muted">
            {tickerItems.map((item, i) => (
              <span key={i} className="mx-8 inline-block">
                <span className="text-accent ml-2">●</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
