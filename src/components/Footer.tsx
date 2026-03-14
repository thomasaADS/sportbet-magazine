import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/logo.svg" alt="הזירה" width={32} height={32} />
              <h3 className="text-2xl font-black text-white font-editorial">הזירה</h3>
            </div>
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
              <li><Link href="/news" className="hover:text-white transition-colors">ליגת העל</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">פרמייר ליג</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">ליגת האלופות</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">NBA</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">UFC / MMA</Link></li>
              <li><Link href="/poker" className="hover:text-white transition-colors">פוקר</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">אודות</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/community" className="hover:text-white transition-colors">אודותינו</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">צוות המערכת</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">צרו קשר</Link></li>
              <li><Link href="/agents" className="hover:text-white transition-colors">מדיניות פרטיות</Link></li>
              <li><Link href="/agents" className="hover:text-white transition-colors">תנאי שימוש</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <div className="bg-white/5 rounded-sm p-4 mb-6">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              <strong className="text-gray-400">הבהרה:</strong> הזירה הוא מגזין חדשות ומידע בלבד.
              האתר אינו מספק שירותי הימורים ואינו פלטפורמת הימורים.
              הימורים מותרים לבני 18+ בלבד. קו סיוע: 1-800-363-363.
            </p>
          </div>
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} הזירה. מגזין חדשות עצמאי. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
