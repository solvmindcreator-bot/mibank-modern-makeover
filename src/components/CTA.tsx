import { Phone, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-secondary-foreground mb-4">
          Ready to <span className="text-gradient-gold">Grow</span> With Us?
        </h2>
        <p className="text-secondary-foreground/60 max-w-lg mx-auto mb-8 text-lg">
          Open an account today or call us to find out how MiBank can help you achieve your financial goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-8 py-4 rounded-lg shadow-gold hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg">
            Open an Account
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="tel:16789" className="inline-flex items-center gap-2 border-2 border-secondary-foreground/30 text-secondary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-secondary-foreground/10 transition-all duration-300 text-lg">
            <Phone className="w-5 h-5" />
            Call 16789
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
