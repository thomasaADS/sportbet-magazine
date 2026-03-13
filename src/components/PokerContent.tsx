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
  {
    title: "בלוקצ'יין וקזינו: העתיד של ההימורים המקוונים",
    excerpt: "טכנולוגיית הבלוקצ'יין משנה את עולם הקזינו המקוון עם שקיפות מלאה, הוגנות מוכחת ותשלומים מיידיים בקריפטו.",
    category: "בלוקצ'יין",
    date: "12 מרץ 2026",
  },
  {
    title: "Stake.com משיקה משחקי קזינו חדשים",
    excerpt: "פלטפורמת הקריפטו המובילה מציגה סדרה חדשה של Stake Originals עם RTP גבוה ומכניקות חדשניות.",
    category: "קזינו קריפטו",
    date: "11 מרץ 2026",
  },
  {
    title: "מגמות בקזינו חי: 2026 שנת הפריצה",
    excerpt: "משחקי קזינו חי (Live Casino) ממשיכים לצמוח בקצב מטורף. Evolution Gaming ו-Pragmatic Play מובילות את המהפכה.",
    category: "קזינו חי",
    date: "10 מרץ 2026",
  },
  {
    title: "DeFi Betting: הימורים מבוזרים בבלוקצ'יין",
    excerpt: "פלטפורמות כמו Polymarket ו-Dexsport מציעות הימורים מבוזרים ללא צורך באמון בצד שלישי.",
    category: "DeFi",
    date: "9 מרץ 2026",
  },
];

export default function PokerContent() {
  return (
    <div className="space-y-12">
      {/* Top Players */}
      <section>
        <h2 className="text-2xl font-black mb-6">
          <span className="gradient-text">שחקני הפוקר המובילים בעולם</span>
        </h2>
        <div className="rounded-xl bg-card-bg border border-card-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="px-5 py-3 text-right text-xs font-bold text-accent">#</th>
                  <th className="px-5 py-3 text-right text-xs font-bold text-accent">שחקן</th>
                  <th className="px-5 py-3 text-right text-xs font-bold text-accent">מדינה</th>
                  <th className="px-5 py-3 text-right text-xs font-bold text-accent">רווחים כולליים</th>
                  <th className="px-5 py-3 text-right text-xs font-bold text-accent">התמחות</th>
                </tr>
              </thead>
              <tbody>
                {topPlayers.map((player) => (
                  <tr
                    key={player.rank}
                    className="border-b border-card-border hover:bg-white/5 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <span className={`font-black text-lg ${player.rank <= 3 ? "text-accent" : "text-text-muted"}`}>
                        {player.rank}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-bold">{player.name}</td>
                    <td className="px-5 py-4 text-sm text-text-muted">{player.country}</td>
                    <td className="px-5 py-4">
                      <span className="font-bold text-accent-green">{player.earnings}</span>
                    </td>
                    <td className="px-5 py-4 text-sm text-text-muted">{player.specialty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section>
        <h2 className="text-2xl font-black mb-6">
          <span className="gradient-text">טורנירים קרובים</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingTournaments.map((tournament, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card-bg border border-card-border card-hover"
            >
              <h3 className="font-bold text-lg mb-2">{tournament.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent">📍</span>
                  <span className="text-text-muted">{tournament.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent">📅</span>
                  <span className="text-text-muted">{tournament.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent">💰</span>
                  <span className="text-text-muted">{tournament.buyIn}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent">🎯</span>
                  <span className="text-text-muted">{tournament.events}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Casino & Blockchain News */}
      <section>
        <h2 className="text-2xl font-black mb-6">
          <span className="gradient-text">חדשות קזינו ובלוקצ'יין</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {casinoNews.map((news, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card-bg border border-card-border card-hover"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white mb-3" style={{ background: "linear-gradient(135deg, #8b5cf6, #6366f1)" }}>
                {news.category}
              </span>
              <h3 className="font-bold text-lg mb-2">{news.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-3">
                {news.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted">{news.date}</span>
                <button className="text-accent text-sm font-bold hover:underline">
                  קרא עוד ←
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Poker Guide */}
      <section className="p-8 rounded-2xl bg-card-bg border border-card-border">
        <h2 className="text-2xl font-black mb-6">
          <span className="gradient-text">מדריך פוקר למתחילים</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-accent mb-3">סוגי פוקר</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>• Texas Hold&apos;em - הנפוץ ביותר</li>
              <li>• Omaha - 4 קלפים ביד</li>
              <li>• Seven Card Stud - קלאסי</li>
              <li>• Short Deck - מהיר ואקשן</li>
              <li>• Mixed Games - מגוון סוגים</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-accent mb-3">טיפים לשחקנים</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>• נהלו את הבנקרול בזהירות</li>
              <li>• למדו לקרוא את היריבים</li>
              <li>• משחק פוזיציה זה הכל</li>
              <li>• אל תשחקו יותר מדי ידיים</li>
              <li>• התאמנו בטורנירים קטנים</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-accent mb-3">פלטפורמות מומלצות</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>• PokerStars - הגדולה בעולם</li>
              <li>• GGPoker - צומחת מהר</li>
              <li>• 888poker - ישראלית</li>
              <li>• PartyPoker - אירופית</li>
              <li>• WPT Global - חדשה ומבטיחה</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
