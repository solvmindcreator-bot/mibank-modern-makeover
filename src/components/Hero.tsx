import { motion } from "framer-motion";
import { ArrowRight, Shield, Smartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">
              <Shield className="w-4 h-4" />
              Papua New Guinea's Trusted Microbank
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-foreground leading-tight mb-6"
          >
            Banking Made{" "}
            <span className="text-gradient-gold">Simple</span>
            <br />
            For Every Papua New Guinean
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-secondary-foreground/70 mb-8 max-w-lg"
          >
            Modern savings, loans, and insurance products. Accessible from 16 branches and agents across PNG. Grow with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#products" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-7 py-3.5 rounded-lg shadow-gold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 border-2 border-secondary-foreground/30 text-secondary-foreground font-semibold px-7 py-3.5 rounded-lg hover:bg-secondary-foreground/10 transition-all duration-300">
              <Smartphone className="w-5 h-5" />
              Download MiCash
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex gap-10 mt-14"
          >
            {[
              { value: "16+", label: "Branches" },
              { value: "500K+", label: "Customers" },
              { value: "20+", label: "Years" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-sm text-secondary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
