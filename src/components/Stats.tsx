"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { TrendingUp, Trophy, BarChart4 } from "lucide-react";

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const stats = [
    {
      icon: <TrendingUp className="w-10 h-10 text-green" />,
      value: 500,
      symbol: "+",
      label: "Prop Trading Challenges Won",
      description: "Our community has consistently proven their trading abilities",
    },
    {
      icon: <BarChart4 className="w-10 h-10 text-gold" />,
      value: 200,
      symbol: "K+",
      prefix: "$",
      label: "Total Prop Trading Payouts",
      description: "Real money withdrawn by our community members",
    },
    {
      icon: <Trophy className="w-10 h-10 text-teal" />,
      value: 50,
      symbol: "+",
      label: "Leaderboard Appearances",
      description: "Our members regularly rank in top prop firm leaderboards",
    },
  ];

  return (
    <section className="py-20 relative" id="stats" ref={ref}>
      {/* Background with diagonal pattern */}
      <div className="absolute inset-0 bg-dark z-0 opacity-90"></div>
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(
                135deg,
                #ffffff10 10%,
                transparent 10%,
                transparent 50%,
                #ffffff10 50%,
                #ffffff10 60%,
                transparent 60%,
                transparent 100%
              )
            `,
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient bg-gradient-gold">Our Prop Trading Achievements</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              We lead by example. Our success speaks for itself with transparent, verifiable results across multiple prop firms.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-dark/30 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-gold/20 transition-all duration-300 h-full">
                <div className="p-3 bg-dark/60 rounded-full inline-block mb-6 border border-white/10">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-gold text-gradient flex items-end">
                  <span>{stat.prefix || ""}</span>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      delay={0.3}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  ) : (
                    <span>0</span>
                  )}
                  <span>{stat.symbol}</span>
                </h3>
                <h4 className="text-xl font-medium mb-2 text-foreground">{stat.label}</h4>
                <p className="text-foreground/70">{stat.description}</p>
              </div>

              {/* Decorative background element */}
              <div className="absolute top-4 left-4 w-full h-full rounded-xl bg-gradient-to-br from-primary/10 to-transparent -z-10"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-dark/40 backdrop-blur-sm border border-white/10 rounded-lg">
            <p className="text-foreground/80 text-lg">
              <span className="font-semibold text-gold">Our approach:</span> We don't just teach theory — we deliver real results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
