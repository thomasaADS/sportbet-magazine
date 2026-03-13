import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card-bg border-t border-card-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-xl text-black" style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}>
                BZ
              </div>
              <h3 className="text-xl font-black gradient-text">BetZone IL</h3>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              המגזין המוביל בישראל להימורי ספורט. חדשות, סקירות, טיפים ותוצאות - הכל במקום אחד.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-accent mb-4">ניווט מהיר</h4>
            <ul className="space-y-2">
              {[
                { href: "/news", label: "חדשות" },
                { href: "/agents", label: "סוכנים" },
                { href: "/live-scores", label: "תוצאות לייב" },
                { href: "/odds", label: "אודס" },
                { href: "/poker", label: "פוקר וקזינו" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Betting Agents */}
          <div>
            <h4 className="font-bold text-accent mb-4">סוכני הימורים</h4>
            <ul className="space-y-2">
              {[
                "Winner",
                "Bet365",
                "Stake",
                "Pinnacle",
                "1xBet",
              ].map((agent) => (
                <li key={agent}>
                  <Link href="/agents" className="text-sm text-text-muted hover:text-accent transition-colors">
                    {agent}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="font-bold text-accent mb-4">ספורט</h4>
            <ul className="space-y-2">
              {[
                "כדורגל",
                "כדורסל",
                "טניס",
                "MMA / UFC",
                "פוקר",
              ].map((sport) => (
                <li key={sport}>
                  <span className="text-sm text-text-muted">{sport}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-card-border">
          <div className="bg-accent-red/10 border border-accent-red/30 rounded-lg p-4 mb-6">
            <p className="text-xs text-accent-red font-medium text-center leading-relaxed">
              אזהרה: הימורים עלולים לגרום להתמכרות. הימורים מיועדים לבני 18+ בלבד.
              אתר זה מספק מידע בלבד ואינו מהווה שירותי הימורים.
              הימרו באחריות. אם אתם מרגישים שאתם מפתחים התמכרות, פנו לקו החם 1-800-363-363.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              © 2026 BetZone IL. כל הזכויות שמורות. האתר מספק מידע בלבד.
            </p>
            <div className="flex items-center gap-4 text-xs text-text-muted">
              <span>תנאי שימוש</span>
              <span>מדיניות פרטיות</span>
              <span>הימורים אחראיים</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
