import type { Metadata } from "next";
import { newsArticles, newsCategories } from "@/lib/news-data";
import NewsGrid from "@/components/NewsGrid";

export const metadata: Metadata = {
  title: "חדשות הימורי ספורט - BetZone IL | עדכונים שוטפים",
  description:
    "חדשות הימורי ספורט עדכניות מישראל ומהעולם. כדורגל, כדורסל, טניס, פוקר, MMA ועוד. ניתוחים, תחזיות וטיפים מקצועיים.",
  keywords: [
    "חדשות ספורט",
    "הימורי ספורט",
    "ליגת העל",
    "פרמייר ליג",
    "ליגת האלופות",
    "NBA",
    "פוקר",
    "UFC",
  ],
};

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-3">
          <span className="gradient-text">חדשות הימורי ספורט</span>
        </h1>
        <p className="text-text-muted">
          כל החדשות, הניתוחים והתחזיות ממגוון ענפי ספורט
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {newsCategories.map((cat) => (
          <span
            key={cat.id}
            className="px-4 py-2 rounded-full text-xs font-bold border cursor-pointer transition-all hover:scale-105"
            style={{
              borderColor: cat.color,
              color: cat.color,
              backgroundColor: `${cat.color}15`,
            }}
          >
            {cat.label}
          </span>
        ))}
      </div>

      <NewsGrid articles={newsArticles} />
    </div>
  );
}
