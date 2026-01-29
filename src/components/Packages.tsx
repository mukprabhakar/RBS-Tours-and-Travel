import { Button } from "@/components/ui/button";
import { Clock, MapPin, Star, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import keralaImage from "@/assets/kerala-backwaters.jpg";
import himalayasImage from "@/assets/himalayas.jpg";
import goaImage from "@/assets/goa-beach.jpg";
import jaipurImage from "@/assets/jaipur-hawa-mahal.jpg";
import varanasiImage from "@/assets/varanasi-ghats.jpg";

const packages = [
  {
    id: 1,
    title: "Kerala Backwaters Escape",
    destination: "Kerala",
    region: "South India",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 234,
    image: keralaImage,
    inclusions: ["Houseboat Stay", "Meals Included", "Airport Transfers", "Guided Tours"],
    featured: true,
    category: "Honeymoon",
  },
  {
    id: 2,
    title: "Himalayan Adventure Trek",
    destination: "Himachal Pradesh",
    region: "North India",
    duration: "7 Days / 6 Nights",
    rating: 4.8,
    reviews: 189,
    image: himalayasImage,
    inclusions: ["Camping", "All Meals", "Trek Guide", "Equipment"],
    featured: false,
    category: "Adventure",
  },
  {
    id: 3,
    title: "Goa Beach Paradise",
    destination: "Goa",
    region: "West India",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    reviews: 312,
    image: goaImage,
    inclusions: ["Beach Resort", "Breakfast", "Water Sports", "Nightlife Tour"],
    featured: true,
    category: "Beach",
  },
  {
    id: 4,
    title: "Royal Rajasthan Heritage",
    destination: "Jaipur - Udaipur",
    region: "West India",
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    reviews: 276,
    image: jaipurImage,
    inclusions: ["Heritage Hotels", "All Meals", "Private Car", "Palace Tours"],
    featured: true,
    category: "Heritage",
  },
  {
    id: 5,
    title: "Spiritual Varanasi Journey",
    destination: "Varanasi",
    region: "North India",
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    reviews: 198,
    image: varanasiImage,
    inclusions: ["River View Hotel", "Ganga Aarti", "Temple Tours", "Boat Ride"],
    featured: false,
    category: "Spiritual",
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-secondary text-secondary-foreground font-medium px-4 py-2 rounded-full text-sm mb-4">
            Featured Packages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Popular Travel{" "}
            <span className="gradient-text">Packages</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Handpicked travel packages covering all corners of India. 
            Best experiences, unforgettable memories.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Honeymoon", "Adventure", "Beach", "Heritage", "Spiritual"].map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                cat === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                
                {/* Featured Badge */}
                {pkg.featured && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {pkg.category}
                </div>
                
                {/* Region */}
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="w-4 h-4" />
                    {pkg.region}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Destination */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.destination}</p>

                {/* Rating & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="font-semibold text-foreground">{pkg.rating}</span>
                    <span className="text-muted-foreground text-sm">({pkg.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </div>
                </div>

                {/* Inclusions */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.inclusions.slice(0, 3).map((inc) => (
                    <span
                      key={inc}
                      className="inline-flex items-center gap-1 bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                    >
                      <Check className="w-3 h-3 text-secondary" />
                      {inc}
                    </span>
                  ))}
                  {pkg.inclusions.length > 3 && (
                    <span className="text-xs text-primary font-medium">
                      +{pkg.inclusions.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-end pt-4 border-t border-border">
                  <Button variant="hero" size="default">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
