import { Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Every project starts with understanding your goals and ends with exceeding them."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build partnerships, not just projects."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We leverage cutting-edge technology to give you a competitive advantage."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              About <span className="text-gradient">DevSync Innovation</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              DevSync Innovation is a next-generation digital solutions studio that helps startups and enterprises transform their ideas into powerful, scalable products.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="glass-card rounded-2xl p-8 md:p-12 mb-16 glow-on-hover animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="w-2 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make technology feel human. We are a collective of experienced developers, designers, and creative thinkers — working remotely but united by one mission: to craft technology that inspires confidence and delivers results.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 glow-on-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
