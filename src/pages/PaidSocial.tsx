import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

const PaidSocial = () => {
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
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-gradient">Services</span>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Paid Social <span className="text-gradient">Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Drive growth across Meta, LinkedIn, TikTok, and more with data-driven social advertising strategies.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <AnimatedCard index={0}>
              <div className="p-6 bg-card border border-border rounded-xl">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <div className="text-3xl font-bold mb-2">4.2x</div>
                <div className="text-sm text-muted-foreground">Average ROAS</div>
              </div>
            </AnimatedCard>
            <AnimatedCard index={1}>
              <div className="p-6 bg-card border border-border rounded-xl">
                <Target className="w-8 h-8 text-secondary mb-4" />
                <div className="text-3xl font-bold mb-2">$500M+</div>
                <div className="text-sm text-muted-foreground">Ad Spend Managed</div>
              </div>
            </AnimatedCard>
            <AnimatedCard index={2}>
              <div className="p-6 bg-card border border-border rounded-xl">
                <Users className="w-8 h-8 text-accent mb-4" />
                <div className="text-3xl font-bold mb-2">250+</div>
                <div className="text-sm text-muted-foreground">Clients Scaled</div>
              </div>
            </AnimatedCard>
          </div>

          <AnimatedSection className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground mb-6">
              Our paid social advertising services combine creative excellence with data-driven optimization to deliver campaigns that perform at scale.
            </p>
            
            <h3 className="text-2xl font-bold mb-3">Platforms We Master</h3>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• Meta (Facebook & Instagram) - Full-funnel campaigns</li>
              <li>• LinkedIn Ads - B2B lead generation</li>
              <li>• TikTok - Viral growth strategies</li>
              <li>• Twitter/X - Brand amplification</li>
              <li>• Pinterest - Visual discovery</li>
              <li>• Snapchat - Youth audience targeting</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3">Our Approach</h3>
            <p className="text-muted-foreground">
              We don't just boost posts. We engineer comprehensive social advertising systems that drive real business outcomes through strategic audience targeting, creative testing, and continuous optimization.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default PaidSocial;
