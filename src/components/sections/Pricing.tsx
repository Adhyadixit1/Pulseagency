import { Check, Zap, Rocket, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const Pricing = () => {
  const plans = [
    {
      icon: Zap,
      name: "Growth",
      price: "$3,500",
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "Up to $25K monthly ad spend",
        "2-3 marketing channels",
        "Monthly strategy sessions",
        "Basic analytics dashboard",
        "Email support",
        "Quarterly business reviews"
      ],
      cta: "Start Growing",
      popular: false
    },
    {
      icon: Rocket,
      name: "Scale",
      price: "$7,500",
      period: "/month",
      description: "For growing businesses ready to scale",
      features: [
        "Up to $100K monthly ad spend",
        "4-5 marketing channels",
        "Bi-weekly strategy sessions",
        "Advanced analytics & BI",
        "Dedicated account manager",
        "Priority support",
        "Monthly business reviews",
        "Custom creative production"
      ],
      cta: "Scale Faster",
      popular: true
    },
    {
      icon: Crown,
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For established brands at scale",
      features: [
        "Unlimited ad spend",
        "Full-channel management",
        "Weekly strategy sessions",
        "Enterprise analytics suite",
        "Dedicated team (5+ specialists)",
        "24/7 premium support",
        "Weekly business reviews",
        "Full creative studio access",
        "API integrations",
        "White-label reporting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-24 px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-gradient">Pricing Plans</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-4">
            Invest in <span className="text-gradient">Proven Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing that scales with your business
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedCard
              key={index}
              index={index}
              className={`relative p-8 bg-card border rounded-2xl transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-primary rounded-full text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-gradient-primary hover:opacity-90' 
                    : 'bg-secondary hover:bg-secondary/90'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All plans include: Performance reporting • ROI tracking • Strategy optimization
          </p>
        </div>
      </div>
    </section>
  );
};
