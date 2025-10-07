import { Logo } from "@/components/Logo";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerLinks = {
    Services: [
      { name: "Paid Social", path: "/services/paid-social" },
      { name: "Paid Search", path: "/" },
      { name: "Programmatic", path: "/" },
      { name: "Email & SMS", path: "/" },
      { name: "Analytics", path: "/" },
      { name: "CRO", path: "/" }
    ],
    Company: [
      { name: "About Us", path: "/#about" },
      { name: "Team", path: "/#team" },
      { name: "Careers", path: "/careers" },
      { name: "Case Studies", path: "/#case-studies" },
      { name: "Blog", path: "/blog" }
    ],
    Resources: [
      { name: "Free Audit", path: "/#contact" },
      { name: "Marketing Guide", path: "/" },
      { name: "ROI Calculator", path: "/#roi" },
      { name: "Webinars", path: "/" },
      { name: "Podcast", path: "/" },
      { name: "Newsletter", path: "/" }
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/" },
      { name: "GDPR Compliance", path: "/" }
    ]
  };

  return (
    <footer className="py-16 px-4 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Performance marketing that actually performs. Data-driven strategies for sustainable, scalable growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 PulseAgency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link to="/" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
