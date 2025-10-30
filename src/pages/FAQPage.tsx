import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity. A basic website typically takes 4-6 weeks, while a custom mobile app or complex web application may take 3-6 months. We provide detailed timeline estimates during our initial consultation."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Yes! All our packages include post-launch support. Basic plans include 1 month, Standard includes 3 months, and Premium includes 12 months of support. We also offer ongoing maintenance contracts for long-term partnerships."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically work with a 40-30-30 payment structure: 40% upfront to begin work, 30% at project midpoint, and 30% upon completion. For larger projects, we can discuss custom payment schedules."
    },
    {
      question: "Can you work with our existing design or brand guidelines?",
      answer: "Absolutely! We can work with your existing brand guidelines, design systems, or Figma files. We're flexible and can adapt to your workflow and requirements."
    },
    {
      question: "Do you provide source code and documentation?",
      answer: "Yes, upon project completion, you receive full ownership of all source code, design files, and comprehensive documentation. We believe in transparent delivery and knowledge transfer."
    },
    {
      question: "How do revisions work?",
      answer: "Each plan includes a specific number of revision rounds. We encourage consolidated feedback to make revisions efficient. Additional revisions beyond the package limit can be purchased at an hourly rate."
    },
    {
      question: "Can you integrate with existing systems or APIs?",
      answer: "Yes, we specialize in integrations. Whether it's payment gateways, CRMs, marketing tools, or custom APIs, we have extensive experience connecting systems seamlessly."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern tech stacks including React, Next.js, Node.js, Flutter, React Native, Python, MongoDB, PostgreSQL, and major cloud platforms (AWS, Azure, GCP). We choose the best tools for your specific needs."
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, we're happy to sign NDAs and confidentiality agreements before discussing your project details. We take client privacy and intellectual property very seriously."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow industry best practices including code reviews, automated testing, security audits, and performance optimization. Every project goes through our rigorous QA process before delivery."
    },
    {
      question: "Can we start with a small project first?",
      answer: "Absolutely! Many of our long-term clients started with a small MVP or prototype. This is a great way to test our collaboration before committing to larger projects."
    },
    {
      question: "What if I need changes after the project is complete?",
      answer: "Post-launch changes are normal! During the support period, minor changes are included. After that, we offer hourly rates or retainer packages for ongoing development and updates."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Everything you need to know about working with DevSync Innovation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4 animate-fade-in-up">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border-0"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to help! Get in touch and we'll answer all your questions.
            </p>
            <a href="mailto:devsyncinnovation@gmail.com" className="text-primary hover:underline text-lg font-medium">
              devsyncinnovation@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default FAQPage;
