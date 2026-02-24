import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { ArrowRight, Shield, Smartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { BilumPattern, SepikSpiral, ShieldMotif } from "./TribalPatterns";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.7, filter: "blur(6px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as const } },
};

// Floating particles for modern feel
const particles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  size: 3 + Math.random() * 4,
  x: 60 + Math.random() * 35,
  y: 10 + Math.random() * 80,
  delay: Math.random() * 3,
  duration: 4 + Math.random() * 4,
}));

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
      </motion.div>

      {/* Animated particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/30 pointer-events-none"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Tribal decorative elements */}
      <BilumPattern className="absolute top-0 right-0 w-96 h-96 text-primary opacity-[0.08] pointer-events-none" />
      <SepikSpiral className="absolute bottom-10 right-10 w-48 h-48 text-primary animate-[spin_30s_linear_infinite] pointer-events-none opacity-10" />
      <ShieldMotif className="absolute top-1/4 right-[15%] w-24 h-30 text-secondary-foreground/10 animate-float pointer-events-none hidden lg:block" />

      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold z-[6]" />

      <motion.div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-20" style={{ y: textY, opacity }}>
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={slideUp}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-md">
              <Shield className="w-4 h-4" />
              Papua New Guinea's Trusted Microbank
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-secondary-foreground leading-[1.1] mb-6 tracking-tight"
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
            <span className="text-secondary-foreground/90">For Every Papua New Guinean</span>
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="text-lg lg:text-xl text-secondary-foreground/60 mb-10 max-w-lg leading-relaxed"
          >
            Modern savings, loans, and insurance products. Accessible from 16 branches and agents across PNG.
          </motion.p>

          <motion.div variants={slideUp} className="flex flex-wrap gap-4">
            <motion.a
              href="#products"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-gold text-base relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px -10px hsl(48 100% 50% / 0.5)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Explore Products</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 border border-secondary-foreground/20 text-secondary-foreground font-semibold px-8 py-4 rounded-xl backdrop-blur-sm bg-secondary-foreground/5"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Smartphone className="w-5 h-5" />
              Download MiCash
            </motion.a>
          </motion.div>

          <motion.div variants={slideUp} className="flex gap-12 mt-16">
            {[
              { value: "16+", label: "Branches" },
              { value: "500K+", label: "Customers" },
              { value: "20+", label: "Years" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative"
              >
                <p className="text-3xl lg:text-4xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-sm text-secondary-foreground/50 mt-1">{stat.label}</p>
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-gold rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
