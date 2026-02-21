import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, UserPlus, UserCheck, Store, Banknote, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TribalBand } from "@/components/TribalPatterns";
import micardHero from "@/assets/micard-hero.jpg";

const usagePoints = [
  { icon: Banknote, title: "BSP ATMs", desc: "Withdraw cash from any BSP ATM across Papua New Guinea." },
  { icon: Store, title: "BSP EFTPOS", desc: "Pay directly at BSP EFTPOS terminals nationwide." },
  { icon: ShoppingCart, title: "BSP Merchants", desc: "Use your MiCard at all BSP merchant locations." },
];

const MiCardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={micardHero} alt="MiCard Debit Card" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold rounded-full text-sm font-semibold mb-4">
                MiCard
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6 leading-tight">
                Apply for Your <span className="text-gold">MiCard</span> Debit Card Today!
              </h1>
              <p className="text-lg text-white/80 mb-8">
                More and more people are using debit cards as a mode of payment. When a debit card is used, the payment is automatically deducted from your bank account.
              </p>
              <Link
                to="/#locations"
                className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                <CreditCard className="w-5 h-5" />
                Visit Your Branch
              </Link>
            </motion.div>
          </div>
        </section>

        <TribalBand />

        {/* How to Get */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 font-heading"
            >
              How to Get Your <span className="text-gold-dark">MiCard</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-8 border border-border shadow-card"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <UserPlus className="w-7 h-7 text-gold-dark" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">New Customers</h3>
                <p className="text-muted-foreground">
                  If you do not have a banking relationship with MiBank, you will need to open a <strong>MiCash Account</strong> or a <strong>MiSaver Account</strong> first.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-8 border border-border shadow-card"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <UserCheck className="w-7 h-7 text-gold-dark" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Existing Customers</h3>
                <p className="text-muted-foreground">
                  If you already have a MiCash account, you are entitled to a MiCard. Please call into your branch and request for a MiCard.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <TribalBand />

        {/* Usage */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-4 font-heading"
            >
              Where to Use <span className="text-gold-dark">MiCard</span>
            </motion.h2>
            <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
              Your MiCard works across BSP's extensive network throughout Papua New Guinea.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {usagePoints.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, boxShadow: "0 12px 30px -10px hsl(var(--gold) / 0.25)" }}
                  className="bg-card rounded-xl p-6 border border-border shadow-card text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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

export default MiCardPage;
