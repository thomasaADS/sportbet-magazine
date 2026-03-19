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
  { id: 1, title: "Top 10 משחקי NBA - 18 מרץ 2026", duration: "10:02", category: "NBA", views: "89.4K", videoId: "2ZoslDRitmI", thumbnail: "https://img.youtube.com/vi/2ZoslDRitmI/hqdefault.jpg" },
  { id: 2, title: "סיכום לילה NBA - 18 מרץ 2026", duration: "9:55", category: "NBA", views: "45.2K", videoId: "qck4xH0MlgM", thumbnail: "https://img.youtube.com/vi/qck4xH0MlgM/hqdefault.jpg" },
  { id: 3, title: "לוקה דונצ'יץ' לא מפסיק! רצף ניצחונות ללייקרס", duration: "8:44", category: "NBA", views: "123.1K", videoId: "IGQipV7gI9w", thumbnail: "https://img.youtube.com/vi/IGQipV7gI9w/hqdefault.jpg" },
  { id: 4, title: "הדאנקים הכי חזקים של עונת 2025/26 NBA", duration: "12:20", category: "NBA", views: "67.8K", videoId: "rkpYht67__s", thumbnail: "https://img.youtube.com/vi/rkpYht67__s/hqdefault.jpg" },
  { id: 5, title: "שערים מטורפים בפרמייר ליג - שחקני מרוקו", duration: "6:15", category: "כדורגל", views: "38.9K", videoId: "s1hGtcm1FDg", thumbnail: "https://img.youtube.com/vi/s1hGtcm1FDg/hqdefault.jpg" },
  { id: 6, title: "5 רמות, 5 שערים - כמה הייתם קולעים?", duration: "4:32", category: "כדורגל", views: "52.3K", videoId: "rcsyu4CKWRk", thumbnail: "https://img.youtube.com/vi/rcsyu4CKWRk/hqdefault.jpg" },
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
