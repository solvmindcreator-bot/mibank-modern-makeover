import { motion } from "framer-motion";
import { ArrowRight, Shield, Smartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { BilumPattern, SepikSpiral, ShieldMotif } from "./TribalPatterns";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-transparent" />
      </div>

      {/* Tribal decorative elements */}
      <BilumPattern className="absolute top-0 right-0 w-96 h-96 text-primary opacity-20 pointer-events-none" />
      <SepikSpiral className="absolute bottom-10 right-10 w-48 h-48 text-primary animate-[spin_30s_linear_infinite] pointer-events-none" />
      <ShieldMotif className="absolute top-1/4 right-[15%] w-24 h-30 text-secondary-foreground animate-float pointer-events-none hidden lg:block" />

      {/* Tribal border accent along bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={slideUp}>
            <span className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              Papua New Guinea's Trusted Microbank
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-foreground leading-tight mb-6"
          >
            Banking Made{" "}
            <motion.span
              className="text-gradient-gold inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Simple
            </motion.span>
            <br />
            For Every Papua New Guinean
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="text-lg text-secondary-foreground/70 mb-8 max-w-lg"
          >
            Modern savings, loans, and insurance products. Accessible from 16 branches and agents across PNG. Grow with us.
          </motion.p>

          <motion.div variants={slideUp} className="flex flex-wrap gap-4">
            <motion.a
              href="#products"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-7 py-3.5 rounded-lg shadow-gold"
              whileHover={{ scale: 1.05, boxShadow: "0 12px 40px -8px hsl(48 100% 50% / 0.5)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore Products
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-secondary-foreground/30 text-secondary-foreground font-semibold px-7 py-3.5 rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Smartphone className="w-5 h-5" />
              Download MiCash
            </motion.a>
          </motion.div>

          {/* Stats with counting animation feel */}
          <motion.div
            variants={slideUp}
            className="flex gap-10 mt-14"
          >
            {[
              { value: "16+", label: "Branches" },
              { value: "500K+", label: "Customers" },
              { value: "20+", label: "Years" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-sm text-secondary-foreground/60">{stat.label}</p>
                {/* Small diamond accent */}
                <svg className="absolute -top-2 -right-3 w-4 h-4 text-primary/30" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0 L16 8 L8 16 L0 8 Z" />
                </svg>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
