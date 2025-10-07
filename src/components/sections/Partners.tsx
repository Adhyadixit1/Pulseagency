import { Badge } from "@/components/ui/badge";

export const Partners = () => {
  const partners = [
    { name: "Meta Business Partner", level: "Premier", color: "bg-blue-500" },
    { name: "Google Partner", level: "Premier", color: "bg-green-500" },
    { name: "LinkedIn Partner", level: "Gold", color: "bg-blue-600" },
    { name: "Microsoft Advertising", level: "Select", color: "bg-orange-500" },
    { name: "TikTok Partner", level: "Official", color: "bg-pink-500" },
    { name: "Shopify Plus", level: "Certified", color: "bg-purple-500" }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-gradient">Certified Partners</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-4">
            Trusted by the <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Official partnerships and certifications with major platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${partner.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {partner.name.charAt(0)}
                </div>
                <Badge variant="outline" className="bg-gradient-primary text-white border-0">
                  {partner.level}
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">
                Official {partner.level} partner with advanced access and support
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Premier status across all major advertising platforms • Direct support channels • Beta access to new features
          </p>
        </div>
      </div>
    </section>
  );
};
