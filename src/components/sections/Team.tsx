import { Linkedin } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const Team = () => {
  const team = [
    {
      name: "Jack Olive",
      role: "CEO & Founder",
      expertise: "2 years in performance marketing",
      color: "from-primary to-primary-glow"
    },
    {
      name: "Marcus Sullivan",
      role: "Chief Strategy Officer",
      expertise: "Built growth strategies for SaaS and e‑commerce",
      color: "from-secondary to-blue-400"
    },
    {
      name: "Hana Takahashi",
      role: "Head of Analytics",
      expertise: "Data science, analytics & ML-driven insights",
      color: "from-accent to-orange-500"
    },
    {
      name: "Diego Morales",
      role: "Creative Director",
      expertise: "Brand & campaign creative lead (awards: One Show)",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Renee Patel",
      role: "VP of Client Success",
      expertise: "Client growth and enterprise account strategy",
      color: "from-green-500 to-emerald-400"
    },
    {
      name: "Oliver James",
      role: "Head of Paid Search",
      expertise: "PPC & performance media specialist",
      color: "from-blue-500 to-cyan-400"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-gradient">Our Team</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">10+ Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated specialists with proven track records in digital growth
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <AnimatedCard
                key={index}
                index={index}
                className="group relative"
              >
                <div className="relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative">
                    {/* Avatar */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-gradient mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.expertise}</p>
                    
                    <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                      <Linkedin className="w-4 h-4" />
                      <span>Connect</span>
                    </button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
