import { Button } from "@/components/ui/button";
import { Play, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-taj-mahal.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Taj Mahal at sunset - Experience the beauty of India"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">
              India's Premier Travel Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up">
            Explore the Magic of{" "}
            <span className="gradient-text">Incredible India</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            From the snow-capped Himalayas to the tropical beaches of Goa, discover 
            curated travel experiences across all regions of India with our expert-guided tours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl">
              Explore Packages
            </Button>
            <Button variant="heroOutline" size="xl" className="gap-2">
              <Play className="w-5 h-5" />
              Watch Video
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-accent">500+</div>
              <div className="text-primary-foreground/70 text-sm">Destinations</div>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <div className="text-3xl md:text-4xl font-display font-bold text-accent">15K+</div>
              <div className="text-primary-foreground/70 text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-accent">10+</div>
              <div className="text-primary-foreground/70 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Box - Floating */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-20 hidden md:block">
        <div className="bg-card rounded-2xl shadow-elevated p-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Destination</div>
                <div className="font-medium text-foreground">Where to?</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Travel Date</div>
                <div className="font-medium text-foreground">Select dates</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Travelers</div>
                <div className="font-medium text-foreground">2 Adults</div>
              </div>
            </div>
            <Button variant="hero" size="lg" className="h-full">
              Search Tours
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
