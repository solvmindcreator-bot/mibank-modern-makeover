import { motion } from "framer-motion";
import {
  Landmark,
  CreditCard,
  Smartphone,
  Sprout,
  GraduationCap,
  Car,
  Fish,
  Sun,
  Wallet,
  PiggyBank,
  BadgeDollarSign,
  Building,
} from "lucide-react";

const products = [
  { icon: Building, title: "Business Loan", desc: "Grow your small or medium business with affordable financing." },
  { icon: Fish, title: "Fisheries Loan", desc: "Dedicated funding for PNG's fishing industry." },
  { icon: Sprout, title: "Farmers Loan", desc: "Support for agriculture and farming communities." },
  { icon: Smartphone, title: "MiCash", desc: "PNG's first mobile wallet — bank from your phone." },
  { icon: Wallet, title: "MiLoan", desc: "Quick personal loans when you need them most." },
  { icon: PiggyBank, title: "MiPikinini", desc: "Savings accounts designed for your children's future." },
  { icon: GraduationCap, title: "School Fee Loan", desc: "Keep your kids in school with easy fee financing." },
  { icon: Sun, title: "Sola Pawa Loans", desc: "Go solar with affordable clean energy financing." },
  { icon: BadgeDollarSign, title: "Term Deposits", desc: "Earn competitive interest on your savings." },
  { icon: Car, title: "Vehicle Loan", desc: "Drive your dream vehicle with flexible repayments." },
  { icon: CreditCard, title: "MiCard", desc: "Convenient debit card for everyday purchases." },
  { icon: Landmark, title: "Hibiscus Card", desc: "Empowering women through dedicated financial services." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

const Products = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-gold-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Our Products</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Financial Solutions for Everyone
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From savings and loans to mobile banking and insurance — we have the products to help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
