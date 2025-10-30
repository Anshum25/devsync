import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const BlogPage = () => {
  const posts = [
    {
      slug: "future-of-web-development",
      title: "The Future of Web Development in 2025",
      excerpt: "Exploring emerging trends like AI-powered development, edge computing, and the evolution of React Server Components.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      category: "Web Development",
      author: "Rahul Sharma",
      date: "March 15, 2025",
      readTime: "8 min read"
    },
    {
      slug: "ui-ux-trends-2025",
      title: "UI/UX Design Trends Reshaping Digital Experiences",
      excerpt: "From micro-interactions to immersive 3D interfaces, discover what's shaping the future of design.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      category: "Design",
      author: "Priya Patel",
      date: "March 10, 2025",
      readTime: "6 min read"
    },
    {
      slug: "ai-automation-business",
      title: "How AI Automation is Transforming Business Operations",
      excerpt: "Real-world examples of how companies are leveraging AI to streamline workflows and boost productivity.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "AI & Automation",
      author: "Arjun Verma",
      date: "March 5, 2025",
      readTime: "10 min read"
    },
    {
      slug: "mobile-first-development",
      title: "Why Mobile-First Development Is No Longer Optional",
      excerpt: "Understanding the shift to mobile-first and how it impacts your digital strategy.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      category: "Mobile Development",
      author: "Ananya Desai",
      date: "February 28, 2025",
      readTime: "7 min read"
    },
    {
      slug: "cloud-devops-best-practices",
      title: "Cloud & DevOps: Best Practices for 2025",
      excerpt: "Essential strategies for building scalable, secure cloud infrastructure with modern DevOps practices.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      category: "Cloud & DevOps",
      author: "Rahul Sharma",
      date: "February 20, 2025",
      readTime: "9 min read"
    },
    {
      slug: "building-design-systems",
      title: "Building Scalable Design Systems That Last",
      excerpt: "A comprehensive guide to creating and maintaining design systems for growing teams.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      category: "Design",
      author: "Priya Patel",
      date: "February 15, 2025",
      readTime: "12 min read"
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
              Insights & <span className="text-gradient">Articles</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Expert perspectives on technology, design, and digital innovation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-4">
              <Input
                type="search"
                placeholder="Search articles..."
                className="bg-background/50 border-border focus:border-primary py-6 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Link to={`/blog/${posts[0].slug}`} className="group">
              <div className="glass-card rounded-2xl overflow-hidden grid md:grid-cols-2 gap-8 glow-on-hover animate-fade-in-up">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={posts[0].image} 
                    alt={posts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-primary font-medium mb-2">{posts[0].category}</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {posts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {posts[0].date}
                    </div>
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post, index) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group glass-card rounded-xl overflow-hidden glow-on-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="text-primary text-sm font-medium mb-2">{post.category}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
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

export default BlogPage;
