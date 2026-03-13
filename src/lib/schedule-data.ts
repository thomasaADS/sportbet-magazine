export interface ScheduleEvent {
  id: number;
  time: string;
  day: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  channel?: string;
  highlight?: boolean;
}

export const weeklySchedule: ScheduleEvent[] = [
  { id: 1, time: "20:00", day: "היום", homeTeam: "מכבי ת\"א", awayTeam: "הפועל ב\"ש", league: "ליגת העל", channel: "ספורט 1", highlight: true },
  { id: 2, time: "20:30", day: "היום", homeTeam: "בית\"ר ירושלים", awayTeam: "בני סכנין", league: "ליגת העל", channel: "ספורט 2" },
  { id: 3, time: "21:45", day: "היום", homeTeam: "ריאל מדריד", awayTeam: "באיירן מינכן", league: "ליגת האלופות", channel: "ספורט 5", highlight: true },
  { id: 4, time: "21:45", day: "היום", homeTeam: "ברצלונה", awayTeam: "אינטר מילאן", league: "ליגת האלופות", channel: "ספורט 5+" },
  { id: 5, time: "03:00", day: "לילה", homeTeam: "לייקרס", awayTeam: "סלטיקס", league: "NBA", channel: "ספורט 5" },
  { id: 6, time: "17:30", day: "מחר", homeTeam: "ארסנל", awayTeam: "ברייטון", league: "פרמייר ליג", channel: "ספורט 1" },
  { id: 7, time: "20:00", day: "מחר", homeTeam: "ליברפול", awayTeam: "צ'לסי", league: "פרמייר ליג", channel: "ספורט 2", highlight: true },
  { id: 8, time: "22:00", day: "מחר", homeTeam: "ברצלונה", awayTeam: "אתלטיקו מדריד", league: "לה ליגה", channel: "ספורט 3" },
  { id: 9, time: "14:30", day: "שבת", homeTeam: "מנצ'סטר סיטי", awayTeam: "טוטנהאם", league: "פרמייר ליג", channel: "ספורט 1", highlight: true },
  { id: 10, time: "17:00", day: "שבת", homeTeam: "באיירן מינכן", awayTeam: "דורטמונד", league: "בונדסליגה", channel: "ספורט 3" },
  { id: 11, time: "21:00", day: "שבת", homeTeam: "יובנטוס", awayTeam: "אינטר מילאן", league: "סריה A", channel: "ספורט 2" },
  { id: 12, time: "20:30", day: "ראשון", homeTeam: "מכבי חיפה", awayTeam: "הפועל ת\"א", league: "ליגת העל", channel: "ספורט 1" },
];

export const videoHighlights = [
  { id: 1, title: "תקציר: מכבי ת\"א - הפועל ב\"ש 3-0", duration: "4:32", category: "ליגת העל", views: "12.4K", thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80" },
  { id: 2, title: "כל השערים: ריאל מדריד - באיירן מינכן", duration: "6:15", category: "ליגת האלופות", views: "45.2K", thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80" },
  { id: 3, title: "הייליטס NBA: לייקרס vs סלטיקס", duration: "8:44", category: "NBA", views: "23.1K", thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80" },
  { id: 4, title: "ניתוח טקטי: ארסנל של ארטטה", duration: "12:20", category: "ניתוח", views: "8.7K", thumbnail: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80" },
  { id: 5, title: "UFC 320: קדימון מלא + ניתוח קרבות", duration: "15:03", category: "MMA", views: "18.9K", thumbnail: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80" },
  { id: 6, title: "שער העונה? מבט מקרוב על שער לאמין יאמאל", duration: "2:15", category: "כדורגל", views: "67.3K", thumbnail: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&q=80" },
];

export const trendingTopics = [
  { topic: "מכבי תל אביב", count: "2.4K דיונים" },
  { topic: "ליגת האלופות", count: "5.1K דיונים" },
  { topic: "NBA פלייאוף", count: "1.8K דיונים" },
  { topic: "WSOP אירופה", count: "890 דיונים" },
  { topic: "ארסנל אליפות", count: "3.2K דיונים" },
  { topic: "UFC 320", count: "1.1K דיונים" },
  { topic: "Winner עדכון", count: "650 דיונים" },
  { topic: "קריפטו הימורים", count: "420 דיונים" },
];

export const pollData = {
  question: "מי תזכה באליפות ליגת האלופות 2026?",
  options: [
    { text: "ריאל מדריד", votes: 34 },
    { text: "מנצ'סטר סיטי", votes: 28 },
    { text: "ברצלונה", votes: 19 },
    { text: "באיירן מינכן", votes: 12 },
    { text: "אחרת", votes: 7 },
  ],
  totalVotes: 4280,
};
