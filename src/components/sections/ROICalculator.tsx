import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

export const ROICalculator = () => {
  const [budget, setBudget] = useState(50000);
  const [currentROAS, setCurrentROAS] = useState(2);
  
  const projectedROAS = 4.8;
  const currentRevenue = budget * currentROAS;
  const projectedRevenue = budget * projectedROAS;
  const additionalRevenue = projectedRevenue - currentRevenue;
  const percentIncrease = ((projectedRevenue - currentRevenue) / currentRevenue * 100).toFixed(0);

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-gradient">ROI Calculator</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-4">
            Calculate Your <span className="text-gradient">Potential Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our average 4.8x ROAS could mean for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="p-8 bg-card border border-border rounded-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Your Numbers</h3>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="mb-2 block">Monthly Ad Budget</Label>
                <Input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="h-12 text-lg"
                />
              </div>

              <div>
                <Label className="mb-2 block">Current ROAS</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={currentROAS}
                  onChange={(e) => setCurrentROAS(Number(e.target.value))}
                  className="h-12 text-lg"
                />
              </div>

              <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                Get Personalized Forecast
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-sm text-muted-foreground mb-2">Current Monthly Revenue</div>
              <div className="text-3xl font-bold">${currentRevenue.toLocaleString()}</div>
            </div>

            <div className="p-6 bg-gradient-primary rounded-xl text-white">
              <div className="text-sm opacity-80 mb-2">Projected Monthly Revenue</div>
              <div className="text-4xl font-bold mb-2">${projectedRevenue.toLocaleString()}</div>
              <div className="text-sm opacity-90">at {projectedROAS}x ROAS (our average)</div>
            </div>

            <div className="p-6 bg-success/10 border border-success/20 rounded-xl">
              <div className="text-sm text-success mb-2">Additional Revenue</div>
              <div className="text-3xl font-bold text-success mb-1">
                +${additionalRevenue.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">
                {percentIncrease}% increase in monthly revenue
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              * Based on our average client ROAS across all industries. Individual results may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
