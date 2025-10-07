export const TrustedClients = () => {
  const clients = [
    "TechFlow", "GrowthLabs", "DataStream", "CloudSync", "MarketPro",
    "BrandBoost", "ConvertX", "ScaleUp", "MetricWave", "AdVantage",
    "PulseTech", "ReachMore", "OptimizeAI", "TrafficGen", "LeadFlow"
  ];

  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by 500+ High-Growth Companies
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-[marquee_40s_linear_infinite] gap-12">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-card border border-border rounded-lg font-semibold text-lg whitespace-nowrap hover:border-primary/50 transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
