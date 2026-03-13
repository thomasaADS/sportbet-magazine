"use client";

import { NewsArticle } from "@/lib/news-data";

interface NewsGridProps {
  articles: NewsArticle[];
}

export default function NewsGrid({ articles }: NewsGridProps) {
  return (
    <div className="news-grid">
      {articles.map((article, i) => (
        <article
          key={article.id}
          id={article.id}
          className="rounded-xl bg-card-bg border border-card-border overflow-hidden card-hover animate-fade-in-up"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="px-3 py-1 rounded-full text-[10px] font-bold text-white"
                style={{ backgroundColor: article.categoryColor }}
              >
                {article.category}
              </span>
              <span className="text-[10px] text-text-muted">
                {article.date}
              </span>
              <span className="text-[10px] text-text-muted">
                {article.readTime} קריאה
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2 leading-snug">
              {article.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
            <button className="mt-4 text-accent text-sm font-bold hover:underline">
              קרא עוד ←
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
