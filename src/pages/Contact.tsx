import { motion } from "framer-motion";
import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 73496 99993"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Ventures@rycca.in"],
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["A002 Sai Meadows, 1st Main Road", "Block C, CQAL Layout, Sahakarnagar", "Bangalore 560 092"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Saturday: 9AM - 6PM", "Sunday: By Appointment"],
    },
  ];

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation direction="left">
              <div className="bg-secondary p-4 sm:p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
                  Send us a <span className="text-gold">Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us more about your requirements..."
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold-dark text-white min-w-[120px]">
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-display font-bold mb-6">
                    Contact <span className="text-gold">Information</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of the following channels. Our team is ready to assist you with all your property needs.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-secondary rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Find Us on the <span className="text-gold">Map</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit our office in Sahakarnagar, Bangalore for a personalized consultation
              </p>
            </div>
          </ScrollAnimation>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40 rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            
            <div className="relative bg-background rounded-2xl overflow-hidden shadow-2xl">
              {/* Map Container */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225196.1459476825!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1741f1245edf%3A0x21ec0fff206c4099!2sRYCCA!5e1!3m2!1sen!2sin!4v1766772052985!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rycca Ventures Location"
                />
                
                {/* Overlay Card */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-10"
                >
                  <div className="bg-background/95 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6 max-w-xs sm:max-w-sm border border-gold/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-foreground">Rycca Ventures</h3>
                        <p className="text-xs sm:text-sm text-gold">Head Office</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <p>A002 Sai Meadows, 1st Main Road</p>
                      <p>Block C, CQAL Layout, Sahakarnagar</p>
                      <p>Bangalore 560 092</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <a 
                        href="https://maps.google.com/?q=RYCCA+Sahakarnagar+Bangalore" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors text-xs sm:text-sm font-medium"
                      >
                        Get Directions
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-display font-bold mb-6">
                Visit Our <span className="text-gold">Experience Center</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Visit our experience center to view project masterplans, legal documentation, location analysis reports, 
                and meet our investment advisory team. We recommend scheduling an appointment for a personalized consultation 
                and site visit coordination.
              </p>
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-white min-w-[160px]">
                Schedule a Visit
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Contact;
