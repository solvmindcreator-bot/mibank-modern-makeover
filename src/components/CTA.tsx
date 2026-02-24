import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { BilumPattern, ShieldMotif, KunduPattern } from "./TribalPatterns";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <BilumPattern className="absolute top-0 left-0 w-full h-full text-primary opacity-[0.05] pointer-events-none" />
      <ShieldMotif className="absolute top-8 right-[10%] w-20 h-24 text-secondary-foreground/10 animate-float pointer-events-none hidden lg:block" />
      <div className="absolute bottom-4 left-[5%] animate-float pointer-events-none hidden lg:block" style={{ animationDelay: "2s" }}>
        <KunduPattern className="w-16 h-24 text-primary/10" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto"
        >
          <motion.h2
            className="text-3xl lg:text-6xl font-extrabold text-secondary-foreground mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to <span className="text-gradient-gold">Grow</span> With Us?
          </motion.h2>

          <motion.p
            className="text-secondary-foreground/50 max-w-lg mx-auto mb-10 text-lg"
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
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-gold text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px -12px hsl(48 100% 50% / 0.5)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Open an Account</span>
              <motion.span className="relative z-10" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-5 h-5" />
              </motion.span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="tel:16789"
              className="inline-flex items-center gap-2 border border-secondary-foreground/20 text-secondary-foreground font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-sm bg-secondary-foreground/5"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Phone className="w-5 h-5" />
              Call 16789
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
