"use client";

const topPlayers = [
  { rank: 1, name: "Justin Bonomo", country: "USA", earnings: "$62.4M", specialty: "High Roller" },
  { rank: 2, name: "Daniel Negreanu", country: "Canada", earnings: "$49.8M", specialty: "WSOP" },
  { rank: 3, name: "Bryn Kenney", country: "USA", earnings: "$57.2M", specialty: "Super High Roller" },
  { rank: 4, name: "Erik Seidel", country: "USA", earnings: "$40.5M", specialty: "Mixed Games" },
  { rank: 5, name: "David Peters", country: "USA", earnings: "$43.1M", specialty: "High Roller" },
  { rank: 6, name: "Phil Ivey", country: "USA", earnings: "$32.7M", specialty: "Cash Games" },
  { rank: 7, name: "Dan Smith", country: "USA", earnings: "$40.2M", specialty: "High Roller" },
  { rank: 8, name: "Stephen Chidwick", country: "UK", earnings: "$38.9M", specialty: "High Roller" },
];

const upcomingTournaments = [
  { name: "WSOP Europe 2026", location: "Rozvadov, Czech Republic", date: "אפריל 2026", buyIn: "$500 - $100,000", events: "15 אירועים" },
  { name: "EPT Monte Carlo", location: "Monte Carlo, Monaco", date: "מאי 2026", buyIn: "$1,100 - $100,000", events: "55 אירועים" },
  { name: "WSOP Las Vegas", location: "Las Vegas, USA", date: "יוני 2026", buyIn: "$400 - $250,000", events: "95 אירועים" },
  { name: "WPT World Championship", location: "Las Vegas, USA", date: "דצמבר 2026", buyIn: "$3,500 - $25,000", events: "25 אירועים" },
];

const casinoNews = [
  { title: "בלוקצ'יין וקזינו: העתיד של ההימורים המקוונים", excerpt: "טכנולוגיית הבלוקצ'יין משנה את עולם הקזינו עם שקיפות מלאה והוגנות מוכחת.", category: "בלוקצ'יין", date: "12 מרץ 2026" },
  { title: "Stake.com משיקה משחקי קזינו חדשים", excerpt: "פלטפורמת הקריפטו המובילה מציגה סדרה חדשה של משחקים עם RTP גבוה.", category: "קזינו קריפטו", date: "11 מרץ 2026" },
  { title: "מגמות בקזינו חי: 2026 שנת הפריצה", excerpt: "משחקי קזינו חי ממשיכים לצמוח. Evolution Gaming ו-Pragmatic Play מובילות.", category: "קזינו חי", date: "10 מרץ 2026" },
  { title: "DeFi Betting: הימורים מבוזרים", excerpt: "Polymarket ו-Dexsport מציעות הימורים מבוזרים ללא צורך באמון בצד שלישי.", category: "DeFi", date: "9 מרץ 2026" },
];

export default function PokerContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
      {/* Main content */}
      <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-8">
        {/* Top Players */}
        <section className="mb-10">
          <div className="flex items-center gap-4 mb-5">
            <span className="section-flag">דירוג שחקנים עולמי</span>
            <hr className="rule-thin flex-1" />
          </div>
          <div className="bg-bg-paper border border-border rounded-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-bg-section">
                  <th className="px-4 py-3 text-right text-[10px] font-bold text-ink-muted uppercase tracking-wider">#</th>
                  <th className="px-4 py-3 text-right text-[10px] font-bold text-ink-muted uppercase tracking-wider">שחקן</th>
                  <th className="px-4 py-3 text-right text-[10px] font-bold text-ink-muted uppercase tracking-wider hidden sm:table-cell">מדינה</th>
                  <th className="px-4 py-3 text-right text-[10px] font-bold text-ink-muted uppercase tracking-wider">רווחים</th>
                  <th className="px-4 py-3 text-right text-[10px] font-bold text-ink-muted uppercase tracking-wider hidden md:table-cell">התמחות</th>
                </tr>
              </thead>
              <tbody>
                {topPlayers.map((player) => (
                  <tr key={player.rank} className="border-b border-border-light hover:bg-bg-warm transition-colors">
                    <td className="px-4 py-3">
                      <span className={`font-black text-lg font-editorial ${player.rank <= 3 ? "text-gold" : "text-ink-faint"}`}>
                        {player.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-sm">{player.name}</td>
                    <td className="px-4 py-3 text-sm text-ink-muted hidden sm:table-cell">{player.country}</td>
                    <td className="px-4 py-3 font-bold text-sm text-green">{player.earnings}</td>
                    <td className="px-4 py-3 text-xs text-ink-muted hidden md:table-cell">{player.specialty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Casino & Blockchain News */}
        <section>
          <div className="flex items-center gap-4 mb-5">
            <span className="section-flag" style={{ background: "#6a1b9a" }}>חדשות קזינו ובלוקצ'יין</span>
            <hr className="rule-thin flex-1" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
            {casinoNews.map((news, i) => (
              <div key={i}>
                <div className="py-4 group cursor-pointer">
                  <div className="category-tag mb-1">{news.category}</div>
                  <h3 className="headline-secondary group-hover:text-red transition-colors mb-1.5">{news.title}</h3>
                  <p className="text-ink-muted text-xs line-clamp-2 mb-1.5">{news.excerpt}</p>
                  <span className="byline">{news.date}</span>
                </div>
                {i < casinoNews.length - 1 && <hr className="rule-thin" />}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4 lg:pr-8 mt-8 lg:mt-0">
        {/* Tournaments */}
        <div className="flex items-center gap-4 mb-5">
          <span className="section-title">טורנירים קרובים</span>
          <hr className="rule-thin flex-1" />
        </div>
        <div className="space-y-0">
          {upcomingTournaments.map((t, i) => (
            <div key={i}>
              <div className="py-4">
                <h3 className="headline-small mb-2">{t.name}</h3>
                <div className="space-y-1 text-xs text-ink-muted">
                  <div><strong className="text-ink-light">מיקום:</strong> {t.location}</div>
                  <div><strong className="text-ink-light">תאריך:</strong> {t.date}</div>
                  <div><strong className="text-ink-light">כניסה:</strong> {t.buyIn}</div>
                  <div><strong className="text-ink-light">אירועים:</strong> {t.events}</div>
                </div>
              </div>
              {i < upcomingTournaments.length - 1 && <hr className="rule-thin" />}
            </div>
          ))}
        </div>

        {/* Poker Guide Box */}
        <div className="mt-8 p-5 bg-bg-paper border border-border rounded-sm">
          <span className="section-flag-outline block w-fit mb-3">מדריך</span>
          <h3 className="headline-secondary mt-3 mb-4">פוקר למתחילים</h3>
          <div className="space-y-3 text-xs text-ink-light">
            <div>
              <strong className="text-ink">סוגי פוקר:</strong> Texas Hold&apos;em, Omaha, Seven Card Stud, Short Deck
            </div>
            <div>
              <strong className="text-ink">טיפ:</strong> נהלו בנקרול בזהירות - אל תשחקו ביותר מ-5% מהבנקרול במשחק בודד
            </div>
            <div>
              <strong className="text-ink">פלטפורמות:</strong> PokerStars, GGPoker, 888poker, PartyPoker
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
