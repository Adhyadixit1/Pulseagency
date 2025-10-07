import { TrendingUp, Target, DollarSign } from "lucide-react";

export const CaseStudies = () => {
  const cases = [
    {
      company: "TechFlow SaaS",
      industry: "B2B Software",
      challenge: "High CAC and low conversion rates limiting growth",
      solution: "Rebuilt entire funnel with optimized landing pages and retargeting strategy",
      results: [
        { icon: TrendingUp, metric: "487%", label: "Increase in MQLs" },
        { icon: Target, metric: "62%", label: "Lower CAC" },
        { icon: DollarSign, metric: "$2.4M", label: "Additional ARR" }
      ],
      color: "from-primary to-primary-glow"
    },
    {
      company: "StyleHub E-commerce",
      industry: "Fashion Retail",
      challenge: "Struggling to scale profitably beyond $100K/month",
      solution: "Implemented omnichannel strategy with advanced audience segmentation",
      results: [
        { icon: TrendingUp, metric: "5.2x", label: "ROAS Achieved" },
        { icon: Target, metric: "340%", label: "Revenue Growth" },
        { icon: DollarSign, metric: "$500K", label: "Monthly Ad Spend" }
      ],
      color: "from-secondary to-blue-400"
    },
    {
      company: "FinanceAI",
      industry: "Fintech",
      challenge: "Low brand awareness in competitive market",
      solution: "Multi-channel brand campaign with performance optimization",
      results: [
        { icon: TrendingUp, metric: "12M", label: "Impressions/Month" },
        { icon: Target, metric: "8.4%", label: "CTR Average" },
        { icon: DollarSign, metric: "203%", label: "Lead Growth" }
      ],
      color: "from-accent to-orange-500"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-gradient">Success Stories</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-4">
            Real Results, <span className="text-gradient">Real Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How we've helped businesses transform their marketing performance
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="relative p-8 lg:p-12 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-slide-in-left overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-5`} />
              
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-2">{caseStudy.industry}</div>
                  <h3 className="text-3xl font-bold mb-4">{caseStudy.company}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-semibold text-gradient mb-1">Challenge</div>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gradient mb-1">Solution</div>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="text-center p-4 bg-background/50 rounded-xl border border-border">
                      <result.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                      <div className="text-3xl font-bold text-gradient mb-1">{result.metric}</div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
