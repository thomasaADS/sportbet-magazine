import { NextResponse } from "next/server";

// Fetches Israeli sports news from Ynet Sports RSS
// Also supports other Israeli sports RSS feeds
const RSS_FEEDS = [
  {
    name: "Ynet Sports",
    url: "https://www.ynet.co.il/Integration/StoryRss3.xml",
    category: "ספורט",
  },
  {
    name: "Maariv Sport",
    url: "https://www.maariv.co.il/Rss/RssFeedsSport",
    category: "ספורט",
  },
  {
    name: "ONE",
    url: "https://www.one.co.il/rss",
    category: "ספורט",
  },
];

export async function GET() {
  try {
    const allArticles = [];

    for (const feed of RSS_FEEDS) {
      try {
        const res = await fetch(feed.url, {
          next: { revalidate: 1800 }, // 30 min cache
          headers: { "User-Agent": "HaZira-Magazine/1.0" },
        });

        if (!res.ok) continue;

        const xml = await res.text();

        // Simple XML parsing without external dependencies
        const items = xml.split("<item>").slice(1);

        for (const item of items.slice(0, 10)) {
          const getTag = (tag: string) => {
            const match = item.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[(.+?)\\]\\]></${tag}>|<${tag}[^>]*>(.+?)</${tag}>`));
            return match ? (match[1] || match[2] || "").trim() : "";
          };

          const title = getTag("title");
          const description = getTag("description");
          const link = getTag("link");
          const pubDate = getTag("pubDate");

          if (title) {
            allArticles.push({
              title,
              description: description.replace(/<[^>]*>/g, "").slice(0, 200),
              link,
              pubDate,
              source: feed.name,
              category: feed.category,
            });
          }
        }
      } catch {
        // Skip failed feeds
      }
    }

    return NextResponse.json({
      source: "rss",
      count: allArticles.length,
      articles: allArticles,
    });
  } catch {
    return NextResponse.json({ source: "rss", count: 0, articles: [] });
  }
}
