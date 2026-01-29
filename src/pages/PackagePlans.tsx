import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, MapPin, Star, Users, Check, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const packageCategories = [
  {
    name: "Honeymoon",
    description: "Romantic getaways for newlyweds and couples",
    packages: [
      {
        id: 1,
        title: "Kashmir Paradise Romance",
        destination: "Srinagar - Gulmarg - Pahalgam",
        region: "North India",
        duration: "7 Days / 6 Nights",
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1542662565-7e4e66d9d8f9?auto=format&fit=crop&w=800&q=80",
        inclusions: ["Houseboat Stay", "Romantic Dinner", "Shikara Ride", "Spa Treatments", "Sightseeing"],
        featured: true,
        category: "honeymoon"
      },
      {
        id: 2,
        title: "Rajasthan Royal Romance",
        destination: "Jaipur - Udaipur - Jodhpur",
        region: "West India",
        duration: "8 Days / 7 Nights",
        rating: 4.8,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1599447083348-7ec9b9aa3c2d?auto=format&fit=crop&w=800&q=80",
        inclusions: ["Heritage Hotels", "Private Guide", "Luxury Transport", "Cultural Shows", "Shopping"],
        featured: false,
        category: "honeymoon"
      },
      {
        id: 3,
        title: "Kerala Backwaters Bliss",
        destination: "Alleppey - Kumarakom - Cochin",
        region: "South India",
        duration: "6 Days / 5 Nights",
        rating: 4.7,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1577099211930-996d286e2b05?auto=format&fit=crop&w=800&q=80",
        inclusions: ["Houseboat Stay", "Ayurvedic Spa", "Local Cuisine", "Backwater Cruise", "Bird Watching"],
        featured: true,
        category: "honeymoon"
      }
    ]
  },
  {
    name: "Family",
    description: "Fun-filled vacations for the entire family",
    packages: [
      {
        id: 4,
        title: "Hill Station Family Fun",
        destination: "Manali - Shimla - Dalhousie",
        region: "North India",
        duration: "6 Days / 5 Nights",
        rating: 4.6,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        inclusions: ["Mountain Views", "Adventure Activities", "Family Accommodation", "Local Experiences", "Safety Measures"],
        featured: true,
        category: "family"
      },
      {
        id: 5,
        title: "Goa Beach Family Delight",
        destination: "North Goa - South Goa",
        region: "West India",
        duration: "5 Days / 4 Nights",
        rating: 4.5,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1537348324571-91e6c0a2f5e7?auto=format&fit=crop&w=800&q=80",
        inclusions: ["Beach Resorts", "Water Sports", "Cultural Tours", "Kids Activities", "Family Dining"],
        featured: false,
        category: "family"
      }
    ]
  },
  {
    name: "Adventure",
    description: "Thrilling adventures for adrenaline junkies",
    packages: [
      {
        id: 6,
        title: "Himalayan Trekking Expedition",
        destination: "Rohtang Pass - Spiti Valley",
        region: "North India",
        duration: "10 Days / 9 Nights",
        rating: 4.9,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        inclusions: ["High Altitude Trek", "Camping", "Safety Equipment", "Experienced Guides", "Training"],
        featured: true,
        category: "adventure"
      },
      {
        id: 7,
        title: "Karnataka Wildlife Safari",
        destination: "Bandipur - Nagarhole - Mysore",
        region: "South India",
        duration: "5 Days / 4 Nights",
        rating: 4.7,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
        inclusions: ["Wildlife Safaris", "Forest Permits", "Jeep Rides", "Naturalist Guide", "Photography Sessions"],
        featured: false,
        category: "adventure"
      }
    ]
  }
];

const PackagePlans = () => {
  const allPackages = packageCategories.flatMap(category => category.packages);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Curated Travel <span className="gradient-text">Packages</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Handpicked travel packages covering all corners of India. Best experiences, unforgettable memories.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {["All", "Honeymoon", "Family", "Adventure", "Heritage", "Beach", "Spiritual"].map((cat) => (
                <button
                  key={cat}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    cat === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our most popular travel packages designed for different interests and occasions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPackages.map((pkg) => (
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
                    <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium capitalize">
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
                    <p className="text-muted-foreground text-sm mb-4 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {pkg.destination}
                    </p>

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
                      {pkg.inclusions.slice(0, 3).map((inc, index) => (
                        <span
                          key={index}
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
                      <Link to="/contact">
                        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Link to="/packages">
                <button className="px-8 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors">
                  View More Packages
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Package Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                By Travel Category
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the perfect package based on your travel preferences and interests
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packageCategories.map((category, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-soft">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <div className="space-y-4">
                    {category.packages.slice(0, 2).map((pkg) => (
                      <div key={pkg.id} className="flex items-center justify-between p-4 bg-muted rounded-xl">
                        <div>
                          <h4 className="font-medium text-foreground">{pkg.title}</h4>
                          <p className="text-sm text-muted-foreground">{pkg.destination}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground">{pkg.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/packages">
                    <button className="w-full mt-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors">
                      View All {category.name} Packages
                    </button>
                  </Link>
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
                Can't Find Your Perfect Package?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Let us customize a package just for you. Tell us your preferences and we'll create an itinerary that matches your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-card text-primary font-semibold rounded-xl hover:bg-card/90 transition-colors">
                    Request Custom Package
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/20 transition-colors">
                    Talk to Expert
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PackagePlans;