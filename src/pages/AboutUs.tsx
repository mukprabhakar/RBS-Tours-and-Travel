import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Globe, Heart, IndianRupee, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="gradient-text">RBS TOURS AND TRAVELS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted travel partner for exploring the diverse beauty of India since 2010. 
              We make every journey memorable with our expertly crafted experiences.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Journey Since 2010
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded with a passion for showcasing the incredible diversity of India, RBS TOURS AND TRAVELS has been 
                  connecting travelers with authentic Indian experiences for over a decade. What started as a small 
                  travel agency has grown into one of India's premier tour operators.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Today, we serve thousands of happy customers annually, offering tailor-made travel experiences 
                  across all 28 states of India. From the snow-capped peaks of the Himalayas to the pristine 
                  beaches of the south, we cover every corner of this magnificent country.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-xl border border-border/50">
                    <div className="text-3xl font-display font-bold text-primary mb-2">10+</div>
                    <div className="text-muted-foreground">Years of Excellence</div>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-border/50">
                    <div className="text-3xl font-display font-bold text-primary mb-2">15K+</div>
                    <div className="text-muted-foreground">Happy Travelers</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80" 
                  alt="Travel team planning" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional travel experiences that connect people with the rich culture, heritage, 
                  and natural beauty of India. We aim to create lasting memories while promoting sustainable 
                  tourism practices and supporting local communities.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <div className="w-16 h-16 gradient-sunset rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative travel partner for exploring India, recognized for 
                  our commitment to excellence, authentic experiences, and contribution to the growth of 
                  responsible tourism in the country.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Passion for India",
                  description: "Deep love and respect for India's diverse culture, heritage, and natural beauty"
                },
                {
                  icon: Users,
                  title: "Customer Focus",
                  description: "Putting our customers' needs first and exceeding their expectations"
                },
                {
                  icon: Award,
                  title: "Quality Excellence",
                  description: "Maintaining the highest standards in all our services and offerings"
                },
                {
                  icon: Globe,
                  title: "Sustainability",
                  description: "Promoting responsible tourism that benefits local communities"
                },
                {
                  icon: MapPin,
                  title: "Local Expertise",
                  description: "Leveraging local knowledge to provide authentic experiences"
                },
                {
                  icon: IndianRupee,
                  title: "Value for Money",
                  description: "Offering excellent value without compromising on quality"
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Achievements
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognition for excellence in Indian tourism
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15K+", label: "Happy Customers" },
                { number: "500+", label: "Destinations" },
                { number: "28", label: "States Covered" },
                { number: "10+", label: "Years Experience" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center bg-card p-8 rounded-2xl shadow-soft"
                >
                  <div className="text-4xl font-display font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
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
                Ready to Explore India with Us?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of satisfied travelers who have discovered the magic of India with RBS TOURS AND TRAVELS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/packages">
                  <button className="px-8 py-4 bg-card text-primary font-semibold rounded-xl hover:bg-card/90 transition-colors">
                    View Our Packages
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/20 transition-colors">
                    Contact Us
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

export default AboutUs;