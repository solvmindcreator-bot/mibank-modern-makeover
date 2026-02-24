import { motion } from "framer-motion";
import {
  Landmark, CreditCard, Smartphone, Sprout, GraduationCap, Car,
  Fish, Sun, Wallet, PiggyBank, BadgeDollarSign, Building, ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { TribalDivider, TapaStripe, KunduPattern } from "./TribalPatterns";

const products = [
  { icon: Building, title: "Business Loan", desc: "Grow your small or medium business with affordable financing.", link: "/business-loan" },
  { icon: Fish, title: "Fisheries Loan", desc: "Dedicated funding for PNG's fishing industry.", link: "/fisheries-loan" },
  { icon: Sprout, title: "Farmers Loan", desc: "Support for agriculture and farming communities.", link: "/farmers-loan" },
  { icon: Smartphone, title: "MiCash", desc: "PNG's first mobile wallet — bank from your phone.", link: "/micash" },
  { icon: Wallet, title: "MiLoan", desc: "Quick personal loans when you need them most.", link: "/miloan" },
  { icon: PiggyBank, title: "MiPikinini", desc: "Savings accounts designed for your children's future.", link: "/mipikinini" },
  { icon: GraduationCap, title: "School Fee Loan", desc: "Spread tuition costs over fortnightly salary deductions.", featured: true, link: "/school-fee-loan" },
  { icon: Sun, title: "Sola Pawa Loans", desc: "Go solar with affordable clean energy financing.", link: "/sola-pawa" },
  { icon: BadgeDollarSign, title: "Term Deposits", desc: "Earn competitive interest on your savings.", link: "/term-deposits" },
  { icon: Car, title: "Vehicle Loan", desc: "Drive your dream vehicle with flexible repayments.", link: "/vehicle-loan" },
  { icon: CreditCard, title: "MiCard", desc: "Convenient debit card for everyday purchases.", link: "/micard" },
  { icon: Landmark, title: "Hibiscus Card", desc: "Empowering women through dedicated financial services.", link: "/hibiscus-card" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Products = () => {
  return (
    <section id="products" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <TapaStripe className="absolute top-0 left-0 w-full h-8 text-primary" />
      <KunduPattern className="absolute bottom-10 -left-8 w-24 h-36 text-primary/[0.04] pointer-events-none hidden lg:block" />
      <KunduPattern className="absolute top-20 -right-8 w-20 h-30 text-primary/[0.03] pointer-events-none hidden lg:block rotate-12" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/10 text-gold-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Our Products</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Financial Solutions for Everyone
          </h2>
          <TribalDivider className="my-4" />
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            From savings and loans to mobile banking and insurance — we have the products to help you grow.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {products.map((product) => (
            <motion.div key={product.title} variants={cardVariants}>
              <Link
                to={product.link}
                className={`group block h-full bg-card/80 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 relative overflow-hidden ${
                  (product as any).featured
                    ? "border-gold/40 ring-1 ring-gold/20 shadow-gold/10"
                    : "border-border/30 hover:border-gold/30 shadow-card"
                }`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-primary/30 to-transparent transform origin-top-right group-hover:scale-y-100 scale-y-0 transition-transform duration-500" />
                  <div className="absolute top-0 right-0 h-[1px] w-12 bg-gradient-to-l from-primary/30 to-transparent transform origin-top-right group-hover:scale-x-100 scale-x-0 transition-transform duration-500" />
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold/20"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <product.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-foreground group-hover:text-gold-dark transition-colors duration-300">{product.title}</h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-gold-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                </div>

                {/* Bottom progress bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px]">
                  <div className="h-full bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
