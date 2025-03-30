"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElements = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (floatingElements.current) {
      const elements = floatingElements.current.children;

      gsap.fromTo(
        elements,
        {
          y: 0,
          opacity: 0.8,
        },
        {
          y: -20,
          opacity: 1,
          stagger: 0.2,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark/70 z-0"></div>

      {/* Background dots pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Floating elements */}
      <div
        ref={floatingElements}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-[20%] left-[10%] w-20 h-20 rounded-full bg-green/20 blur-xl"></div>
        <div className="absolute top-[50%] left-[20%] w-24 h-24 rounded-full bg-teal/30 blur-xl"></div>
        <div className="absolute top-[30%] right-[15%] w-28 h-28 rounded-full bg-gold/20 blur-xl"></div>
        <div className="absolute bottom-[20%] right-[25%] w-32 h-32 rounded-full bg-green/20 blur-xl"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-gold font-medium text-sm">Your path to successful prop trading</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient bg-gradient-gold">Master The Markets</span>{" "}
              <span className="block mt-2">With Traderje</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Join the most successful prop trading community and learn profitable trading strategies. Trade with larger capital without risking your own money.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all text-white font-medium px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start mt-12 space-x-8">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient bg-gradient-gold">1300+</h3>
                <p className="text-sm text-foreground/70 mt-1">Trained Traders</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient bg-gradient-gold">6</h3>
                <p className="text-sm text-foreground/70 mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient bg-gradient-gold">90%</h3>
                <p className="text-sm text-foreground/70 mt-1">Success Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Dashboard image/illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative z-10">
              {/* Main chart/dashboard image */}
              <div className="rounded-xl shadow-2xl shadow-green/10 border border-white/10 overflow-hidden bg-gradient-to-br from-dark/80 to-dark p-2">
                <div className="p-2 relative">
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="pt-6">
                    <div className="w-full h-80 rounded-lg overflow-hidden relative">
                      {/* Chart image placeholder - replace with actual chart */}
                      <div className="w-full h-full bg-gradient-to-r from-dark/60 to-dark/40 flex items-center justify-center">
                        <div className="h-40 w-full relative">
                          {/* Simplified chart visualization */}
                          <div className="absolute bottom-0 left-0 w-full h-full">
                            <svg viewBox="0 0 100 40" className="w-full h-full">
                              <path
                                d="M0,35 Q10,30 20,32 T40,28 T60,20 T80,15 T100,10"
                                fill="none"
                                stroke="#a5ae5c"
                                strokeWidth="0.5"
                              />
                              <path
                                d="M0,35 Q10,30 20,32 T40,28 T60,20 T80,15 T100,10 V40 H0 Z"
                                fill="url(#gradient)"
                                fillOpacity="0.2"
                              />
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#a5ae5c" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#a5ae5c" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>

                          {/* Data points */}
                          <div className="absolute bottom-[32%] left-[20%] w-2 h-2 bg-teal rounded-full"></div>
                          <div className="absolute bottom-[28%] left-[40%] w-2 h-2 bg-teal rounded-full"></div>
                          <div className="absolute bottom-[20%] left-[60%] w-2 h-2 bg-teal rounded-full"></div>
                          <div className="absolute bottom-[15%] left-[80%] w-2 h-2 bg-teal rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="bg-dark/60 rounded-lg p-3">
                        <div className="text-xs text-foreground/60">Total Profit</div>
                        <div className="text-lg font-bold text-green">$25,438</div>
                      </div>
                      <div className="bg-dark/60 rounded-lg p-3">
                        <div className="text-xs text-foreground/60">Win Rate</div>
                        <div className="text-lg font-bold text-gold">78.6%</div>
                      </div>
                      <div className="bg-dark/60 rounded-lg p-3">
                        <div className="text-xs text-foreground/60">Daily ROI</div>
                        <div className="text-lg font-bold text-teal">3.2%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small floating card elements */}
              <div className="absolute -top-6 -right-6 max-w-[150px] rounded-lg shadow-xl bg-dark border border-white/10 p-3 rotate-6">
                <div className="text-xs text-foreground/60">Challenge Passed</div>
                <div className="text-base font-bold text-gold">FTMO $100K</div>
                <div className="mt-1 h-1.5 w-full bg-dark/60 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-green to-teal rounded-full"></div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 max-w-[180px] rounded-lg shadow-xl bg-dark border border-white/10 p-3 -rotate-6">
                <div className="text-xs text-foreground/60">Last Trade</div>
                <div className="text-base font-bold text-green">+$1,240</div>
                <div className="text-xs text-foreground/60 mt-1">EURUSD • 2.1 lots</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
