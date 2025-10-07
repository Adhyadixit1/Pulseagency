import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What makes PulseAgency different from other marketing agencies?",
      answer: "We combine data science, creative excellence, and strategic thinking with complete transparency. Unlike traditional agencies that hide behind vanity metrics, we focus on business outcomes: revenue, profitability, and sustainable growth. Our team includes former in-house growth leaders from companies like Meta, Google, and unicorn startups."
    },
    {
      question: "What's your typical onboarding and ramp-up timeline?",
      answer: "Week 1: Comprehensive audit and strategy development. Week 2-3: Campaign setup, creative production, and tracking implementation. Week 4+: Launch and optimization. Most clients see positive results within 30-45 days, with full optimization achieved by month 3."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "We've worked with 500+ clients across SaaS, e-commerce, fintech, healthcare, B2B services, and more. Our performance marketing methodology is industry-agnostic, but we bring specific vertical expertise to every engagement through our specialized team members."
    },
    {
      question: "What's the minimum ad spend you require?",
      answer: "Our Growth plan starts at $25K monthly ad spend, Scale at $100K, and Enterprise is custom. However, we evaluate each business individually based on unit economics, LTV, and growth potential rather than just budget size."
    },
    {
      question: "How do you measure success and report results?",
      answer: "We provide weekly performance dashboards with real-time data, monthly strategic reviews, and quarterly business reviews. We track the metrics that matter: CAC, LTV, ROAS, revenue, and profitability—not just clicks and impressions."
    },
    {
      question: "Can you integrate with our existing tools and systems?",
      answer: "Yes. We integrate with 50+ platforms including Salesforce, HubSpot, Shopify, GA4, and custom data warehouses. Our analytics team can build custom integrations and data pipelines as needed for Enterprise clients."
    },
    {
      question: "What if we're already working with another agency?",
      answer: "Many of our best clients came from other agencies. We offer a complimentary audit of your current performance and can often identify 20-30% efficiency gains immediately. Transitions are seamless with our proven migration process."
    },
    {
      question: "Do you offer month-to-month contracts?",
      answer: "Our Growth and Scale plans require a 3-month initial commitment to allow for proper optimization. After that, they become month-to-month. Enterprise contracts are typically 12-month engagements with quarterly business reviews."
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-gradient">FAQ</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-4">
            Common <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-2xl px-6 hover:border-primary/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
