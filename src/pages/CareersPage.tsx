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
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<{ filename: string; mime: string; contentBase64: string } | null>(null);
  const API_BASE = (import.meta as any).env?.VITE_API_URL || 'https://devsync-api-aqy2.onrender.com';

  const openings = [
    {
      title: "Frontend Developer",
      type: "Full-Time",
      location: "Remote",
      description: "We're looking for an experienced React developer to build amazing user interfaces.",
      requirements: ["1+ years React experience", "JavaScript proficiency", "Design system knowledge,Tailwind CSS"]
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
  title: "Digital Marketing",
  type: "Full-Time",
  location: "Remote",
  description: "Plan, execute, and optimize online marketing campaigns to increase brand awareness and drive engagement across digital platforms.",
  requirements: [
    "SEO & SEM expertise",
    "Social media marketing experience",
    "Content strategy and analytics",
    "Google Ads and Meta Ads proficiency"
  ]
},
{
  title: "Full Stack Developer",
  type: "Full-Time",
  location: "Remote",
  description: "Design, develop, and maintain dynamic web applications from front-end interfaces to back-end systems, ensuring high performance and scalability.",
  requirements: [
    "Proficiency in React.js and Node.js",
    "Experience with MongoDB and Express.js",
    "RESTful API design and integration",
    "Version control using Git and GitHub",
    "Strong problem-solving and debugging skills"
  ]
}

  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.position || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
   try {
      setSubmitting(true);
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(`${API_BASE}/api/careers/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, resume: resumeFile || undefined }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!res.ok) {
        const text = await res.text();
        toast.error(`Failed to submit: ${res.status}`);
        console.error('[careers] submit error', res.status, text);
        return;
      }
      toast.success("Application submitted!");
      setFormData({ name: "", email: "", position: "", message: "" });
      setResumeFile(null);
      setOpen(false);
    } catch (err) {
      toast.error("Network error submitting application");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Join DevSync Innovation?</h2>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Current Openings</h2>

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
                        setOpen(true);
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

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => !submitting && setOpen(false)} />
          <div className="relative w-full max-w-xl mx-auto glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                <Input id="name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your name" className="bg-background/50 border-border focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="name@example.com" className="bg-background/50 border-border focus:border-primary" />
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium mb-2">Position Applying For *</label>
                <Input id="position" type="text" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} placeholder="e.g., Frontend Developer" className="bg-background/50 border-border focus:border-primary" />
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium mb-2">Resume / CV (PDF/DOC, up to 5MB)</label>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (!f) { setResumeFile(null); return; }
                    if (f.size > 5 * 1024 * 1024) { toast.error('File too large (max 5MB)'); e.currentTarget.value = ''; return; }
                    const reader = new FileReader();
                    reader.onload = () => {
                      const result = reader.result as string;
                      const base64 = result.includes(',') ? result.split(',')[1] : result;
                      setResumeFile({ filename: f.name, mime: f.type || 'application/octet-stream', contentBase64: base64 });
                    };
                    reader.onerror = () => {
                      toast.error('Failed to read file');
                    };
                    reader.readAsDataURL(f);
                  }}
                  className="bg-background/50 border-border focus:border-primary"
                />
                {resumeFile && <div className="text-xs text-muted-foreground mt-1">Attached: {resumeFile.filename}</div>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Cover Letter / Message *</label>
                <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about yourself and why you'd be a great fit..." rows={6} className="bg-background/50 border-border focus:border-primary resize-none" />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                {submitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </div>
        </div>
      )}

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default CareersPage;
