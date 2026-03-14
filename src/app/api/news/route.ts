import { NextResponse } from "next/server";

// GNews API integration
// Free tier: 100 requests/day at https://gnews.io
const GNEWS_API_KEY = process.env.GNEWS_API_KEY || "";

export async function GET() {
  if (!GNEWS_API_KEY) {
    return NextResponse.json({
      source: "demo",
      articles: [],
    });
  }

  try {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=ספורט+הימורים&lang=he&country=il&max=10&apikey=${GNEWS_API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) throw new Error("News API request failed");

    const data = await res.json();

    interface GNewsArticle {
      title: string;
      description: string;
      url: string;
      image: string;
      publishedAt: string;
      source: { name: string };
    }

    const articles = data.articles?.map((article: GNewsArticle, i: number) => ({
      id: `gnews-${i}`,
      title: article.title,
      excerpt: article.description,
      url: article.url,
      image: article.image,
      date: new Date(article.publishedAt).toLocaleDateString("he-IL"),
      source: article.source?.name,
    }));

    return NextResponse.json({ source: "gnews", articles });
  } catch {
    return NextResponse.json({ source: "demo", articles: [] });
  }
}
