"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Gem, LineChart, Users, Wallet, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <LineChart className="h-8 w-8 text-teal" />,
    title: "More Capital",
    description: "Trade with larger volumes and generate more profits through prop trading firms that provide capital in five and six-figure amounts.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-gold" />,
    title: "No Risk of Loss",
    description: "Trade without risking your own capital. Prop firms cover the losses, you only share in the profits.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-green" />,
    title: "Scalability",
    description: "Scale your trading quickly by passing challenges and accessing larger account sizes with proven performance.",
  },
  {
    icon: <Users className="h-8 w-8 text-teal" />,
    title: "Community Support",
    description: "Join our vibrant trading community where you can learn from other successful traders and share knowledge.",
  },
  {
    icon: <Gem className="h-8 w-8 text-gold" />,
    title: "Expert Guidance",
    description: "Learn from traders with more than 10 years of experience who have successfully passed multiple prop firm challenges.",
  },
  {
    icon: <Check className="h-8 w-8 text-green" />,
    title: "Proven Success",
    description: "Our community has already won numerous prop trading challenges and received significant payouts.",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 md:py-28 relative" id="features">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-dark z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient bg-gradient-gold">The Greatest Opportunity</span>
            <span className="block mt-2">For Traders in 2025</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Prop trading offers the opportunity to trade with larger volumes, generating more profits without risking your own capital. We believe that in 2025, no one needs to trade with their own capital anymore.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-px rounded-lg bg-gradient-to-r from-green to-teal"
          >
            <div className="px-6 py-3 bg-dark rounded-lg text-foreground font-medium">
              Our members pass prop trading challenges at these top firms
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8"
          >
            {/* Prop firm logos */}
            <div className="text-foreground/60 uppercase tracking-wide font-bold text-sm">FTMO</div>
            <div className="text-foreground/60 uppercase tracking-wide font-bold text-sm">Funding Pips</div>
            <div className="text-foreground/60 uppercase tracking-wide font-bold text-sm">Alpha Capital</div>
            <div className="text-foreground/60 uppercase tracking-wide font-bold text-sm">E8 Funding</div>
            <div className="text-foreground/60 uppercase tracking-wide font-bold text-sm">MyFunded FX</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="h-full bg-dark/50 border border-white/5 backdrop-blur-sm overflow-hidden hover:border-gold/30 transition-all duration-300 group">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="p-3 rounded-full bg-dark/80 border border-white/10 inline-block mb-4 group-hover:border-gold/20 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-3 group-hover:text-gold transition-colors duration-300">{title}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
