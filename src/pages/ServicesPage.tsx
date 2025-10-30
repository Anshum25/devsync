import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Code, Smartphone, Palette, Bot, Wrench, Cloud, ArrowRight, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layers, Database, Server, Megaphone } from "lucide-react";
const ServicesPage = () => {


  const services = [
    {
      icon: Layers,
      title: "Website Development",
      slug: "full-stack-development",
      description:
        "End-to-end web applications built with React, Next.js, Node.js, and modern backend frameworks for scalability and performance.",
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Database Integration",
      slug: "database-integration",
      description:
        "Robust data architectures using MongoDB, PostgreSQL, MySQL, and Firebase — optimized for speed, security, and reliability.",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Python Development",
      slug: "python-development",
      description:
        "Powerful backend APIs, automation scripts, and AI-driven tools built with Python, Django, and FastAPI.",
      technologies: ["Python", "Django", "FastAPI", "Automation", "AI Tools"],
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Server,
      title: "Backend Engineering",
      slug: "backend-engineering",
      description:
        "Secure, high-performance server systems with Node.js, Express, and Python — built for modern scalability.",
      technologies: ["Node.js", "Express", "Python", "REST APIs"],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      slug: "digital-marketing",
      description:
        "Boost your online presence with data-driven SEO, content strategy, and social media marketing campaigns.",
      technologies: ["SEO", "Content Strategy", "Google Ads", "Social Media", "Analytics"],
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Palette,
      title: "UI/UX & Branding",
      slug: "ui-ux-branding",
      description:
        "Intuitive, elegant interfaces and cohesive brand systems that combine creativity with usability.",
      technologies: ["Figma", "Design Systems", "Brand Identity", "Prototyping"],
      gradient: "from-red-500 to-orange-500",
    },
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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              End-to-end digital solutions designed to transform your business and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 group glow-on-hover animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {(() => {
                    const gid = `svc-grad-page-${index}`;
                    const Icon = service.icon;
                    return (
                      <Icon className="w-8 h-8" color={`url(#${gid})`}>
                        <defs>
                          <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6EA2FF" />
                            <stop offset="40%" stopColor="#7EA8FF" />
                            <stop offset="100%" stopColor="#F2CC59" />
                          </linearGradient>
                        </defs>
                      </Icon>
                    );
                  })()}
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link to={`/services/${service.slug}`} className="mt-auto">
                  <Button variant="outline" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="text-gradient">Project</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help bring your vision to life with our expert services.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Get a Custom Quote
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

export default ServicesPage;
