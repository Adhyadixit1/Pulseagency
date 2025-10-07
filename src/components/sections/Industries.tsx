import { ShoppingBag, Code, Smartphone, Heart, Building2, GraduationCap } from "lucide-react";

export const Industries = () => {
  const industries = [
    {
      icon: Code,
      name: "SaaS & Tech",
      description: "B2B & B2C software companies",
      count: "120+ clients"
    },
    {
      icon: ShoppingBag,
      name: "E-commerce",
      description: "DTC brands & online retailers",
      count: "180+ clients"
    },
    {
      icon: Building2,
      name: "Fintech",
      description: "Financial services & platforms",
      count: "45+ clients"
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Digital health & telemedicine",
      count: "35+ clients"
    },
    {
      icon: Smartphone,
      name: "Mobile Apps",
      description: "iOS & Android applications",
      count: "70+ clients"
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "EdTech & online learning",
      count: "10+ clients"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">
            Industries We <span className="text-gradient">Dominate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep vertical expertise across high-growth sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <industry.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{industry.description}</p>
              <div className="text-xs font-semibold text-gradient">{industry.count}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
