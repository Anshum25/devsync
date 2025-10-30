import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {

      content: "DevSync Innovation transformed our vision into a stunning reality. Their attention to detail and technical expertise is unmatched. Our platform now handles 100k+ users seamlessly.",
      rating: 5
    },
    {

      content: "Working with DevSync Innovation was a game-changer. They delivered a mobile app that exceeded all expectations. Professional, responsive, and incredibly talented team.",
      rating: 4
    },
    {

      content: "The AI automation solutions they built saved us countless hours. ROI was visible within weeks. Highly recommend DevSync Innovation for any serious tech project.",
      rating: 4
    },
    {

      content: "Their design sense is exceptional. They created a website that perfectly captures our brand essence. The attention to user experience is world-class.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Trusted by <span className="text-gradient">Innovators Worldwide</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from our clients
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 glow-on-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
