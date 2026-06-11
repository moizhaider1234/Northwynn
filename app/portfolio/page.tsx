import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";

const projects = [
  {
    title: "Meridian Logistics — Supply Chain AI",
    category: "Operations Automation",
    description: "Built an end-to-end supply chain visibility platform with predictive demand forecasting, automated PO generation, and carrier optimization AI.",
    tags: ["Python", "OpenAI", "PostgreSQL", "Tableau"],
    metric: "3 FTEs freed",
    metricLabel: "Equivalent headcount",
    color: "#00d4aa",
    bg: "from-[#00d4aa]/10 to-transparent",
  },
  {
    title: "NovaTech Solutions — Sales Intelligence Engine",
    category: "CRM & Sales Automation",
    description: "Deployed an AI-powered lead scoring and qualification system integrated with Salesforce, automatically routing warm leads to the right reps with full context.",
    tags: ["Salesforce", "GPT-4", "n8n", "Webhooks"],
    metric: "2.1x",
    metricLabel: "Pipeline conversion",
    color: "#4db8ff",
    bg: "from-[#4db8ff]/10 to-transparent",
  },
  {
    title: "Luma Health — Patient Onboarding Agent",
    category: "AI Agent Development",
    description: "Custom conversational AI agent handling intake, scheduling, insurance verification, and FAQ — all before a human ever gets involved.",
    tags: ["Custom LLM", "Twilio", "EHR Integration", "React"],
    metric: "4 sec",
    metricLabel: "Avg. response time",
    color: "#3ee88a",
    bg: "from-[#3ee88a]/10 to-transparent",
  },
  {
    title: "Finova Capital — Compliance Monitoring",
    category: "Compliance Automation",
    description: "Real-time regulatory monitoring system that tracks 12 jurisdictions, flags deviations instantly, and auto-generates audit reports for regulators.",
    tags: ["Python", "Airflow", "Snowflake", "LangChain"],
    metric: "100%",
    metricLabel: "Audit pass rate",
    color: "#00d4aa",
    bg: "from-[#00d4aa]/10 to-transparent",
  },
  {
    title: "Crestview E-commerce — Revenue Automation",
    category: "E-commerce Automation",
    description: "Complete e-commerce automation stack: dynamic pricing, inventory sync, abandoned cart recovery sequences, and personalized post-purchase flows.",
    tags: ["Shopify", "Klaviyo", "Python", "Make"],
    metric: "$2.4M",
    metricLabel: "Annual revenue recovered",
    color: "#4db8ff",
    bg: "from-[#4db8ff]/10 to-transparent",
  },
  {
    title: "Atlas HR Platform — People Analytics",
    category: "Data Intelligence",
    description: "Automated HR analytics platform pulling from 6 data sources, surfacing attrition risk, productivity insights, and capacity planning recommendations weekly.",
    tags: ["dbt", "BigQuery", "Looker", "Python"],
    metric: "89%",
    metricLabel: "Attrition prediction accuracy",
    color: "#3ee88a",
    bg: "from-[#3ee88a]/10 to-transparent",
  },
];

const categories = ["All", "Operations Automation", "CRM & Sales Automation", "AI Agent Development", "Compliance Automation", "E-commerce Automation", "Data Intelligence"];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0b1426]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse 50% 50% at 70% 50%, rgba(77,184,255,0.2) 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[#00d4aa] font-mono text-sm font-medium tracking-widest uppercase mb-4">Our Work</p>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Proof in every{" "}
              <span style={{ background: "linear-gradient(135deg, #00d4aa, #4db8ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                deployment
              </span>
            </h1>
            <p className="text-[#8ba3c7] text-xl max-w-2xl mx-auto leading-relaxed">
              A curated look at automation systems we've built for companies across industries. Every metric is real.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8 pb-24 bg-[#0b1426]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filter (visual only) */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat, i) => (
              <span key={cat} className={`px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-all border ${i === 0 ? "bg-[#00d4aa]/10 text-[#00d4aa] border-[#00d4aa]/30" : "border-[rgba(77,184,255,0.15)] text-[#8ba3c7] hover:border-[#4db8ff] hover:text-white"}`}>
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 80}>
                <div className="group rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:scale-[1.02]" style={{ background: "rgba(17,30,58,0.8)", border: "1px solid rgba(77,184,255,0.1)" }}>
                  {/* Card header */}
                  <div className={`h-36 bg-gradient-to-br ${project.bg} relative flex items-center justify-center`} style={{ borderBottom: "1px solid rgba(77,184,255,0.1)" }}>
                    <div className="text-center">
                      <p className="font-display font-bold text-4xl" style={{ color: project.color }}>{project.metric}</p>
                      <p className="text-[#8ba3c7] text-xs font-mono mt-1">{project.metricLabel}</p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-mono font-medium mb-3 inline-block" style={{ color: project.color }}>{project.category}</span>
                    <h3 className="font-display font-bold text-lg text-white mb-3 leading-snug">{project.title}</h3>
                    <p className="text-[#8ba3c7] text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-mono text-[#8ba3c7]" style={{ background: "rgba(77,184,255,0.06)", border: "1px solid rgba(77,184,255,0.1)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href="/case-studies" className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3" style={{ color: project.color }}>
                      Read case study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want results like these?"
        sub="Every project above started with a conversation. Let's talk about what's possible for your business."
        primaryLabel="Start Your Project"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
