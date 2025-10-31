import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

type ContactProps = { showHeading?: boolean; showSubtext?: boolean };

const Contact = ({ showHeading = true, showSubtext = true }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const API_BASE = (import.meta as any).env?.VITE_API_URL ;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(`${API_BASE}/api/contact/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error('[contact] send error', res.status, text);
        toast.error(`Failed to send message (${res.status})`);
        return;
      }
      toast.success("Thank you! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error('Network error sending message');
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to discuss a project with DevSync Innovation.");
    window.open(`https://chat.whatsapp.com/Fc28w7fwwgu6OZ194dOlRQ?mode=wwt&text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            {showHeading && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Let's <span className="text-gradient">Connect</span>
              </h2>
            )}
            {showSubtext && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to start your project? Get in touch and let's create something extraordinary together.
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="glass-card rounded-2xl p-8 glow-on-hover">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email Us</div>
                      <a href="mailto:devsyncinnovation@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        devsyncinnovation@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">WhatsApp</div>
                      <button onClick={handleWhatsApp} className="text-muted-foreground hover:text-primary transition-colors">
                        Chat with us instantly
                      </button>
                    </div>
                  </div>


                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-card rounded-2xl p-8 space-y-4">
                <div className="text-sm text-muted-foreground">Typical Response Time</div>
                <div className="text-3xl font-bold text-gradient">Within 24 Hours</div>
                <div className="text-sm text-muted-foreground">We're excited to hear about your project!</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
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
                    Email Address
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
