import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Compass, 
  Heart, 
  Users, 
  Building2, 
  Hotel, 
  Car,
  Plane,
  Train,
  Ship,
  Mountain,
  Waves,
  Landmark
} from "lucide-react";

const serviceCategories = [
  {
    icon: Compass,
    title: "Domestic Tours",
    description: "Explore India's diverse landscapes from Kashmir to Kanyakumari with our expertly curated domestic tour packages.",
    features: [
      "Expert local guides",
      "Customizable itineraries",
      "Comfortable accommodations",
      "Transportation arranged"
    ]
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    description: "Create unforgettable romantic memories with our specially designed honeymoon getaways to India's most romantic destinations.",
    features: [
      "Luxury accommodations",
      "Romantic experiences",
      "Special occasion arrangements",
      "Flexible schedules"
    ]
  },
  {
    icon: Users,
    title: "Family Vacations",
    description: "Perfect family holidays with kid-friendly activities, comfortable stays, and memorable experiences for all ages.",
    features: [
      "Child-friendly activities",
      "Multi-generational packages",
      "Educational experiences",
      "Safety measures"
    ]
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description: "Professional corporate travel solutions including conferences, team outings, and business trips across India.",
    features: [
      "Business class arrangements",
      "Conference facilities",
      "Team building activities",
      "Corporate discounts"
    ]
  },
  {
    icon: Hotel,
    title: "Hotel Bookings",
    description: "Access to 10,000+ verified hotels ranging from budget stays to luxury resorts at the best prices.",
    features: [
      "Best price guarantee",
      "Verified reviews",
      "Last minute deals",
      "VIP concierge service"
    ]
  },
  {
    icon: Car,
    title: "Transport Services",
    description: "Reliable car rentals, airport transfers, and inter-city transportation with experienced drivers.",
    features: [
      "Premium vehicles",
      "Licensed drivers",
      "24/7 customer support",
      "GPS navigation"
    ]
  }
];

const additionalServices = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Book domestic and international flights at competitive rates with our airline partnerships."
  },
  {
    icon: Train,
    title: "Train Reservations",
    description: "Book IRCTC tickets and premium train journeys including luxury trains like Palace on Wheels."
  },
  {
    icon: Ship,
    title: "Cruise Packages",
    description: "Experience India's coastal beauty with our curated cruise packages along the Arabian Sea and Bay of Bengal."
  },
  {
    icon: Mountain,
    title: "Adventure Tours",
    description: "Trekking, mountaineering, and adventure sports packages for thrill seekers."
  },
  {
    icon: Waves,
    title: "Water Sports",
    description: "Scuba diving, snorkeling, water skiing, and other water sports activities across India."
  },
  {
    icon: Landmark,
    title: "Heritage Tours",
    description: "Explore UNESCO World Heritage Sites and ancient monuments with expert historians."
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Comprehensive <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete travel solutions designed to make your journey across India seamless, memorable, and extraordinary.
            </p>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Core Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer a wide range of travel services to cater to all your needs across India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50"
                >
                  <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Additional Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized services to enhance your travel experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-primary-foreground">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Plan Your Perfect Trip?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Contact us today to discuss your travel needs and let us create an unforgettable journey for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-card text-primary font-semibold rounded-xl hover:bg-card/90 transition-colors">
                  Contact Us
                </button>
                <button className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/20 transition-colors">
                  Browse Packages
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;