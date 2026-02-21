import { motion } from "framer-motion";
import { ArrowLeft, Heart, ShieldCheck, CreditCard, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TribalBand } from "@/components/TribalPatterns";

const features = [
  { icon: Heart, title: "Designed for Women", desc: "Financial products tailored specifically for Papua New Guinean women." },
  { icon: ShieldCheck, title: "Safe & Secure", desc: "Your money is protected with industry-leading security." },
  { icon: CreditCard, title: "Easy Access", desc: "Use your Hibiscus Card for everyday purchases nationwide." },
  { icon: Users, title: "Community Support", desc: "Join a network of empowered women building financial independence." },
];

const HibiscusCard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-pink-50 to-background relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
                  Hibiscus Card
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
                  Empowering <span className="text-pink-600">Women</span> Through Financial Freedom
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  The MiBank Hibiscus Card is dedicated to empowering women across Papua New Guinea with accessible, secure, and tailored financial services.
                </p>
                <Link
                  to="/#products"
                  className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  <CreditCard className="w-5 h-5" />
                  Apply Now
                </Link>
              </motion.div>

              {/* Video */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-card border-2 border-pink-200 relative"
              >
                <video
                  controls
                  className="w-full aspect-video object-cover"
                  poster=""
                  preload="metadata"
                >
                  <source src="/videos/MiBank_Hibiscus.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </div>
        </section>

        <TribalBand />

        {/* Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 font-heading"
            >
              Why Choose <span className="text-pink-600">Hibiscus Card</span>?
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-xl p-6 border border-border shadow-card text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                    <f.icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HibiscusCard;
