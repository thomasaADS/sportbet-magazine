"use client";

import { useState, useEffect } from "react";

interface RssArticle {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category: string;
}

export default function LiveNewsWidget() {
  const [articles, setArticles] = useState<RssArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/rss");
        if (res.ok) {
          const data = await res.json();
          if (data.articles?.length > 0) {
            setArticles(data.articles);
          }
        }
      } catch {
        // Silent fail
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
    const interval = setInterval(fetchNews, 300000); // refresh every 5 min
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-bg-paper border border-border rounded-sm p-6">
        <div className="animate-pulse space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 bg-bg-section rounded-sm" />
          ))}
        </div>
      </div>
    );
  }

  if (articles.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="section-flag bg-red text-white">
          <span className="live-dot" />
          חדשות עכשיו
        </span>
        <hr className="rule-thin flex-1" />
        <span className="text-[10px] text-ink-faint">מתעדכן כל 5 דקות</span>
      </div>

      <div className="bg-bg-paper border border-border rounded-sm overflow-hidden">
        {articles.slice(0, 8).map((article, i) => (
          <a
            key={`${article.source}-${i}`}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block px-4 py-3 hover:bg-bg-warm transition-colors ${
              i < Math.min(articles.length, 8) - 1 ? "border-b border-border-light" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold leading-snug mb-1 line-clamp-2">
                  {article.title}
                </h4>
                {article.description && (
                  <p className="text-xs text-ink-muted line-clamp-1">
                    {article.description}
                  </p>
                )}
              </div>
              <div className="flex-shrink-0 text-left">
                <span className="text-[9px] font-bold text-ink-faint bg-bg-section px-1.5 py-0.5 rounded-sm">
                  {article.source}
                </span>
                {article.pubDate && (
                  <div className="text-[9px] text-ink-faint mt-1">
                    {new Date(article.pubDate).toLocaleTimeString("he-IL", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>

      <p className="text-[10px] text-ink-faint text-center mt-2">
        מקורות: Ynet, מעריב, ONE • חדשות ספורט בזמן אמת
      </p>
    </div>
  );
}
