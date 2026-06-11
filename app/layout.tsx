import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Northwyn — Smart Automation. Real Growth.",
  description: "Northwyn is a premium AI automation agency helping businesses scale with intelligent workflows, custom AI solutions, and data-driven growth strategies.",
  keywords: "AI automation, business automation, AI agency, workflow automation, machine learning",
  openGraph: {
    title: "Northwyn — Smart Automation. Real Growth.",
    description: "Premium AI automation solutions that transform your business operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
