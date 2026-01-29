import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, User, MessageSquare, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact <span className="gradient-text">RBS TOURS AND TRAVELS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reach out to our travel experts for inquiries, bookings, or assistance with your travel plans. 
              We're here to help you explore the magic of Incredible India.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">Phone Number</h3>
                      <p className="text-muted-foreground">93107 00129</p>
                      <p className="text-muted-foreground text-sm">Mon-Fri: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">Email Address</h3>
                      <p className="text-muted-foreground">rbsharma0064@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">Office Address</h3>
                      <p className="text-muted-foreground">sector 1 jalpura g noida</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="font-semibold text-foreground text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/rbs0064?igsh=M24xbTRtdG1pOHRx" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          id="firstName"
                          className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="Enter your first name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          id="lastName"
                          className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        id="phone"
                        className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-muted-foreground" />
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your travel plans or inquiry..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our services and travel packages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How far in advance should I book my trip?",
                  answer: "We recommend booking at least 30-45 days in advance for domestic tours, especially during peak season (October-March). For international connections or special events, booking 2-3 months ahead is advisable."
                },
                {
                  question: "What is included in your travel packages?",
                  answer: "Our packages typically include accommodation, meals as per plan, sightseeing as per itinerary, transportation between cities, and services of an experienced tour guide. Exact inclusions vary by package and are detailed in the package description."
                },
                {
                  question: "Do you provide customized tour packages?",
                  answer: "Yes, we specialize in creating tailor-made travel experiences. Our expert team works with you to design a personalized itinerary based on your preferences, budget, and travel dates."
                },
                {
                  question: "What are your payment terms?",
                  answer: "We accept various payment methods including credit/debit cards, net banking, and UPI. For bookings, we usually require 30% advance payment at the time of booking, with the balance due 15 days before departure."
                },
                {
                  question: "Are your tours suitable for families with children?",
                  answer: "Absolutely! We offer family-friendly packages with child-appropriate activities, accommodations, and meal options. Many of our packages include special provisions for children and educational experiences."
                },
                {
                  question: "What safety measures do you follow?",
                  answer: "We prioritize safety with verified accommodations, licensed transport providers, trained guides, 24/7 customer support, and comprehensive travel insurance options. We maintain high safety standards across all our services."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-soft"
                >
                  <h3 className="font-semibold text-foreground text-lg mb-3 flex items-start gap-2">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Chat CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-primary-foreground">
              <MessageCircle className="w-16 h-16 mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Need Immediate Assistance?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Chat with our travel experts in real-time to get instant answers to your travel queries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/packages">
                  <button className="px-8 py-4 bg-card text-primary font-semibold rounded-xl hover:bg-card/90 transition-colors flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Live Chat Now
                  </button>
                </Link>
                <a href="tel:9310700129">
                  <button className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/20 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;