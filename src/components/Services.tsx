"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, BookOpen, Signal, LineChart, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useState } from "react";

const services = [
  {
    id: "education",
    title: "Education",
    icon: <BookOpen className="w-8 h-8 text-gold" />,
    description: "Comprehensive trading education tailored to your skill level. Learn the fundamentals or advance to expert strategies.",
    features: [
      "Trading fundamentals",
      "Advanced chart analysis",
      "Risk management strategies",
      "Prop challenge preparation",
      "On-demand video lessons",
    ],
    buttonText: "Explore Education",
    popular: false,
  },
  {
    id: "trading-packages",
    title: "Trading Packages",
    icon: <Signal className="w-8 h-8 text-teal" />,
    description: "Join our trading community for daily trading sessions, signals, and live analysis from expert traders.",
    features: [
      "Daily trading signals",
      "Live trading sessions",
      "Market analysis",
      "24/7 community support",
      "Prop trading guidance",
    ],
    buttonText: "View Packages",
    popular: true,
  },
  {
    id: "trading-indicator",
    title: "Trading Indicator",
    icon: <LineChart className="w-8 h-8 text-green" />,
    description: "All-in-one trading indicator that simplifies your analysis, helps manage risk, and identifies high-probability entries.",
    features: [
      "Automated market analysis",
      "Entry & exit signals",
      "Risk management tools",
      "Works on all markets",
      "Regular updates",
    ],
    buttonText: "Learn More",
    popular: false,
  },
];

export function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 relative overflow-hidden" id="services">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 to-dark z-0"></div>

      {/* Blurred circles for decoration */}
      <div className="absolute left-10 top-40 w-60 h-60 rounded-full bg-green/10 blur-[80px]"></div>
      <div className="absolute right-10 bottom-40 w-60 h-60 rounded-full bg-gold/10 blur-[80px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient bg-gradient-gold">Our Services</span>
          </h2>
          <p className="text-lg text-foreground/80">
            We offer a range of specialized trading services designed to help you succeed as a prop trader.
            Our approach focuses on comprehensive education, community support, and cutting-edge tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative"
            >
              {service.popular && (
                <div className="absolute top-0 right-6 -mt-4 z-10">
                  <div className="bg-gradient-to-r from-green to-teal px-4 py-1 rounded-full">
                    <span className="text-white text-xs font-medium">MOST POPULAR</span>
                  </div>
                </div>
              )}

              <Card
                className={`relative h-full border overflow-hidden transition-all duration-300
                  ${hoveredId === service.id
                    ? 'border-gold shadow-lg shadow-gold/10'
                    : 'bg-dark/30 backdrop-blur-sm border-white/5'
                  }`}
              >
                {/* Animated gradient border effect when hovered */}
                {hoveredId === service.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green/20 via-gold/20 to-teal/20 animate-gradient"></div>
                )}

                <div className="relative z-10 h-full">
                  <CardHeader className="pb-0">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-foreground/70 mt-2">{service.description}</p>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <Button
                      className={`w-full group transition-all duration-300 flex items-center justify-center gap-2
                        ${hoveredId === service.id
                          ? 'bg-gradient-primary text-white'
                          : 'bg-dark/60 hover:bg-dark/80'
                        }`}
                    >
                      <span>{service.buttonText}</span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300
                          ${hoveredId === service.id ? 'transform translate-x-1' : ''}`}
                      />
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mt-16"
        >
          <div className="flex items-center justify-center gap-4">
            <Activity className="w-6 h-6 text-gold" />
            <p className="text-xl font-medium">
              <span className="text-gradient bg-gradient-gold">Get started today</span> and transform your trading
            </p>
          </div>

          <Button className="mt-6 bg-gradient-primary hover:opacity-90 text-white px-8 py-6">
            Book a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
