"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "ראשי" },
  { href: "/news", label: "חדשות" },
  { href: "/agents", label: "סוכנים" },
  { href: "/live-scores", label: "תוצאות לייב" },
  { href: "/odds", label: "אודס" },
  { href: "/poker", label: "פוקר וקזינו" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border" style={{ background: 'rgba(10, 15, 26, 0.95)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-xl text-black" style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}>
              BZ
            </div>
            <div>
              <h1 className="text-xl font-black gradient-text leading-tight">
                BetZone IL
              </h1>
              <p className="text-[10px] text-text-muted leading-tight">
                מגזין הימורי ספורט
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-accent hover:bg-white/5 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/agents"
              className="px-5 py-2 rounded-lg text-sm font-bold text-black transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
            >
              התחל להמר
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            aria-label="תפריט"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-card-border mt-2 pt-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-text-muted hover:text-accent hover:bg-white/5 transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/agents"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-5 py-3 rounded-lg text-sm font-bold text-black text-center"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
              >
                התחל להמר
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
