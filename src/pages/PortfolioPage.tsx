import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ExternalLink } from "lucide-react";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "fintech-platform",
      title: "FinTech E-Commerce Platform",
      category: "web",
      description: "A secure, scalable e-commerce solution handling 10k+ daily transactions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      gradient: "from-blue-500/20 to-cyan-500/20",
      tools: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: "healthcare-app",
      title: "Healthcare Mobile App",
      category: "app",
      description: "Cross-platform telemedicine app serving 50k+ users.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      gradient: "from-green-500/20 to-emerald-500/20",
      tools: ["React Native", "Firebase", "WebRTC"]
    },
    {
      id: "ai-analytics",
      title: "AI-Powered Analytics Dashboard",
      category: "ai",
      description: "Intelligent business intelligence with predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      gradient: "from-purple-500/20 to-pink-500/20",
      tools: ["Python", "TensorFlow", "React", "PostgreSQL"]
    },
    {
      id: "luxury-brand",
      title: "Luxury Brand Website",
      category: "design",
      description: "Premium digital experience with immersive storytelling.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      gradient: "from-orange-500/20 to-red-500/20",
      tools: ["Next.js", "Framer Motion", "Tailwind"]
    },
    {
      id: "saas-platform",
      title: "SaaS Automation Platform",
      category: "web",
      description: "Enterprise workflow automation with 99.9% uptime.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      gradient: "from-indigo-500/20 to-blue-500/20",
      tools: ["Vue.js", "Laravel", "Docker", "AWS"]
    },
    {
      id: "fitness-tracker",
      title: "Fitness Tracking App",
      category: "app",
      description: "Smart fitness companion with AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
      gradient: "from-green-500/20 to-teal-500/20",
      tools: ["Flutter", "TensorFlow Lite", "Firebase"]
    }
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web" },
    { value: "app", label: "Mobile" },
    { value: "ai", label: "AI" },
    { value: "design", label: "Design" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A showcase of our best work across web, mobile, AI, and design projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  filter === cat.value
                    ? "bg-primary text-white shadow-lg"
                    : "glass-card hover:bg-primary/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group relative glass-card rounded-2xl overflow-hidden glow-on-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="text-sm text-primary font-medium mb-2 uppercase">{project.category}</div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default PortfolioPage;
