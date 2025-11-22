import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-display font-bold text-gold">Luxury</span>
              <span className="text-xl font-display font-light">Properties</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Building dreams, creating legacies. Your vision, our expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg mb-4 text-gold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Property Lane, Business District, City 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@luxuryproperties.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display text-lg mb-4 text-gold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Luxury Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
