import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ArrowLeft, Calendar, Users, Target } from "lucide-react";

const ProjectDetailPage = () => {
  const { slug } = useParams();

  const projectData: Record<string, any> = {
    "fintech-platform": {
      title: "FinTech E-Commerce Platform",
      category: "Web Development",
      client: "FinancePlus Inc.",
      duration: "4 months",
      team: "5 developers, 2 designers",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      challenge: "The client needed a secure, scalable e-commerce platform capable of handling high transaction volumes while maintaining PCI DSS compliance and providing real-time analytics.",
      solution: "We developed a microservices-based architecture using React for the frontend, Node.js for backend services, and MongoDB for data storage. Implemented Stripe for secure payment processing and built a custom analytics dashboard.",
      results: [
        "10,000+ daily transactions processed",
        "99.9% uptime achieved",
        "40% increase in conversion rate",
        "Real-time fraud detection system"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ]
    },
    "healthcare-app": {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      client: "MediConnect",
      duration: "6 months",
      team: "4 developers, 1 designer",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
      challenge: "Create a HIPAA-compliant telemedicine platform that enables seamless video consultations, prescription management, and patient records access.",
      solution: "Built a cross-platform mobile app using React Native with WebRTC for video calls, Firebase for real-time data sync, and implemented end-to-end encryption for patient data security.",
      results: [
        "50,000+ active users",
        "100% HIPAA compliance",
        "5,000+ video consultations monthly",
        "4.8-star app store rating"
      ],
      technologies: ["React Native", "Firebase", "WebRTC", "Node.js", "PostgreSQL"],
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
      ]
    }
  };

  const project = projectData[slug || ""] || projectData["fintech-platform"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/portfolio" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 mb-12 animate-fade-in-up">
              <div className="text-primary font-medium uppercase">{project.category}</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {project.title}
              </h1>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card rounded-lg p-6 animate-fade-in-up">
                <Calendar className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Duration</div>
                <div className="font-semibold">{project.duration}</div>
              </div>
              <div className="glass-card rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <Users className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Team</div>
                <div className="font-semibold">{project.team}</div>
              </div>
              <div className="glass-card rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <Target className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Client</div>
                <div className="font-semibold">{project.client}</div>
              </div>
            </div>

            <img 
              src={project.image} 
              alt={project.title}
              className="w-full rounded-2xl shadow-2xl mb-16 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result: string, index: number) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-6 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-lg font-semibold">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech: string, index: number) => (
                <span 
                  key={index}
                  className="px-6 py-3 rounded-lg glass-card font-medium animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default ProjectDetailPage;
