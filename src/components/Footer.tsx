import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/mibank-logo.png";

const footerLinks = {
  products: [
    { name: "Business Loan", href: "#" },
    { name: "Fisheries Loan", href: "#" },
    { name: "Farmers Loan", href: "#" },
    { name: "MiCash", href: "#" },
    { name: "MiLoan", href: "#" },
    { name: "MiPikinini", href: "#" },
    { name: "Term Deposits", href: "#" },
    { name: "Vehicle Loan", href: "#" },
  ],
  company: [
    { name: "Annual Reports", href: "#" },
    { name: "Board of Directors", href: "#" },
    { name: "Executive Management", href: "#" },
    { name: "History", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Vision/Mission", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="MiBank" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-4">
              Modern, affordable banking for ordinary Papua New Guineans. Grow with us.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/MiBank-PNG-206671296097574/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com/#!/twestaway" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-secondary-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-secondary-foreground mb-4">About Us</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-secondary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-secondary-foreground">16789</p>
                  <p className="text-xs text-secondary-foreground/50">Digicel</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <p className="text-sm text-secondary-foreground/60">Port Moresby, Papua New Guinea</p>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <a href="mailto:info@mibank.com.pg" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">info@mibank.com.pg</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6">
          <p className="text-center text-xs text-secondary-foreground/40">
            © {new Date().getFullYear()} Nationwide Microbank (MiBank) Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
