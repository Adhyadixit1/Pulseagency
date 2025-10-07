import { TrendingUp, Users, DollarSign, Target } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const KeyMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "78%",
      label: "Average Growth Rate",
      change: "+32% YoY",
      color: "text-primary"
    },
    {
      icon: Users,
      value: "50K+",
      label: "Leads Generated",
      change: "+45% this quarter",
      color: "text-secondary"
    },
    {
      icon: DollarSign,
      value: "$1.2M+",
      label: "Revenue Driven",
      change: "+67% growth",
      color: "text-accent"
    },
    {
      icon: Target,
      value: "89%",
      label: "Campaign Success Rate",
      change: "Above industry average",
      color: "text-success"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Results That <span className="text-gradient">Speak Volumes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real performance metrics from our client portfolio across industries
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <AnimatedCard
              key={index}
              index={index}
              className="group relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 ${metric.color}`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="text-4xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm font-medium text-foreground mb-2">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.change}</div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
