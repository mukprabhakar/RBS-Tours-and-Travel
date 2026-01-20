import { 
  Compass, 
  Heart, 
  Users, 
  Building2, 
  Hotel, 
  Car,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Compass,
    title: "Domestic Tours",
    description: "Explore India's diverse landscapes from Kashmir to Kanyakumari with our expertly curated domestic tour packages.",
    color: "gradient-hero",
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    description: "Create unforgettable romantic memories with our specially designed honeymoon getaways to India's most romantic destinations.",
    color: "gradient-sunset",
  },
  {
    icon: Users,
    title: "Family Vacations",
    description: "Perfect family holidays with kid-friendly activities, comfortable stays, and memorable experiences for all ages.",
    color: "gradient-ocean",
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description: "Professional corporate travel solutions including conferences, team outings, and business trips across India.",
    color: "gradient-gold",
  },
  {
    icon: Hotel,
    title: "Hotel Bookings",
    description: "Access to 10,000+ verified hotels ranging from budget stays to luxury resorts at the best prices.",
    color: "gradient-hero",
  },
  {
    icon: Car,
    title: "Transport Services",
    description: "Reliable car rentals, airport transfers, and inter-city transportation with experienced drivers.",
    color: "gradient-sunset",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Travel Solutions Across{" "}
            <span className="gradient-text">India</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From planning to execution, we handle every aspect of your journey. 
            Operating pan-India, we bring you the best experiences in every region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
