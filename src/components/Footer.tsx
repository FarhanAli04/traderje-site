"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Send,
  GraduationCap,
  BarChart,
  Users,
  Newspaper,
  ChevronRight,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="relative bg-dark pt-16 pb-6 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo & description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-gradient bg-gradient-gold">Traderje</h3>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Your path to becoming a successful prop trader. Join our community and learn profitable trading strategies from expert traders.
            </p>

            {/* Social media icons */}
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={18} />, label: "Facebook" },
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <Twitter size={18} />, label: "Twitter" },
                { icon: <Youtube size={18} />, label: "YouTube" },
                { icon: <Linkedin size={18} />, label: "LinkedIn" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-dark/80 border border-white/10 flex items-center justify-center hover:border-gold/50 transition-colors duration-300 text-foreground/80 hover:text-gold"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Packages", href: "/packages" },
                { label: "Hall of Fame", href: "/hall-of-fame" },
                { label: "Education", href: "/education" },
                { label: "Contact", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-gold transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Trading Courses", href: "#", icon: <GraduationCap className="w-4 h-4" /> },
                { label: "Live Trading", href: "#", icon: <BarChart className="w-4 h-4" /> },
                { label: "Trading Community", href: "#", icon: <Users className="w-4 h-4" /> },
                { label: "Daily Signals", href: "#", icon: <Newspaper className="w-4 h-4" /> },
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-foreground/70 hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2 text-green">{service.icon}</span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-foreground/70 mb-4">
              Stay updated with the latest trading insights, market analysis, and exclusive offers.
            </p>

            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-dark/60 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground"
                required
              />
              <Button
                type="submit"
                size="icon"
                className="bg-gradient-primary text-white hover:opacity-90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>

            <p className="text-foreground/50 text-sm mt-3">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        <Separator className="bg-white/5 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Traderje. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-foreground/50 hover:text-gold text-sm transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
