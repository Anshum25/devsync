import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { toast } from "sonner";

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: ""
  });

  const openings = [
    {
      title: "Senior Frontend Developer",
      type: "Full-Time",
      location: "Remote",
      description: "We're looking for an experienced React developer to build amazing user interfaces.",
      requirements: ["1+ years React experience", "TypeScript proficiency", "Design system knowledge"]
    },
    {
      title: "UI/UX Designer",
      type: "Full-Time",
      location: "Remote",
      description: "Join our design team to create beautiful and intuitive digital experiences.",
      requirements: ["Figma expertise", "Portfolio required", "User research experience"]
    },
    {
      title: "Backend Engineer",
      type: "Full-Time",
      location: "Remote",
      description: "Build scalable backend systems and APIs for our clients' applications.",
      requirements: ["Node.js/Python experience", "Database design", "API development"]
    },
    {
      title: "AI/ML Engineer",
      type: "Full-Time",
      location: "Remote",
      description: "Develop intelligent solutions using machine learning and AI technologies.",
      requirements: ["Python & TensorFlow", "ML model deployment", "NLP experience"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.position || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Application submitted! We'll be in touch soon.");
    setFormData({ name: "", email: "", position: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Join Our <span className="text-gradient">Remote Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Be part of a creative, innovative team building the future of digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Join DevSync <span className="text-gradient">Innovation?</span></h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Remote-First Culture",
                  description: "Work from anywhere in the world. We believe in flexibility and trust."
                },
                {
                  title: "Creative Freedom",
                  description: "Bring your ideas to life. We encourage innovation and experimentation."
                },
                {
                  title: "Growth & Learning",
                  description: "Continuous learning opportunities with access to courses and conferences."
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-8 text-center glow-on-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Current <span className="text-gradient">Openings</span></h2>

            <div className="space-y-6">
              {openings.map((job, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-8 glow-on-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        setFormData({ ...formData, position: job.title });
                        document.getElementById("application")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Apply Now
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-4">{job.description}</p>

                  <div>
                    <div className="font-semibold mb-2">Requirements:</div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Apply Now</h2>

            <div className="glass-card rounded-2xl p-8 md:p-12 animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium mb-2">
                    Position Applying For *
                  </label>
                  <Input
                    id="position"
                    type="text"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    placeholder="e.g., Frontend Developer"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Cover Letter / Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default CareersPage;
