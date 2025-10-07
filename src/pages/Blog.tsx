import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

const Blog = () => {
  const posts = [
    {
      title: "10 Performance Marketing Trends for 2024",
      excerpt: "Stay ahead of the curve with these emerging strategies in performance marketing.",
      author: "Sarah Chen",
      date: "Jan 15, 2024",
      category: "Strategy"
    },
    {
      title: "How We Scaled E-commerce Revenue 5x in 6 Months",
      excerpt: "A deep dive into the exact tactics that drove explosive growth for our client.",
      author: "Marcus Rodriguez",
      date: "Jan 10, 2024",
      category: "Case Study"
    },
    {
      title: "The Complete Guide to Meta Ads in 2024",
      excerpt: "Everything you need to know about Facebook and Instagram advertising.",
      author: "Emily Nakamura",
      date: "Jan 5, 2024",
      category: "Guide"
    },
    {
      title: "Data-Driven Creative: The Secret to High ROAS",
      excerpt: "Learn how to combine creative excellence with data insights for better results.",
      author: "David Park",
      date: "Dec 28, 2023",
      category: "Creative"
    },
    {
      title: "Building a Performance Marketing Tech Stack",
      excerpt: "The essential tools and platforms every growth team needs.",
      author: "James Wilson",
      date: "Dec 20, 2023",
      category: "Technology"
    },
    {
      title: "LinkedIn Ads for B2B: A Complete Playbook",
      excerpt: "Master LinkedIn advertising with our proven B2B lead generation framework.",
      author: "Aisha Patel",
      date: "Dec 15, 2023",
      category: "Platform"
    }
  ];

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
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-gradient">Blog</span>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Insights & <span className="text-gradient">Strategies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert perspectives on performance marketing, growth strategies, and industry trends
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <AnimatedCard key={index} index={index}>
                <article className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all h-full">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-gradient mb-4">
                    {post.category}
                  </div>
                  <h2 className="text-2xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
