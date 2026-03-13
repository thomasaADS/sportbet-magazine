import Link from "next/link";
import { newsArticles } from "@/lib/news-data";
import { bettingAgents } from "@/lib/agents-data";
import LiveScoresWidget from "@/components/LiveScoresWidget";
import OddsWidget from "@/components/OddsWidget";

export default function HomePage() {
  const featuredArticles = newsArticles.filter((a) => a.featured);
  const latestArticles = newsArticles.filter((a) => !a.featured).slice(0, 6);
  const topAgents = bettingAgents.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #f59e0b 1px, transparent 1px), radial-gradient(circle at 75% 75%, #ef4444 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              <span className="gradient-text">מגזין הימורי ספורט</span>
              <br />
              <span className="text-foreground">מספר אחד בישראל</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              חדשות, סקירות סוכנים, תוצאות לייב, אודס ועוד - הכל במקום אחד
            </p>
          </div>

          {/* Featured Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/news#${article.id}`}
                className="group relative rounded-2xl overflow-hidden h-80 card-hover"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3"
                    style={{ backgroundColor: article.categoryColor }}
                  >
                    {article.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                    <span>{article.date}</span>
                    <span>{article.readTime} קריאה</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "ליגות מכוסות" },
              { value: "24/7", label: "עדכונים בזמן אמת" },
              { value: "6", label: "סוכנים מובילים" },
              { value: "1000+", label: "משחקים בשבוע" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-black gradient-text">{stat.value}</div>
                <div className="text-xs text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column - Latest News */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black">
                <span className="gradient-text">חדשות אחרונות</span>
              </h2>
              <Link
                href="/news"
                className="text-sm text-accent hover:underline"
              >
                כל החדשות ←
              </Link>
            </div>

            <div className="space-y-4">
              {latestArticles.map((article, i) => (
                <Link
                  key={article.id}
                  href={`/news#${article.id}`}
                  className="flex gap-4 p-4 rounded-xl bg-card-bg border border-card-border card-hover animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="w-28 h-28 flex-shrink-0 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <span
                      className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-white mb-2"
                      style={{ backgroundColor: article.categoryColor }}
                    >
                      {article.category}
                    </span>
                    <h3 className="font-bold text-sm mb-1 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-text-muted line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-[10px] text-text-muted">
                      <span>{article.date}</span>
                      <span>{article.readTime} קריאה</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Live Scores Widget */}
            <LiveScoresWidget />

            {/* Top Agents */}
            <div>
              <h3 className="text-lg font-bold mb-4">
                <span className="gradient-text">סוכנים מובילים</span>
              </h3>
              <div className="space-y-3">
                {topAgents.map((agent) => (
                  <Link
                    key={agent.id}
                    href={`/agents#${agent.id}`}
                    className="block p-4 rounded-xl bg-card-bg border border-card-border card-hover"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center font-black text-sm text-white"
                        style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}
                      >
                        {agent.logo}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm">{agent.nameHe}</div>
                        <div className="text-[10px] text-text-muted">
                          {agent.bonus}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-accent text-sm font-bold">
                          {agent.rating}
                        </span>
                        <span className="text-accent text-xs">★</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/agents"
                className="block mt-3 text-center text-sm text-accent hover:underline"
              >
                כל הסוכנים ←
              </Link>
            </div>

            {/* Odds Widget */}
            <OddsWidget />
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="bg-card-bg border-y border-card-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black mb-2">
              <span className="gradient-text">סוכני הימורים מומלצים</span>
            </h2>
            <p className="text-text-muted">
              השוואת הסוכנים המובילים - אודס, בונוסים ותכונות
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bettingAgents.slice(0, 6).map((agent) => (
              <div
                key={agent.id}
                className="agent-card rounded-xl bg-background border border-card-border p-6 card-hover"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-black text-lg text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}
                  >
                    {agent.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{agent.nameHe}</h3>
                    <p className="text-xs text-text-muted">{agent.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-xs ${
                            i < Math.floor(agent.rating)
                              ? "text-accent"
                              : "text-card-border"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="text-xs text-text-muted mr-1">
                        {agent.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 p-3 rounded-lg" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                  <div className="text-xs text-accent font-bold">בונוס</div>
                  <div className="text-sm font-bold">{agent.bonus}</div>
                </div>

                <div className="space-y-2 mb-4">
                  {agent.features.slice(0, 3).map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-text-muted"
                    >
                      <span className="text-accent-green">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="inline-block px-2 py-1 rounded text-[10px] font-bold"
                    style={{
                      backgroundColor: agent.isAvailableInIsrael
                        ? "rgba(16, 185, 129, 0.15)"
                        : "rgba(239, 68, 68, 0.15)",
                      color: agent.isAvailableInIsrael ? "#10b981" : "#ef4444",
                    }}
                  >
                    {agent.legalStatus}
                  </span>
                </div>

                <div className="flex gap-2">
                  <a
                    href={agent.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg text-center text-sm font-bold text-black transition-all hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                  >
                    בקר באתר
                  </a>
                  <Link
                    href={`/agents#${agent.id}`}
                    className="py-2.5 px-4 rounded-lg text-sm font-bold border border-card-border hover:border-accent transition-all"
                  >
                    סקירה
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/agents"
              className="inline-block px-8 py-3 rounded-lg font-bold text-black transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
            >
              צפה בכל הסוכנים
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-card-bg border border-card-border">
            <h2 className="text-xl font-bold mb-4 gradient-text">
              הימורי ספורט בישראל - המדריך המלא
            </h2>
            <p className="text-sm text-text-muted leading-relaxed mb-3">
              שוק הימורי הספורט בישראל מפוקח על ידי המועצה להסדר ההימורים בספורט (מל&quot;ה).
              הפלטפורמה החוקית היחידה היא Winner.co.il, המציעה הימורי ספורט על ליגות ישראליות
              ובינלאומיות.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              מהמרים ישראלים רבים בוחרים להשתמש גם בפלטפורמות בינלאומיות כמו Bet365,
              Pinnacle ו-Stake, המציעות אודס גבוהים יותר ומגוון שווקים רחב יותר.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card-bg border border-card-border">
            <h2 className="text-xl font-bold mb-4 gradient-text">
              איך לבחור סוכן הימורים?
            </h2>
            <div className="space-y-3">
              {[
                { title: "אודס ושווקים", desc: "השוו אודס בין סוכנים שונים לפני הימור" },
                { title: "בונוסים", desc: "בדקו את תנאי הבונוס - rollover ומגבלות" },
                { title: "אמצעי תשלום", desc: "ודאו שהסוכן תומך באמצעי התשלום שלכם" },
                { title: "רישוי ואמינות", desc: "העדיפו סוכנים עם רישיון מוכר" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">{i + 1}</span>
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
