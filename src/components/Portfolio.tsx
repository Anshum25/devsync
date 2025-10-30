import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "FinTech E-Commerce Platform",
      category: "Web Development",
      description: "A secure, scalable e-commerce solution for a financial technology startup handling 10k+ daily transactions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "Cross-platform telemedicine app connecting patients with doctors in real-time, serving 50k+ users.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "AI & Data",
      description: "Intelligent business intelligence platform with predictive analytics and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Luxury Brand Website",
      category: "UI/UX Design",
      description: "Premium digital experience for a high-end fashion brand with immersive storytelling.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "SaaS Automation Platform",
      category: "Cloud & DevOps",
      description: "Enterprise workflow automation tool with 99.9% uptime and seamless integrations.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      gradient: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of our recent work across industries
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
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
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
