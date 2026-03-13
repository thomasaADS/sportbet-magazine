import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/lib/news-data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ id: article.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = newsArticles.find((a) => a.id === id);
  if (!article) return { title: "כתבה לא נמצאה | הזירה" };

  return {
    title: `${article.title} | הזירה`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = newsArticles.find((a) => a.id === id);

  if (!article) notFound();

  const typeLabel =
    article.type === "opinion"
      ? "טור דעה"
      : article.type === "analysis"
        ? "ניתוח"
        : article.type === "guide"
          ? "מדריך"
          : "חדשות";

  // Related articles: same category, excluding current
  const related = newsArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  // If not enough related by category, fill with recent articles
  const moreArticles =
    related.length < 3
      ? [
          ...related,
          ...newsArticles
            .filter(
              (a) =>
                a.id !== article.id && !related.find((r) => r.id === a.id)
            )
            .slice(0, 3 - related.length),
        ]
      : related;

  const paragraphs = article.content || [article.excerpt];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-ink-muted mb-6">
        <Link href="/" className="hover:text-red transition-colors">
          ראשי
        </Link>
        <span>›</span>
        <Link href="/news" className="hover:text-red transition-colors">
          חדשות
        </Link>
        <span>›</span>
        <span className="text-ink-light">{article.category}</span>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="category-tag"
            style={{ backgroundColor: article.categoryColor + "18", color: article.categoryColor }}
          >
            {article.category}
          </span>
          {article.type && article.type !== "news" && (
            <span className="text-[10px] font-bold text-ink-muted bg-bg-section px-2 py-1 rounded-sm">
              {typeLabel}
            </span>
          )}
        </div>

        <h1 className="headline-hero mb-4 leading-tight">{article.title}</h1>

        <p className="text-ink-light text-lg leading-relaxed mb-5 font-serif">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-4 pb-5 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-red text-white flex items-center justify-center font-bold text-sm">
            {(article.author || "מ")[0]}
          </div>
          <div>
            <div className="font-bold text-sm">
              {article.author || "מערכת הזירה"}
            </div>
            <div className="byline">
              {article.date} • {article.readTime} קריאה
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="mb-8 overflow-hidden rounded-sm">
        <div
          className="h-[300px] md:h-[450px] bg-cover bg-center"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="text-[10px] text-ink-faint mt-2 text-left">
          צילום: Unsplash
        </div>
      </div>

      {/* Article Body */}
      <article className="mb-12">
        <div className="max-w-3xl mx-auto space-y-5">
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`text-ink text-base leading-[1.9] ${i === 0 ? "text-lg font-medium" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* Tags */}
      <div className="border-t border-b border-border py-5 mb-10">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-bold text-ink-muted">תגיות:</span>
          {[article.category, typeLabel, "הזירה", "ספורט"].map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-3 py-1.5 bg-bg-section rounded-sm text-ink-light hover:bg-bg-warm transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      {moreArticles.length > 0 && (
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="section-flag">כתבות נוספות</span>
            <hr className="rule-thin flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {moreArticles.map((related) => (
              <Link
                key={related.id}
                href={`/news/${related.id}`}
                className="group block"
              >
                <div
                  className="h-40 bg-cover bg-center rounded-sm mb-3 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${related.image})` }}
                />
                <div className="category-tag mb-1">{related.category}</div>
                <h3 className="headline-secondary group-hover:text-red transition-colors mb-1.5">
                  {related.title}
                </h3>
                <div className="byline">
                  {related.author} • {related.date}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back to news */}
      <div className="text-center mt-10 pt-6 border-t border-border">
        <Link
          href="/news"
          className="inline-block px-6 py-3 border-2 border-ink text-ink font-bold text-sm hover:bg-ink hover:text-bg-paper transition-colors rounded-sm"
        >
          ← חזרה לכל החדשות
        </Link>
      </div>
    </div>
  );
}
