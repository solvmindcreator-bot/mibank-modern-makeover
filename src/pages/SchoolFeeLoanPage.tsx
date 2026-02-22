import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Calendar, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TribalBand } from "@/components/TribalPatterns";
import heroImg from "@/assets/school-fee-hero.jpg";

const features = [
  { icon: Calendar, title: "Salary Deductions", desc: "Spread tuition costs over fortnightly salary deductions for easy repayment." },
  { icon: BookOpen, title: "All Levels Covered", desc: "From primary school through to tertiary education — we've got you covered." },
  { icon: Users, title: "Multiple Children", desc: "Finance school fees for more than one child under a single loan." },
  { icon: GraduationCap, title: "Invest in Education", desc: "Give your children the gift of education without financial stress." },
];

const SchoolFeeLoanPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="PNG school children" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-violet-500/20 text-violet-200 rounded-full text-sm font-semibold mb-4">School Fee Loan</span>
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              Affordable <span className="text-gold">Education Financing</span> for Every Family
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Don't let school fees be a barrier. MiBank's School Fee Loan lets you spread tuition costs over manageable fortnightly salary deductions so your children never miss out.
            </p>
            <Link to="/#locations" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              <GraduationCap className="w-5 h-5" /> Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      <TribalBand />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12 font-heading">
            Why Choose <span className="text-gold-dark">School Fee Loan</span>?
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

export default SchoolFeeLoanPage;
