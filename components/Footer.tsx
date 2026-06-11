import Link from "next/link";
import Image from "next/image";
import { Link2, Code2, Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080e1c] border-t border-[rgba(77,184,255,0.1)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <Image src="/logo.png" alt="Northwyn" fill className="object-contain" />
              </div>
              <span
                className="font-display font-bold text-lg"
                style={{
                  background: "linear-gradient(135deg, #00d4aa, #4db8ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Northwyn
              </span>
            </Link>
            <p className="text-[#8ba3c7] text-sm leading-relaxed mb-6">
              Smart automation solutions that drive real business growth. We turn complexity into competitive advantage.
            </p>
            <div className="flex items-center gap-4">
              {[Link2, Code2, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-[rgba(77,184,255,0.2)] flex items-center justify-center text-[#8ba3c7] hover:text-[#00d4aa] hover:border-[#00d4aa] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Portfolio", "Case Studies", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[#8ba3c7] text-sm hover:text-[#00d4aa] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {["AI Workflow Automation", "Custom AI Agents", "Data Pipeline Engineering", "CRM Automation", "Lead Gen Systems", "API Integrations"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-[#8ba3c7] text-sm hover:text-[#00d4aa] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#00d4aa] mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@northwyn.ai" className="text-[#8ba3c7] text-sm hover:text-[#00d4aa] transition-colors">
                  hello@northwyn.ai
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#00d4aa] mt-0.5 flex-shrink-0" />
                <span className="text-[#8ba3c7] text-sm">+1 (800) 555-0199</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#00d4aa] mt-0.5 flex-shrink-0" />
                <span className="text-[#8ba3c7] text-sm">San Francisco, CA & Remote</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(77,184,255,0.08)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8ba3c7] text-sm">
            © {new Date().getFullYear()} Northwyn. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className="text-[#8ba3c7] text-sm hover:text-[#00d4aa] transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
