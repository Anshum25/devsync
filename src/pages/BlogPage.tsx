import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
 

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    let active = true;
    const fetchNews = async () => {
      try {
         const API_BASE = (import.meta as any).env?.VITE_API_URL;
        const res = await fetch(`${API_BASE}/api/news/top-headlines?country=in&pageSize=30`);
        if (!res.ok) {
          const text = await res.text();
          console.error("/api/news/top-headlines non-200:", res.status, text);
          setError(`Backend error ${res.status}`);
          return;
        }
        const json = await res.json();
        console.log("news payload:", json);
        if (!active) return;
        const list = Array.isArray(json?.articles) ? json.articles : [];
        setArticles(list);
        setError(list.length === 0 ? "No articles returned" : "");
        setLoading(false);
      } catch (e) {
        if (!active) return;
        console.error("news fetch failed:", e);
        setError("Failed to fetch news");
        setLoading(false);
      }
    };
    fetchNews();
    const id = setInterval(fetchNews, 1000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  const filtered = useMemo(() => {
    if (!search) return articles;
    const s = search.toLowerCase();
    return articles.filter(a =>
      (a?.title || "").toLowerCase().includes(s) ||
      (a?.description || "").toLowerCase().includes(s) ||
      (a?.source?.name || "").toLowerCase().includes(s)
    );
  }, [articles, search]);

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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {error && (
              <div className="mb-4 text-sm text-red-500">{error}</div>
            )}
            {filtered.length > 0 && (
              <a href={filtered[0]?.url} target="_blank" rel="noopener noreferrer" className="group">
                <div className="glass-card rounded-2xl overflow-hidden grid md:grid-cols-2 gap-8 glow-on-hover animate-fade-in-up">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={filtered[0]?.urlToImage || "https://via.placeholder.com/800x600?text=News"}
                      alt={filtered[0]?.title || "Featured"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-primary font-medium mb-2">{filtered[0]?.source?.name || "Top Story"}</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {filtered[0]?.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {filtered[0]?.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {filtered[0]?.author || "Unknown"}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(filtered[0]?.publishedAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.slice(1).map((post, index) => (
                <a
                  key={`${post.url}-${index}`}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card rounded-xl overflow-hidden glow-on-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.urlToImage || "https://via.placeholder.com/800x600?text=News"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-primary text-sm font-medium mb-2">{post.source?.name || "News"}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span className="inline-flex items-center gap-1">Read <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </a>
              ))}
              {loading && (
                <div className="col-span-full text-center text-muted-foreground">Loading latest headlines...</div>
              )}
              {!loading && filtered.length === 0 && (
                <div className="col-span-full text-center text-muted-foreground">No articles available.</div>
              )}
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
