"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface Props {
  variant?: "inline" | "full";
  headline?: string;
  sub?: string;
}

export default function LeadForm({ variant = "inline", headline, sub }: Props) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[#00d4aa]/10 flex items-center justify-center mb-4 border border-[#00d4aa]/30">
          <CheckCircle size={32} className="text-[#00d4aa]" />
        </div>
        <h3 className="font-display font-bold text-2xl text-white mb-2">Message received!</h3>
        <p className="text-[#8ba3c7]">We'll be in touch within 24 hours. Looking forward to connecting.</p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[#0d1a33] border border-[rgba(77,184,255,0.15)] text-white placeholder-[#8ba3c7] text-sm focus:outline-none focus:border-[#00d4aa] focus:ring-1 focus:ring-[#00d4aa] transition-all duration-200";

  return (
    <div>
      {headline && (
        <div className="mb-8">
          <h3 className="font-display font-bold text-2xl text-white mb-2">{headline}</h3>
          {sub && <p className="text-[#8ba3c7]">{sub}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={variant === "full" ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : ""}>
          <div>
            <label className="block text-xs font-medium text-[#8ba3c7] mb-2 font-mono uppercase tracking-wider">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Alex Johnson"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#8ba3c7] mb-2 font-mono uppercase tracking-wider">
              Work Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="alex@company.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#8ba3c7] mb-2 font-mono uppercase tracking-wider">
            Company
          </label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={inputClass}
          />
        </div>

        {variant === "full" && (
          <div>
            <label className="block text-xs font-medium text-[#8ba3c7] mb-2 font-mono uppercase tracking-wider">
              How can we help?
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your automation needs..."
              className={inputClass + " resize-none"}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-[#0b1426] text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            background: "linear-gradient(135deg, #00d4aa, #4db8ff)",
            boxShadow: "0 0 25px rgba(0,212,170,0.3)",
          }}
        >
          {status === "loading" ? (
            <>
              <span className="w-4 h-4 border-2 border-[#0b1426]/30 border-t-[#0b1426] rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
