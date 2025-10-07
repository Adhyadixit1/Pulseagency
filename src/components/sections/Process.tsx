import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Comprehensive Audit",
      description: "Deep dive into your current marketing performance, identifying opportunities and gaps",
      details: [
        "Multi-channel performance analysis",
        "Competitor benchmarking",
        "Audience & market research",
        "Technical infrastructure review"
      ]
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategic Planning",
      description: "Custom strategy development aligned with your business goals and market position",
      details: [
        "Goal setting & KPI definition",
        "Channel mix optimization",
        "Budget allocation strategy",
        "Creative direction planning"
      ]
    },
    {
      number: "03",
      icon: Rocket,
      title: "Launch & Execution",
      description: "Flawless campaign implementation across all channels with precision tracking",
      details: [
        "Campaign setup & testing",
        "Creative asset production",
        "Tracking implementation",
        "Multi-channel activation"
      ]
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Optimize & Scale",
      description: "Continuous optimization and strategic scaling based on real-time data insights",
      details: [
        "Daily performance monitoring",
        "A/B testing & iteration",
        "Budget reallocation",
        "Strategic scaling decisions"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-gradient">Our Process</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-4">
            From Audit to <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step methodology that transforms businesses
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <AnimatedCard
              key={index}
              index={index}
              className="group relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="text-8xl font-bold text-muted/20 absolute -top-4 -left-2">
                      {step.number}
                    </div>
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
