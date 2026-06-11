import { Mail, Phone, MapPin, Calendar, Clock, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import LeadForm from "@/components/LeadForm";

const channels = [
  { icon: Mail, label: "Email Us", value: "hello@northwyn.ai", sub: "Response within 24 hours", color: "#00d4aa" },
  { icon: Phone, label: "Call Us", value: "+1 (800) 555-0199", sub: "Mon–Fri, 9am–6pm PST", color: "#4db8ff" },
  { icon: MapPin, label: "Headquarters", value: "San Francisco, CA", sub: "& fully remote team", color: "#3ee88a" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0b1426]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(77,184,255,0.2) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[#00d4aa] font-mono text-sm font-medium tracking-widest uppercase mb-4">Let's Connect</p>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Ready to{" "}
              <span style={{ background: "linear-gradient(135deg, #00d4aa, #4db8ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                build something
              </span>
              {" "}remarkable?
            </h1>
            <p className="text-[#8ba3c7] text-xl max-w-2xl mx-auto">
              Tell us where your biggest bottlenecks are. We'll tell you exactly how to automate your way out of them.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-28 bg-[#0b1426]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {channels.map((ch, i) => (
              <AnimatedSection key={ch.label} delay={i * 80}>
                <div className="rounded-2xl p-6 flex items-start gap-5" style={{ background: "rgba(17,30,58,0.6)", border: "1px solid rgba(77,184,255,0.1)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${ch.color}15`, border: `1px solid ${ch.color}30` }}>
                    <ch.icon size={20} style={{ color: ch.color }} />
                  </div>
                  <div>
                    <p className="text-[#8ba3c7] text-xs font-mono uppercase tracking-wider mb-1">{ch.label}</p>
                    <p className="font-display font-semibold text-white text-sm mb-1">{ch.value}</p>
                    <p className="text-[#8ba3c7] text-xs">{ch.sub}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3" direction="left">
              <div className="rounded-2xl p-8 md:p-10" style={{ background: "rgba(17,30,58,0.7)", border: "1px solid rgba(77,184,255,0.12)" }}>
                <h2 className="font-display font-bold text-2xl text-white mb-2">Send us a message</h2>
                <p className="text-[#8ba3c7] text-sm mb-8">We read every message and respond personally — usually within a few hours.</p>
                <LeadForm variant="full" />
              </div>
            </AnimatedSection>

            {/* Calendly + FAQ */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="right">
                <div className="rounded-2xl p-8" style={{ background: "rgba(17,30,58,0.7)", border: "1px solid rgba(77,184,255,0.12)" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.25)" }}>
                      <Calendar size={20} className="text-[#00d4aa]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white">Book a Strategy Call</h3>
                      <p className="text-[#8ba3c7] text-xs">30 minutes, no commitment</p>
                    </div>
                  </div>
                  <p className="text-[#8ba3c7] text-sm mb-5 leading-relaxed">
                    Prefer to talk directly? Schedule a free 30-minute strategy session and we'll map out your automation opportunities live.
                  </p>
                  {/* Calendly Embed Placeholder */}
                  <div className="rounded-xl p-5 text-center" style={{ background: "rgba(0,212,170,0.05)", border: "1px dashed rgba(0,212,170,0.3)" }}>
                    <Clock size={24} className="text-[#00d4aa] mx-auto mb-3" />
                    <p className="text-white text-sm font-semibold mb-1">Calendly Scheduling</p>
                    <p className="text-[#8ba3c7] text-xs mb-4">Add your Calendly embed URL to activate live scheduling.</p>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#0b1426] transition-all hover:scale-105"
                      style={{ background: "linear-gradient(135deg, #00d4aa, #4db8ff)" }}
                    >
                      Open Calendly
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={100}>
                <div className="rounded-2xl p-8" style={{ background: "rgba(17,30,58,0.7)", border: "1px solid rgba(77,184,255,0.12)" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(77,184,255,0.12)", border: "1px solid rgba(77,184,255,0.25)" }}>
                      <MessageSquare size={20} className="text-[#4db8ff]" />
                    </div>
                    <h3 className="font-display font-bold text-white">Common Questions</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { q: "How quickly do you start?", a: "Discovery calls happen within 48 hours. Most projects kick off within 1–2 weeks of signing." },
                      { q: "Do you work with startups?", a: "Yes. We work with companies from Series A upward and established SMBs looking to scale operations." },
                      { q: "What's a typical engagement cost?", a: "Projects range from $15K for focused automations to $150K+ for enterprise systems. We tailor scope to your budget." },
                    ].map((item) => (
                      <div key={item.q} className="pb-4 border-b border-[rgba(77,184,255,0.08)] last:border-0 last:pb-0">
                        <p className="font-display font-semibold text-white text-sm mb-1">{item.q}</p>
                        <p className="text-[#8ba3c7] text-xs leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
