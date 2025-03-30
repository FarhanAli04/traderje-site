"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for your interest! We'll contact you shortly.");
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="cta">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark z-0"></div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#a5ae5c10_1px,transparent_1px)] bg-[size:20px_20px] bg-fixed"></div>

      {/* Blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-green/5 blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gold/5 blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gradient bg-gradient-gold">
                Start Your Journey to Becoming a
              </span>
              <span className="block mt-2">Successful Prop Trader Today</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Take advantage of the biggest opportunity for traders in 2025. Schedule a free consultation and let us show you how to trade with six-figure capital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Card with p-1 for gradient border */}
            <div className="p-px bg-gradient-to-br from-green via-gold to-teal rounded-xl">
              <div className="bg-dark/80 backdrop-blur-xl p-8 md:p-10 rounded-xl relative overflow-hidden">
                {/* Grid layout for desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Form */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Book Your Free Consultation</h3>

                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground/90">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 bg-dark/60 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground"
                            placeholder="Your name"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground/90">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-dark/60 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground"
                            placeholder="you@example.com"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium mb-1 text-foreground/90">
                            Trading Experience
                          </label>
                          <select
                            id="experience"
                            className="w-full px-4 py-3 bg-dark/60 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground appearance-none custom-select"
                            required
                          >
                            <option value="">Select your experience level</option>
                            <option value="beginner">Beginner (0-1 years)</option>
                            <option value="intermediate">Intermediate (1-3 years)</option>
                            <option value="advanced">Advanced (3+ years)</option>
                          </select>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-primary hover:opacity-90 text-white py-6 mt-2 flex items-center justify-center gap-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Processing..."
                          ) : (
                            <>
                              Book Your Consultation <ArrowRight className="w-4 h-4 ml-1" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>

                  {/* Right side - Benefits */}
                  <div className="lg:border-l lg:border-white/10 lg:pl-12">
                    <h3 className="text-xl font-bold mb-6">What You'll Get:</h3>

                    <ul className="space-y-4">
                      {[
                        "Personalized trading strategy assessment",
                        "Prop trading challenge preparation plan",
                        "Analysis of your current trading approach",
                        "Custom roadmap to funded trading",
                        "Access to exclusive resources and tools",
                      ].map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green mr-3 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-8 p-4 bg-gold/10 rounded-lg border border-gold/20">
                      <p className="text-sm italic text-foreground/90">
                        "The consultation was incredibly valuable. Within just 30 minutes, I had a clear path forward for my trading journey."
                      </p>
                      <p className="text-sm font-medium mt-2">— Thomas K., FTMO Funded Trader</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
