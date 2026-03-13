export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  source?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "ליגת האלופות: שלב הנוקאאוט מתחיל - כל מה שצריך לדעת",
    excerpt:
      "שלב הנוקאאוט של ליגת האלופות 2025/26 מתחיל השבוע עם משחקים מרגשים. ריאל מדריד, מנצ'סטר סיטי וברצלונה נערכים לקרבות הגדולים. סקירת האודס והניתוחים שלנו.",
    category: "כדורגל",
    categoryColor: "#10b981",
    date: "13 מרץ 2026",
    readTime: "5 דקות",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "NBA: הפלייאוף מתקרב - מי ייקח את האליפות?",
    excerpt:
      "עונת ה-NBA מגיעה לשלב הקריטי. סקירה מקיפה של הקבוצות המובילות, סטטיסטיקות שחקנים ואודס לאליפות.",
    category: "כדורסל",
    categoryColor: "#f59e0b",
    date: "13 מרץ 2026",
    readTime: "4 דקות",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    featured: true,
  },
  {
    id: "3",
    title: "ליגת העל: מכבי תל אביב שוברת שיא ניצחונות רצופים",
    excerpt:
      "מכבי תל אביב ממשיכה בדומיננטיות מרשימה בליגת העל עם שיא של 12 ניצחונות רצופים. האם מישהו יכול לעצור אותה?",
    category: "ליגת העל",
    categoryColor: "#3b82f6",
    date: "12 מרץ 2026",
    readTime: "3 דקות",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
  },
  {
    id: "4",
    title: "WSOP אירופה 2026: הטורניר הגדול מתקרב",
    excerpt:
      "טורניר ה-World Series of Poker אירופה חוזר עם פרסי שיא. כל הפרטים על הטורנירים, הכניסות, והשחקנים המועדפים.",
    category: "פוקר",
    categoryColor: "#ef4444",
    date: "12 מרץ 2026",
    readTime: "6 דקות",
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=800&q=80",
  },
  {
    id: "5",
    title: "UFC 320: כרטיס ענק - ניתוח קרבות ואודס",
    excerpt:
      "UFC 320 מביא כרטיס מטורף עם שלוש קרבות אליפות. ניתוח מקיף של כל הקרבות, סטטיסטיקות הלוחמים והאודס הטובים ביותר.",
    category: "MMA",
    categoryColor: "#8b5cf6",
    date: "11 מרץ 2026",
    readTime: "7 דקות",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
  },
  {
    id: "6",
    title: "פרמייר ליג: מירוץ האליפות מתחמם - ארסנל מול סיטי",
    excerpt:
      "המירוץ על אליפות הפרמייר ליג מגיע לשיאו. ארסנל ומנצ'סטר סיטי נלחמות ראש בראש. סקירת אודס ותחזיות.",
    category: "כדורגל",
    categoryColor: "#10b981",
    date: "11 מרץ 2026",
    readTime: "5 דקות",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
  },
  {
    id: "7",
    title: "הימורי קריפטו: Stake ו-Cloudbet מציגים תכונות חדשות",
    excerpt:
      "פלטפורמות ההימורים מבוססות הקריפטו ממשיכות לחדש. Stake ו-Cloudbet מציגות תכונות חדשות למהמרים.",
    category: "קריפטו",
    categoryColor: "#a855f7",
    date: "10 מרץ 2026",
    readTime: "4 דקות",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
  },
  {
    id: "8",
    title: "טניס: רולאן גארוס מתקרב - מי יזכה בטורניר הגראנד סלאם?",
    excerpt:
      "עונת הקלאי מתחילה וכולם מצפים לרולאן גארוס. סקירה של השחקנים המובילים והאודס לזכייה.",
    category: "טניס",
    categoryColor: "#06b6d4",
    date: "10 מרץ 2026",
    readTime: "4 דקות",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
  },
  {
    id: "9",
    title: "Winner.co.il: עדכונים חדשים באתר ההימורים החוקי בישראל",
    excerpt:
      "וינר, אתר ההימורים החוקי היחיד בישראל, משיק ממשק חדש ומוסיף שווקים נוספים. סקירה מקיפה של השינויים.",
    category: "הימורים",
    categoryColor: "#f59e0b",
    date: "9 מרץ 2026",
    readTime: "3 דקות",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80",
  },
];

export const newsCategories = [
  { id: "all", label: "הכל", color: "#f59e0b" },
  { id: "כדורגל", label: "כדורגל", color: "#10b981" },
  { id: "כדורסל", label: "כדורסל", color: "#f59e0b" },
  { id: "ליגת העל", label: "ליגת העל", color: "#3b82f6" },
  { id: "פוקר", label: "פוקר", color: "#ef4444" },
  { id: "MMA", label: "MMA", color: "#8b5cf6" },
  { id: "טניס", label: "טניס", color: "#06b6d4" },
  { id: "הימורים", label: "הימורים", color: "#f59e0b" },
  { id: "קריפטו", label: "קריפטו", color: "#a855f7" },
];
