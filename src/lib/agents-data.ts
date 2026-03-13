export interface BettingAgent {
  id: string;
  name: string;
  nameHe: string;
  logo: string;
  description: string;
  rating: number;
  bonus: string;
  features: string[];
  pros: string[];
  cons: string[];
  sports: string[];
  minDeposit: string;
  paymentMethods: string[];
  license: string;
  website: string;
  isAvailableInIsrael: boolean;
  legalStatus: string;
  affiliate?: string;
  category: "legal" | "international" | "crypto";
}

export const bettingAgents: BettingAgent[] = [
  {
    id: "winner",
    name: "Winner / Toto",
    nameHe: "וינר / טוטו",
    logo: "W",
    description:
      "הפלטפורמה החוקית היחידה להימורי ספורט בישראל. מופעלת על ידי המועצה להסדר ההימורים בספורט (מל\"ה). מציעה הימורי ספורט קבועים ושבועיים, כולל טוטו.",
    rating: 3.5,
    bonus: "בונוס הצטרפות עד ₪200",
    features: [
      "חוקי לחלוטין בישראל",
      "אתר ואפליקציה בעברית",
      "הפקדה ומשיכה בשקלים",
      "תמיכה בעברית 24/7",
    ],
    pros: [
      "חוקי ומפוקח",
      "תמיכה מלאה בעברית",
      "הפקדות בשקלים",
    ],
    cons: [
      "אודס נמוכים יחסית",
      "מבחר ספורט מוגבל",
      "ממשק ישן",
    ],
    sports: ["כדורגל", "כדורסל", "טניס", "כדוריד"],
    minDeposit: "₪10",
    paymentMethods: ["כרטיס אשראי", "העברה בנקאית", "ארנק דיגיטלי"],
    license: "רישיון מל\"ה - ישראל",
    website: "https://www.winner.co.il",
    isAvailableInIsrael: true,
    legalStatus: "חוקי - הפלטפורמה היחידה המורשית בישראל",
    category: "legal",
  },
  {
    id: "bet365",
    name: "Bet365",
    nameHe: "בט365",
    logo: "365",
    description:
      "אחד מאתרי ההימורים הגדולים בעולם עם למעלה מ-90 מיליון לקוחות ב-150+ מדינות. מציע מגוון רחב של ספורט, שידורים חיים, ואודס תחרותיים. לא זמין רשמית בישראל.",
    rating: 4.8,
    bonus: "עד $100 בונוס הצטרפות",
    features: [
      "שידורי ספורט חיים",
      "Cash Out מוקדם",
      "אפליקציה מתקדמת",
      "הימורים בזמן אמת",
      "מגוון שווקים עצום",
    ],
    pros: [
      "אודס מעולים",
      "שידורים חיים",
      "ממשק מתקדם",
      "מגוון ספורט ענק",
    ],
    cons: [
      "לא זמין רשמית בישראל",
      "אין תמיכה בעברית",
      "דורש VPN",
    ],
    sports: ["כדורגל", "כדורסל", "טניס", "קריקט", "NFL", "MLB", "NHL", "MMA", "סנוקר", "גולף"],
    minDeposit: "$10",
    paymentMethods: ["Visa", "Mastercard", "PayPal", "Skrill", "Neteller", "העברה בנקאית"],
    license: "UK Gambling Commission, MGA Malta",
    website: "https://www.bet365.com",
    isAvailableInIsrael: false,
    legalStatus: "לא זמין רשמית - ישראל חסומה",
    affiliate: "https://www.bet365partners.com",
    category: "international",
  },
  {
    id: "stake",
    name: "Stake",
    nameHe: "סטייק",
    logo: "S",
    description:
      "פלטפורמת הימורים מבוססת קריפטו מהמובילות בעולם. מציעה הימורי ספורט וקזינו עם מטבעות דיגיטליים. בבעלות Easygo Gaming, רישיון קוראסאו.",
    rating: 4.5,
    bonus: "בונוס הפקדה ראשונה 200%",
    features: [
      "הימורים בקריפטו",
      "משיכות מיידיות",
      "קזינו מובנה",
      "VIP Club",
      "Stake Originals",
    ],
    pros: [
      "משיכות מהירות בקריפטו",
      "ממשק מודרני",
      "בונוסים נדיבים",
      "אנונימיות",
    ],
    cons: [
      "לא חוקי בישראל",
      "רק קריפטו",
      "אין תמיכה בעברית",
    ],
    sports: ["כדורגל", "כדורסל", "טניס", "MMA", "אי-ספורט", "NFL", "הוקי"],
    minDeposit: "$1 בקריפטו",
    paymentMethods: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin", "USDT", "XRP"],
    license: "Curacao eGaming License",
    website: "https://stake.com",
    isAvailableInIsrael: false,
    legalStatus: "ישראל חסומה - שימוש דרך VPN",
    category: "crypto",
  },
  {
    id: "pinnacle",
    name: "Pinnacle",
    nameHe: "פינאקל",
    logo: "P",
    description:
      "ידועה כבית ההימורים עם האודס הגבוהים ביותר בשוק. מכוונת למהמרים מקצועיים ואינה מגבילה מנצחים. אחת הפלטפורמות הבודדות שמקבלות שחקנים ישראלים.",
    rating: 4.6,
    bonus: "אין בונוס - אודס גבוהים במקום",
    features: [
      "האודס הגבוהים בשוק",
      "לא מגבילים מנצחים",
      "אי-ספורט מוביל",
      "ממשק מקצועי",
    ],
    pros: [
      "אודס הכי טובים",
      "מקבלים מהמרים מקצועיים",
      "מקבל שחקנים מישראל",
      "אי-ספורט מעולה",
    ],
    cons: [
      "אין בונוסים",
      "אין שידורים חיים",
      "ממשק פשוט",
    ],
    sports: ["כדורגל", "כדורסל", "טניס", "אי-ספורט", "הוקי", "בייסבול", "MMA"],
    minDeposit: "$10",
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "USDT"],
    license: "Curacao eGaming License",
    website: "https://www.pinnacle.com",
    isAvailableInIsrael: true,
    legalStatus: "מקבל שחקנים ישראלים",
    category: "international",
  },
  {
    id: "1xbet",
    name: "1xBet",
    nameHe: "וואן אקס בט",
    logo: "1X",
    description:
      "אחת מפלטפורמות ההימורים הגדולות בעולם עם נוכחות חזקה באסיה ובמזרח אירופה. מציעה מגוון עצום של שווקים, ספורט ואירועים מיוחדים.",
    rating: 4.2,
    bonus: "עד $130 בונוס הצטרפות",
    features: [
      "מגוון שווקים ענק",
      "שידורים חיים",
      "אפליקציה מתקדמת",
      "קזינו מובנה",
      "הימורים על אי-ספורט",
    ],
    pros: [
      "מגוון ספורט עצום",
      "בונוסים נדיבים",
      "אפשרויות תשלום מגוונות",
    ],
    cons: [
      "ממשק עמוס",
      "אימות ארוך",
      "תמיכה איטית",
    ],
    sports: ["כדורגל", "כדורסל", "טניס", "הוקי", "MMA", "בייסבול", "אי-ספורט", "פוליטיקה"],
    minDeposit: "$1",
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bitcoin", "WebMoney", "Perfect Money"],
    license: "Curacao eGaming License",
    website: "https://1xbet.com",
    isAvailableInIsrael: false,
    legalStatus: "זמינות משתנה - בדוק עדכונים",
    category: "international",
  },
  {
    id: "cloudbet",
    name: "Cloudbet",
    nameHe: "קלאודבט",
    logo: "CB",
    description:
      "פלטפורמת הימורי קריפטו ותיקה ואמינה. מציעה הימורי ספורט, קזינו חי, ומשחקי קריפטו. ידועה באודס תחרותיים ובמשיכות מהירות.",
    rating: 4.3,
    bonus: "עד 5 BTC בונוס הפקדה",
    features: [
      "הימורי קריפטו",
      "קזינו חי",
      "API פתוח למפתחים",
      "אודס תחרותיים",
    ],
    pros: [
      "אנונימיות גבוהה",
      "משיכות מהירות",
      "API חינמי",
      "אמינות גבוהה",
    ],
    cons: [
      "רק קריפטו",
      "ממשק פחות מתקדם",
    ],
    sports: ["כדורגל", "כדורסל", "טניס", "MMA", "אי-ספורט", "קריקט"],
    minDeposit: "0.001 BTC",
    paymentMethods: ["Bitcoin", "Ethereum", "USDT", "USDC", "Litecoin", "Dogecoin"],
    license: "Curacao eGaming License, Montenegro",
    website: "https://www.cloudbet.com",
    isAvailableInIsrael: false,
    legalStatus: "בדוק זמינות עדכנית",
    affiliate: "https://www.cloudbet.com/api/",
    category: "crypto",
  },
];

export const agentCategories = {
  legal: { label: "חוקי בישראל", color: "#10b981" },
  international: { label: "בינלאומי", color: "#3b82f6" },
  crypto: { label: "קריפטו", color: "#8b5cf6" },
};
