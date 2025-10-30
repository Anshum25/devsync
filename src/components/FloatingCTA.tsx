import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const FloatingCTA = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/contact") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate("/contact");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-8 right-8 z-40 rounded-full w-14 h-14 p-0 bg-primary hover:bg-primary/90 shadow-2xl animate-glow-pulse group"
      aria-label="Let's connect"
    >
      <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default FloatingCTA;
