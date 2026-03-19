import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreakingBar from "@/components/BreakingBar";
import FloatingAgentsBanner from "@/components/FloatingAgentsBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://hazira.vercel.app"),
  title: {
    default: "הזירה | מגזין חדשות ספורט והימורים",
    template: "%s | הזירה",
  },
  description:
    "מגזין החדשות המוביל בישראל לעולם הימורי הספורט. סקירות סוכנים מורשים, חדשות ליגות, ניתוחי מומחים, פוקר, קזינו ועוד. מידע ותוכן - לא הימורים.",
  keywords: [
    "חדשות הימורי ספורט",
    "מגזין ספורט",
    "סוכני הימורים ישראל",
    "ליגת העל",
    "פרמייר ליג",
    "ליגת האלופות",
    "NBA",
    "פוקר",
    "קזינו",
    "Winner",
    "Bet365",
    "ניתוחי ספורט",
    "סוכן הימורים",
    "טיפים ספורט",
    "תוצאות ספורט",
  ],
  openGraph: {
    title: "הזירה | מגזין חדשות ספורט והימורים",
    description:
      "מגזין החדשות המוביל בישראל לעולם הימורי הספורט. סקירות, חדשות, ניתוחים ומידע.",
    type: "website",
    locale: "he_IL",
    siteName: "הזירה",
    url: "https://hazira.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "הזירה | מגזין חדשות ספורט והימורים",
    description: "חדשות, סקירות סוכנים, ניתוחי מומחים - הכל במקום אחד",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://hazira.vercel.app",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&family=Frank+Ruhl+Libre:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "הזירה",
              alternateName: "HaZira Sports Magazine",
              url: "https://hazira.vercel.app",
              description: "מגזין חדשות ספורט והימורים מוביל בישראל",
              inLanguage: "he-IL",
              publisher: {
                "@type": "Organization",
                name: "הזירה",
                url: "https://hazira.vercel.app",
                logo: {
                  "@type": "ImageObject",
                  url: "https://hazira.vercel.app/logo.svg",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://hazira.vercel.app/news?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "'Heebo', sans-serif" }}>
        <BreakingBar />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingAgentsBanner />
      </body>
    </html>
  );
}
