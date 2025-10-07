import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export const MobileMenu = ({ isOpen, onClose, onNavigate }: MobileMenuProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300, duration: 0.3 }}
            className="fixed top-0 right-0 h-auto max-h-[85vh] w-[280px] bg-background border-l border-border z-50 overflow-y-auto rounded-bl-2xl"
          >
            <div className="p-4 flex justify-end">
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="px-4 pb-6 flex flex-col gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className="w-full text-left py-2.5 text-foreground/90 hover:text-foreground transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="h-px bg-border my-3" />
              
              <Button 
                variant="outline" 
                className="w-full mb-2 h-9"
                onClick={() => {
                  onClose();
                  const event = new CustomEvent('openSignIn');
                  window.dispatchEvent(event);
                }}
              >
                Sign In
              </Button>
              
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-9"
                onClick={() => {
                  onClose();
                  const event = new CustomEvent('openGetStarted');
                  window.dispatchEvent(event);
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};