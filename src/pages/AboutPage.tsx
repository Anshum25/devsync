import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Target, Users, Zap, Heart, Award, Globe } from "lucide-react";

const AboutPage = () => {
  const team = [
    {
      name: "Anshum Dev",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      name: "Maurya Doshi",
      role: "Co-Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
    },
    {
      name: "Dhruv Rao",
      role: "Co-Founder & Digital Marketer & Lead Coordinator",
     // image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop"
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technology to deliver future-ready solutions."
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "Open communication and honest collaboration are at the heart of everything we do."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering exceptional quality in every pixel and every line of code."
    },
    {
      icon: Globe,
      title: "Growth",
      description: "We believe in continuous learning and evolving with the ever-changing tech landscape."
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
              About <span className="text-gradient">DevSync Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We are a new-age digital innovation studio specializing in full-stack development, AI automation, mobile apps, and creative design.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                DevSync Innovation was founded with a vision to bridge the gap between innovative technology and exceptional user experience. We started as a small team of passionate developers and designers who believed that great digital products should be both beautiful and functional.
              </p>
              <p>
                Today, we've grown into a full-service digital agency working with startups and enterprises across the globe. Our remote-first approach allows us to tap into global talent and deliver 24/7 innovation to our clients.
              </p>
              <p>
                Every project we take on is an opportunity to push boundaries, challenge conventions, and create digital experiences that truly make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-8 glow-on-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground">Talented individuals united by a passion for innovation</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 text-center glow-on-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Work Culture */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Work Culture</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Remote-First</h3>
                <p className="text-muted-foreground">Work from anywhere, anytime. We embrace flexibility and trust our team.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Collaborative</h3>
                <p className="text-muted-foreground">Open communication, peer reviews, and shared knowledge keep us growing.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Creative</h3>
                <p className="text-muted-foreground">We encourage experimentation and celebrate unique solutions to complex problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default AboutPage;
