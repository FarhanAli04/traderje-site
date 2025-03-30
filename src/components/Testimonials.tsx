"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCarousel } from "./providers/CarouselProvider";
import { type UseEmblaCarouselType } from "embla-carousel-react";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Aldo Zolli",
    role: "FTMO Trader",
    avatar: "AZ",
    rating: 5,
    text: "The knowledge I've gained from Traderje has transformed my trading. I've passed my FTMO challenge and now trade with a funded account. The community support is phenomenal!",
  },
  {
    id: 2,
    name: "Daniel Wagner",
    role: "Prop Trader",
    avatar: "DW",
    rating: 5,
    text: "After struggling for years with my own capital, I joined Traderje and within 3 months passed my first prop firm challenge. Their approach is practical and result-oriented.",
  },
  {
    id: 3,
    name: "Frank Müller",
    role: "Funding Pips Trader",
    avatar: "FM",
    rating: 5,
    text: "The trading signals are accurate and the live trading sessions are incredibly valuable. I've learned more in a few months than I did in years on my own.",
  },
  {
    id: 4,
    name: "Jelena Kostic",
    role: "Alpha Capital Trader",
    avatar: "JK",
    rating: 5,
    text: "Traderje's education programs have completely changed my approach to the markets. Their prop trading focus is exactly what the industry needs.",
  },
  {
    id: 5,
    name: "Tom Rosskopf",
    role: "FTMO Trader",
    avatar: "TR",
    rating: 5,
    text: "The trading indicator alone is worth the investment. It's helped me identify high-probability setups that I would have missed otherwise. Highly recommended!",
  },
  {
    id: 6,
    name: "Ringo Mercer",
    role: "E8 Trader",
    avatar: "RM",
    rating: 5,
    text: "As a complete beginner, I was worried about getting into trading. Traderje made the learning process straightforward and I've already passed my first challenge.",
  },
];

export function Testimonials() {
  const [api, setApi] = useState<UseEmblaCarouselType[0] | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-20 relative overflow-hidden" id="testimonials">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark/90 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient bg-gradient-gold">Our Traders' Success Stories</span>
          </h2>
          <p className="text-lg text-foreground/80">
            With over 400 five-star reviews, our traders consistently achieve exceptional results.
            Here's what some of our successful members have to say.
          </p>
        </motion.div>

        <Carousel
          className="w-full max-w-5xl mx-auto"
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 px-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-dark/40 backdrop-blur-sm border border-white/5 p-6 h-full hover:border-gold/20 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-gold/20">
                        <AvatarFallback className="bg-dark text-gold">{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-foreground/70">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? "text-gold fill-gold" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-foreground/90 italic">{testimonial.text}</p>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center mt-8 gap-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 hover:bg-gold/20 hover:text-white" />
            <div className="text-sm text-foreground/70">
              {current} / {count}
            </div>
            <CarouselNext className="relative inset-0 translate-y-0 hover:bg-gold/20 hover:text-white" />
          </div>
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green to-teal">
            <span className="text-white font-medium">Excellent • 400+ reviews • 5.0 average</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
