import type { Metadata } from "next";
import { bettingAgents, agentCategories } from "@/lib/agents-data";
import AgentContactForm from "@/components/AgentContactForm";

export const metadata: Metadata = {
  title: "סוכני הימורים מומלצים - BetZone IL | השוואת סוכנים 2026",
  description:
    "השוואת סוכני הימורי ספורט מומלצים בישראל ובעולם. Bet365, Winner, Stake, Pinnacle ועוד. אודס, בונוסים, סקירות מקיפות וקישורי הרשמה.",
  keywords: [
    "סוכני הימורים",
    "bet365",
    "winner",
    "stake",
    "pinnacle",
    "הימורי ספורט",
    "בונוסים",
    "הרשמה",
  ],
};

export default function AgentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-3">
          <span className="gradient-text">סוכני הימורים מומלצים</span>
        </h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          השוואה מקיפה של סוכני ההימורים המובילים - אודס, בונוסים, תכונות, יתרונות וחסרונות.
          בחרו את הסוכן המתאים לכם.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.entries(agentCategories).map(([key, cat]) => (
          <span
            key={key}
            className="px-4 py-2 rounded-full text-sm font-bold border"
            style={{
              borderColor: cat.color,
              color: cat.color,
              backgroundColor: `${cat.color}15`,
            }}
          >
            {cat.label}
          </span>
        ))}
      </div>

      {/* Agents Grid */}
      <div className="space-y-8">
        {bettingAgents.map((agent) => (
          <div
            key={agent.id}
            id={agent.id}
            className="rounded-2xl bg-card-bg border border-card-border overflow-hidden card-hover"
          >
            {/* Agent Header */}
            <div className="p-6 md:p-8 border-b border-card-border">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl text-white flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                  }}
                >
                  {agent.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-2xl font-black">{agent.nameHe}</h2>
                    <span className="text-lg text-text-muted">
                      ({agent.name})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < Math.floor(agent.rating)
                              ? "text-accent"
                              : "text-card-border"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-accent font-bold text-lg">
                      {agent.rating}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold mr-2"
                      style={{
                        backgroundColor:
                          agentCategories[agent.category]?.color + "20",
                        color: agentCategories[agent.category]?.color,
                      }}
                    >
                      {agentCategories[agent.category]?.label}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {agent.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3 flex-shrink-0">
                  <a
                    href={agent.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-lg text-center font-bold text-black transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #f59e0b, #d97706)",
                    }}
                  >
                    הירשם עכשיו
                  </a>
                  <a
                    href={agent.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-lg text-center font-bold border border-card-border hover:border-accent transition-all"
                  >
                    בקר באתר
                  </a>
                </div>
              </div>
            </div>

            {/* Agent Details */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bonus */}
                <div
                  className="p-4 rounded-xl"
                  style={{
                    background: "rgba(245, 158, 11, 0.08)",
                    border: "1px solid rgba(245, 158, 11, 0.2)",
                  }}
                >
                  <h4 className="text-accent font-bold mb-2">בונוס הצטרפות</h4>
                  <p className="text-lg font-bold">{agent.bonus}</p>
                </div>

                {/* Min Deposit */}
                <div className="p-4 rounded-xl bg-white/5 border border-card-border">
                  <h4 className="text-accent-blue font-bold mb-2">
                    הפקדה מינימלית
                  </h4>
                  <p className="text-lg font-bold">{agent.minDeposit}</p>
                </div>

                {/* License */}
                <div className="p-4 rounded-xl bg-white/5 border border-card-border">
                  <h4 className="text-accent-green font-bold mb-2">רישיון</h4>
                  <p className="text-sm font-bold">{agent.license}</p>
                </div>
              </div>

              {/* Features, Pros, Cons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <h4 className="font-bold mb-3 text-accent">תכונות</h4>
                  <div className="space-y-2">
                    {agent.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <span className="text-accent">◆</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3 text-accent-green">יתרונות</h4>
                  <div className="space-y-2">
                    {agent.pros.map((p, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <span className="text-accent-green">✓</span>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3 text-accent-red">חסרונות</h4>
                  <div className="space-y-2">
                    {agent.cons.map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <span className="text-accent-red">✗</span>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sports & Payment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-bold mb-3">ספורט זמין</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.sports.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-white/5 border border-card-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3">אמצעי תשלום</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.paymentMethods.map((pm, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-white/5 border border-card-border"
                      >
                        {pm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legal Status */}
              <div className="mt-6 p-4 rounded-xl" style={{
                backgroundColor: agent.isAvailableInIsrael
                  ? "rgba(16, 185, 129, 0.08)"
                  : "rgba(239, 68, 68, 0.08)",
                border: `1px solid ${agent.isAvailableInIsrael ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)"}`,
              }}>
                <div className="flex items-center gap-2">
                  <span className={agent.isAvailableInIsrael ? "text-accent-green" : "text-accent-red"}>
                    {agent.isAvailableInIsrael ? "✓" : "⚠"}
                  </span>
                  <span className="font-bold text-sm">סטטוס בישראל:</span>
                  <span className="text-sm text-text-muted">{agent.legalStatus}</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 md:p-8 border-t border-card-border">
              <AgentContactForm agentName={agent.nameHe} agentId={agent.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
