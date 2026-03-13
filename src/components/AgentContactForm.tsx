"use client";

import { useState } from "react";

interface AgentContactFormProps {
  agentName: string;
  agentId: string;
}

export default function AgentContactForm({ agentName, agentId }: AgentContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", { agentId, ...formData });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h4 className="text-sm font-bold mb-1">שאלות על {agentName}?</h4>
      <p className="text-xs text-ink-muted mb-4">
        שלחו לנו שאלה ונחזור אליכם עם מידע מפורט
      </p>
      {submitted ? (
        <div className="p-4 bg-green/10 border border-green/20 rounded-sm text-green text-sm text-center font-medium">
          ההודעה נשלחה! ניצור איתך קשר בהקדם.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="שם"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="px-3 py-2.5 bg-bg-paper border border-border rounded-sm text-sm outline-none focus:border-ink transition-colors flex-1"
          />
          <input
            type="email"
            placeholder="אימייל"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="px-3 py-2.5 bg-bg-paper border border-border rounded-sm text-sm outline-none focus:border-ink transition-colors flex-1"
          />
          <input
            type="text"
            placeholder="השאלה שלך"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="px-3 py-2.5 bg-bg-paper border border-border rounded-sm text-sm outline-none focus:border-ink transition-colors flex-1"
          />
          <button
            type="submit"
            className="px-6 py-2.5 bg-ink text-bg-paper font-bold text-sm hover:bg-red transition-colors rounded-sm flex-shrink-0"
          >
            שלח
          </button>
        </form>
      )}
    </div>
  );
}
