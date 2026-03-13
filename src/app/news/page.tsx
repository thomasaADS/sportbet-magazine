import type { Metadata } from "next";
import Link from "next/link";
import { newsArticles, newsCategories } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "חדשות הימורי ספורט | הזירה - עדכונים שוטפים",
  description: "חדשות הימורי ספורט מישראל ומהעולם. כדורגל, כדורסל, טניס, פוקר, MMA ועוד. ניתוחים, תחזיות וסקירות.",
};

export default function NewsPage() {
  const topStory = newsArticles[0];
  const secondaryStories = newsArticles.slice(1, 4);
  const restStories = newsArticles.slice(4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <hr className="rule-thick mb-4" />
      <div className="flex items-center justify-between mb-2">
        <h1 className="headline-hero">חדשות</h1>
        <span className="byline">{new Date().toLocaleDateString("he-IL", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</span>
      </div>
      <hr className="rule-thin mb-4" />

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {newsCategories.map((cat) => (
          <span
            key={cat.id}
            className="px-3 py-1.5 text-[11px] font-bold border border-border rounded-sm cursor-pointer hover:bg-ink hover:text-bg-paper hover:border-ink transition-colors"
          >
            {cat.label}
          </span>
        ))}
      </div>

      {/* Main story + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-8">
        {/* Main */}
        <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-6">
          <Link href={`/news/${topStory.id}`} className="group block">
            <div className="overflow-hidden rounded-sm mb-4">
              <div
                className="h-[320px] md:h-[400px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${topStory.image})` }}
              />
            </div>
            <div className="category-tag mb-2">{topStory.category}</div>
            <h2 className="headline-hero mb-3 group-hover:text-red transition-colors">{topStory.title}</h2>
            <p className="text-ink-light text-base leading-relaxed mb-3">{topStory.excerpt}</p>
            <div className="byline">מערכת הזירה • {topStory.date} • {topStory.readTime} קריאה</div>
          </Link>
        </div>

        {/* Secondary stories */}
        <div className="lg:col-span-4 lg:pr-6 mt-6 lg:mt-0">
          {secondaryStories.map((article, i) => (
            <div key={article.id}>
              <Link href={`/news/${article.id}`} className="group block" id={article.id}>
                <div
                  className="h-36 bg-cover bg-center rounded-sm mb-3"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="category-tag mb-1">{article.category}</div>
                <h3 className="headline-secondary group-hover:text-red transition-colors mb-1.5">{article.title}</h3>
                <p className="text-ink-muted text-xs line-clamp-2 mb-1.5">{article.excerpt}</p>
                <div className="byline">{article.date} • {article.readTime} קריאה</div>
              </Link>
              {i < secondaryStories.length - 1 && <hr className="rule-thin my-4" />}
            </div>
          ))}
        </div>
      </div>

      <hr className="rule-double mb-6" />

      {/* More stories grid */}
      <div className="flex items-center gap-4 mb-5">
        <span className="section-title">עוד חדשות</span>
        <hr className="rule-thin flex-1" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0">
        {restStories.map((article, i) => (
          <div key={article.id}>
            <Link href={`/news/${article.id}`} className="py-4 group block" id={article.id}>
              <div
                className="h-44 bg-cover bg-center rounded-sm mb-3 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundImage: `url(${article.image})` }}
              />
              <div className="category-tag mb-1">{article.category}</div>
              <h3 className="headline-secondary group-hover:text-red transition-colors mb-1.5">
                {article.title}
              </h3>
              <p className="text-ink-muted text-xs line-clamp-2 mb-2">{article.excerpt}</p>
              <div className="byline">{article.date} • {article.readTime} קריאה</div>
            </Link>
            {i < restStories.length - 1 && <hr className="rule-thin lg:hidden" />}
          </div>
        ))}
      </div>
    </div>
  );
}
