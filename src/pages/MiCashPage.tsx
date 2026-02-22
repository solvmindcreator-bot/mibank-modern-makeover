import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Zap, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TribalBand } from "@/components/TribalPatterns";
import heroImg from "@/assets/micash-hero.jpg";

const features = [
  { icon: Zap, title: "Instant Transfers", desc: "Send and receive money instantly from your mobile phone." },
  { icon: Shield, title: "Secure Banking", desc: "PIN-protected transactions with industry-standard security." },
  { icon: Globe, title: "Anywhere Access", desc: "Bank from any location — even in remote areas with mobile coverage." },
  { icon: Smartphone, title: "Easy to Use", desc: "Simple interface designed for everyone, no smartphone required." },
];

const MiCashPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Mobile banking in PNG market" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold rounded-full text-sm font-semibold mb-4">MiCash</span>
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              PNG's First <span className="text-gold">Mobile Wallet</span> — Bank From Your Phone
            </h1>
            <p className="text-lg text-white/80 mb-8">
              MiCash is Papua New Guinea's pioneering mobile wallet service. Send money, pay bills, and manage your finances right from your mobile phone — no bank branch needed.
            </p>
            <Link to="/#locations" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              <Smartphone className="w-5 h-5" /> Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <TribalBand />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12 font-heading">
            Why Choose <span className="text-gold-dark">MiCash</span>?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6 }} className="bg-card rounded-xl p-6 border border-border shadow-card text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-gold-dark" />
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

export default MiCashPage;
