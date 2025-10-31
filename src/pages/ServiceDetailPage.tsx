import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";

const ServiceDetailPage = () => {
  const { slug } = useParams();

  const serviceData: Record<string, any> = {
    // New slugs from ServicesPage
    "full-stack-development": {
      title: "Full Stack Development",
      description: "End‑to‑end web apps with modern frontends and scalable backends.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&h=600&fit=crop",
      features: [
        "React/Next.js frontends with Tailwind and shadcn/ui",
        "Node.js/Express or Python/FastAPI backends",
        "Secure authentication and role-based access",
        "REST/GraphQL APIs and real-time features",
        "Testing and cloud-native deployments",
        "Analytics, monitoring, and observability"
      ],
      process: [
        "Discovery & Planning",
        "UI/UX Design & Prototyping",
        "Development & Integration",
        "Testing & Quality Assurance",
        "Deployment & Launch",
        "Maintenance & Support"
      ]
    },
    "database-integration": {
      title: "Database Integration",
      description: "Design, integrate, and optimize databases for performance and reliability.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&h=600&fit=crop",
      features: [
        "Schema design for PostgreSQL/MySQL/MongoDB",
        "Migrations, indexing, and query optimization",
        "Data pipelines, ETL, and backups",
        "Secure access, encryption, and auditing",
        "Replication and high availability setups",
        "Performance tuning and cost optimization"
      ],
      process: [
        "Requirements & Modeling",
        "Schema Design & POCs",
        "Integration & Migrations",
        "Load Testing & Tuning",
        "Backup/HA Configuration",
        "Monitoring & Maintenance"
      ]
    },
    "python-development": {
      title: "Python Development",
      description: "APIs, automation, and AI tooling powered by Python.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=600&fit=crop",
      features: [
        "FastAPI/Django REST backends",
        "Task automation and ETL jobs",
        "AI/ML integration and embeddings",
        "Async workers and scheduling",
        "Testing, linting, and packaging",
        "Cloud functions and serverless"
      ],
      process: [
        "Requirements Analysis",
        "Architecture & Prototyping",
        "Implementation",
        "Validation & Benchmarks",
        "Deployment",
        "Support & Iteration"
      ]
    },
    "backend-engineering": {
      title: "Backend Engineering",
      description: "Secure, high‑performance services built for scale.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
      features: [
        "Microservices and modular monoliths",
        "OAuth2/JWT auth and rate limiting",
        "Caching with Redis and message queues",
        "Observability: logs, metrics, traces",
       
      ],
      process: [
        "Architecture & RFCs",
        "Service Development",
        "Integration & Contracts",
        "Performance & Security Testing",
        "Release & Rollout",
        "Monitoring & SLOs"
      ]
    },
    "digital-marketing": {
      title: "Digital Marketing",
      description: "Data‑driven SEO, content, and paid campaigns that convert.",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&h=600&fit=crop",
      features: [
        "Technical SEO and site health",
        "Content strategy and landing pages",
        "Google Ads and social campaigns",
        "Analytics, funnels, and attribution",
        "A/B testing and CRO",
        "Reporting dashboards"
      ],
      process: [
        "Audit & Goals",
        "Strategy & Calendar",
        "Campaign Setup",
        "Optimization",
        "Reporting",
        "Scale"
      ]
    },
    "ui-ux-branding": {
      title: "UI/UX & Branding",
      description: "Delightful interfaces and cohesive brand systems.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop",
      features: [
        "User research and flows",
        "Design systems and tokens",
        "High‑fidelity prototypes",
        "Accessibility and usability testing",
        "Brand identity and guidelines",
        "Developer‑ready handoff"
      ],
      process: [
        "Research & Discovery",
        "Wireframes & Concepts",
        "Visual Design",
        "Prototyping & Testing",
        "Handoff",
        "Documentation"
      ]
    },
    "web-development": {
      title: "Web Development",
      description: "Build lightning-fast, scalable, and modern web applications",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      features: [
        "Responsive design that works on all devices",
        "SEO-optimized architecture for better visibility",
        "Progressive Web Apps (PWA) support",
        "Advanced animations and interactions",
        "Database integration and API development",
        "Performance optimization and caching"
      ],
      process: [
        "Discovery & Planning",
        "UI/UX Design & Prototyping",
        "Development & Integration",
        "Testing & Quality Assurance",
        "Deployment & Launch",
        "Maintenance & Support"
      ]
    },
    "mobile-apps": {
      title: "Mobile App Development",
      description: "Create stunning mobile experiences for iOS and Android",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
      features: [
        "Native iOS and Android development",
        "Cross-platform with Flutter & React Native",
        "Offline functionality and data sync",
        "Push notifications and real-time updates",
        "In-app purchases and payment integration",
        "App Store optimization and submission"
      ],
      process: [
        "Concept & Strategy",
        "Wireframing & Design",
        "Native/Cross-Platform Development",
        "Beta Testing & Feedback",
        "App Store Submission",
        "Post-Launch Support"
      ]
    },
    "ui-ux": {
      title: "UI/UX & Branding Design",
      description: "Design beautiful interfaces that users love",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop",
      features: [
        "User research and persona development",
        "Information architecture and user flows",
        "High-fidelity mockups and prototypes",
        "Design systems and component libraries",
        "Brand identity and visual guidelines",
        "Usability testing and iteration"
      ],
      process: [
        "Research & Discovery",
        "Wireframing & Concepts",
        "Visual Design",
        "Prototyping & Testing",
        "Design Handoff",
        "Design System Documentation"
      ]
    },
    "ai-automation": {
      title: "AI & Automation Solutions",
      description: "Harness the power of AI to automate and optimize",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
      features: [
        "Custom AI chatbots and virtual assistants",
        "Workflow automation and process optimization",
        "Natural language processing (NLP)",
        "Machine learning model development",
        "Data analysis and predictive insights",
        "Integration with existing systems"
      ],
      process: [
        "Requirements Analysis",
        "Data Collection & Preparation",
        "Model Development & Training",
        "Integration & Testing",
        "Deployment & Monitoring",
        "Continuous Improvement"
      ]
    },
    "software-development": {
      title: "Custom Software Development",
      description: "Tailored solutions for your unique business needs",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=600&fit=crop",
      features: [
        "Custom CRM and ERP systems",
        "Business intelligence dashboards",
        "SaaS platform development",
        "API development and integrations",
        "Legacy system modernization",
        "Microservices architecture"
      ],
      process: [
        "Business Analysis",
        "Technical Architecture",
        "Agile Development Sprints",
        "Integration & API Development",
        "Security & Performance Testing",
        "Deployment & Training"
      ]
    },
    "cloud-devops": {
      title: "Cloud, DevOps & Deployment",
      description: "Reliable infrastructure and seamless deployments",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
      features: [
        "Cloud infrastructure setup (AWS, Azure, GCP)",
        "Containerization with Docker & Kubernetes",
        "CI/CD pipeline implementation",
        "Automated testing and deployment",
        "Monitoring, logging, and alerts",
        "Security hardening and compliance"
      ],
      process: [
        "Infrastructure Assessment",
        "Cloud Migration Planning",
        "CI/CD Pipeline Setup",
        "Containerization & Orchestration",
        "Monitoring & Optimization",
        "24/7 Support & Maintenance"
      ]
    }
  };

  const service = serviceData[slug || ""] || serviceData["full-stack-development"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  {service.title}
                </h1>
                <p style={{ marginBottom: "20px" }} className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                    Get a Custom Quote
                  </Button>
                </Link>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What We <span className="text-gradient">Deliver</span></h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature: string, index: number) => (
                <div 
                  key={index}
                  className="glass-card rounded-lg p-6 flex items-start gap-4 glow-on-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our <span className="text-gradient">Process</span></h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {service.process.map((step: string, index: number) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-8 text-center glow-on-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Schedule a Consultation
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

export default ServiceDetailPage;
