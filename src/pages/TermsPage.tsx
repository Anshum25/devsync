import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: March 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 animate-fade-in-up">
            <div className="prose prose-lg prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using DevSync Innovation' services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DevSync Innovation provides web development, mobile app development, UI/UX design, AI automation, custom software development, and cloud/DevOps services. The specific scope of work will be defined in individual project agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Project Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For each project:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>A detailed scope of work will be provided</li>
                  <li>Timeline estimates are subject to client feedback and approval cycles</li>
                  <li>Payment terms will be specified in the project proposal</li>
                  <li>Revision rounds are limited as specified in the chosen package</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, you will own all rights to the final deliverables. However, we retain the right to showcase the work in our portfolio unless otherwise agreed. Any pre-existing materials or third-party components remain the property of their respective owners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Providing timely feedback and approvals</li>
                  <li>Supplying necessary content, assets, and access</li>
                  <li>Making payments according to the agreed schedule</li>
                  <li>Maintaining backups of all delivered work</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Warranties and Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to deliver high-quality work but cannot guarantee uninterrupted or error-free service. Our services are provided "as is" without warranties of any kind, either express or implied.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DevSync Innovation shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate a project with written notice. In case of termination, payment will be due for all work completed up to that point.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, contact us at:
                  <br />
                  <a href="mailto:devsyncinnovation@gmail.com" className="text-primary hover:underline">
                    devsyncinnovation@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;
