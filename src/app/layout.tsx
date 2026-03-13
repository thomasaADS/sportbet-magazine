import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";

export const metadata: Metadata = {
  title: "BetZone IL - מגזין הימורי ספורט | חדשות, טיפים וסקירות",
  description:
    "המגזין המוביל בישראל להימורי ספורט - חדשות עדכניות, סקירות סוכנים, תוצאות ליגות, טיפים מקצועיים, פוקר, קזינו ועוד. כל מה שצריך לדעת על הימורי ספורט בישראל ובעולם.",
  keywords: [
    "הימורי ספורט",
    "הימורים",
    "ספורט",
    "פוקר",
    "קזינו",
    "bet365",
    "הימורי ספורט ישראל",
    "טוטו",
    "winner",
    "ניחושים",
    "תוצאות ספורט",
    "ליגת העל",
    "פרמייר ליג",
    "צ'מפיונס ליג",
    "NBA",
    "טיפים הימורים",
    "סוכני הימורים",
  ],
  openGraph: {
    title: "BetZone IL - מגזין הימורי ספורט",
    description:
      "המגזין המוביל בישראל להימורי ספורט - חדשות, סקירות, טיפים ותוצאות",
    type: "website",
    locale: "he_IL",
    siteName: "BetZone IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "BetZone IL - מגזין הימורי ספורט",
    description:
      "המגזין המוביל בישראל להימורי ספורט - חדשות, סקירות, טיפים ותוצאות",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Heebo', sans-serif" }}>
        <NewsTicker />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
