import { Shield, Clock, Award, Headphones, CreditCard, MapPin } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Pan-India Coverage",
    description: "Operating across all 28 states and 8 union territories of India with local expertise.",
  },
  {
    icon: Shield,
    title: "Safe & Secure Travel",
    description: "Your safety is our priority with verified partners, travel insurance, and 24/7 support.",
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "A decade of creating memorable journeys and serving over 15,000 happy travelers.",
  },
  {
    icon: Award,
    title: "Best Value Guarantee",
    description: "We offer great value with no hidden charges.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Easy EMI options, multiple payment methods, and hassle-free booking process.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support before, during, and after your trip.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner for{" "}
              <span className="gradient-text">Indian Adventures</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over a decade of experience, we've helped thousands of travelers 
              discover the beauty of India. From the majestic forts of Rajasthan to 
              the serene backwaters of Kerala, we make every journey extraordinary.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-3xl font-display font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Destinations</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-3xl font-display font-bold text-secondary">15K+</div>
                <div className="text-sm text-muted-foreground">Happy Travelers</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-3xl font-display font-bold text-accent">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="text-3xl font-display font-bold text-primary">28</div>
                <div className="text-sm text-muted-foreground">States Covered</div>
              </div>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
