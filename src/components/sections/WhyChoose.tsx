import { Target, Zap, Shield, TrendingUp, Users, Award } from "lucide-react";

export const WhyChoose = () => {
  const reasons = [
    {
      icon: Target,
      title: "Performance-First Approach",
      description: "Every dollar spent is tracked, measured, and optimized for maximum ROI. No vanity metrics, only business results."
    },
    {
      icon: Zap,
      title: "Rapid Experimentation",
      description: "We test 10x more than traditional agencies. Fast iterations lead to faster learning and better results."
    },
    {
      icon: Shield,
      title: "Complete Transparency",
      description: "Real-time dashboards, weekly reports, and direct access to your account. No black boxes, ever."
    },
    {
      icon: TrendingUp,
      title: "Proven Scalability",
      description: "We've scaled campaigns from $10K to $1M+ monthly spend while maintaining or improving efficiency."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Your own team of specialists including strategist, analyst, designer, and account manager."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Premier partners with Meta, Google, LinkedIn. Multiple industry awards and certifications."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What makes PulseAgency the performance marketing partner of choice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
