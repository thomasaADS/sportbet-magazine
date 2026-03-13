"use client";

import { useState } from "react";

interface AgentContactFormProps {
  agentName: string;
  agentId: string;
}

export default function AgentContactForm({
  agentName,
  agentId,
}: AgentContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log("Contact form submitted:", { agentId, ...formData });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      <h4 className="font-bold mb-3">
        שלח הודעה ל{agentName} / בקש מידע נוסף
      </h4>
      {submitted ? (
        <div className="p-4 rounded-lg bg-accent-green/10 border border-accent-green/30 text-accent-green text-sm text-center">
          ההודעה נשלחה בהצלחה! ניצור איתך קשר בהקדם.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="שם מלא"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="px-4 py-3 rounded-lg bg-background border border-card-border focus:border-accent outline-none text-sm transition-colors"
          />
          <input
            type="email"
            placeholder="אימייל"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="px-4 py-3 rounded-lg bg-background border border-card-border focus:border-accent outline-none text-sm transition-colors"
          />
          <input
            type="tel"
            placeholder="טלפון"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="px-4 py-3 rounded-lg bg-background border border-card-border focus:border-accent outline-none text-sm transition-colors"
          />
          <input
            type="text"
            placeholder="נושא ההודעה"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="px-4 py-3 rounded-lg bg-background border border-card-border focus:border-accent outline-none text-sm transition-colors"
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-bold text-black transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
              }}
            >
              שלח הודעה
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
