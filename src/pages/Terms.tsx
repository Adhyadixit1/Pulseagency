import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";

const Terms = () => {
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
            <h1 className="text-6xl font-bold mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Last updated: January 2024
            </p>
          </AnimatedSection>

          <AnimatedSection className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using PulseAgency's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Services Description</h2>
              <p className="text-muted-foreground">
                PulseAgency provides performance marketing services including but not limited to paid advertising management, analytics, strategy consulting, and creative production.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Client Obligations</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate information about your business</li>
                <li>Grant necessary access to advertising accounts</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Comply with platform policies and advertising regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Payment Terms</h2>
              <p className="text-muted-foreground">
                Services are billed monthly in advance. Ad spend is billed separately and paid directly to advertising platforms. Late payments may result in service suspension.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate services with 30 days written notice. Early termination fees may apply for contracts within the initial commitment period.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                PulseAgency shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Terms;
