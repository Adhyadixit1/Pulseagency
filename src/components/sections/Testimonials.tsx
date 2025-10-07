import { Star, Quote } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maya Hernandez",
      role: "CMO, TechFlow",
      company: "SaaS • Series B",
      rating: 5,
      text: "PulseAgency transformed our entire marketing operation. We saw a measurable lift in LTV and scaled CAC-efficient channels in under 3 months."
    },
    {
      name: "Jack Olive",
      role: "Founder & CEO, GrowthLabs",
      company: "E-commerce • $50M Revenue",
      rating: 5,
      text: "After working with several agencies, this team finally helped us scale profitably and sustainably. Their approach is systematic and scalable."
    },
    {
      name: "Priya Singh",
      role: "VP of Marketing, DataStream",
      company: "B2B Tech • Enterprise",
      rating: 5,
      text: "They don't just run campaigns—they rebuilt our demand engine. Pipeline quality and close rates improved significantly."
    },
    {
      name: "Ethan Liu",
      role: "Head of Growth, CloudSync",
      company: "Fintech • Series C",
      rating: 5,
      text: "Their analytical rigor and creative tests unlocked channels we previously wrote off. CPAs dropped while scale increased."
    },
    {
      name: "Olivia Bennett",
      role: "CMO, MarketPro",
      company: "Marketing Platform • Public",
      rating: 5,
      text: "As a marketing company ourselves, we were impressed by the team's transparency and speed to impact. They feel like an extension of our in-house team."
    },
    {
      name: "Samuel Park",
      role: "CEO, BrandBoost",
      company: "Consumer Goods • $100M+",
      rating: 5,
      text: "Their structured process and clear reporting made executive buy-in easy. We saw consistent growth across channels."
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-gradient">Client Reviews</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-4">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real businesses we've helped scale
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.9</span>
            <span className="text-muted-foreground">/ 5.0 average rating</span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={index}
              index={index}
              className="relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              
              <div className="relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-sm mb-6 leading-relaxed">{testimonial.text}</p>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gradient">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.company}</div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
