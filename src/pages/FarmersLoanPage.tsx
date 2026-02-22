import { motion } from "framer-motion";
import { ArrowLeft, Sprout, Leaf, TreePine, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TribalBand } from "@/components/TribalPatterns";

const benefits = [
  { icon: Leaf, title: "Crop Financing", desc: "Fund seeds, fertilizers, and inputs for your next harvest season." },
  { icon: TreePine, title: "Land Development", desc: "Invest in clearing, fencing, and preparing land for cultivation." },
  { icon: Sun, title: "Seasonal Flexibility", desc: "Repayment schedules aligned with harvest and selling cycles." },
  { icon: Sprout, title: "Rural Communities", desc: "Empowering farming families across Papua New Guinea's provinces." },
];

const FarmersLoanPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-green-50 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">Farmers Loan</span>
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
              Supporting PNG's <span className="text-green-600">Agriculture</span> & Farming Communities
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              MiBank's Farmers Loan provides affordable financing to help farmers grow their crops, invest in equipment, and build sustainable agricultural businesses.
            </p>
            <Link to="/#locations" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              <Sprout className="w-5 h-5" /> Visit Your Branch
            </Link>
          </motion.div>
        </div>
      </section>

      <TribalBand />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12 font-heading">
            Why Choose <span className="text-green-600">Farmers Loan</span>?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6 }} className="bg-card rounded-xl p-6 border border-border shadow-card text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-green-600" />
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

export default FarmersLoanPage;
