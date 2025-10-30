import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "$5,000",
      description: "Perfect for small projects and MVPs",
      features: [
        "5-page responsive website",
        "Mobile-first design",
        "Basic SEO optimization",
        "Contact form integration",
        "2 rounds of revisions",
        "1 month support"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Standard",
      price: "$15,000",
      description: "Ideal for growing businesses",
      features: [
        "15-page website or mobile app",
        "Custom UI/UX design",
        "Advanced SEO & analytics",
        "CMS integration",
        "API development",
        "4 rounds of revisions",
        "3 months support",
        "Performance optimization"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Premium",
      price: "$50,000+",
      description: "Enterprise-grade solutions",
      features: [
        "Unlimited pages/features",
        "Full-stack development",
        "AI/ML integration",
        "Custom animations",
        "Microservices architecture",
        "Unlimited revisions",
        "12 months support",
        "DevOps & cloud setup",
        "Dedicated project manager"
      ],
      gradient: "from-orange-500 to-red-500"
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
              Simple, <span className="text-gradient">Transparent Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Choose the perfect plan for your project needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl p-8 glow-on-hover animate-fade-in-up ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                  <span className="text-white text-2xl font-bold">{plan.name[0]}</span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">starting at</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-primary hover:bg-primary/90" 
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every project is unique. Let's discuss your specific requirements and create a tailored package.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default PricingPage;
