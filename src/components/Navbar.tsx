import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/mibank-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="MiBank – Grow With Us" className="h-10 lg:h-14 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-foreground font-medium hover:text-gold-dark transition-colors">Home</a>
            <a href="#products" className="text-muted-foreground font-medium hover:text-foreground transition-colors">Products</a>
            <a href="#about" className="text-muted-foreground font-medium hover:text-foreground transition-colors">About Us</a>
            <a href="#locations" className="text-muted-foreground font-medium hover:text-foreground transition-colors">Locations</a>
            <a href="#contact" className="text-muted-foreground font-medium hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:16789" className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Phone className="w-4 h-4 text-gold-dark" />
              <span>16789</span>
            </a>
            <a href="#contact" className="bg-gradient-gold text-primary-foreground font-semibold px-5 py-2.5 rounded-lg shadow-gold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm">
              Open Account
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-foreground" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
