import Link from "next/link";
import { newsArticles } from "@/lib/news-data";
import { bettingAgents } from "@/lib/agents-data";
import LiveScoresWidget from "@/components/LiveScoresWidget";

export default function HomePage() {
  const featured = newsArticles[0];
  const secondary = newsArticles.slice(1, 3);
  const columnArticles = newsArticles.slice(3, 7);
  const bottomArticles = newsArticles.slice(7);
  const topAgents = bettingAgents.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* === ABOVE THE FOLD - Newspaper Hero === */}
      <section className="py-6">
        {/* Section flag */}
        <div className="flex items-center gap-4 mb-4">
          <span className="section-flag">כתבה ראשית</span>
          <hr className="rule-thin flex-1" />
          <span className="byline">{featured.date}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Main Feature - takes 7 cols */}
          <div className="lg:col-span-7 lg:border-l lg:border-border lg:pl-6">
            <Link href={`/news#${featured.id}`} className="group block">
              <div className="overflow-hidden rounded-sm mb-4">
                <div
                  className="h-[350px] md:h-[420px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${featured.image})` }}
                />
              </div>
              <div className="category-tag mb-2">{featured.category}</div>
              <h2 className="headline-hero mb-3 group-hover:text-red transition-colors">
                {featured.title}
              </h2>
              <p className="text-ink-light text-base leading-relaxed mb-3 max-w-2xl">
                {featured.excerpt}
              </p>
              <div className="byline">
                מערכת BetZone • {featured.readTime} קריאה
              </div>
            </Link>
          </div>

          {/* Secondary stories - takes 5 cols */}
          <div className="lg:col-span-5 lg:pr-6 mt-6 lg:mt-0">
            {secondary.map((article, i) => (
              <div key={article.id}>
                <Link href={`/news#${article.id}`} className="group block">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="category-tag mb-1.5">{article.category}</div>
                      <h3 className="headline-primary mb-2 group-hover:text-red transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-ink-muted text-sm leading-relaxed line-clamp-3 mb-2">
                        {article.excerpt}
                      </p>
                      <div className="byline">{article.date} • {article.readTime} קריאה</div>
                    </div>
                    <div
                      className="w-36 h-28 flex-shrink-0 bg-cover bg-center rounded-sm"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                  </div>
                </Link>
                {i < secondary.length - 1 && <hr className="rule-thin my-5" />}
              </div>
            ))}

            {/* Pull quote */}
            <hr className="rule-thin my-5" />
            <blockquote className="pull-quote">
              &ldquo;השוק הישראלי צריך רגולציה מודרנית שתאפשר תחרות ותגן על הצרכן&rdquo;
            </blockquote>
            <div className="byline mt-2">ניתוח מערכת • טור דעה</div>
          </div>
        </div>
      </section>

      <hr className="rule-double my-2" />

      {/* === MID SECTION - 4 Column News Grid === */}
      <section className="py-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="section-title">חדשות נוספות</span>
          <hr className="rule-thin flex-1" />
          <Link href="/news" className="text-xs font-bold text-red hover:underline">
            כל החדשות ←
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {columnArticles.map((article, i) => (
            <div
              key={article.id}
              className={`${i < columnArticles.length - 1 ? "lg:border-l lg:border-border lg:pl-5 lg:ml-5" : ""} ${i > 0 ? "mt-5 sm:mt-0" : ""}`}
            >
              <Link href={`/news#${article.id}`} className="group block">
                <div
                  className="h-40 bg-cover bg-center rounded-sm mb-3 transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="category-tag mb-1.5">{article.category}</div>
                <h3 className="headline-secondary mb-2 group-hover:text-red transition-colors">
                  {article.title}
                </h3>
                <p className="text-ink-muted text-xs leading-relaxed line-clamp-2 mb-2">
                  {article.excerpt}
                </p>
                <div className="byline">{article.date}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <hr className="rule-thick my-1" />

      {/* === AGENTS + LIVE SCORES SECTION === */}
      <section className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Agent Directory - 8 cols */}
          <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="section-flag">מדריך סוכנים מורשים</span>
              <hr className="rule-thin flex-1" />
              <Link href="/agents" className="text-xs font-bold text-red hover:underline">
                המדריך המלא ←
              </Link>
            </div>

            <p className="text-ink-muted text-sm mb-6 max-w-2xl">
              רשימת פלטפורמות ההימורים המרכזיות - מידע, סטטוס רישוי וסקירות.
              המידע נועד לידיעה בלבד.
            </p>

            <div className="space-y-0">
              {topAgents.map((agent, i) => (
                <div key={agent.id}>
                  <Link
                    href={`/agents#${agent.id}`}
                    className="agent-directory-card block py-4 px-3 rounded-sm"
                  >
                    <div className="flex items-center gap-4">
                      {/* Rank */}
                      <div className="w-8 text-center">
                        <span className="text-2xl font-black text-ink-faint font-editorial">
                          {i + 1}
                        </span>
                      </div>

                      {/* Logo placeholder */}
                      <div className="w-12 h-12 rounded bg-bg-section flex items-center justify-center font-black text-sm text-ink-light border border-border">
                        {agent.logo}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-bold text-sm">{agent.nameHe}</span>
                          <span className="text-xs text-ink-muted">({agent.name})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            agent.category === "legal" ? "badge-licensed" :
                            agent.category === "crypto" ? "badge-crypto" :
                            "badge-international"
                          }`}>
                            {agent.category === "legal" ? "מורשה בישראל" :
                             agent.category === "crypto" ? "קריפטו" :
                             "בינלאומי"}
                          </span>
                          <span className="text-[10px] text-ink-muted">
                            דירוג: {agent.rating}/5
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="text-ink-faint text-lg">←</div>
                    </div>
                  </Link>
                  {i < topAgents.length - 1 && <hr className="rule-thin" />}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Live Scores - 4 cols */}
          <div className="lg:col-span-4 lg:pr-8 mt-8 lg:mt-0">
            <LiveScoresWidget />

            {/* Opinion Box */}
            <div className="mt-8 p-5 bg-bg-section rounded-sm border border-border-light">
              <span className="section-flag-outline mb-3 block w-fit">טור דעה</span>
              <h3 className="headline-secondary mt-3 mb-2">
                האם הרגולציה הישראלית צריכה להשתנות?
              </h3>
              <p className="text-ink-muted text-xs leading-relaxed mb-3">
                מיליארדי שקלים זורמים לפלטפורמות בלתי מפוקחות. ניתוח על הצורך
                ברפורמה בשוק ההימורים הישראלי.
              </p>
              <span className="byline">מערכת BetZone • 10 מרץ 2026</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule-double my-1" />

      {/* === BOTTOM - More stories + Community teaser === */}
      <section className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* More stories - 8 cols */}
          <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="section-title">עוד בעיתון</span>
              <hr className="rule-thin flex-1" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
              {bottomArticles.map((article, i) => (
                <div key={article.id}>
                  <Link href={`/news#${article.id}`} className="group block py-4">
                    <div className="category-tag mb-1">{article.category}</div>
                    <h3 className="headline-small group-hover:text-red transition-colors mb-1.5">
                      {article.title}
                    </h3>
                    <p className="text-ink-muted text-xs line-clamp-2 mb-1.5">{article.excerpt}</p>
                    <span className="byline">{article.date}</span>
                  </Link>
                  {i < bottomArticles.length - 1 && <hr className="rule-thin" />}
                </div>
              ))}
            </div>
          </div>

          {/* Community teaser - 4 cols */}
          <div className="lg:col-span-4 lg:pr-8 mt-8 lg:mt-0">
            <div className="flex items-center gap-4 mb-5">
              <span className="section-title">הקהילה שלנו</span>
              <hr className="rule-thin flex-1" />
            </div>

            <div className="bg-bg-paper border border-border rounded-sm p-5">
              <h3 className="headline-secondary mb-3">
                הצטרפו לקהילת BetZone
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-4">
                שתפו ניתוחים, דיונים וטיפים עם אלפי חברי קהילה.
                חדשות עדכניות ישירות מהמומחים שלנו.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-bg-section rounded-sm">
                  <div className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center text-xs font-bold">T</div>
                  <div>
                    <div className="text-xs font-bold">ערוץ טלגרם</div>
                    <div className="text-[10px] text-ink-muted">חדשות ועדכונים בזמן אמת</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-bg-section rounded-sm">
                  <div className="w-8 h-8 rounded-full bg-green text-white flex items-center justify-center text-xs font-bold">W</div>
                  <div>
                    <div className="text-xs font-bold">קבוצת וואטסאפ</div>
                    <div className="text-[10px] text-ink-muted">דיונים וניתוחי משחקים</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-bg-section rounded-sm">
                  <div className="w-8 h-8 rounded-full bg-red text-white flex items-center justify-center text-xs font-bold">N</div>
                  <div>
                    <div className="text-xs font-bold">ניוזלטר שבועי</div>
                    <div className="text-[10px] text-ink-muted">סיכום השבוע ותחזיות</div>
                  </div>
                </div>
              </div>
              <Link
                href="/community"
                className="block mt-4 text-center py-2.5 border-2 border-ink text-ink font-bold text-sm hover:bg-ink hover:text-bg-paper transition-colors"
              >
                הצטרפו לקהילה
              </Link>
            </div>

            {/* Quick numbers */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-4 bg-bg-paper border border-border rounded-sm text-center">
                <div className="text-2xl font-black font-editorial text-red">50+</div>
                <div className="text-[10px] text-ink-muted mt-1">ליגות מכוסות</div>
              </div>
              <div className="p-4 bg-bg-paper border border-border rounded-sm text-center">
                <div className="text-2xl font-black font-editorial text-red">24/7</div>
                <div className="text-[10px] text-ink-muted mt-1">עדכוני חדשות</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
