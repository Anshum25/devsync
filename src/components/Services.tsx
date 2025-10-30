import { Code, Smartphone,Bot, Sparkles, Cloud } from "lucide-react";
import { Layers, Database, Server, Megaphone, Palette, } from "lucide-react";

const Services = () => {
  const services = [
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "End-to-end web applications built with React, Next.js, Node.js, and modern backend frameworks for scalability and performance.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "Robust data architectures using MongoDB, PostgreSQL, MySQL, and Firebase — optimized for speed, security, and reliability.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Code,
    title: "Python Development",
    description:
      "Powerful backend APIs, automation scripts, and AI-driven tools built with Python, Django, and FastAPI.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Secure, high-performance server systems with Node.js, Express, and Python — built for modern scalability.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Boost your online presence with data-driven SEO, content strategy, and social media marketing campaigns.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX & Branding",
    description:
      "Intuitive, elegant interfaces and cohesive brand systems that combine creativity with usability.",
    gradient: "from-orange-500 to-red-500",
  },
];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end digital solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 group cursor-pointer glow-on-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center glass-card rounded-2xl p-12 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to build your next big thing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's turn your vision into reality with our expert team.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-all hover:shadow-xl"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
