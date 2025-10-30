import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={scrollToContact}
      size="lg"
      className="fixed bottom-8 right-8 z-40 rounded-full w-14 h-14 p-0 bg-primary hover:bg-primary/90 shadow-2xl animate-glow-pulse group"
      aria-label="Get a quote"
    >
      <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default FloatingCTA;
