import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { BilumPattern, ShieldMotif } from "./TribalPatterns";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Tribal background textures */}
      <BilumPattern className="absolute top-0 left-0 w-full h-full text-primary opacity-10 pointer-events-none" />
      <ShieldMotif className="absolute top-8 right-[10%] w-20 h-24 text-secondary-foreground/10 animate-float pointer-events-none hidden lg:block" />
      <div className="absolute bottom-8 left-[8%] w-16 h-20 animate-float pointer-events-none hidden lg:block" style={{ animationDelay: "1.5s" }}>
        <ShieldMotif className="w-full h-full text-primary/15" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.h2
          className="text-3xl lg:text-5xl font-extrabold text-secondary-foreground mb-4"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Ready to <span className="text-gradient-gold">Grow</span> With Us?
        </motion.h2>

        <motion.p
          className="text-secondary-foreground/60 max-w-lg mx-auto mb-8 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Open an account today or call us to find out how MiBank can help you achieve your financial goals.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-8 py-4 rounded-lg shadow-gold text-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 16px 50px -10px hsl(48 100% 50% / 0.5)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Open an Account
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>
          <motion.a
            href="tel:16789"
            className="inline-flex items-center gap-2 border-2 border-secondary-foreground/30 text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-lg"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Phone className="w-5 h-5" />
            Call 16789
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
