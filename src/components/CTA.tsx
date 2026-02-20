import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { BilumPattern, ShieldMotif, KunduPattern } from "./TribalPatterns";

const floatingDiamond = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 45, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <BilumPattern className="absolute top-0 left-0 w-full h-full text-primary opacity-10 pointer-events-none" />
      <ShieldMotif className="absolute top-8 right-[10%] w-20 h-24 text-secondary-foreground/10 animate-float pointer-events-none hidden lg:block" />
      <div className="absolute bottom-4 left-[5%] animate-float pointer-events-none hidden lg:block" style={{ animationDelay: "2s" }}>
        <KunduPattern className="w-16 h-24 text-primary/10" />
      </div>

      {/* Floating diamonds */}
      <motion.svg className="absolute top-1/4 left-[15%] w-8 h-8 text-primary/15 pointer-events-none hidden lg:block" viewBox="0 0 32 32" aria-hidden="true" {...floatingDiamond}>
        <path d="M16 2 L30 16 L16 30 L2 16 Z" fill="currentColor" />
      </motion.svg>
      <motion.svg className="absolute bottom-1/4 right-[12%] w-6 h-6 text-primary/20 pointer-events-none hidden lg:block" viewBox="0 0 24 24" aria-hidden="true" animate={{ y: [0, -8, 0], rotate: [0, -30, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="currentColor" />
      </motion.svg>

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
