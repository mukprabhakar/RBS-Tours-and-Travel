import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    avatar: "PS",
    rating: 5,
    text: "Our honeymoon in Kerala was absolutely magical! The houseboat experience and the arrangements were beyond our expectations. Thank you Bharat Travels!",
    trip: "Kerala Backwaters",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    avatar: "RK",
    rating: 5,
    text: "The Himalayan trek was a life-changing experience. The guides were professional and the entire trip was seamlessly organized. Highly recommended!",
    trip: "Himalayan Adventure",
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Bangalore, Karnataka",
    avatar: "AP",
    rating: 5,
    text: "Family trip to Rajasthan with my parents and kids was perfectly planned. Every age group enjoyed themselves. The heritage hotels were stunning!",
    trip: "Royal Rajasthan",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-accent/20 text-accent-foreground font-medium px-4 py-2 rounded-full text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Travelers{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real travelers who explored India with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Trip Badge */}
              <div className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm mb-6">
                {testimonial.trip}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
