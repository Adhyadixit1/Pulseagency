import { TrendingUp } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-primary blur-md opacity-50" />
        <div className="relative bg-gradient-primary p-2 rounded-lg">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
      </div>
      <span className="text-2xl font-bold">
        <span className="text-gradient">Pulse</span>
        <span className="text-foreground">Agency</span>
      </span>
    </div>
  );
};
