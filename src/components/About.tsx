import { motion } from "framer-motion";
import { Users, Heart, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community First",
    desc: "Empowering grassroots people and women through financial literacy and accessible banking.",
  },
  {
    icon: Globe,
    title: "Innovation Leader",
    desc: "First licensed institution to deploy a mobile wallet in the South Pacific with MiCash.",
  },
  {
    icon: Heart,
    title: "MiLife Insurance",
    desc: "First to introduce microinsurance in Papua New Guinea, protecting families nationwide.",
  },
  {
    icon: Award,
    title: "20+ Years of Trust",
    desc: "Serving Papua New Guineans with modern, affordable banking for over two decades.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-gold-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">About MiBank</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Growing Together With Papua New Guinea
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              MiBank delivers modern and affordable savings, loans and insurance products from a network of 16 branches and many agents across Papua New Guinea. We are at the forefront of financial innovation, empowering communities through accessible banking.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              In 2020, MiBank acquired PNG Microfinance Ltd and the business of EsiLoans from Kina Bank, strengthening our commitment to serving every Papua New Guinean.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-6 py-3 rounded-lg shadow-gold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More
            </a>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-gold-dark" />
                </div>
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
