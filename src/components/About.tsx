import { motion } from "framer-motion";
import { Users, Heart, Globe, Award } from "lucide-react";
import { SepikSpiral, TribalDivider } from "./TribalPatterns";

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
      {/* Decorative spiral */}
      <SepikSpiral className="absolute -top-10 -left-10 w-64 h-64 text-primary/10 pointer-events-none" />
      <SepikSpiral className="absolute -bottom-10 -right-10 w-48 h-48 text-primary/10 pointer-events-none rotate-180" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
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
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-6 py-3 rounded-lg shadow-gold"
              whileHover={{ scale: 1.05, boxShadow: "0 12px 40px -8px hsl(48 100% 50% / 0.5)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover="hover"
                variants={cardHover}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50 relative overflow-hidden"
              >
                {/* Tribal diamond watermark */}
                <svg className="absolute bottom-2 right-2 w-16 h-16 text-primary/5 pointer-events-none" viewBox="0 0 64 64" aria-hidden="true">
                  <path d="M32 4 L60 32 L32 60 L4 32 Z" fill="currentColor" />
                </svg>

                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3"
                  whileHover={{ rotate: 10 }}
                >
                  <f.icon className="w-5 h-5 text-gold-dark" />
                </motion.div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
