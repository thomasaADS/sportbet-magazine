import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "קהילת BetZone IL | הצטרפו לקהילת הימורי הספורט",
  description: "הצטרפו לקהילת BetZone IL - דיונים, ניתוחים, טיפים וחדשות מעולם הימורי הספורט. טלגרם, וואטסאפ וניוזלטר.",
};

const discussions = [
  { author: "אריק_ספורט", time: "לפני 12 דק׳", text: "מישהו ראה את האודס על ארסנל-סיטי? לדעתי ארסנל מנצחת 2-1", replies: 24, hot: true },
  { author: "יוסי_בט", time: "לפני 38 דק׳", text: "ניתוח מלא של ליגת האלופות הלילה - שלב הנוקאאוט. מה דעתכם על ריאל מדריד?", replies: 18, hot: true },
  { author: "poker_master", time: "לפני שעה", text: "מישהו טס ל-WSOP אירופה? אני מתכנן ללכת על ה-$1,100", replies: 11, hot: false },
  { author: "דני_הפועל", time: "לפני שעתיים", text: "מכבי ת\"א לא ייעצרו השנה. 12 ניצחונות רצופים זה משהו שלא היה פה שנים", replies: 31, hot: true },
  { author: "crypto_bet", time: "לפני 3 שעות", text: "סקירה שלי על Cloudbet - מישהו משתמש? הם עדכנו את ה-API שלהם", replies: 8, hot: false },
  { author: "תומר_ניתוח", time: "לפני 4 שעות", text: "מדריך: איך לקרוא אודס ולמצוא value bets - חלק ראשון מסדרה", replies: 45, hot: true },
];

const experts = [
  { name: "אלון כהן", role: "עורך ספורט ראשי", specialty: "כדורגל אירופי", articles: 342 },
  { name: "מיכל ברק", role: "אנליסטית", specialty: "NBA & כדורסל", articles: 218 },
  { name: "יונתן לוי", role: "כתב פוקר", specialty: "טורנירי פוקר", articles: 156 },
  { name: "נועם שפירא", role: "כתב טכנולוגיה", specialty: "קריפטו & בלוקצ'יין", articles: 89 },
];

export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <hr className="rule-thick mb-4" />
      <h1 className="headline-hero mb-2">הקהילה</h1>
      <p className="text-ink-muted text-sm max-w-xl mb-6 leading-relaxed">
        מקום לדיונים, ניתוחים ושיתוף ידע בין חובבי הימורי ספורט.
        הצטרפו לשיחה.
      </p>
      <hr className="rule-thin mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Main - Discussions */}
        <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-8">
          <div className="flex items-center gap-4 mb-5">
            <span className="section-flag">דיונים אחרונים</span>
            <hr className="rule-thin flex-1" />
          </div>

          <div className="space-y-0">
            {discussions.map((d, i) => (
              <div key={i}>
                <div className="py-4 hover:bg-bg-section px-3 rounded-sm transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-bg-section border border-border flex items-center justify-center text-xs font-bold text-ink-muted flex-shrink-0">
                      {d.author.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold">{d.author}</span>
                        <span className="text-[10px] text-ink-faint">{d.time}</span>
                        {d.hot && (
                          <span className="text-[10px] font-bold text-red bg-red/10 px-1.5 py-0.5 rounded-sm">
                            חם
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-ink-light leading-relaxed">{d.text}</p>
                      <div className="mt-2 text-[10px] text-ink-muted">
                        {d.replies} תגובות
                      </div>
                    </div>
                  </div>
                </div>
                {i < discussions.length - 1 && <hr className="rule-thin" />}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 lg:pr-8 mt-8 lg:mt-0">
          {/* Join channels */}
          <div className="flex items-center gap-4 mb-5">
            <span className="section-title">ערוצים</span>
            <hr className="rule-thin flex-1" />
          </div>

          <div className="space-y-3 mb-8">
            <a href="#" className="flex items-center gap-3 p-4 bg-bg-paper border border-border rounded-sm hover:border-ink transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center font-black text-sm">T</div>
              <div className="flex-1">
                <div className="text-sm font-bold">ערוץ טלגרם</div>
                <div className="text-[10px] text-ink-muted">4,200+ חברים • חדשות בזמן אמת</div>
              </div>
              <span className="text-xs font-bold text-blue">הצטרפות</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-4 bg-bg-paper border border-border rounded-sm hover:border-ink transition-colors">
              <div className="w-10 h-10 rounded-full bg-green text-white flex items-center justify-center font-black text-sm">W</div>
              <div className="flex-1">
                <div className="text-sm font-bold">קבוצת וואטסאפ</div>
                <div className="text-[10px] text-ink-muted">1,800+ חברים • דיונים וניתוחים</div>
              </div>
              <span className="text-xs font-bold text-green">הצטרפות</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-4 bg-bg-paper border border-border rounded-sm hover:border-ink transition-colors">
              <div className="w-10 h-10 rounded-full bg-red text-white flex items-center justify-center font-black text-sm">N</div>
              <div className="flex-1">
                <div className="text-sm font-bold">ניוזלטר שבועי</div>
                <div className="text-[10px] text-ink-muted">סיכום שבועי + תחזיות</div>
              </div>
              <span className="text-xs font-bold text-red">הרשמה</span>
            </a>
          </div>

          {/* Team / Experts */}
          <div className="flex items-center gap-4 mb-5">
            <span className="section-title">צוות המערכת</span>
            <hr className="rule-thin flex-1" />
          </div>

          <div className="space-y-0">
            {experts.map((expert, i) => (
              <div key={i}>
                <div className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-ink text-bg-paper flex items-center justify-center font-black text-sm">
                      {expert.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{expert.name}</div>
                      <div className="text-[10px] text-ink-muted">{expert.role} • {expert.specialty}</div>
                      <div className="text-[10px] text-ink-faint">{expert.articles} כתבות</div>
                    </div>
                  </div>
                </div>
                {i < experts.length - 1 && <hr className="rule-thin" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
