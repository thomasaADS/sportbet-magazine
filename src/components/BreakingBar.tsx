"use client";

const headlines = [
  "ליגת האלופות: ריאל מדריד וברצלונה עולות לרבע הגמר",
  "ליגת העל: מכבי ת\"א ברצף 12 ניצחונות",
  "NBA: עונת הפלייאוף מתקרבת",
  "פוקר: טורניר WSOP אירופה בחודש הבא",
  "פרמייר ליג: ארסנל ממשיכה להוביל",
  "UFC 320: כרטיס מלא פורסם",
];

export default function BreakingBar() {
  return (
    <div className="bg-bg-dark text-white overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4 py-2 bg-red font-black text-[10px] tracking-[0.15em] uppercase">
          חדשות
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-scroll whitespace-nowrap py-2 text-[12px]">
            {headlines.map((item, i) => (
              <span key={i} className="mx-8 inline-block text-gray-300">
                <span className="text-red mx-3">■</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
