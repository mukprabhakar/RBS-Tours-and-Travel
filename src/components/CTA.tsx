import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Indian Adventure?
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Get personalized travel recommendations and exclusive deals. 
            Our travel experts are ready to plan your perfect trip.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="font-medium">info@bharattravels.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
