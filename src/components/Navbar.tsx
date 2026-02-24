import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import logo from "@/assets/mibank-logo.png";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-foreground/[0.03]"
            : "bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex-shrink-0 relative group">
              <img src={logo} alt="MiBank – Grow With Us" className="h-10 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300" />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = link.isRoute ? location.pathname === link.href : false;
                const NavTag = link.isRoute ? Link : 'a';
                const navProps = link.isRoute ? { to: link.href } : { href: link.href };
                return (
                  <NavTag
                    key={link.label}
                    {...navProps as any}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-foreground bg-primary/10"
                        : scrolled
                          ? "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          : "text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-gold rounded-full"
                      />
                    )}
                  </NavTag>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:16789" className={`flex items-center gap-2 text-sm font-semibold transition-colors ${scrolled ? "text-foreground" : "text-secondary-foreground"}`}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Phone className="w-4 h-4 text-gold-dark" />
                </motion.div>
                <span>16789</span>
              </a>
              <motion.a
                href="#contact"
                className="bg-gradient-gold text-primary-foreground font-semibold px-5 py-2.5 rounded-lg shadow-gold text-sm relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Open Account</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gold-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>

            <motion.button
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-secondary-foreground"}`}
              aria-label="Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="block w-full h-0.5 bg-current origin-left rounded-full"
                  animate={mobileOpen ? { rotate: 45, y: -2 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-full h-0.5 bg-current rounded-full"
                  animate={mobileOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-full h-0.5 bg-current origin-left rounded-full"
                  animate={mobileOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl p-6 pt-20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const NavTag = link.isRoute ? Link : 'a';
                  const navProps = link.isRoute ? { to: link.href } : { href: link.href };
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <NavTag
                        {...navProps as any}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-foreground font-medium rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        {link.label}
                      </NavTag>
                    </motion.div>
                  );
                })}
              </div>
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 block text-center bg-gradient-gold text-primary-foreground font-semibold px-5 py-3 rounded-lg shadow-gold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Open Account
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
