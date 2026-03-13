import type { Metadata } from "next";
import { bettingAgents } from "@/lib/agents-data";
import AgentContactForm from "@/components/AgentContactForm";

export const metadata: Metadata = {
  title: "מדריך סוכנים מורשים | BetZone IL - סקירות ומידע",
  description:
    "מדריך מקיף של סוכני הימורי ספורט - סקירות, דירוגים, סטטוס רישוי ומידע. Winner, Bet365, Pinnacle, Stake ועוד. מידע בלבד, לא הימורים.",
  keywords: ["סוכני הימורים", "מדריך סוכנים", "winner", "bet365", "סקירות"],
};

export default function AgentsPage() {
  const legalAgents = bettingAgents.filter((a) => a.category === "legal");
  const internationalAgents = bettingAgents.filter((a) => a.category === "international");
  const cryptoAgents = bettingAgents.filter((a) => a.category === "crypto");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <hr className="rule-thick mb-4" />
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="headline-hero mb-2">מדריך סוכנים</h1>
            <p className="text-ink-muted text-sm max-w-xl leading-relaxed">
              מדריך מקיף של פלטפורמות הימורי הספורט המרכזיות. המידע נועד לסקירה
              ולידיעה בלבד - אנו לא מספקים שירותי הימורים ולא ממליצים על הימורים.
            </p>
          </div>
          <div className="bg-bg-section border border-border rounded-sm p-4 max-w-xs">
            <p className="text-xs text-ink-muted leading-relaxed">
              <strong className="text-ink">שימו לב:</strong> בישראל, הפלטפורמה
              היחידה המורשית חוקית להימורי ספורט היא Winner.co.il של המועצה להסדר
              ההימורים בספורט.
            </p>
          </div>
        </div>
        <hr className="rule-thin mt-6" />
      </div>

      {/* === LICENSED IN ISRAEL === */}
      {legalAgents.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-flag bg-green text-white">מורשה בישראל</span>
            <hr className="rule-thin flex-1" />
          </div>
          {legalAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </section>
      )}

      {/* === INTERNATIONAL === */}
      {internationalAgents.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-flag bg-blue text-white">בינלאומי</span>
            <hr className="rule-thin flex-1" />
          </div>
          <div className="space-y-6">
            {internationalAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>
      )}

      {/* === CRYPTO === */}
      {cryptoAgents.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-flag" style={{ background: "#6a1b9a" }}>קריפטו</span>
            <hr className="rule-thin flex-1" />
          </div>
          <div className="space-y-6">
            {cryptoAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function AgentCard({ agent }: { agent: (typeof bettingAgents)[0] }) {
  const statusBadge = agent.category === "legal" ? "badge-licensed"
    : agent.category === "crypto" ? "badge-crypto"
    : "badge-international";
  const statusLabel = agent.category === "legal" ? "מורשה"
    : agent.category === "crypto" ? "קריפטו"
    : "בינלאומי";

  return (
    <div
      id={agent.id}
      className="bg-bg-paper border border-border rounded-sm overflow-hidden mb-6"
    >
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-border-light">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Logo + basic info */}
          <div className="flex items-start gap-4 flex-1">
            <div className="w-16 h-16 rounded bg-bg-section flex items-center justify-center font-black text-xl text-ink-light border border-border flex-shrink-0">
              {agent.logo}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h2 className="headline-primary">{agent.nameHe}</h2>
                <span className="text-ink-muted text-sm">({agent.name})</span>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${statusBadge}`}>
                  {statusLabel}
                </span>
              </div>
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-sm ${i < Math.floor(agent.rating) ? "text-gold" : "text-border"}`}>
                    ★
                  </span>
                ))}
                <span className="text-xs text-ink-muted mr-1">{agent.rating}/5</span>
              </div>
              <p className="text-ink-light text-sm leading-relaxed">
                {agent.description}
              </p>
            </div>
          </div>

          {/* Quick info boxes */}
          <div className="flex flex-col gap-2 md:w-48 flex-shrink-0">
            <div className="p-3 bg-bg-section rounded-sm border border-border-light">
              <div className="text-[10px] text-ink-muted font-bold uppercase tracking-wider mb-0.5">הפקדה מינ׳</div>
              <div className="text-sm font-bold">{agent.minDeposit}</div>
            </div>
            <div className="p-3 bg-bg-section rounded-sm border border-border-light">
              <div className="text-[10px] text-ink-muted font-bold uppercase tracking-wider mb-0.5">רישיון</div>
              <div className="text-xs font-bold">{agent.license}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Details grid */}
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Features */}
          <div>
            <h4 className="section-title mb-3">תכונות</h4>
            <ul className="space-y-2">
              {agent.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-ink-light">
                  <span className="text-gold mt-0.5">◆</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Pros */}
          <div>
            <h4 className="section-title mb-3 text-green">יתרונות</h4>
            <ul className="space-y-2">
              {agent.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-ink-light">
                  <span className="text-green mt-0.5">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div>
            <h4 className="section-title mb-3 text-red">חסרונות</h4>
            <ul className="space-y-2">
              {agent.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-ink-light">
                  <span className="text-red mt-0.5">✗</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tags row */}
        <div className="mt-6 pt-6 border-t border-border-light">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] font-bold text-ink-muted uppercase tracking-wider">ספורט</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {agent.sports.map((s, i) => (
                  <span key={i} className="px-2.5 py-1 text-[10px] bg-bg-section border border-border-light rounded-sm font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-ink-muted uppercase tracking-wider">תשלום</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {agent.paymentMethods.map((pm, i) => (
                  <span key={i} className="px-2.5 py-1 text-[10px] bg-bg-section border border-border-light rounded-sm font-medium">
                    {pm}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal status */}
        <div className={`mt-6 p-4 rounded-sm border ${
          agent.isAvailableInIsrael
            ? "bg-green/5 border-green/20"
            : "bg-red/5 border-red/20"
        }`}>
          <div className="flex items-center gap-2 text-sm">
            <span className={agent.isAvailableInIsrael ? "text-green" : "text-red"}>
              {agent.isAvailableInIsrael ? "✓" : "⚠"}
            </span>
            <strong>סטטוס בישראל:</strong>
            <span className="text-ink-light">{agent.legalStatus}</span>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="p-6 md:p-8 bg-bg-section border-t border-border-light">
        <AgentContactForm agentName={agent.nameHe} agentId={agent.id} />
      </div>
    </div>
  );
}
