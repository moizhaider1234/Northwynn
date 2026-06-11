import Link from "next/link";
import { ArrowRight, Zap, Brain, BarChart3, Shield, Globe, Cpu, CheckCircle, MessageSquare, Database, Workflow } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    icon: Brain,
    title: "AI Agent Development",
    color: "#00d4aa",
    desc: "We build sophisticated AI agents that act autonomously on your behalf — handling customer support, sales qualification, data enrichment, and complex multi-step workflows without human intervention.",
    features: ["Custom LLM fine-tuning", "Multi-agent orchestration", "Tool use & API connections", "Memory & context management", "Human-in-the-loop escalation", "Performance monitoring"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    color: "#4db8ff",
    desc: "End-to-end business process automation that connects every tool in your stack. We map your current workflows, identify friction, and engineer intelligent pipelines that run 24/7.",
    features: ["Process mapping & optimization", "No-code/low-code automation", "Cross-platform orchestration", "Conditional logic & branching", "Error handling & retry logic", "Real-time notifications"],
  },
  {
    icon: Database,
    title: "Data Pipeline Engineering",
    color: "#3ee88a",
    desc: "Transform fragmented data into clean, actionable intelligence. We build robust ETL pipelines, real-time data streams, and automated reporting systems that give your team instant clarity.",
    features: ["ETL pipeline architecture", "Real-time data streaming", "Data warehouse integration", "Automated reporting & dashboards", "Data quality monitoring", "ML-ready data prep"],
  },
  {
    icon: Cpu,
    title: "CRM & Sales Automation",
    color: "#00d4aa",
    desc: "AI-powered sales systems that find leads, score them intelligently, nurture them at scale, and hand off hot prospects at exactly the right moment. Let your sales team focus on closing.",
    features: ["Intelligent lead scoring", "Automated email sequences", "CRM data enrichment", "Meeting scheduling automation", "Deal stage automation", "Revenue forecasting AI"],
  },
  {
    icon: MessageSquare,
    title: "AI Customer Support",
    color: "#4db8ff",
    desc: "Deploy AI agents that handle tier-1 support with human-like accuracy. Reduce support costs by 60% while improving response times from hours to seconds.",
    features: ["Intent classification", "Knowledge base integration", "Ticket routing & triage", "Sentiment analysis", "Escalation management", "Multi-channel deployment"],
  },
  {
    icon: Globe,
    title: "API & System Integration",
    color: "#3ee88a",
    desc: "We connect your entire tech ecosystem — legacy systems, modern SaaS, and custom tools — into a unified, automated infrastructure that shares data and triggers actions intelligently.",
    features: ["REST & GraphQL APIs", "Webhook architecture", "Legacy system connectors", "Real-time sync", "Error handling & logging", "OAuth & authentication"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence Automation",
    color: "#00d4aa",
    desc: "Automated intelligence systems that monitor your KPIs, surface anomalies, and deliver insights to the right people at the right time — without manual report-pulling.",
    features: ["KPI monitoring & alerting", "Anomaly detection", "Automated report generation", "Executive dashboards", "Predictive analytics", "Competitor monitoring"],
  },
  {
    icon: Shield,
    title: "Compliance & Risk Automation",
    color: "#4db8ff",
    desc: "Stay compliant without dedicating headcount to manual monitoring. Our AI systems track regulatory requirements, flag issues instantly, and generate audit-ready documentation automatically.",
    features: ["Regulatory change monitoring", "Automated audit trails", "Risk scoring models", "Policy compliance checks", "GDPR/SOC2 workflows", "Incident reporting"],
  },
  {
    icon: Zap,
    title: "E-commerce Automation",
    color: "#3ee88a",
    desc: "Automate your entire e-commerce operation — inventory management, dynamic pricing, abandoned cart recovery, personalized recommendations, and customer lifecycle management.",
    features: ["Inventory sync & alerts", "Dynamic pricing engine", "Cart abandonment flows", "Product recommendation AI", "Order fulfillment automation", "Customer lifetime value optimization"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0b1426]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(0,212,170,0.2) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="max-w-3xl">
            <p className="text-[#00d4aa] font-mono text-sm font-medium tracking-widest uppercase mb-4">What We Offer</p>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Every automation your business needs,{" "}
              <span style={{ background: "linear-gradient(135deg, #00d4aa, #4db8ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                engineered precisely
              </span>
            </h1>
            <p className="text-[#8ba3c7] text-xl leading-relaxed mb-8">
              We don't offer off-the-shelf templates. Every engagement starts with understanding your unique business, then building automation that fits it perfectly.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#0b1426] text-sm transition-all duration-200 hover:scale-105" style={{ background: "linear-gradient(135deg, #00d4aa, #4db8ff)", boxShadow: "0 0 30px rgba(0,212,170,0.3)" }}>
              Discuss Your Project <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#080e1c]">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 60}>
              <div className="rounded-2xl p-8 md:p-10 transition-all duration-300" style={{ background: "rgba(17,30,58,0.6)", border: "1px solid rgba(77,184,255,0.1)" }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                        <service.icon size={22} style={{ color: service.color }} />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-white">{service.title}</h3>
                    </div>
                    <p className="text-[#8ba3c7] leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <CheckCircle size={14} style={{ color: service.color }} className="flex-shrink-0" />
                        <span className="text-[#8ba3c7] text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Not sure which service you need?"
        sub="Tell us your biggest operational pain point and we'll identify the right automation approach for your business."
        primaryLabel="Get a Free Consultation"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
