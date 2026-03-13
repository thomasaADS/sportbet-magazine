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
  author?: string;
  type?: "news" | "opinion" | "analysis" | "guide";
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "ליגת האלופות: שלב הנוקאאוט מתחיל - כל מה שצריך לדעת",
    excerpt:
      "שלב הנוקאאוט של ליגת האלופות 2025/26 מתחיל השבוע עם משחקים מרגשים. ריאל מדריד, מנצ'סטר סיטי וברצלונה נערכים לקרבות הגדולים. סקירת האודס והניתוחים שלנו.",
    category: "כדורגל",
    categoryColor: "#16a34a",
    date: "13 מרץ 2026",
    readTime: "5 דקות",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
    featured: true,
    author: "אלון כהן",
    type: "analysis",
  },
  {
    id: "2",
    title: "NBA: הפלייאוף מתקרב - מי ייקח את האליפות?",
    excerpt:
      "עונת ה-NBA מגיעה לשלב הקריטי. סקירה מקיפה של הקבוצות המובילות, סטטיסטיקות שחקנים ואודס לאליפות. הסלטיקס נראים חזקים אבל הלייקרס מפתיעים.",
    category: "כדורסל",
    categoryColor: "#c8102e",
    date: "13 מרץ 2026",
    readTime: "4 דקות",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    featured: true,
    author: "מיכל ברק",
    type: "analysis",
  },
  {
    id: "3",
    title: "ליגת העל: מכבי תל אביב שוברת שיא ניצחונות רצופים",
    excerpt:
      "מכבי תל אביב ממשיכה בדומיננטיות מרשימה בליגת העל עם שיא של 12 ניצחונות רצופים. האם מישהו יכול לעצור אותה? מכבי חיפה והפועל באר שבע צריכות להתעורר.",
    category: "ליגת העל",
    categoryColor: "#1a365d",
    date: "12 מרץ 2026",
    readTime: "3 דקות",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    author: "אלון כהן",
    type: "news",
  },
  {
    id: "4",
    title: "WSOP אירופה 2026: הטורניר הגדול מתקרב",
    excerpt:
      "טורניר ה-World Series of Poker אירופה חוזר עם פרסי שיא. 15 אירועים, Buy-in מ-$500 ועד $100,000. כל הפרטים על הטורנירים, הכניסות, והשחקנים המועדפים.",
    category: "פוקר",
    categoryColor: "#b8860b",
    date: "12 מרץ 2026",
    readTime: "6 דקות",
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=800&q=80",
    author: "יונתן לוי",
    type: "news",
  },
  {
    id: "5",
    title: "UFC 320: כרטיס ענק - ניתוח קרבות ואודס",
    excerpt:
      "UFC 320 מביא כרטיס מטורף עם שלוש קרבות אליפות. ניתוח מקיף של כל הקרבות, סטטיסטיקות הלוחמים והאודס הטובים ביותר. מי ייקח הביתה חגורה?",
    category: "MMA",
    categoryColor: "#7c3aed",
    date: "11 מרץ 2026",
    readTime: "7 דקות",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    author: "מערכת BetZone",
    type: "analysis",
  },
  {
    id: "6",
    title: "פרמייר ליג: מירוץ האליפות מתחמם - ארסנל מול סיטי",
    excerpt:
      "המירוץ על אליפות הפרמייר ליג מגיע לשיאו. ארסנל עם 68 נקודות מובילה בשתי נקודות על מנצ'סטר סיטי. ניתוח הסיכויים ותחזית לשאר העונה.",
    category: "כדורגל",
    categoryColor: "#16a34a",
    date: "11 מרץ 2026",
    readTime: "5 דקות",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
    author: "אלון כהן",
    type: "analysis",
  },
  {
    id: "7",
    title: "הימורי קריפטו: Stake ו-Cloudbet מציגים תכונות חדשות",
    excerpt:
      "פלטפורמות ההימורים מבוססות הקריפטו ממשיכות לחדש. Stake השיקה סדרת משחקים חדשה ו-Cloudbet עדכנה את ה-API הפתוח שלה. סקירה מלאה.",
    category: "קריפטו",
    categoryColor: "#7c3aed",
    date: "10 מרץ 2026",
    readTime: "4 דקות",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
    author: "נועם שפירא",
    type: "news",
  },
  {
    id: "8",
    title: "טניס: רולאן גארוס מתקרב - מי יזכה בטורניר הגראנד סלאם?",
    excerpt:
      "עונת הקלאי מתחילה וכולם מצפים לרולאן גארוס. סינר מגיע כמועדף ראשון, ג'וקוביץ' עדיין מסוכן, ואלקרז מחפש את הטייטל השני שלו על חימר.",
    category: "טניס",
    categoryColor: "#0891b2",
    date: "10 מרץ 2026",
    readTime: "4 דקות",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
    author: "מערכת BetZone",
    type: "news",
  },
  {
    id: "9",
    title: "Winner.co.il: עדכונים חדשים בפלטפורמה הישראלית",
    excerpt:
      "וינר, אתר ההימורים החוקי היחיד בישראל, משיק ממשק חדש ומוסיף שווקים נוספים. האם הם מצליחים לצמצם את הפער מול הפלטפורמות הבינלאומיות?",
    category: "סקירה",
    categoryColor: "#c8102e",
    date: "9 מרץ 2026",
    readTime: "3 דקות",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80",
    author: "מערכת BetZone",
    type: "news",
  },
  // ---- NEW ARTICLES ----
  {
    id: "10",
    title: "טור דעה: למה ישראל צריכה רגולציה חדשה להימורי ספורט",
    excerpt:
      "מיליארדי שקלים זורמים מדי שנה לפלטפורמות בלתי מפוקחות. המונופול של וינר כבר לא עונה על הביקוש. הגיע הזמן למודל רגולטורי מודרני שיגן על הצרכן ויאפשר תחרות.",
    category: "טור דעה",
    categoryColor: "#1a365d",
    date: "13 מרץ 2026",
    readTime: "8 דקות",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    author: "אלון כהן",
    type: "opinion",
  },
  {
    id: "11",
    title: "לה ליגה: ברצלונה חוזרת לגדולה - ניתוח העונה",
    excerpt:
      "ברצלונה של חאבי עושה עונה מרשימה עם כדורגל מהנה. לאמין יאמאל הפך לכוכב העולמי הבא, ופדרי כבר המלך. ניתוח טקטי מלא של הקבוצה.",
    category: "כדורגל",
    categoryColor: "#16a34a",
    date: "12 מרץ 2026",
    readTime: "6 דקות",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80",
    author: "אלון כהן",
    type: "analysis",
  },
  {
    id: "12",
    title: "מדריך: איך לקרוא אודס ולמצוא Value Bets",
    excerpt:
      "מדריך מלא למתחילים ומתקדמים: מה זה אודס, איך קוראים אודס עשרוני ואמריקאי, מה זה Value Bet ואיך מוצאים אחד. כל מה שצריך לדעת לפני שמתחילים.",
    category: "מדריך",
    categoryColor: "#b8860b",
    date: "11 מרץ 2026",
    readTime: "10 דקות",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    author: "מערכת BetZone",
    type: "guide",
  },
  {
    id: "13",
    title: "סריה A: אינטר מילאן בדרך לסקודטו - ניתוח הליגה האיטלקית",
    excerpt:
      "אינטר מילאן שולטת בליגה האיטלקית עם יתרון של 8 נקודות. יובנטוס מאכזבת, נאפולי מתאוששת. סקירה מלאה של המצב בסריה A.",
    category: "כדורגל",
    categoryColor: "#16a34a",
    date: "10 מרץ 2026",
    readTime: "5 דקות",
    image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=800&q=80",
    author: "אלון כהן",
    type: "news",
  },
  {
    id: "14",
    title: "אי-ספורט: CS2 Major ברלין 2026 - מדריך מלא",
    excerpt:
      "טורניר ה-CS2 Major הגדול מגיע לברלין. 24 קבוצות, פרס של 1.25 מיליון דולר. מי המועדפות? FaZe, NAVI ו-Spirit מובילות את האודס.",
    category: "אי-ספורט",
    categoryColor: "#7c3aed",
    date: "9 מרץ 2026",
    readTime: "5 דקות",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    author: "נועם שפירא",
    type: "news",
  },
  {
    id: "15",
    title: "הפועל תל אביב: עונה להשכחה או נקודת מפנה?",
    excerpt:
      "הפועל תל אביב בעונה מאתגרת. החלפת מאמנים, שחקנים פצועים ותוצאות מאכזבות. ניתוח מעמיק של המשבר ומה הסיכוי להתאוששות.",
    category: "ליגת העל",
    categoryColor: "#1a365d",
    date: "9 מרץ 2026",
    readTime: "4 דקות",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    author: "אלון כהן",
    type: "analysis",
  },
  {
    id: "16",
    title: "בונדסליגה: באיירן מינכן תחת לחץ - ליברקוזן מאיימת",
    excerpt:
      "באיירן מינכן כבר לא שולטת לבד. באייר ליברקוזן ממשיכה להפתיע, שטוטגרט עושה עונה מצוינת, ודורטמונד עם שחקנים צעירים ומבטיחים.",
    category: "כדורגל",
    categoryColor: "#16a34a",
    date: "8 מרץ 2026",
    readTime: "5 דקות",
    image: "https://images.unsplash.com/photo-1517747614396-d21a02780ed3?w=800&q=80",
    author: "אלון כהן",
    type: "news",
  },
  {
    id: "17",
    title: "מדריך: ניהול בנקרול - הכלל החשוב ביותר בהימורים",
    excerpt:
      "90% מהמהמרים מפסידים כסף לטווח ארוך. הסיבה העיקרית? ניהול בנקרול לקוי. מדריך מפורט עם שיטות מוכחות לניהול כסף חכם.",
    category: "מדריך",
    categoryColor: "#b8860b",
    date: "8 מרץ 2026",
    readTime: "8 דקות",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    author: "מערכת BetZone",
    type: "guide",
  },
  {
    id: "18",
    title: "F1: עונה חדשה, מרוץ ישן - מי ינצח ב-2026?",
    excerpt:
      "עונת הפורמולה 1 החדשה מתחילה. רגולציות חדשות, מנועים חדשים, ואדריאן ניואי באסטון מרטין. פרשטאפן עדיין המועדף, אבל לואיס המילטון בפרארי מרגש.",
    category: "מוטורספורט",
    categoryColor: "#dc2626",
    date: "7 מרץ 2026",
    readTime: "6 דקות",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    author: "מערכת BetZone",
    type: "analysis",
  },
  {
    id: "19",
    title: "Polymarket: שוק התחזיות המבוזר ששובר שיאים",
    excerpt:
      "Polymarket צברה נפח מסחר של מיליארדי דולרים. מהימורי ספורט ועד פוליטיקה - הפלטפורמה המבוזרת משנה את הכללים. סקירה מלאה.",
    category: "קריפטו",
    categoryColor: "#7c3aed",
    date: "7 מרץ 2026",
    readTime: "5 דקות",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    author: "נועם שפירא",
    type: "news",
  },
  {
    id: "20",
    title: "גביע המדינה: הפתעות, דרמות וסיפורים מהתחרות האהובה",
    excerpt:
      "גביע המדינה בכדורגל מספק גם השנה רגעים בלתי נשכחים. קבוצות ליגה ב' שהדיחו קבוצות ליגת על, שערים ברגע האחרון, ודרמה אינסופית.",
    category: "ליגת העל",
    categoryColor: "#1a365d",
    date: "6 מרץ 2026",
    readTime: "4 דקות",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
    author: "אלון כהן",
    type: "news",
  },
  {
    id: "21",
    title: "סקירת Pinnacle: הסוכן שמהמרים מקצועיים אוהבים",
    excerpt:
      "Pinnacle ידועה כסוכן ההימורים עם האודס הגבוהים ביותר בשוק. הם לא מגבילים מנצחים ומקבלים שחקנים ישראלים. סקירה מקיפה.",
    category: "סקירה",
    categoryColor: "#c8102e",
    date: "6 מרץ 2026",
    readTime: "6 דקות",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    author: "מערכת BetZone",
    type: "news",
  },
  {
    id: "22",
    title: "כדורגל נשים: ליגת האלופות הנשית - הישגים ישראליים",
    excerpt:
      "כדורגל הנשים בישראל עושה צעדים גדולים. לאחרונה הצליחו קבוצות ישראליות להגיע לשלבי הנוקאאוט בליגת האלופות הנשית. סקירה מלאה.",
    category: "כדורגל",
    categoryColor: "#16a34a",
    date: "5 מרץ 2026",
    readTime: "4 דקות",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
    author: "מערכת BetZone",
    type: "news",
  },
];

export const newsCategories = [
  { id: "all", label: "הכל", color: "#c8102e" },
  { id: "כדורגל", label: "כדורגל", color: "#16a34a" },
  { id: "כדורסל", label: "כדורסל", color: "#c8102e" },
  { id: "ליגת העל", label: "ליגת העל", color: "#1a365d" },
  { id: "פוקר", label: "פוקר", color: "#b8860b" },
  { id: "MMA", label: "MMA", color: "#7c3aed" },
  { id: "טניס", label: "טניס", color: "#0891b2" },
  { id: "קריפטו", label: "קריפטו", color: "#7c3aed" },
  { id: "סקירה", label: "סקירות", color: "#c8102e" },
  { id: "מדריך", label: "מדריכים", color: "#b8860b" },
  { id: "טור דעה", label: "טורי דעה", color: "#1a365d" },
  { id: "אי-ספורט", label: "אי-ספורט", color: "#7c3aed" },
  { id: "מוטורספורט", label: "מוטורספורט", color: "#dc2626" },
];
