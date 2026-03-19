"use client";

import { useState, useEffect } from "react";

const agents = [
  { name: "דודו", letter: "ד", phone: "052-359-3540", wa: "972523593540", color: "bg-amber-500" },
  { name: "סול", letter: "ס", phone: "052-421-4123", wa: "972524214123", color: "bg-blue-500" },
  { name: "מיכאל", letter: "מ", phone: "053-480-8349", wa: "972534808349", color: "bg-purple-500" },
];

export default function FloatingAgentsBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [closing, setClosing] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setClosing(true);
    setTimeout(() => setDismissed(true), 400);
  };

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:max-w-sm transition-all duration-500 ease-out ${
        visible && !closing
          ? "opacity-100 translate-y-0"
          : closing
          ? "opacity-0 translate-y-4 scale-95"
          : "opacity-0 translate-y-12"
      }`}
    >
      <div className="bg-white rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-gray-200 overflow-hidden">
        <div className="h-1 bg-gradient-to-l from-emerald-500 via-emerald-400 to-teal-500" />

        <button
          onClick={handleDismiss}
          className="absolute top-3 left-3 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 z-10"
          aria-label="סגור"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M1 1l8 8M9 1l-8 8" />
          </svg>
        </button>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center gap-1.5 text-emerald-600 text-[10px] font-bold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              3 סוכנים זמינים
            </span>
          </div>

          <h3 className="text-sm font-black text-gray-900 mb-0.5">
            מחפש סוכן ספורט אמין?
          </h3>
          <p className="text-[11px] text-gray-500 mb-3">
            בחרו סוכן ודברו איתו ישירות בוואטסאפ
          </p>

          {/* Agents row - always visible, clickable to WhatsApp */}
          <div
            className={`grid grid-cols-3 gap-2 transition-all duration-300 ${
              expanded ? "mb-0" : "mb-0"
            }`}
          >
            {agents.map((agent) => (
              <a
                key={agent.wa}
                href={`https://wa.me/${agent.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all group cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-full ${agent.color} flex items-center justify-center text-sm font-black text-white group-hover:scale-110 transition-transform`}>
                  {agent.letter}
                </div>
                <span className="text-xs font-bold text-gray-800">{agent.name}</span>
                <span className="text-[9px] text-gray-400">{agent.phone}</span>
                <span
                  className="flex items-center gap-1 px-2 py-1 rounded text-white text-[10px] font-bold group-hover:opacity-90 transition-opacity"
                  style={{ background: "#25D366" }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  וואטסאפ
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
