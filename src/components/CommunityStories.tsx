import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TribalDivider, SepikSpiral } from "./TribalPatterns";
import pngCommunity from "@/assets/png-community.jpg";
import pngWoman from "@/assets/png-woman-market.jpg";
import pngFisherman from "@/assets/png-fisherman.jpg";
import pngFarmer from "@/assets/png-farmer.jpg";

const stories = [
  {
    image: pngWoman,
    name: "Market Women of PNG",
    role: "Small Business Owners",
    quote: "MiBank helped me grow my market stall into a thriving business. Now I can send my children to school.",
  },
  {
    image: pngFisherman,
    name: "Coastal Fishermen",
    role: "Fisheries Loan Beneficiaries",
    quote: "With MiBank's fisheries loan, I upgraded my canoe and now supply fresh fish to the whole village.",
  },
  {
    image: pngFarmer,
    name: "Highland Farmers",
    role: "Agricultural Loan Recipients",
    quote: "MiBank believes in our farmers. Their support helped me expand my coffee plantation in the highlands.",
  },
];

const imageReveal = {
  hidden: { opacity: 0, scale: 1.15, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const CommunityStories = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative spirals */}
      <SepikSpiral className="absolute top-20 -right-16 w-72 h-72 text-primary/5 pointer-events-none" />
      <SepikSpiral className="absolute bottom-20 -left-16 w-56 h-56 text-primary/5 pointer-events-none rotate-90" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/10 text-gold-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Our People
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Empowering Communities Across PNG
          </h2>
          <TribalDivider className="my-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            From coastal villages to highland towns, MiBank is growing alongside the people of Papua New Guinea.
          </p>
        </motion.div>

        {/* Hero community image */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-16 shadow-card"
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={pngCommunity}
            alt="MiBank community members with traditional bilum bags"
            className="w-full h-[300px] lg:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
          <motion.div
            className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl lg:text-3xl font-extrabold text-secondary-foreground mb-2">
              Growing Together
            </h3>
            <p className="text-secondary-foreground/70 max-w-md text-sm lg:text-base">
              Our customers are the heartbeat of Papua New Guinea — fishermen, farmers, market women, and entrepreneurs.
            </p>
          </motion.div>

          {/* Tribal corner accents */}
          <svg className="absolute top-4 left-4 w-16 h-16 text-primary/40 pointer-events-none" viewBox="0 0 64 64" aria-hidden="true">
            <path d="M0 0 L24 0 L0 24 Z" fill="currentColor" />
            <path d="M0 0 L16 0 L0 16 Z" fill="currentColor" opacity="0.5" />
          </svg>
          <svg className="absolute bottom-4 right-4 w-16 h-16 text-primary/40 pointer-events-none rotate-180" viewBox="0 0 64 64" aria-hidden="true">
            <path d="M0 0 L24 0 L0 24 Z" fill="currentColor" />
            <path d="M0 0 L16 0 L0 16 Z" fill="currentColor" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Story cards */}
        <div className="space-y-16">
          {stories.map((story, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={story.name}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-14 items-center`}
              >
                {/* Image */}
                <motion.div
                  className="lg:w-1/2 relative group"
                  variants={isEven ? slideFromLeft : slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="rounded-xl overflow-hidden shadow-card relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-[280px] lg:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Tribal overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>

                  {/* Floating diamond accent */}
                  <motion.svg
                    className="absolute -bottom-4 -right-4 w-12 h-12 text-primary/30 pointer-events-none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <path d="M24 4 L44 24 L24 44 L4 24 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M24 12 L36 24 L24 36 L12 24 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                  </motion.svg>
                </motion.div>

                {/* Text */}
                <motion.div
                  className="lg:w-1/2"
                  variants={isEven ? slideFromRight : slideFromLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-card rounded-xl p-8 shadow-card border border-border/50 relative overflow-hidden"
                    whileHover={{ y: -4, boxShadow: "0 20px 40px -12px hsl(48 100% 50% / 0.12)" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    {/* Bilum-inspired corner pattern */}
                    <svg className="absolute top-0 right-0 w-24 h-24 text-primary/5 pointer-events-none" viewBox="0 0 96 96" aria-hidden="true">
                      <path d="M48 0 L96 0 L96 48 Z" fill="currentColor" />
                      <path d="M64 0 L96 0 L96 32 Z" fill="currentColor" opacity="0.5" />
                      <path d="M80 0 L96 0 L96 16 Z" fill="currentColor" opacity="0.3" />
                    </svg>

                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                      "{story.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-10 bg-gradient-gold rounded-full" />
                      <div>
                        <p className="font-bold text-foreground">{story.name}</p>
                        <p className="text-sm text-muted-foreground">{story.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityStories;
