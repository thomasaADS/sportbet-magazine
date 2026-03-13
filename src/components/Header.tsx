"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "ראשי" },
  { href: "/news", label: "חדשות" },
  { href: "/agents", label: "מדריך סוכנים" },
  { href: "/live-scores", label: "תוצאות" },
  { href: "/odds", label: "אודס" },
  { href: "/poker", label: "פוקר וקזינו" },
  { href: "/community", label: "קהילה" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const today = new Date().toLocaleDateString("he-IL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-bg-paper">
      {/* Masthead */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-6 md:py-8 text-center relative">
          {/* Date - Left */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-[11px] text-ink-muted">
            {today}
          </div>

          {/* Logo */}
          <Link href="/" className="inline-block">
            <div className="mb-1">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-ink font-editorial">
                BetZone
              </h1>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="block h-px bg-ink-faint flex-1 max-w-[60px]" />
              <span className="text-[10px] text-ink-muted tracking-[0.35em] font-semibold uppercase">
                מגזין חדשות הימורי ספורט
              </span>
              <span className="block h-px bg-ink-faint flex-1 max-w-[60px]" />
            </div>
          </Link>

          {/* Edition label - Right */}
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-[10px] text-ink-muted text-left">
            <div className="font-bold">גיליון דיגיטלי</div>
            <div>מהדורה יומית</div>
          </div>
        </div>
      </div>

      {/* Nav rule */}
      <hr className="rule-thick mx-4 md:mx-auto max-w-7xl" />

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center w-full justify-center">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-3 text-[13px] font-bold text-ink-light hover:text-red transition-colors tracking-wide ${
                  i < navItems.length - 1 ? "border-l border-border-light" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden py-3 w-full flex items-center justify-between text-ink"
            aria-label="תפריט"
          >
            <span className="text-sm font-bold">תפריט</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-3 border-t border-border">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-bold text-ink-light hover:text-red border-b border-border-light transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
      <hr className="rule-thin mx-4 md:mx-auto max-w-7xl" />
    </header>
  );
}
