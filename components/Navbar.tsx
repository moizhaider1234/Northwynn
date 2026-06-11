"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0b1426]/90 backdrop-blur-xl border-b border-[rgba(77,184,255,0.12)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Northwyn"
              fill
              className="object-contain"
            />
          </div>
          <span
            className="font-display font-700 text-xl"
            style={{
              background: "linear-gradient(135deg, #00d4aa 0%, #4db8ff 60%, #3ee88a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Northwyn
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#8ba3c7] hover:text-[#00d4aa] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d4aa] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-[#0b1426] transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #00d4aa, #4db8ff)",
              boxShadow: "0 0 20px rgba(0,212,170,0.3)",
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#8ba3c7] hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d1a33]/95 backdrop-blur-xl border-t border-[rgba(77,184,255,0.1)] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-[#8ba3c7] hover:text-[#00d4aa] transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block text-center px-5 py-3 rounded-lg text-sm font-semibold text-[#0b1426] mt-4"
            style={{ background: "linear-gradient(135deg, #00d4aa, #4db8ff)" }}
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
