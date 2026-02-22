import { motion } from "framer-motion";
import { ArrowLeft, Building, FileText, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TribalBand } from "@/components/TribalPatterns";

const benefits = [
  { icon: TrendingUp, title: "Business Growth", desc: "Access capital to expand your operations and reach new markets." },
  { icon: Clock, title: "Flexible Terms", desc: "Repayment plans tailored to your business cash flow cycle." },
  { icon: FileText, title: "Simple Application", desc: "Straightforward process with minimal paperwork required." },
  { icon: CheckCircle, title: "Quick Approval", desc: "Fast turnaround so you can seize business opportunities." },
];

const BusinessLoanPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold-dark rounded-full text-sm font-semibold mb-4">Business Loan</span>
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
              Grow Your <span className="text-gold-dark">Business</span> With Affordable Financing
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a small enterprise or a growing SME, MiBank's Business Loan provides the capital you need to expand, invest in equipment, or manage working capital across Papua New Guinea.
            </p>
            <Link to="/#locations" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              <Building className="w-5 h-5" /> Visit Your Branch
            </Link>
          </motion.div>
        </div>
      </section>

      <TribalBand />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12 font-heading">
            Why Choose MiBank <span className="text-gold-dark">Business Loan</span>?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((f, i) => (
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

export default BusinessLoanPage;
