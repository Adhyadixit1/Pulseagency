import { Megaphone, Search, Share2, Mail, BarChart, Zap } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Paid Social",
      description: "Meta, LinkedIn, TikTok & more",
      metrics: "4.2x avg. ROAS"
    },
    {
      icon: Search,
      title: "Paid Search",
      description: "Google Ads & Microsoft Ads",
      metrics: "35% lower CPA"
    },
    {
      icon: Share2,
      title: "Programmatic",
      description: "Display & video at scale",
      metrics: "2.1B impressions/mo"
    },
    {
      icon: Mail,
      title: "Email & SMS",
      description: "Retention & lifecycle marketing",
      metrics: "42% open rate avg."
    },
    {
      icon: BarChart,
      title: "Analytics & BI",
      description: "Data infrastructure & insights",
      metrics: "Real-time dashboards"
    },
    {
      icon: Zap,
      title: "CRO",
      description: "Conversion rate optimization",
      metrics: "+127% avg. lift"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Full-Spectrum <span className="text-gradient">Performance Marketing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every channel optimized, every touchpoint measured, every dollar accountable
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              index={index}
              className="group relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-sm font-semibold text-gradient">{service.metrics}</div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
