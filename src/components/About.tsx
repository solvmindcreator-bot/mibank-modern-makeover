import { motion } from "framer-motion";
import { Users, Heart, Globe, Award } from "lucide-react";
import { SepikSpiral, TribalDivider, KunduPattern } from "./TribalPatterns";
import pngCommunity from "@/assets/png-community.jpg";

const features = [
  { icon: Users, title: "Community First", desc: "Empowering grassroots people and women through financial literacy and accessible banking." },
  { icon: Globe, title: "Innovation Leader", desc: "First licensed institution to deploy a mobile wallet in the South Pacific with MiCash." },
  { icon: Heart, title: "MiLife Insurance", desc: "First to introduce microinsurance in Papua New Guinea, protecting families nationwide." },
  { icon: Award, title: "20+ Years of Trust", desc: "Serving Papua New Guineans with modern, affordable banking for over two decades." },
];

const cardHover = {
  rest: { scale: 1, borderColor: "hsl(40 15% 88% / 0.5)" },
  hover: {
    scale: 1.03,
    borderColor: "hsl(48 100% 50% / 0.4)",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative patterns */}
      <SepikSpiral className="absolute -top-10 -left-10 w-64 h-64 text-primary/10 pointer-events-none" />
      <SepikSpiral className="absolute -bottom-10 -right-10 w-48 h-48 text-primary/10 pointer-events-none rotate-180" />
      <KunduPattern className="absolute top-1/2 -translate-y-1/2 -right-6 w-20 h-32 text-primary/8 pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block bg-primary/10 text-gold-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">About MiBank</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
              Growing Together With Papua New Guinea
            </h2>
            <TribalDivider className="my-4 justify-start" />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              MiBank delivers modern and affordable savings, loans and insurance products from a network of 16 branches and many agents across Papua New Guinea. We are at the forefront of financial innovation, empowering communities through accessible banking.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              In 2020, MiBank acquired PNG Microfinance Ltd and the business of EsiLoans from Kina Bank, strengthening our commitment to serving every Papua New Guinean.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover="hover"
                  variants={cardHover}
                  className="bg-card rounded-xl p-5 shadow-card border border-border/50 relative overflow-hidden"
                >
                  <svg className="absolute bottom-2 right-2 w-14 h-14 text-primary/5 pointer-events-none" viewBox="0 0 64 64" aria-hidden="true">
                    <path d="M32 4 L60 32 L32 60 L4 32 Z" fill="currentColor" />
                  </svg>
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3"
                    whileHover={{ rotate: 10 }}
                  >
                    <f.icon className="w-5 h-5 text-gold-dark" />
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-1 text-sm">{f.title}</h3>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card group">
              <img
                src={pngCommunity}
                alt="MiBank community members in Papua New Guinea"
                className="w-full h-[400px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              
              {/* Tribal corner accents */}
              <svg className="absolute top-4 left-4 w-12 h-12 text-primary/50 pointer-events-none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M0 0 L20 0 L0 20 Z" fill="currentColor" />
              </svg>
              <svg className="absolute bottom-4 right-4 w-12 h-12 text-primary/50 pointer-events-none rotate-180" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M0 0 L20 0 L0 20 Z" fill="currentColor" />
              </svg>
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-card border border-border/50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <p className="text-3xl font-extrabold text-gradient-gold">500K+</p>
              <p className="text-sm text-muted-foreground">Papua New Guineans Served</p>
            </motion.div>

            {/* Rotating diamond */}
            <motion.svg
              className="absolute -top-6 -right-6 w-14 h-14 text-primary/20 pointer-events-none"
              viewBox="0 0 56 56"
              aria-hidden="true"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <path d="M28 4 L52 28 L28 52 L4 28 Z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M28 14 L42 28 L28 42 L14 28 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
