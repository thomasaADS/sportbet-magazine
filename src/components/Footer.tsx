import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-black text-white mb-3 font-editorial">BetZone</h3>
            <p className="text-sm leading-relaxed">
              מגזין חדשות עצמאי המספק מידע, סקירות וניתוחים בתחום הימורי הספורט.
              אנו לא מספקים שירותי הימורים.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">מדורים</h4>
            <ul className="space-y-2">
              {[
                { href: "/news", label: "חדשות" },
                { href: "/agents", label: "מדריך סוכנים" },
                { href: "/live-scores", label: "תוצאות" },
                { href: "/odds", label: "אודס" },
                { href: "/poker", label: "פוקר וקזינו" },
                { href: "/community", label: "קהילה" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">נושאים</h4>
            <ul className="space-y-2 text-sm">
              <li>ליגת העל</li><li>פרמייר ליג</li><li>ליגת האלופות</li>
              <li>NBA</li><li>UFC / MMA</li><li>פוקר</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">אודות</h4>
            <ul className="space-y-2 text-sm">
              <li>אודותינו</li><li>צוות המערכת</li><li>צרו קשר</li>
              <li>מדיניות פרטיות</li><li>תנאי שימוש</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <div className="bg-white/5 rounded-sm p-4 mb-6">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              <strong className="text-gray-400">הבהרה:</strong> BetZone IL הוא מגזין חדשות ומידע בלבד.
              האתר אינו מספק שירותי הימורים ואינו פלטפורמת הימורים.
              הימורים מותרים לבני 18+ בלבד. קו סיוע: 1-800-363-363.
            </p>
          </div>
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} BetZone IL. מגזין חדשות עצמאי. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
