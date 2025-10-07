import { Hero } from "@/components/sections/Hero";
import { TrustedClients } from "@/components/sections/TrustedClients";
import { KeyMetrics } from "@/components/sections/KeyMetrics";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Pricing } from "@/components/sections/Pricing";
import { Partners } from "@/components/sections/Partners";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Industries } from "@/components/sections/Industries";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MobileMenu } from "@/components/MobileMenu";
import { AuthForm } from "@/components/auth/AuthForms";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  // Handle mobile menu form events
  useEffect(() => {
    const handleSignIn = () => setIsSignInOpen(true);
    const handleGetStarted = () => setIsGetStartedOpen(true);

    window.addEventListener('openSignIn', handleSignIn);
    window.addEventListener('openGetStarted', handleGetStarted);

    return () => {
      window.removeEventListener('openSignIn', handleSignIn);
      window.removeEventListener('openGetStarted', handleGetStarted);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Borderless Navigation - positioned over hero */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Logo />
            
            <div className="hidden lg:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="hidden lg:inline-flex text-white hover:text-white hover:bg-white/10"
                onClick={() => setIsSignInOpen(true)}
              >
                Sign In
              </Button>
              <Button 
                className="hidden lg:inline-flex bg-white text-primary hover:bg-white/90"
                onClick={() => setIsGetStartedOpen(true)}
              >
                Get Started
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden text-white hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* Sections */}
      <Hero />
      <TrustedClients />
      <KeyMetrics />
      <div id="about">
        <About />
      </div>
      <WhyChoose />
      <div id="services">
        <Services />
      </div>
      <div id="process">
        <Process />
      </div>
      <CaseStudies />
      <Testimonials />
      <div id="team">
        <Team />
      </div>
      <div id="roi">
        <ROICalculator />
      </div>
      <Industries />
      <div id="pricing">
        <Pricing />
      </div>
      <Partners />
      <div id="case-studies">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <CTASection />
      <Footer />

      {/* Auth Forms */}
      <AuthForm
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        type="signup"
      />
      <AuthForm
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
        type="getStarted"
      />
    </div>
  );
};

export default Index;
