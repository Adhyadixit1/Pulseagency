import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

const Careers = () => {
  const positions = [
    {
      title: "Senior Performance Marketing Manager",
      department: "Client Services",
      location: "Remote / San Francisco",
      type: "Full-time"
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote / New York",
      type: "Full-time"
    },
    {
      title: "Creative Director",
      department: "Creative",
      location: "San Francisco",
      type: "Full-time"
    },
    {
      title: "Account Executive",
      department: "Sales",
      location: "Remote",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Logo />
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-gradient">Join Our Team</span>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Build Your <span className="text-gradient">Career</span> With Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a team of passionate growth engineers shaping the future of performance marketing
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <AnimatedCard index={0}>
              <div className="p-8 bg-card border border-border rounded-2xl text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Fast Growth</h3>
                <p className="text-sm text-muted-foreground">Career advancement opportunities</p>
              </div>
            </AnimatedCard>
            <AnimatedCard index={1}>
              <div className="p-8 bg-card border border-border rounded-2xl text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">Great Culture</h3>
                <p className="text-sm text-muted-foreground">Remote-first, flexible environment</p>
              </div>
            </AnimatedCard>
            <AnimatedCard index={2}>
              <div className="p-8 bg-card border border-border rounded-2xl text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Top Compensation</h3>
                <p className="text-sm text-muted-foreground">Competitive salary + equity</p>
              </div>
            </AnimatedCard>
          </div>

          <AnimatedSection className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <AnimatedCard key={index} index={index}>
                  <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Button className="bg-gradient-primary hover:opacity-90">Apply Now</Button>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Careers;
