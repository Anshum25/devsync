import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card shadow-lg py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 group">
          <img
            src="/Untitled_design.png"
            alt="Logo"
            className="w-16 h-16 rounded-lg object-cover transition-transform group-hover:scale-110"
          />
          <span className="text-xl font-semibold tracking-tight">DevSync Innovation</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className={`${isActive('/') ? 'text-gradient font-semibold' : 'text-muted-foreground hover:text-foreground'} transition-colors`}>
            Home
          </Link>
          <Link to="/about" className={`${isActive('/about') ? 'text-gradient font-semibold' : 'text-muted-foreground hover:text-foreground'} transition-colors`}>
            About
          </Link>
          <Link to="/services" className={`${isActive('/services') ? 'text-gradient font-semibold' : 'text-muted-foreground hover:text-foreground'} transition-colors`}>
            Services
          </Link>
          {/* <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </Link> */}
          <Link to="/careers" className={`${isActive('/careers') ? 'text-gradient font-semibold' : 'text-muted-foreground hover:text-foreground'} transition-colors`}>
            Careers
          </Link>
          <Link to="/blog" className={`${isActive('/blog') ? 'text-gradient font-semibold' : 'text-muted-foreground hover:text-foreground'} transition-colors`}>
            Blog
          </Link>
          <Link to="/contact">
            <Button variant="default" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-card mt-4 mx-6 rounded-lg p-6 space-y-4 animate-fade-in">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-left ${isActive('/') ? 'text-gradient font-semibold' : 'text-muted-foreground hover:text-foreground'} transition-colors`}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-left ${isActive('/about') ? 'text-gradient font-semibold' : 'text-muted-foreground hover:text-foreground'} transition-colors`}>
            About
          </Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-left ${isActive('/services') ? 'text-gradient font-semibold' : 'text-muted-foreground hover:text-foreground'} transition-colors`}>
            Services
          </Link>
          {/* <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </Link> */}
          <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-left ${isActive('/careers') ? 'text-gradient font-semibold' : 'text-muted-foreground hover:text-foreground'} transition-colors`}>
            Careers
          </Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-left ${isActive('/blog') ? 'text-gradient font-semibold' : 'text-muted-foreground hover:text-foreground'} transition-colors`}>
            Blog
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
              Get a Quote
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
