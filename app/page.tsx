import Link from "next/link";
import { ArrowRight, Zap, Brain, BarChart3, Shield, Globe, Cpu, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import LeadForm from "@/components/LeadForm";

const stats = [
  { value: "200+", label: "Automations Deployed" },
  { value: "40%", label: "Avg. Cost Reduction" },
  { value: "3.2x", label: "Revenue Multiplier" },
  { value: "98%", label: "Client Retention" },
];

const services = [
  { icon: Brain, title: "AI Agent Development", desc: "Custom AI agents that handle complex decision-making, customer interactions, and multi-step workflows autonomously.", color: "#00d4aa" },
  { icon: Zap, title: "Workflow Automation", desc: "End-to-end process automation connecting your tools, teams, and data into seamless intelligent pipelines.", color: "#4db8ff" },
  { icon: BarChart3, title: "Data Intelligence", desc: "Transform raw data into automated insights, forecasts, and actions that drive measurable business outcomes.", color: "#3ee88a" },
  { icon: Globe, title: "API & System Integration", desc: "Connect your entire tech stack with robust integrations that eliminate data silos and manual hand-offs.", color: "#00d4aa" },
  { icon: Cpu, title: "CRM & Sales Automation", desc: "Intelligent lead scoring, automated nurture sequences, and AI-powered outreach that converts at scale.", color: "#4db8ff" },
  { icon: Shield, title: "Compliance Automation", desc: "AI-powered monitoring and reporting systems that keep you compliant while freeing your team for strategic work.", color: "#3ee88a" },
];

const logos = ["Stripe", "HubSpot", "Salesforce", "Notion", "Slack", "Airtable", "Zapier", "OpenAI"];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#0b1426]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,212,170,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(77,184,255,0.15) 0%, transparent 50%)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(77,184,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(77,184,255,1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-10 animate-pulse-slow" style={{ background: "radial-gradient(circle, #00d4aa, transparent)" }} />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-10 animate-pulse-slow" style={{ background: "radial-gradient(circle, #4db8ff, transparent)", animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-6 text-center py-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium mb-8 border animate-fade-in" style={{ background: "rgba(0,212,170,0.08)", borderColor: "rgba(0,212,170,0.3)", color: "#00d4aa" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-ping" />
            AI Automation Agency · Est. 2021
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.05] text-balance animate-slide-up">
            Automate smarter.<br />
            <span style={{ background: "linear-gradient(135deg, #00d4aa 0%, #4db8ff 50%, #3ee88a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Grow faster.
            </span>
          </h1>

          <p className="text-[#8ba3c7] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Northwyn builds AI-powered automation systems that eliminate operational bottlenecks, scale your sales, and turn your data into decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link href="/contact" className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#0b1426] text-sm transition-all duration-200 hover:scale-105" style={{ background: "linear-gradient(135deg, #00d4aa, #4db8ff)", boxShadow: "0 0 40px rgba(0,212,170,0.4)" }}>
              Start Your Automation Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/case-studies" className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border border-[rgba(77,184,255,0.3)] text-[#8ba3c7] hover:text-white hover:border-[#4db8ff] transition-all duration-200">
              See Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100}>
                <div className="rounded-xl p-4 text-center" style={{ background: "rgba(17,30,58,0.6)", border: "1px solid rgba(77,184,255,0.12)" }}>
                  <p className="font-display font-bold text-3xl mb-1" style={{ background: "linear-gradient(135deg, #00d4aa, #4db8ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.value}</p>
                  <p className="text-[#8ba3c7] text-xs font-medium">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="py-12 border-y border-[rgba(77,184,255,0.08)] bg-[#080e1c]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[#8ba3c7] text-xs font-mono uppercase tracking-widest mb-8">Integrates with your existing tools</p>
          <div className="flex items-center justify-center flex-wrap gap-8">
            {logos.map((logo) => (
              <span key={logo} className="text-[#8ba3c7]/40 font-display font-semibold text-lg hover:text-[#8ba3c7] transition-colors cursor-default">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-[#0b1426]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#00d4aa] font-mono text-sm font-medium tracking-widest uppercase mb-4">What We Build</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Automation that moves{" "}
              <span style={{ background: "linear-gradient(135deg, #00d4aa, #4db8ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>the needle</span>
            </h2>
            <p className="text-[#8ba3c7] text-lg max-w-2xl mx-auto">Every solution we build is designed for one goal: measurable business impact.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 80}>
                <div className="group rounded-2xl p-7 h-full transition-all duration-300 hover:scale-[1.02] cursor-pointer" style={{ background: "rgba(17,30,58,0.6)", border: "1px solid rgba(77,184,255,0.1)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                    <service.icon size={22} style={{ color: service.color }} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">{service.title}</h3>
                  <p className="text-[#8ba3c7] text-sm leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#00d4aa] font-semibold text-sm hover:gap-3 transition-all duration-200">
              Explore all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[#080e1c]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#4db8ff] font-mono text-sm font-medium tracking-widest uppercase mb-4">Our Process</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">From strategy to deployment in weeks</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Deep-dive into your processes, data flows, and growth objectives to identify the highest-leverage automation opportunities." },
              { step: "02", title: "Architecture", desc: "We design a tailored automation blueprint — tools, models, integrations, and workflows mapped to your exact needs." },
              { step: "03", title: "Build & Test", desc: "Rapid development with continuous QA testing. You see working prototypes within days, not months." },
              { step: "04", title: "Deploy & Scale", desc: "We go live with full handoff, training, and ongoing support. Then we help you scale what works." },
            ].map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 120}>
                <div className="rounded-2xl p-7 h-full" style={{ background: "rgba(17,30,58,0.6)", border: "1px solid rgba(77,184,255,0.1)" }}>
                  <span className="font-mono font-bold text-3xl mb-4 block" style={{ background: "linear-gradient(135deg, #00d4aa, #4db8ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{step.step}</span>
                  <h3 className="font-display font-bold text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-[#8ba3c7] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* LEAD CAPTURE */}
      <section className="py-24 bg-[#0b1426]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-[#00d4aa] font-mono text-sm font-medium tracking-widest uppercase mb-4">Free Strategy Session</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Find out what's possible for your business</h2>
              <p className="text-[#8ba3c7] text-lg leading-relaxed mb-8">In a 30-minute call, we'll map your biggest automation opportunities and give you a concrete roadmap — no obligation, no sales pitch.</p>
              <ul className="space-y-3">
                {["Identify your top 3 automation wins", "Estimate time and cost savings", "See examples from similar companies", "Get a technology recommendation"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#8ba3c7] text-sm">
                    <CheckCircle size={16} className="text-[#00d4aa] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="rounded-2xl p-8" style={{ background: "rgba(17,30,58,0.8)", border: "1px solid rgba(77,184,255,0.15)" }}>
                <LeadForm variant="full" headline="Let's talk automation" sub="Get a personalized strategy in 24 hours." />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to transform your operations?"
        sub="Join 200+ companies that have automated their way to faster growth with Northwyn."
        primaryLabel="Book a Free Strategy Call"
        secondaryLabel="Explore Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
