import { Award, Shield, Rocket, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Industry-leading expertise with proven methodologies"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear reporting and honest communication always"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Cutting-edge strategies that stay ahead of trends"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Your success is our success, we grow together"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-gradient">About Us</span>
            </div>
            
            <h2 className="text-5xl font-bold mb-6">
              Performance Marketing
              <span className="text-gradient block mt-2">Engineered for Growth</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2023, PulseAgency is the dynamic performance marketing partner that ambitious brands trust for growth. We combine data-driven insights, creative excellence, and strategic thinking to deliver campaigns that consistently perform.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our team of 10+ specialists has managed over $1.2M in client revenue and generated 50K+ qualified leads across various industries. We're not just another agency—we're your dedicated growth partner.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Expert Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient-secondary mb-2">2 Years</div>
                <div className="text-sm text-muted-foreground">Industry Experience</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
