"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Hall of Fame", href: "/hall-of-fame" },
  { name: "Packages", href: "/packages" },
  { name: "Education", href: "/education" },
  { name: "About Us", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled ? "bg-dark/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gradient bg-gradient-gold"
          >
            Traderje
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <AnimatePresence>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-foreground/90 hover:text-gold transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300">
              Login
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white">
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-dark border-l border-gold/30">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-4 border-b border-border/10">
                <div className="text-2xl font-bold text-gradient bg-gradient-gold">Traderje</div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close Menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-6 pt-8">
                {menuItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground/90 hover:text-gold transition-colors duration-300 text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto space-y-4 py-6 border-t border-border/10">
                <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300">
                  Login
                </Button>
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
