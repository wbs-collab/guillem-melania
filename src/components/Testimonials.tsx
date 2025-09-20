import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      business: "Casa Maria Restaurant", 
      rating: 5,
      text: "Our new website has brought in so many more customers! The design is beautiful and our online reservations have doubled. Guillem & Melania made the whole process so easy."
    },
    {
      name: "Carlos Gutierrez", 
      business: "FitLife Gym",
      rating: 5,
      text: "Professional, responsive, and affordable. They understood exactly what we needed for our gym website. The mobile version looks amazing and our class bookings have increased significantly."
    },
    {
      name: "Ana Fernandez",
      business: "Sweet Dreams Bakery",
      rating: 5,
      text: "We love our new website! It perfectly captures the warmth of our bakery. The photo gallery showcases our products beautifully and customers can now easily find our opening hours and location."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what local businesses say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 bg-gradient-card">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-6 text-lg leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-primary font-medium">
                  {testimonial.business}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;