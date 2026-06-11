"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, NovaTech Solutions",
    avatar: "SM",
    quote:
      "Northwyn transformed our entire sales pipeline. The AI lead scoring system they built cut our sales cycle by 40% and doubled our close rate. This wasn't just automation — it was a complete strategic upgrade.",
    metric: "40% faster sales cycle",
    color: "#00d4aa",
  },
  {
    name: "James Okonkwo",
    role: "COO, Meridian Logistics",
    avatar: "JO",
    quote:
      "We were drowning in manual data entry and reconciliation tasks. Northwyn's automation stack eliminated 3 full-time equivalent roles of repetitive work and let our team focus on growth. The ROI was clear within the first month.",
    metric: "3 FTE hours saved daily",
    color: "#4db8ff",
  },
  {
    name: "Priya Sharma",
    role: "Founder, Luma Health",
    avatar: "PS",
    quote:
      "Their custom AI agent for patient onboarding is genuinely remarkable. Response times went from hours to seconds, patient satisfaction scores are at an all-time high, and my team isn't buried in repetitive queries anymore.",
    metric: "98% patient satisfaction",
    color: "#3ee88a",
  },
  {
    name: "Marcus Chen",
    role: "VP Operations, Finova Capital",
    avatar: "MC",
    quote:
      "Northwyn built us a regulatory compliance monitoring system that would have taken our internal team 18 months. They delivered in 8 weeks. The AI catches issues we were missing manually. Absolutely essential.",
    metric: "8-week delivery, 0 compliance gaps",
    color: "#00d4aa",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080e1c]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#00d4aa] font-mono text-sm font-medium tracking-widest uppercase mb-4">
            Client Results
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Trusted by teams that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00d4aa, #4db8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              demand results
            </span>
          </h2>
          <p className="text-[#8ba3c7] text-lg max-w-2xl mx-auto">
            Our clients don't just automate — they gain an operational edge.
          </p>
        </AnimatedSection>

        {/* Main testimonial */}
        <AnimatedSection>
          <div
            className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: "rgba(17,30,58,0.8)",
              border: "1px solid rgba(77,184,255,0.15)",
            }}
          >
            {/* Quote mark */}
            <div
              className="absolute top-8 right-10 font-display text-9xl font-bold leading-none opacity-10 pointer-events-none"
              style={{ color: t.color }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={t.color} color={t.color} />
              ))}
            </div>

            <p className="text-white text-lg md:text-xl leading-relaxed mb-8 relative z-10 font-display font-light">
              "{t.quote}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-sm text-[#0b1426]"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #4db8ff)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-white">{t.name}</p>
                  <p className="text-[#8ba3c7] text-sm">{t.role}</p>
                </div>
              </div>

              <div
                className="px-4 py-2 rounded-lg font-mono text-sm font-medium"
                style={{
                  background: `rgba(${t.color === "#00d4aa" ? "0,212,170" : t.color === "#4db8ff" ? "77,184,255" : "62,232,138"},0.1)`,
                  color: t.color,
                  border: `1px solid ${t.color}30`,
                }}
              >
                ↑ {t.metric}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[rgba(77,184,255,0.2)] flex items-center justify-center text-[#8ba3c7] hover:text-white hover:border-[#4db8ff] transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-[#00d4aa]" : "w-2 bg-[#8ba3c7]/30 hover:bg-[#8ba3c7]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[rgba(77,184,255,0.2)] flex items-center justify-center text-[#8ba3c7] hover:text-white hover:border-[#4db8ff] transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
