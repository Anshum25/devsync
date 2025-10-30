import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams();

  // Mock data - in real app this would come from CMS
  const post = {
    title: "The Future of Web Development in 2025",
    category: "Web Development",
    author: "Rahul Sharma",
    date: "March 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    content: `
      <h2>Introduction</h2>
      <p>Web development is evolving at an unprecedented pace. As we move through 2025, several key trends are reshaping how we build and deploy web applications. This article explores the most significant developments and what they mean for developers and businesses.</p>

      <h2>AI-Powered Development</h2>
      <p>Artificial intelligence is no longer just a buzzword in web development. AI-powered tools are now assisting developers in writing code, debugging, and even designing user interfaces. GitHub Copilot and similar tools have become indispensable for many developers, significantly boosting productivity.</p>

      <h2>Edge Computing Takes Center Stage</h2>
      <p>Edge computing is revolutionizing how we think about web performance. By processing data closer to the user, edge functions enable lightning-fast response times and better user experiences. Platforms like Vercel, Cloudflare Workers, and Netlify Edge Functions are making edge computing accessible to developers of all skill levels.</p>

      <h2>React Server Components</h2>
      <p>React Server Components represent a paradigm shift in how we build React applications. By allowing components to render on the server, we can reduce bundle sizes, improve initial page loads, and create more efficient applications. This technology is set to become mainstream in 2025.</p>

      <h2>The Rise of Web Assembly</h2>
      <p>WebAssembly (Wasm) is enabling high-performance applications in the browser that were previously impossible. From video editing to 3D games, Wasm is pushing the boundaries of what's possible on the web.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. By staying informed about these trends and continuously learning, developers can create increasingly sophisticated and performant web applications that delight users.</p>
    `
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="text-primary font-medium mb-4 uppercase">{post.category}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-2xl shadow-2xl mb-12 animate-fade-in-up"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none animate-fade-in-up">
              <div
                className="space-y-6 text-lg leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Author Bio */}
            <div className="glass-card rounded-xl p-8 mt-16">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">About {post.author}</h3>
                  <p className="text-muted-foreground">
                    Lead Developer at DevSync Innovation with 8+ years of experience in web development.
                    Passionate about creating elegant solutions to complex problems.
                  </p>
                </div>
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

export default BlogPostPage;
