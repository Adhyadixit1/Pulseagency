import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", email);
    // Handle form submission
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Hero Banner */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B69] via-[#7B2FF7] to-[#B4A5FF] opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B4A5FF]/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7B2FF7]/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2D1B69]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Floating Icons */}
        <div className="absolute -left-20 top-0 opacity-20 animate-float">
          <Zap className="w-16 h-16 text-[#B4A5FF]" />
        </div>
        <div className="absolute -right-20 top-20 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
          <Target className="w-16 h-16 text-[#7B2FF7]" />
        </div>
        <div className="absolute left-1/4 -bottom-10 opacity-20 animate-float" style={{ animationDelay: "2s" }}>
          <TrendingUp className="w-16 h-16 text-[#2D1B69]" />
        </div>

        {/* Main Content */}
        <div className="animate-fade-in">
          <div 
            className="inline-block mb-4 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm opacity-0 translate-y-4 animate-slideUp animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-sm font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Performance Marketing Experts</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">Transform Your</span>
            <br />
            <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] bg-gradient-to-r from-white via-[#B4A5FF] to-[#7B2FF7] bg-clip-text">Digital Growth</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white font-semibold mb-8 max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Data-driven strategies that deliver measurable results. Scale your business with performance marketing that actually performs.
          </p>

          {/* Stats - realistic for 6 months */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">18+</div>
              <div className="text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Clients Scaled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">$320K+</div>
              <div className="text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Ad Spend Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">3.2x</div>
              <div className="text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Avg. ROAS</div>
            </div>
          </div>

          {/* Get Started Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3 p-2 bg-white/90 border border-white/20 rounded-2xl shadow-xl backdrop-blur-sm">
              <Input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-0 focus-visible:ring-0 bg-transparent text-[#2D1B69] placeholder:text-[#2D1B69]/80 font-medium"
                required
              />
              <Button type="submit" size="lg" className="bg-[#7B2FF7] hover:bg-[#6620E0] text-white transition-colors shadow-lg font-semibold">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-white/80 mt-3">Free audit included • No credit card required</p>
          </form>
        </div>
      </div>
    </section>
  );
};
