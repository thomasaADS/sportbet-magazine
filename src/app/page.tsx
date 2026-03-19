import Link from "next/link";
import { newsArticles } from "@/lib/news-data";
import { bettingAgents } from "@/lib/agents-data";
import LiveScoresWidget from "@/components/LiveScoresWidget";
import StandingsTable from "@/components/StandingsTable";
import ScheduleWidget from "@/components/ScheduleWidget";
import PollWidget from "@/components/PollWidget";
import TrendingWidget from "@/components/TrendingWidget";
import VideoSection from "@/components/VideoSection";

export default function HomePage() {
  const featured = newsArticles[0];
  const secondary = newsArticles.slice(1, 3);
  const israeliNews = newsArticles.filter((a) => a.category === "ליגת העל");
  const worldFootball = newsArticles.filter((a) => a.category === "כדורגל");
  const opinionArticle = newsArticles.find((a) => a.type === "opinion");
  const guides = newsArticles.filter((a) => a.type === "guide");
  const moreNews = newsArticles.slice(5, 11);
  const bottomNews = newsArticles.slice(11, 17);
  const topAgents = bettingAgents.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* ============ SECTION 1: HERO ============ */}
      <section className="py-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="section-flag">כתבה ראשית</span>
          <hr className="rule-thin flex-1" />
          <span className="byline">{featured.date}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Main Feature - 7 cols */}
          <div className="lg:col-span-7 lg:border-l lg:border-border lg:pl-6">
            <Link href={`/news/${featured.id}`} className="group block">
              <div className="overflow-hidden rounded-sm mb-4">
                <div
                  className="h-[320px] md:h-[400px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
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
                {featured.author || "מערכת הזירה"} • {featured.readTime} קריאה
              </div>
            </Link>
          </div>

          {/* Secondary - 5 cols */}
          <div className="lg:col-span-5 lg:pr-6 mt-6 lg:mt-0">
            {secondary.map((article, i) => (
              <div key={article.id}>
                <Link href={`/news/${article.id}`} className="group block">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="category-tag mb-1.5">{article.category}</div>
                      <h3 className="headline-primary mb-2 group-hover:text-red transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-ink-muted text-sm leading-relaxed line-clamp-2 mb-2">
                        {article.excerpt}
                      </p>
                      <div className="byline">{article.author} • {article.date}</div>
                    </div>
                    <div
                      className="w-32 h-24 flex-shrink-0 bg-cover bg-center rounded-sm"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                  </div>
                </Link>
                {i < secondary.length - 1 && <hr className="rule-thin my-5" />}
              </div>
            ))}

            {/* Opinion box */}
            {opinionArticle && (
              <>
                <hr className="rule-thin my-5" />
                <Link href={`/news/${opinionArticle.id}`} className="group block">
                  <span className="section-flag-outline text-[9px] mb-2 inline-block">טור דעה</span>
                  <h3 className="headline-secondary mt-2 group-hover:text-red transition-colors">
                    {opinionArticle.title}
                  </h3>
                  <p className="text-ink-muted text-xs mt-1.5 line-clamp-2">{opinionArticle.excerpt}</p>
                  <div className="byline mt-2">{opinionArticle.author} • {opinionArticle.date}</div>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <hr className="rule-double my-1" />

      {/* ============ SECTION 2: LIVE SCORES + STANDINGS + SCHEDULE ============ */}
      <section className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LiveScoresWidget />
          <StandingsTable />
          <ScheduleWidget />
        </div>
      </section>

      <hr className="rule-thick my-1" />

      {/* ============ SECTION 3: ISRAELI FOOTBALL ============ */}
      <section className="py-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="section-flag bg-blue text-white">כדורגל ישראלי</span>
          <hr className="rule-thin flex-1" />
          <Link href="/news" className="text-xs font-bold text-red hover:underline">
            כל הכתבות ←
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {(israeliNews.length >= 4 ? israeliNews : [...israeliNews, ...newsArticles.filter(a => a.category !== "ליגת העל")]).slice(0, 4).map((article, i) => (
            <div
              key={article.id}
              className={`${i < 3 ? "lg:border-l lg:border-border lg:pl-5 lg:ml-5" : ""} ${i > 0 ? "mt-5 lg:mt-0" : ""}`}
            >
              <Link href={`/news/${article.id}`} className="group block">
                <div
                  className="h-36 bg-cover bg-center rounded-sm mb-3 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="category-tag mb-1.5">{article.category}</div>
                <h3 className="headline-secondary mb-2 group-hover:text-red transition-colors">
                  {article.title}
                </h3>
                <p className="text-ink-muted text-xs leading-relaxed line-clamp-2 mb-2">
                  {article.excerpt}
                </p>
                <div className="byline">{article.author} • {article.date}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <hr className="rule-thin my-1" />

      {/* ============ SECTION 4: VIDEO HIGHLIGHTS ============ */}
      <section className="py-6">
        <VideoSection />
      </section>

      <hr className="rule-double my-1" />

      {/* ============ SECTION 5: WORLD FOOTBALL + SIDEBAR ============ */}
      <section className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* World Football - 8 cols */}
          <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="section-flag bg-green text-white">כדורגל עולמי</span>
              <hr className="rule-thin flex-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
              {worldFootball.slice(0, 4).map((article, i) => (
                <div key={article.id}>
                  <Link href={`/news/${article.id}`} className="group block py-4">
                    <div
                      className="h-40 bg-cover bg-center rounded-sm mb-3 transition-transform duration-500 group-hover:scale-[1.02]"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="category-tag mb-1">{article.category}</div>
                    <h3 className="headline-secondary group-hover:text-red transition-colors mb-1.5">
                      {article.title}
                    </h3>
                    <p className="text-ink-muted text-xs line-clamp-2 mb-2">{article.excerpt}</p>
                    <div className="byline">{article.author} • {article.date}</div>
                  </Link>
                  {i < 3 && <hr className="rule-thin" />}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Poll + Trending - 4 cols */}
          <div className="lg:col-span-4 lg:pr-8 mt-8 lg:mt-0 space-y-8">
            <PollWidget />
            <TrendingWidget />
          </div>
        </div>
      </section>

      <hr className="rule-thick my-1" />

      {/* ============ SECTION 6: MORE NEWS (6 articles in rows) ============ */}
      <section className="py-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="section-title">חדשות נוספות</span>
          <hr className="rule-thin flex-1" />
          <Link href="/news" className="text-xs font-bold text-red hover:underline">כל החדשות ←</Link>
        </div>

        <div className="space-y-0">
          {moreNews.map((article, i) => (
            <div key={article.id}>
              <Link
                href={`/news/${article.id}`}
                className="group flex gap-4 py-4 hover:bg-bg-warm px-2 rounded-sm transition-colors"
              >
                <div
                  className="w-24 h-20 flex-shrink-0 bg-cover bg-center rounded-sm"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="category-tag">{article.category}</span>
                    {article.type === "guide" && (
                      <span className="text-[9px] font-bold text-gold bg-gold/10 px-1.5 py-0.5 rounded-sm">מדריך</span>
                    )}
                    {article.type === "opinion" && (
                      <span className="text-[9px] font-bold text-blue bg-blue/10 px-1.5 py-0.5 rounded-sm">דעה</span>
                    )}
                  </div>
                  <h3 className="headline-small group-hover:text-red transition-colors mb-1">
                    {article.title}
                  </h3>
                  <p className="text-ink-muted text-xs line-clamp-1">{article.excerpt}</p>
                </div>
                <div className="hidden sm:block text-left flex-shrink-0">
                  <div className="byline">{article.date}</div>
                  <div className="byline mt-0.5">{article.readTime}</div>
                </div>
              </Link>
              {i < moreNews.length - 1 && <hr className="rule-thin" />}
            </div>
          ))}
        </div>
      </section>

      <hr className="rule-double my-1" />

      {/* ============ SECTION 7: AGENTS DIRECTORY + GUIDES ============ */}
      <section className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Agent Directory - 8 cols */}
          <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="section-flag">מדריך סוכנים</span>
              <hr className="rule-thin flex-1" />
              <Link href="/agents" className="text-xs font-bold text-red hover:underline">
                המדריך המלא ←
              </Link>
            </div>

            {/* Recommended Personal Agents */}
            <div className="mb-6 p-4 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-sm text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  סוכנים ממולצים
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "דודו הסוכן", letter: "ד", phone: "052-359-3540", wa: "972523593540", gradient: "from-amber-400 to-amber-600" },
                  { name: "סול הסוכן", letter: "ס", phone: "052-421-4123", wa: "972524214123", gradient: "from-blue-400 to-blue-600" },
                  { name: "מיכאל הסוכן", letter: "מ", phone: "053-480-8349", wa: "972534808349", gradient: "from-purple-400 to-purple-600" },
                ].map((agent) => (
                  <a
                    key={agent.wa}
                    href={`https://wa.me/${agent.wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${agent.gradient} flex items-center justify-center text-sm font-black text-white flex-shrink-0`}>
                      {agent.letter}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold">{agent.name}</div>
                      <div className="text-[10px] text-white/50">{agent.phone}</div>
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-white text-[11px] font-bold flex-shrink-0 group-hover:scale-105 transition-transform"
                      style={{ background: "#25D366" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      וואטסאפ
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <p className="text-ink-muted text-sm mb-4">
              רשימת פלטפורמות ההימורים המרכזיות - מידע, סטטוס רישוי וסקירות. מידע בלבד.
            </p>

            <div className="space-y-0">
              {topAgents.map((agent, i) => (
                <div key={agent.id}>
                  <Link href={`/agents#${agent.id}`} className="agent-directory-card block py-3.5 px-3 rounded-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-black text-ink-faint font-editorial w-6 text-center">{i + 1}</span>
                      <div className="w-11 h-11 rounded bg-bg-section flex items-center justify-center font-black text-xs text-ink-light border border-border">
                        {agent.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-bold text-sm">{agent.nameHe}</span>
                          <span className="text-[10px] text-ink-muted">({agent.name})</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                            agent.category === "legal" ? "badge-licensed" :
                            agent.category === "crypto" ? "badge-crypto" : "badge-international"
                          }`}>
                            {agent.category === "legal" ? "מורשה" : agent.category === "crypto" ? "קריפטו" : "בינלאומי"}
                          </span>
                          <span className="text-[10px] text-gold">
                            {"★".repeat(Math.floor(agent.rating))} <span className="text-ink-faint">{agent.rating}</span>
                          </span>
                          {agent.yearFounded && (
                            <span className="text-[10px] text-ink-faint hidden sm:inline">מאז {agent.yearFounded}</span>
                          )}
                        </div>
                      </div>
                      <span className="text-ink-faint">←</span>
                    </div>
                  </Link>
                  {i < topAgents.length - 1 && <hr className="rule-thin" />}
                </div>
              ))}
            </div>
          </div>

          {/* Guides + Community - 4 cols */}
          <div className="lg:col-span-4 lg:pr-8 mt-8 lg:mt-0 space-y-8">
            {/* Guides section */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="section-flag bg-gold text-white">מדריכים</span>
                <hr className="rule-thin flex-1" />
              </div>
              <div className="space-y-0">
                {guides.slice(0, 3).map((guide, i) => (
                  <div key={guide.id}>
                    <Link href={`/news/${guide.id}`} className="group block py-3">
                      <h3 className="headline-small group-hover:text-red transition-colors mb-1">
                        {guide.title}
                      </h3>
                      <p className="text-ink-muted text-xs line-clamp-2">{guide.excerpt}</p>
                      <div className="byline mt-1.5">{guide.readTime} קריאה</div>
                    </Link>
                    {i < Math.min(guides.length, 3) - 1 && <hr className="rule-thin" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Community box */}
            <div className="bg-bg-paper border border-border rounded-sm p-5">
              <span className="section-title block mb-3">הקהילה שלנו</span>
              <p className="text-ink-muted text-xs leading-relaxed mb-4">
                הצטרפו לאלפי חברי קהילה. ניתוחים, דיונים וטיפים ישירות מהמומחים.
              </p>
              <div className="space-y-2">
                <Link href="/community" className="flex items-center gap-2.5 p-2.5 bg-bg-section rounded-sm hover:bg-bg-warm transition-colors">
                  <div className="w-7 h-7 rounded-full bg-blue text-white flex items-center justify-center text-[10px] font-bold">T</div>
                  <div className="text-xs"><strong>טלגרם</strong> • 4.2K חברים</div>
                </Link>
                <Link href="/community" className="flex items-center gap-2.5 p-2.5 bg-bg-section rounded-sm hover:bg-bg-warm transition-colors">
                  <div className="w-7 h-7 rounded-full bg-green text-white flex items-center justify-center text-[10px] font-bold">W</div>
                  <div className="text-xs"><strong>וואטסאפ</strong> • 1.8K חברים</div>
                </Link>
              </div>
              <Link href="/community" className="block mt-3 text-center py-2 border border-ink text-ink font-bold text-xs hover:bg-ink hover:text-bg-paper transition-colors rounded-sm">
                הצטרפו לקהילה
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule-thin my-1" />

      {/* ============ SECTION 8: BOTTOM GRID ============ */}
      <section className="py-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="section-title">עוד בעיתון</span>
          <hr className="rule-thin flex-1" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0">
          {bottomNews.map((article, i) => (
            <div key={article.id}>
              <Link href={`/news/${article.id}`} className="group block py-4">
                <div
                  className="h-36 bg-cover bg-center rounded-sm mb-3 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="flex items-center gap-2 mb-1">
                  <span className="category-tag">{article.category}</span>
                  {article.type && article.type !== "news" && (
                    <span className="text-[9px] font-bold text-ink-muted bg-bg-section px-1.5 py-0.5 rounded-sm">
                      {article.type === "analysis" ? "ניתוח" : article.type === "guide" ? "מדריך" : "דעה"}
                    </span>
                  )}
                </div>
                <h3 className="headline-secondary group-hover:text-red transition-colors mb-1.5">
                  {article.title}
                </h3>
                <p className="text-ink-muted text-xs line-clamp-2 mb-2">{article.excerpt}</p>
                <div className="byline">{article.author} • {article.date}</div>
              </Link>
              {i < bottomNews.length - 1 && <hr className="rule-thin lg:hidden" />}
            </div>
          ))}
        </div>
      </section>

      {/* ============ SECTION 9: SEO CONTENT ============ */}
      <section className="py-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-bg-paper border border-border rounded-sm">
            <h2 className="headline-secondary mb-3">הימורי ספורט בישראל - המדריך המלא</h2>
            <p className="text-xs text-ink-muted leading-relaxed mb-2">
              שוק הימורי הספורט בישראל מפוקח על ידי המועצה להסדר ההימורים בספורט (מל&quot;ה).
              הפלטפורמה החוקית היחידה היא Winner.co.il. השוק הבלתי מפוקח מוערך ב-3.5 מיליארד שקל בשנה.
            </p>
            <p className="text-xs text-ink-muted leading-relaxed">
              הזירה מספק מידע וסקירות בלבד. אנו לא מספקים שירותי הימורים ולא ממליצים על הימורים.
              הימורים מותרים לבני 18+ בלבד.
            </p>
          </div>
          <div className="p-5 bg-bg-paper border border-border rounded-sm">
            <h2 className="headline-secondary mb-3">איך לבחור סוכן הימורים?</h2>
            <div className="space-y-2">
              {[
                { n: "1", title: "אודס ושווקים", desc: "השוו אודס בין סוכנים לפני כל הימור" },
                { n: "2", title: "רישוי ואמינות", desc: "העדיפו סוכנים עם רישיון מוכר (UK, MGA)" },
                { n: "3", title: "בונוסים", desc: "בדקו תנאי rollover - לא רק את הסכום" },
                { n: "4", title: "תשלומים", desc: "ודאו תמיכה באמצעי התשלום שלכם" },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-2">
                  <span className="text-red font-black text-sm">{item.n}</span>
                  <div>
                    <span className="text-xs font-bold">{item.title}</span>
                    <span className="text-xs text-ink-muted"> — {item.desc}</span>
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
