import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

interface Props {
  headline: string;
  sub: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  headline,
  sub,
  primaryLabel = "Book a Free Strategy Call",
  primaryHref = "/contact",
  secondaryLabel = "View Our Work",
  secondaryHref = "/portfolio",
}: Props) {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a33] to-[#0b1426]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,170,0.25) 0%, transparent 70%)",
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(77,184,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(77,184,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium mb-8 border"
            style={{
              background: "rgba(0,212,170,0.08)",
              borderColor: "rgba(0,212,170,0.3)",
              color: "#00d4aa",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
            Now accepting new clients
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 text-balance">
            {headline}
          </h2>
          <p className="text-[#8ba3c7] text-lg mb-10 max-w-2xl mx-auto">{sub}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="px-8 py-4 rounded-xl font-semibold text-[#0b1426] text-sm transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #00d4aa, #4db8ff)",
                boxShadow: "0 0 30px rgba(0,212,170,0.35)",
              }}
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="px-8 py-4 rounded-xl font-semibold text-sm border border-[rgba(77,184,255,0.3)] text-[#8ba3c7] hover:text-white hover:border-[#4db8ff] transition-all duration-200"
            >
              {secondaryLabel}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
