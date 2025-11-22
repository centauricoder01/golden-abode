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
      details: ["+91 XXX XXX XXXX", "+91 XXX XXX XXXX"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@rycca.in", "invest@rycca.in"],
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Rycca Properties", "Business District, Bangalore"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Saturday: 9AM - 6PM", "Sunday: By Appointment"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
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
              <div className="bg-secondary p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-display font-bold mb-6">
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

                  <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold-dark text-white">
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

                {/* Map Placeholder */}
                <div className="bg-secondary rounded-lg overflow-hidden shadow-lg h-64">
                  <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gold mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
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
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-white">
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
