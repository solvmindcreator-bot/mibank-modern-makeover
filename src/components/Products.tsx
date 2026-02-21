import { motion } from "framer-motion";
import {
  Landmark, CreditCard, Smartphone, Sprout, GraduationCap, Car,
  Fish, Sun, Wallet, PiggyBank, BadgeDollarSign, Building,
} from "lucide-react";
import { Link } from "react-router-dom";
import { TribalDivider, TapaStripe, KunduPattern } from "./TribalPatterns";

const products = [
  { icon: Building, title: "Business Loan", desc: "Grow your small or medium business with affordable financing.", featured: false },
  { icon: Fish, title: "Fisheries Loan", desc: "Dedicated funding for PNG's fishing industry." },
  { icon: Sprout, title: "Farmers Loan", desc: "Support for agriculture and farming communities." },
  { icon: Smartphone, title: "MiCash", desc: "PNG's first mobile wallet — bank from your phone." },
  { icon: Wallet, title: "MiLoan", desc: "Quick personal loans when you need them most." },
  { icon: PiggyBank, title: "MiPikinini", desc: "Savings accounts designed for your children's future." },
  { icon: GraduationCap, title: "School Fee Loan", desc: "Spread tuition costs over fortnightly salary deductions — affordable education financing.", featured: true },
  { icon: Sun, title: "Sola Pawa Loans", desc: "Go solar with affordable clean energy financing." },
  { icon: BadgeDollarSign, title: "Term Deposits", desc: "Earn competitive interest on your savings." },
  { icon: Car, title: "Vehicle Loan", desc: "Drive your dream vehicle with flexible repayments." },
  { icon: CreditCard, title: "MiCard", desc: "Convenient debit card for everyday purchases." },
  { icon: Landmark, title: "Hibiscus Card", desc: "Empowering women through dedicated financial services.", link: "/hibiscus-card" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 15 },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Products = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-muted/50 relative overflow-hidden">
      <TapaStripe className="absolute top-0 left-0 w-full h-8 text-primary" />
      <KunduPattern className="absolute bottom-10 -left-8 w-24 h-36 text-primary/8 pointer-events-none hidden lg:block" />
      <KunduPattern className="absolute top-20 -right-8 w-20 h-30 text-primary/6 pointer-events-none hidden lg:block rotate-12" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/10 text-gold-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Our Products</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Financial Solutions for Everyone
          </h2>
          <TribalDivider className="my-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            From savings and loans to mobile banking and insurance — we have the products to help you grow.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ perspective: 1000 }}
        >
          {products.map((product, i) => {
            const CardWrapper = product.link ? Link : 'div';
            const linkProps = product.link ? { to: product.link } : {};
            return (
              <motion.div
                key={product.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  rotateY: 3,
                  boxShadow: "0 20px 40px -12px hsl(48 100% 50% / 0.15)",
                  borderColor: "hsl(48 100% 50% / 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group bg-card rounded-xl p-6 shadow-card border cursor-pointer relative overflow-hidden ${(product as any).featured ? 'border-gold/50 ring-1 ring-gold/20' : 'border-border/50'}`}
              >
                <CardWrapper {...linkProps as any} className={product.link ? "block" : undefined}>
                  {/* Tribal corner accent */}
                  <svg className="absolute top-0 right-0 w-12 h-12 text-primary/10 pointer-events-none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M48 0 L48 48 L0 0 Z" fill="currentColor" />
                    <path d="M48 8 L48 40 L8 0" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
                  </svg>

                  <svg className="absolute bottom-2 right-2 w-10 h-10 text-primary/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 40 40" aria-hidden="true">
                    <path d="M20 2 L38 20 L20 38 L2 20 Z" fill="currentColor" />
                  </svg>

                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4"
                    whileHover={{ rotate: 5, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <product.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.desc}</p>

                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-gold"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
